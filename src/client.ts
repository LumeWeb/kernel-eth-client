import { Client, factory } from "@lumeweb/libkernel/module";

const MODULE = "zduRybxvGhrGbfH3cmYt9invaL4QLekEyYvggmT6TJH8iucXwJjE9HjcKq";

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
