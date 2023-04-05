import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AACTqddfxqSc_nTexAAjcB2DAileBGWVN7EU1BKwiKbCqQ";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
