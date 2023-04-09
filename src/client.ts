import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AADwGUPEaKLXeVBUeg8FN8c3WoFlxR2FfWGvBUNBHyxfSw";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
