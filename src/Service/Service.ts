import Web3 from "web3";
import ABI from "./ABI.json"

class Service {
    web3 = new Web3("http://localhost:8545")
    contract = new this.web3.eth.Contract(ABI as any, "0x6C654C76ef06cE4146F2724F451DA6fEbe09C6D5")

    async auth(login: string, password: string) {
        try {
            return await this.contract.methods.auth(login, password).call()
        } catch (error) {
            console.log(error)
        }
    }

    async reg(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.reg(login, password).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

    async reqWhiteList(name: string, address: string) {
        try {
            return await this.contract.methods.reqWhiteList(name).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

    async viewReqWL() {
        try {
            return await this.contract.methods.viewReqWL().call()
        } catch (error) {
            console.log(error)
        }
    }

    async applyReqWL(id: number, answer: boolean, address: string) {
        try {
            return await this.contract.methods.applyReqWL(id, answer).send({ from: address })
        } catch (error) {
            console.log(error)
        }
    }

    async privateSale(amount: number, tokenPrice: number, address: string) {
        try {
            return await this.contract.methods.privateSale(amount).send({ from: address, value: amount * tokenPrice })
        } catch (error) {
            console.log(error)
        }
    }

    async publicSale(amount: number, tokenPrice: number, address: string) {
        try {
            return await this.contract.methods.publicSale(amount).send({ from: address, value: amount * tokenPrice })
        } catch (error) {
            console.log(error)
        }
    }

    async viewTokenPrice() {
        try {
            return await this.contract.methods.viewTokenPrice().call()
        } catch (error) {
            console.log(error)
        }
    }

    async systemTime() {
        try {
            return await this.contract.methods.systemTime().call()
        } catch (error) {
            console.log(error)
        }
    }

    async timeStart() {
        try {
            return await this.contract.methods.timeStart().call()
        } catch (error) {
            console.log(error)
        }
    }
}
export default new Service();