import { Client } from "@lumeweb/libkernel-universal";
export declare class EthClient extends Client {
    ready(): Promise<any>;
    method(method: string, params: any): Promise<any>;
}
export declare const createClient: (...args: any) => EthClient;
//# sourceMappingURL=client.d.ts.map