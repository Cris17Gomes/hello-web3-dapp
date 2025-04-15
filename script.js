import { ethers } from 'https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.esm.min.js';


const contractAddress = '0xEc29164D68c4992cEdd1D386118A47143fdcF142';
const contractABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "initialMessage",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "newMessage",
                "type": "string"
            }
        ],
        "name": "MessageUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "getMessage",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "newMessage",
                "type": "string"
            }
        ],
        "name": "updateMessage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]; // ABI do seu contrato

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            return accounts[0];
        } catch (error) {
            console.error("Erro ao conectar a carteira:", error);
            return null;
        }
    } else {
        alert("MetaMask não encontrado. Por favor, instale-o!");
        return null;
    }
}

async function loadMessage() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    try {
        const message = await contract.getMessage();
        document.getElementById('current-message').textContent = message;
    } catch (error) {
        console.error("Erro ao carregar a mensagem:", error);
        document.getElementById('current-message').textContent = "Erro ao carregar";
    }
}

async function updateMessage() {
    const account = await connectWallet();
    if (!account) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(account);
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const newMessage = document.getElementById('new-message').value;
    const statusElement = document.getElementById('update-status');

    if (!newMessage) {
        alert("Por favor, digite uma nova mensagem.");
        return;
    }

    try {
        statusElement.textContent = "Enviando transação...";
        const tx = await contract.updateMessage(newMessage);
        await tx.wait(); // Espera a transação ser confirmada
        statusElement.textContent = "Mensagem atualizada com sucesso!";
        document.getElementById('new-message').value = '';
        loadMessage(); // Recarrega a mensagem atualizada
    } catch (error) {
        console.error("Erro ao atualizar a mensagem:", error);
        statusElement.textContent = "Erro ao atualizar a mensagem.";
    }
}

// Carrega a mensagem inicial quando a página carrega
window.onload = loadMessage;

// Event listener para o botão de atualizar
document.getElementById('update-button').addEventListener('click', updateMessage);