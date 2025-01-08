import client from "./client.js";
import {mainPrivateKey} from "./config.js";

const optionsWithBase58: StoreInitOptions = {
    privateKey: mainPrivateKey,
    isMainnet: false, // if false, collection will be created on devnet 3.land (dev.3.land)
};

const collectionOpts: CreateCollectionOptions = {
    collectionName: "",
    collectionSymbol: "",
    collectionDescription: "",
    mainImageUrl: ""
};

const result = await client.create3LandCollection(
    optionsWithBase58,
    collectionOpts
);

