import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AAD94MIBiRLztrm3x8EzsLMX_53S1wG3e2hgFwy7G5sHBQ";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
