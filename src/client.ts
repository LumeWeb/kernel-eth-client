import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AADnNxDkS8k7zC-4CQabQGJ63jrtr6YXQP0sugOS78alPQ";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
