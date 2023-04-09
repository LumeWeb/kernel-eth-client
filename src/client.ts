import { Client, factory } from "@lumeweb/libkernel-universal";

const RPC_MODULE = "AADAkD3pvLEFOlfs5G5u4Ko-3YkMKGxoZa_SAw8lFumj8w";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, RPC_MODULE);
