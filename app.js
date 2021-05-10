// This IS a E-Coin application

class user{
    constructor(name, email, wallet_id, password, username){
        this.name = name;
        this.user_email = email;
        this.user_wallet_id = wallet_id;
        this.user_password = password;
        this.username = username;
        this.private_key = ""
        this.public_key = ""
    }

    validate_user(){
        // This function would validate the users input 
        if (!this.name.length > 6){
            console.log("Name length must be greater than 6.")
            return false
        }
        if(!this.name && !this.email && !this.wallet_id && !this.password && !this.username){
            console.log("Invalid User format...")
            return false
        }
    }

    create_and_post_user() {
        // This function would post the user to the backend, create account and create a wallet for the person
    }
}

class wallet{
    constructor(user_id, balance, trace_back=[]){
        this.wallet_id = this.create_wallet_id()
        this.wallet_user_id = "Some User Id"
        this.balance = this.get_balance()
        this.trace_back = get_trace_back()
    }
    create_wallet_id(){
        console.log("Wallet is been created")
    }
    get_balance(){
        console.log("This is your Current wallet balance")
    }
    get_trace_back(){
        console.log("This is all the transaction consigning this wallet")
    }
}
class Data{
    constructor(owner_data, value=0, owner_Signature){
        this.coin_id = "Some random number"
        this.coin_owner = owner_data
        this.coin_value = value
        this.owner_Signature = owner_Signature
    }

}

class Block{
    constructor(wallet_id, trace_back=[]){
        this.wallet_id = wallet_id
        this.trace_back = trace_back.push(owner_data)
        this.is_valid = this.block_is_valid()
    }

    block_is_valid(){
        // Function would run when every the coin is init and wound
        // 
    }
}

class BlockChian{
    constructor() {

    }
}