import { Eip1193Provider, ethers } from "ethers";
import { createClient, EthClient } from "./client.js";

export class Provider implements Eip1193Provider {
  private client: EthClient = createClient();

  public async request(args: RequestArguments): Promise<unknown> {
    return this.client.method(args.method, args.params);
  }
}

interface RequestArguments {
  readonly method: string;
  readonly params?: readonly unknown[] | object;
}

export function createProvider(): ethers.BrowserProvider {
  return new ethers.BrowserProvider(new Provider());
}
