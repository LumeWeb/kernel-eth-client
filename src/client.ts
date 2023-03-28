import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AAC1ZoCCdfa-mc7HwirhSF5ysMZNRUax-E7rFpEPOzh1Bg";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
