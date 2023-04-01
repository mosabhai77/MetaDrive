const hre = require("hardhat");

async function main() {
<<<<<<< HEAD
    const Upload = await hre.ethers.getContractFactory("Upload");
    const upload = await Upload.deploy();
    await upload.deployed();
    console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
=======
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();
  await upload.deployed();
  console.log("Library deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
>>>>>>> 69ac24a27230d54c6d0d9fef12a87455e8cc7340
