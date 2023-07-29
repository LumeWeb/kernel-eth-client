import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduLxmoG88oCttB4XDWkz5V5zVdEGffo1njvd2Hh6iDGLvxyi4t6ufkd83";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
