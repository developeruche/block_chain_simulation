// Importing Lib for hashing string
const SHA256 = require("crypto-js/sha256")


class Block{
    constructor(index, timestamp, data, previousHash=""){
        console.log("Init Block creation process")
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculate_hash()
    }

    calculate_hash(){
        console.log("Creating a Hash")
        // This function would that the properties of the class and prepare a hash for it
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString()
    }

    mine_block(difficulty){
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculate_hash();
            console.log("Mining Block...")
        }
    }
}

class BlockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()]; //This first block in a block chain is called the genesis chain
        this.difficulty = 4;
        console.log("Created the BlockChain, The Genesis Block have been added tot the list..")
    }

    createGenesisBlock(){
        console.log("Creating Genesis Block")
        // This is going to create the first block in a block chain
        return new Block(0,"01/01/2020", "This is the Genesis Block", "0")
    }

    getLastBlock(){
        console.log("Obtaining Last Block on the Chain")
        // THis would return the last block on the block chain
        return this.chain[this.chain.length - 1]
    }

    addBlock(newBLock){
        console.log("Adding a new block to the chain")
        // This function is receiving a block as it parameter
        newBLock.previousHash = this.getLastBlock().hash;
        newBLock.mine_block(this.difficulty)
        // Now this block is ready to br pushed up to the chain
        this.chain.push(newBLock)
    }

    isChainValid(){
        // THis function would loop through the chains and return True i f the chain is valid
        for (let i = 1; i < this.chain.length; i++){
            let currentBlock = this.chain[i]
            let previousBlock = this.chain[i - 1]

            if(currentBlock.hash !== currentBlock.calculate_hash()){
                console.log("The Current Block hash is not corresponding to what it is suppose to be.")
                return false;
            }
            
            if(currentBlock.previousHash !== previousBlock.hash){
                console.log("The positioning of the block is not correct.")
                return false;
            }
        }

        return true
    }
}


// Testing the block chain as a crypto currency channel
let Alego = new BlockChain();
Alego.addBlock(new Block(1, "02/01/2020", {
    amount : 500
}))
Alego.addBlock(new Block(2, "03/01/2020", {
    amount : 1500
})) 


// Testing The display of the block chian
console.log(JSON.stringify(Alego, null, 4))


// // Testing if the chain is valid
// console.log("Alego chain is Valid?" + Alego.isChainValid())