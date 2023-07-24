import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "zduQYuDJKkUw8CdHXfYjwS6YSMFBUBpj4CpGZLi5vdDyaEyKDjLqkiNhUB";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
