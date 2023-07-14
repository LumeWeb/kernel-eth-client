import { Client, factory } from "@lumeweb/libkernel/module";

const RPC_MODULE = "AABzXaYbh-KuCx3ZUUz-oeeMQsZb3kR1BbYSQ-8LSsBmAA";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
