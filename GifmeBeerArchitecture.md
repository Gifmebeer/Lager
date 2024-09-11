# GifmeBeer NFT dApp Architecture Description

## 1. User Interaction
* Users scan a QR code at a physical location (e.g., a bar).
* The QR code contains a Claim URL that redirects to the web application.

## 2. Frontend
* Built with Next.js
* Provides server-side and client-side rendering
* Renders the user interface for interacting with the app
* Displays all NFTs owned by the user
* Handles wallet creation/connection before interacting with the backend

## 3. Wallet Creation
* Managed by the ThirdWeb SDK
* Can be one of two types:
    - Externally Owned Account (EOA)
    - ThirdWeb's account abstraction service

## 4. Backend (/api/claim endpoint)
* Receives the HTTPS request from the frontend after wallet creation/connection
* Performs the following actions:
    1. Loads the Contract Owner information
    2. Utilizes the ThirdWeb SDK
    3. Interacts with the smart contract to claim the NFT for the user's address

## 5. ThirdWeb SDK
* Facilitates wallet creation/connection
* Interacts with the Smart Contract

## 6. Smart Contract
* Deployed on Optimism Mainnet
* Based on a template provided by ThirdWeb
* Managed by the Contract Owner (not ThirdWeb)
* Handles NFT minting and claiming processes

## 7. NFT Data
* Metadata stored in static JSON files

## 8. Gas Handling
* Contract Owner provides a private key
* Gas fees for NFT minting are subsidized using this key

## 9. Security
* Contract Owner manages the smart contract
* Private key used for gas subsidization is securely handled

## Data Flow
1. User scans QR → Redirected to web application
2. Web app creates/connects wallet for user
3. Web app triggers claim process, sending request to /api/claim
4. /api/claim loads Contract Owner info
5. /api/claim interacts with smart contract via ThirdWeb SDK
6. Smart contract mints NFT on Optimism Mainnet
7. NFT claimed for user's address
8. Gas fees subsidized by Contract Owner
9. Web app updates to display newly claimed NFT along with all user's NFTs
