import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zdiQhmSanFJDebnRrMnrVrkqrW2rRpzoDzsc7Mn1gvwpavEKeyisFw6c1m";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
