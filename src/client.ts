import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduNWtikeTg3FwuNKBNLnWLFJ2ERg4BuDXymerS1gxcbQr5kQ4u2mXtUoq";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
