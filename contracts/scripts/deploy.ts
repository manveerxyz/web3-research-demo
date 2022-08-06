import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());
  
  const Contract = await ethers.getContractFactory('ScholarResearchObjectDemo');
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log('Contract deployed:', contract.address);

  let tx = await contract.mint(deployer.address, '0');
  const r1 = await tx.wait();
  console.log('minted:', r1.transactionHash);

  tx = await contract.mint(deployer.address, '1');
  const r2 = await tx.wait();
  console.log('minted:', r2.transactionHash);

  tx = await contract.cite('0', '1');
  const r3 = await tx.wait();
  console.log('cited:', r3.transactionHash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
