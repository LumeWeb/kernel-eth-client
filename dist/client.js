import { Client, factory } from "@lumeweb/libkernel-universal";
const RPC_MODULE = "AADaT6aFHxcAzhF1KWaxrUVq8VYOiTfzS4Y2rNUY0tFH6w";
export class EthClient extends Client {
    async ready() {
        return this.callModuleReturn("ready");
    }
    async method(method, params) {
        return this.callModuleReturn(method, params);
    }
}
export const createClient = factory(EthClient, RPC_MODULE);
