export type FlowTransaction = {
    blockId: string;
    events: [];
    status: -1 | 0 | 1 | 2 | 3 | 4 | 5;
    statusString: '' | 'UNKNOWN' | 'PENDING' | 'FINALIZED' | 'EXECUTED' | 'SEALED' | 'EXPIRED';
    errorMessage: string;
    statusCode: string;
};