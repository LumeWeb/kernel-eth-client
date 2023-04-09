import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AADlSzymsnWUkYspFo3sAq5OQrkC6yiMqaWMk_YMfysMFw";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
