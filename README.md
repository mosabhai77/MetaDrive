# Project on IPFS.

This project develops a Decentralised application "Meta-drive" that allows users to store and view their files on the IPFS network as well as allows them to share it with other users using the metamask account. We have used **PINATA-> which is an NFT media management service** that allows users to pin their content on IPFS thereby giving a fast and easy way to both technical and non technical creators to share and manage their files.

The necessary resources needed for this project are:
**React.js,ethers,hardhat configuration, Solidity and IPFS.**

To deploy the project on your local machine try running some of the following tasks in your IDE:

**Installing the dependencies:**

# Installing hardhat:
1) Write this cmd in your vs code ide's terminal 
```
npm install hardhat --save-dev hardhat@2.12.4
```
2)Then the terminal prompts you to install some extra dependencies along with their repective commands, so they must be installed too. 

3)npx hardhat

4)Create a Javascript project( Press Enter)

5)press Y and then Enter.

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
``` Library deployed to:<hashcode> ```

The above hashcode must be pasted in App.js in contractAddress variable.
# Installing axios API
```
npm install axios
```
# Generating an API KEY after making an account on PINATA.
The generated api key and secret api key must be pasted in FileUpload.js in the variable pinata_api_key and pinata_secret_api_key.
