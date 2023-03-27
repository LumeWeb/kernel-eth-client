import { ethers } from "ethers";
import { createClient } from "./client.js";
export class Provider {
    client = createClient();
    async request(args) {
        return this.client.method(args.method, args.params);
    }
}
export function createProvider() {
    return new ethers.BrowserProvider(new Provider());
}
