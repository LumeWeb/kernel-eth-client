import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduJAni974HwU8aLopvhg6arxjQ5pFdWeXQvA2Wy8W3DPy752oM9wrHkxo";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
