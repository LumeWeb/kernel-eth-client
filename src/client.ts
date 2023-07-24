import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduSPQerjmq822ZuqAuw2838t5rVxELiT27tMC4zmqPViCMpgBWmBKio27";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
