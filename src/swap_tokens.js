import client from "./client.js";

import { PublicKey } from "@solana/web3.js";

const signature = await client.trade(
    new PublicKey(""),
    100, // amount
    new PublicKey(""),
    300 // 3% slippage
);
