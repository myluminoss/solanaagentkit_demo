import client from "./client.js";
import {mainPrivateKey} from "./config.js";

const optionsWithBase58: StoreInitOptions = {
    privateKey: mainPrivateKey,
    isMainnet: true, // if false, listing will be on devnet 3.land (dev.3.land)
};

const collectionAccount = ""; //hash for the collection
const createItemOptions: CreateSingleOptions = {
    itemName: "",
    sellerFee: 500, //5%
    itemAmount: 100, //total items to be created
    itemSymbol: "",
    itemDescription: "",
    traits: [
        { trait_type: "", value: "" },
    ],
    price: 0, //100000000 == 0.1 sol, can be set to 0 for a free mint
    mainImageUrl: "",
    splHash: "", //present if listing is on a specific SPL token, if not present sale will be on $SOL
};
const isMainnet = true;
const result = await client.create3LandNft(
    optionsWithBase58,
    collectionAccount,
    createItemOptions,
    isMainnet
);
