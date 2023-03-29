import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AADUenOoil21Anizkz9cRUPvAxZY9gFFSEdK9S0ZrGbvhA";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
