import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduKW55byJGtigF9TcVmrBJzGidXUHBifAo5Yxb211fzw86W1tbG9WmKqh";

export class EthClient extends Client {
  public async ready() {
    return this.callModuleReturn("ready");
  }
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
