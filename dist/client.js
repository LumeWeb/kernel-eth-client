import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AABzXaYbh-KuCx3ZUUz-oeeMQsZb3kR1BbYSQ-8LSsBmAA";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
