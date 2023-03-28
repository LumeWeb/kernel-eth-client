import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AAC1ZoCCdfa-mc7HwirhSF5ysMZNRUax-E7rFpEPOzh1Bg";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
