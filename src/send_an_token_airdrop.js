import client from "./client.js";
import { PublicKey } from "@solana/web3.js";


// Send an SPL Token Airdrop via ZK Compression
(async () => {
    /* console.log(
        "~Airdrop cost estimate:",
        getAirdropCostEstimate(
            1000, // recipients
            30_000 // priority fee in lamports
        )
    ); */

    const signature = await client.sendCompressedAirdrop(
        new PublicKey(""), // mint
        10, // amount per recipient
        2,
        [""],
        0 // priority fee in lamports
    );
})();

