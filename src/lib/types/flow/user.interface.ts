interface Identity {
    address: string;
    keyId?: number;
}

interface Provider {
    address?: string;
    name: string;
    icon?: string;
    description: string;
}

interface Signature {
    f_type: string;
    f_vsn: string;
    addr: string;
    keyId: number;
    signature: string;
}

interface Data {
    addr: string;
    keyId: number;
    f_type: string;
    f_vsn: string;
    address: string;
    nonce: string;
    signatures: Signature[];
}

interface Params { }

interface Service {
    f_type: string;
    f_vsn: string;
    type: string;
    uid: string;
    endpoint: string;
    id: string;
    identity: Identity;
    provider: Provider;
    method: string;
    data: Data;
    params: Params;
}

export interface FlowUser {
    f_type: string;
    f_vsn: string;
    addr: string;
    cid: string;
    loggedIn: boolean;
    expiresAt: any;
    services: Service[];
}