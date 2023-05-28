import { addresses } from '$stores/flow/FlowStore';
import { transactionStore } from '$stores/flow/TransactionStore';
import * as fcl from '@onflow/fcl';
import { network } from './config';
import type { TransactionStatusObject } from '@onflow/fcl';
import type { ActionExecutionResult } from '$lib/stores/custom/steps/step.interface';
import { ECurrencies } from '$lib/types/common/enums';

export function replaceWithProperValues(script: string) {
  return (
    script
      // For Tx/Scripts
      .replace('"../utility/FlowToken.cdc"', addresses.FlowToken)
      .replace('"../utility/FUSD.cdc"', addresses.FUSD)
      .replace('"../utility/FiatToken.cdc"', addresses.FiatToken)
      .replace('"../utility/FungibleToken.cdc"', addresses.FungibleToken)
  );
}

export function switchToToken(script: string, currency: ECurrencies) {
  if (currency === ECurrencies.USDC) {
    return (
      script
        .replaceAll('flowTokenReceiver', 'USDCVaultReceiver')
        .replaceAll('flowTokenVault', 'USDCVault')
        .replaceAll('FlowToken', 'FiatToken')
    );
  }
  return script;
}

export const executeTransaction: (
  transaction: () => Promise<string>,
  actionAfterSucceed?: (res: TransactionStatusObject) => Promise<ActionExecutionResult>
) => Promise<ActionExecutionResult> = async (transaction, actionAfterSucceed) => {
  transactionStore.initTransaction();

  try {
    // We start the transaction
    const transactionId = await transaction();
    console.log('Transaction Id', transactionId);

    // We connect our TransactionStore to the transaction to get the status
    fcl.tx(transactionId).subscribe(async (res: TransactionStatusObject) => {
      console.log(res);
      transactionStore.subscribeTransaction(res);
    });

    // We wait for the transaction to be sealed to get the result
    const executionResult = (await fcl.tx(transactionId).onceSealed()) as TransactionStatusObject;

    // Once sealed, we check if the execution has an actionAfterSucceed, if so, we execute it
    if (actionAfterSucceed) {
      try {
        // We execute the actionAfterSucceed and return the result
        const action = await actionAfterSucceed(executionResult);

        setTimeout(() => {
          transactionStore.resetTransaction();
        }, 1000);

        return action;
      } catch (e) {
        transactionStore.resetTransaction();

        return {
          state: 'error',
          errorMessage: 'Error executing actionAfterSucceed: ' + e
        } as ActionExecutionResult;
      }
    } else {
      setTimeout(() => {
        transactionStore.resetTransaction();
      }, 1000);

      return {
        state: 'success',
        errorMessage: ''
      } as ActionExecutionResult;
    }
  } catch (e) {
    transactionStore.subscribeTransaction({
      blockId: '',
      events: [],
      status: 4,
      statusString: '',
      errorMessage: e as string,
      statusCode: 1
    });

    setTimeout(() => {
      transactionStore.resetTransaction();
    }, 6000);

    console.log('Error in executeTransaction: ', e);

    return {
      state: 'error',
      errorMessage: e
    } as ActionExecutionResult;
  }
};

export const getFindProfile = async (address: string) => {
  try {
    return await fcl.query({
      cadence: `
        import FIND from ${addresses.FIND}
        pub fun main(address: Address): Profile? {
            if let name = FIND.reverseLookup(address) {
              let profile = FIND.lookup(name)!
              return Profile(_name: name, _address: address, _avatar: profile.getAvatar())
            }
            
            return nil
        }

        pub struct Profile {
          pub let name: String
          pub let address: Address
          pub let avatar: String

          init(_name: String, _address: Address, _avatar: String) {
            self.name = _name
            self.address = _address
            self.avatar = _avatar
          }
        }
        `,
      args: (arg, t) => [arg(address, t.Address)]
    });
  } catch (e) {
    return null;
  }
};

export const verifyAccountOwnership = async (userObject) => {
  if (!userObject.loggedIn) {
    return false;
  }
  const accountProofService = userObject.services.find(
    (services) => services.type === 'account-proof'
  );
  return await fcl.AppUtils.verifyAccountProof('Emerald Academy', accountProofService.data, {
    fclCryptoContract: null
  });
};