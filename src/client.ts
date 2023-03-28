import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "_B0BvJGSbPWH2tDbHpmhL_i7VpYXDGKzTL7gFLb0qtP5Hg";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
