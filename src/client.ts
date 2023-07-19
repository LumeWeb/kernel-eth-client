import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduQcvvdH4zb2Wc7Gnw7vHNSbXGpsMHVmHKqi9DicgQU1xGAJbEPKDevHd";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }

  public async register() {
    return this.callModuleReturn("register");
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
