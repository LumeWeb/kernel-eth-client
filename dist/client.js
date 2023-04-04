import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AAARj-MgelPrjTaSmJKIVJOjrbegwtY34e_cF9vN_8-KGg";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
