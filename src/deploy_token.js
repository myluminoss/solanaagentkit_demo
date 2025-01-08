import client from "./client.js";

const result = await client.deployToken(
    "Girl's Foot Attack", // name
    "https://yfcdn.imnotai.com/test/metadata-v5.json", // uri
    "GSFA", // symbol
    2, // decimals
    1000000000 // initial supply
);

console.log("Token Mint Address:", result.mint.toString());

