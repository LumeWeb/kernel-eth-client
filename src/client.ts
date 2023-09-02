import { factory, NetworkClient } from "@lumeweb/libkernel/module";
const MODULE = "z3o47Zqqkx7XD9Td5KU2qsgjWk5hrz7U5eirxcDKvJdyvoaGfzp94DNVm9af";

export class EthClient extends NetworkClient {
  public async method(method: string, params: any) {
    return this.callModuleReturn(method, params);
  }
}

export const createClient = factory<EthClient>(EthClient, MODULE);
