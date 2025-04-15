// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWeb3 {
    string public message;
    address public owner;

    event MessageUpdated(address indexed sender, string newMessage);

    constructor(string memory initialMessage) {
        message = initialMessage;
        owner = msg.sender;
        emit MessageUpdated(msg.sender, initialMessage);
    }

    function updateMessage(string memory newMessage) public {
        require(msg.sender == owner, "Only the owner can update the message.");
        message = newMessage;
        emit MessageUpdated(msg.sender, newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}