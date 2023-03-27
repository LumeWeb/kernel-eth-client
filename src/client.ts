import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AAC9Bd03CMW7ydE2MXJkLfRe8AitBaQX70r6I5AzCq7lqA";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
