import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AADaT6aFHxcAzhF1KWaxrUVq8VYOiTfzS4Y2rNUY0tFH6w";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
