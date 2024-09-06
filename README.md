# 🏅CertifyChain

**CertifyChain** is a blockchain-enabled certificate issuance platform designed to securely issue, view, and verify certificates. With CertifyChain, certificates are immutably recorded on the blockchain, ensuring authenticity and transparency. Users can easily issue certificates, and recipients or third parties can verify them using the certificate ID. This decentralized approach eliminates the risk of certificate fraud and provides a reliable way to confirm the legitimacy of credentials.

## 🎯 Objective

CertifyChain was developed to address the challenges of certificate authenticity in the digital age. By leveraging blockchain technology, it ensures that certificates cannot be tampered with or counterfeited. This platform is ideal for educational institutions, professional organizations, and any entity that issues credentials, providing a secure and permanent record of achievements.

## 🛠️ Built With

  ![HTML](https://img.shields.io/badge/HTML-000000?style=flat&logo=html5&logoColor=E34F26&logoHeight=40)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
 ![React JS](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
  ![Node JS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
 ![Solidity](https://img.shields.io/badge/Solidity-363636?style=flat&logo=solidity&logoColor=white)
 ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=flat&logo=ethereum&logoColor=white)
 ![Hardhat](https://img.shields.io/badge/Hardhat-ff6c37?style=flat&logo=hardhat&logoColor=white)


## 🎞️ Demo Video

Watch the full demo of CertifyChain on YouTube:  
[CertifyChain Demo: Secure Blockchain-Powered Certificate Issuance & Verification](https://youtu.be/HcLNTSJdaNY)

##### Try 201 as Certificate ID as demo 

## ⚙️ Getting Started

To run the project locally, follow these steps:

### 🚀 Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/vishnuajithg/CertifyChain.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CertiApp_UI
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the project:
    ```bash
    npm run dev
    ```

### 🔗 Smart Contract Setup with Hardhat

To interact with the blockchain and deploy smart contracts, follow these steps:

1. Install Hardhat and the required dependencies:
    ```bash
    npm install -D hardhat @nomicfoundation/hardhat-toolbox dotenv
    ```

2. Set up your environment variables by creating a `.env` file in the root of the project with the following content:
    ```bash
    SEPOLIA_URL=your_sepolia_rpc_url
    PRIVATE_KEY=your_private_key
    ```

    Replace `your_sepolia_rpc_url` with your own Sepolia network URL (e.g., from Infura or Alchemy), and `your_private_key` with the private key of your Sepolia account.

3. Here's the `hardhat.config.js` file you'll be using:

    ```javascript
    require("@nomicfoundation/hardhat-toolbox");
    require("dotenv").config();
    const SEPOLIA_URL = process.env.SEPOLIA_URL;
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    module.exports = {
      defaultNetwork: "infuraSep",
      networks: {
        localhost: {
          url: "http://127.0.0.1:8545/",
        },
        infuraSep: {
          url: SEPOLIA_URL || "http://127.0.0.1:8545/",
          accounts: [PRIVATE_KEY] || ["0x..."], // fallback local account
        },
      },
      solidity: "0.8.20",
    };
    ```

### 🛠️ Smart Contract Deployment with Hardhat Ignition

1. **Deploy on Sepolia network** (make sure your `.env` is configured):
    ```bash
    npx hardhat ignition deploy ignition/modules/Cert.js
    ```

2. **Deploy on localhost** (ensure you're running `npx hardhat node`):
    ```bash
    npx hardhat ignition deploy ignition/modules/Cert.js --network localhost
    ```

### 🔑 Important Notes

- Make sure to replace the Sepolia URL and private key in the `.env` file with your own credentials for secure transaction handling.
- Alternatively, use the `localhost` network by running `npx hardhat node` for local testing without interacting with Sepolia.

## 📖 Learn More

For more information on Hardhat, visit the [official Hardhat documentation](https://hardhat.org/getting-started).


## 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

To contribute:

Fork the Project
Create your Feature Branch (git checkout -b feature/<feature_name>)
Commit your Changes (git commit -m '<feature_name>_added')
Push to the Branch (git push origin feature/<feature_name>)
Open a Pull Request

## 📄 License
This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.

