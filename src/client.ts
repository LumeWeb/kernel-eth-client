import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduTaThU2Dzb3iCbo4yeVN9YjoWU7BKzscALiJYXERiccocfKXHSRwG487";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
