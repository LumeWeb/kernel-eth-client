import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduGLFR8wvd1Su9vtMMfXqevT7EUKeekaehwCJrrU34XjvXE7rce6QjRk3";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
