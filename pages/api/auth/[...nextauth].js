import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import connectMongo from '../../../database/conn'
import Users from '../../../model/Schema'
import  CredentialsProvider  from "next-auth/providers/credentials";
import {compare} from 'bcryptjs'


export default NextAuth({
  providers:[
		//GoogleProvider
		GoogleProvider({
			clientId:process.env.GOOGLE_ID,
			clientSecret:process.env.GOOGLE_SECRET
		}),
    
		CredentialsProvider({
			name:"Credentials",
			async authorize(credentials,req){
        connectMongo().catch(error=>{error:"Connection Failed...!"})

				//chek user existance
        const result = await Users.findOne({email:credentials.email})
        if(!result){
					throw new Error ("No user Found with Email Please Sign Up...!")
				}
        //compare()
				const checkPassword = await compare(credentials.password, result.password);
				//incorrect password
				if(!checkPassword || result.email!== credentials.email){
					throw new Error ("Username or Password does't match...!");

				}
        
        return result;

			}
		})
     
	],
  
	secret:"qADErGjvrznFuFABmb3yr7VtN+dNujZ3WahMFWX4m9s="

})

