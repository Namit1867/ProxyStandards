npx hardhat run --network rinkeby ./scripts/deploy_pizza_v1.js

npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"

upgrading command

npx hardhat run --network rinkeby ./scripts/uups/upgrade_pizza_v2.ts