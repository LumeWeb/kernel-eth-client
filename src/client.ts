import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zdiKmefxSjiVLEGA2UdDJ3eoqw9sfv45Y6hB7rbavz8sEM9GDNHiJ1vEmD";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
