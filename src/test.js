import { percentAmount, generateSigner, signerIdentity, createSignerFromKeypair } from '@metaplex-foundation/umi'
import { TokenStandard, createAndMint ,mplTokenMetadata} from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { Keypair, clusterApiUrl } from "@solana/web3.js"
import bs58 from "bs58";
import {mainPrivateKey, rpcUrl} from "./config.js";

const umi = createUmi(rpcUrl)

const userKeypair = Keypair.fromSecretKey(
    bs58.decode(mainPrivateKey)
);

const userWallet = umi.eddsa.createKeypairFromSecretKey(userKeypair.secretKey);
const userWalletSigner = createSignerFromKeypair(umi, userWallet);

const metadata = {
    name: "Per aspera ad astra L",
    symbol: "PAAL",
    uri: "https://lime-keen-bedbug-542.mypinata.cloud/ipfs/bafkreicireazn45bcqgidughvgmdihcwsl7bcsegjq4kv37qd37vokw6hy",
}

const mint = generateSigner(umi);

umi.use(signerIdentity(userWalletSigner))
    .use(mplTokenMetadata())

createAndMint(umi, {
    mint,
    authority: umi.identity,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    sellerFeeBasisPoints: percentAmount(0),
    decimals: 9,
    amount: 666_000000000,
    tokenOwner: userWallet.publicKey,
    tokenStandard: TokenStandard.Fungible,
}).sendAndConfirm(umi).then(() => {
    console.log("Successfully minted tokens (", mint.publicKey, ")");
})
