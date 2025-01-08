import {SolanaAgentKit} from "solana-agent-kit";



const rpcUrl = 'https://api.devnet.solana.com';

const feePayerAddress = '';
const feePayerPrivateKey = '';


// Initialize with private key and optional RPC URL
const agent = new SolanaAgentKit(
    feePayerPrivateKey,
    rpcUrl,
    ""
);

const opt = {
    initialLiquiditySOL: 1000,
    priorityFee: 100,
    slippageBps: 9,
    telegram: 'https://me.foija',
    twitter: 'https://me.foija',
    website: 'https://me.foija'
};

const r = await agent.launchPumpFunToken(
    'My Test Token', 'Lmtt', 'nntt',
    'https://yfcdn.imnotai.com/test/sndzx.png',
    opt
);
console.log(r)

