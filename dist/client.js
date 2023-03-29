import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AADnNxDkS8k7zC-4CQabQGJ63jrtr6YXQP0sugOS78alPQ";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
