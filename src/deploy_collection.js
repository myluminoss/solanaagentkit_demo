import client from "./client.js";
import {mainPublicKey} from "./config.js";

const collection = await client.deployCollection({
    name: "Girl's Foot Attack NFT",
    uri: "https://yfcdn.imnotai.com/test/metadata-v5.json",
    royaltyBasisPoints: 500, // 5%
    creators: [
        {
            address: mainPublicKey,
            percentage: 100,
        },
    ],
});

