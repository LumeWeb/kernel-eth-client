import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AAB4n8tgzt9pLEYAbpmytHr618yIGKUc9UcKUX9p5k7zmA";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
