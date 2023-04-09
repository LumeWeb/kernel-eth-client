import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AADAkD3pvLEFOlfs5G5u4Ko-3YkMKGxoZa_SAw8lFumj8w";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
