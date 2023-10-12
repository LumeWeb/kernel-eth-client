import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zrjM21LqarPeeRGM9WPQGncA4cLFwzBqgq6kvio7S7HtwrT";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
