import { Eip1193Provider, ethers } from "ethers";
export declare class Provider implements Eip1193Provider {
    private client;
    request(args: RequestArguments): Promise<unknown>;
}
interface RequestArguments {
    readonly method: string;
    readonly params?: readonly unknown[] | object;
}
export declare function createProvider(): ethers.BrowserProvider;
export {};
//# sourceMappingURL=provider.d.ts.map