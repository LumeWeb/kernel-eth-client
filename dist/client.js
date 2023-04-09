import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "fADM_FFj8WGVg7fqqxIanFxSsdQZSrCJv1hEAmZj7tpiMA";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
