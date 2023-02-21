import { addresses } from '$stores/flow/FlowStore';
import { transactionStore } from '$stores/flow/TransactionStore';
import * as fcl from '@onflow/fcl';
import { get } from 'svelte/store';

export function replaceWithProperValues(script) {
  return (
    script
      // For Tx/Scripts
      .replace('"../../utility/FlowToken.cdc"', addresses.FlowToken)
      .replace('"../../utility/FUSD.cdc"', addresses.FUSD)
      .replace('"../../utility/FungibleToken.cdc"', addresses.FungibleToken)
  );
}

export const executeTransaction = async (
  transaction: () => Promise<any>,
  actionAfterSucceed: () => Promise<any>
) => {
  transactionStore.initTransaction();

  try {
    const transactionId = await transaction();

    fcl.tx(transactionId).subscribe(async (res) => {
      transactionStore.subscribeTransaction(res);

      if (res.status === 4) {
        if (res.statusCode === 0 && actionAfterSucceed != undefined) {
          await actionAfterSucceed(res);
          transactionStore.resetTransaction();
          return;
        }
        setTimeout(() => transactionStore.resetTransaction(), 2000);
      }
    });
  } catch (e) {
    transactionStore.resetTransaction();
    throw e;
  }
};

export const getFindProfile = async (address) => {
  try {
    return await fcl.query({
      cadence: `
        import FIND from ${get(addresses).FIND}
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
