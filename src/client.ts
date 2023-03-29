import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AAD94MIBiRLztrm3x8EzsLMX_53S1wG3e2hgFwy7G5sHBQ";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
