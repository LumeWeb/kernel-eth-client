import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AAAkzekB6FeX9sW2oBKOZ32G_2oU2oQWJIE9Iv4p6xBVGw";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn("method", params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
