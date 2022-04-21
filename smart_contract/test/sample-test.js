const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();
  });
});
