# Hello Web3 DApp

Este é um projeto simples de uma Decentralized Application (DApp) que interage com um smart contract na blockchain Ethereum (rede de teste Sepolia).
Esta em teste preciso mandar ETH para carteira MetaMask para arrumar falcet, e testar para ver se estar correto
## Visão Geral

O front-end (HTML, CSS e JavaScript) permite aos usuários conectar suas carteiras MetaMask, ler a mensagem armazenada no smart contract e atualizar essa mensagem (requer ETH de teste para a transação).

O smart contract (`HelloWeb3.sol`) é um contrato Solidity básico que armazena uma mensagem e permite que o proprietário a atualize.

## Como Usar

1.  Certifique-se de ter o MetaMask instalado e conectado à rede de teste Sepolia.
2.  Abra o arquivo `index.html` no seu navegador.
3.  Conecte sua carteira MetaMask quando solicitado.
4.  A mensagem atual do contrato será exibida.
5.  Para atualizar a mensagem, digite uma nova mensagem no campo e clique em "Atualizar". (Isso exigirá uma transação na rede Sepolia e, portanto, ETH de teste).

## Smart Contract

O código do smart contract Solidity (`HelloWeb3.sol`) está incluído neste repositório.

## Tecnologias Utilizadas

* HTML
* CSS
* JavaScript
* Ethers.js (para interagir com a blockchain)
* Solidity (para o smart contract)

## Status do Projeto

Este é um projeto de aprendizado e demonstração básica.

---

Sinta-se à vontade para explorar o código e contribuir!