import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduJXdDDfhG3XqczgqgwBXAS6jYTuz8B83CEUCntdV23pJbKbXfTzntkzb";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
