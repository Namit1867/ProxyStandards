const { ethers, upgrades } = require("hardhat");

const PROXY = "0xd9b0bB29940610711EaCD1D3309d86EA614B1d7a";

async function main() {
 const PizzaV2 = await ethers.getContractFactory("PizzaV2");
 console.log("Upgrading Pizza...");
 await upgrades.upgradeProxy(PROXY, PizzaV2);
 console.log("Pizza upgraded successfully");
}

main();