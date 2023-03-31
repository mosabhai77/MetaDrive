# Project on IPFS.

In this project, we created a Decentralized application called "Meta-drive," which allows users to store and view their files on the IPFS network, as well as share those with other users via the metamask wallet. We used PINATA->, an NFT media management service that allows users to pin their content on IPFS, giving both technical and non-technical creators a simple and easy way to share and manage their files on a decentralised space.

This project requires the following resources: _React.js_,_Ethers_,_hardhat configuration_, _Solidity_, _axios_ and _IPFS_.

Try running some of the following tasks in your IDE to deploy the project on your local machine:

**Installing the dependencies:**

# Installing hardhat:

1. In the terminal of your VS Code IDE, type this command.

```
npm install hardhat --save-dev hardhat@2.12.4
```

2. The terminal prompts you to install some extra dependencies along with their repective commands, so they must be installed too.

3. Run hardhat

```
npx hardhat
```
4. Create a JAVASCRIPT project.

# Installing React

```
npm install create-react-app client
```

To run the app.js file of react on your local host type the following cmds.

```
cd client
npm start
```

# Starting the local ethereum network using Hardhat.

The command below starts a local Ethereum network using the Hardhat development environment. This network is commonly used for testing and developing decentralized applications (dApps) without having to interact with the real Ethereum network, which can be expensive and time-consuming.
The cmd below lists some accounts with their private keys in your terminal. We need to import those accounts in the browser's metamask wallet to use the test ether for performing the operations after deploying our smart contract.

```
npx hardhat node
```

# After ruuning the above cmd we must deploy our smart contract by the deployment migration script "deploy.js" using the following cmd.

```
npx hardhat run --network localhost scripts/deploy.js
```

# The above cmd will generate an output like :

`Library deployed to:<hashcode>`

The above hashcode must be pasted in App.js in contractAddress variable.

# Installing axios API

```
npm install axios
```

# Generating an API KEY after making an account on PINATA.

The generated api key and secret api key must be pasted in FileUpload.js in the variable pinata_api_key and pinata_secret_api_key.

Everything in the dialogue box needs to be enabled while creating the secret key. You can enter any value you wish when the dialogue box asks you how many times you want to use this key.
