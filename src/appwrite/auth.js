import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite"




export class AuthServices {
    
    client = new Client()
    account;


    constructor(){
        this.client
            .setEndpoint(conf.apiwriteUrl)
            .setProject(conf.apiwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(email, password, name)

            if (userAccount) {
                //call another method

                return this.login({email, password})
            } 
            else {
                return userAccount
            }
        } 
        catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            const userLogin = await this.account.createEmailPasswordSession(email, password)
            
            return userLogin
        } 
        catch (error) {
            throw error
        }
    }


    async getCurrentUser() {
        try {
            const currentUser = await this.account.get()

            return currentUser ?? null
        } 
        catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
            return null
        }
    }

    async logout() {
        try {
            this.account.deleteSessions()
        } 
        catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }

}


const authService = new AuthServices(); 

export default authService

