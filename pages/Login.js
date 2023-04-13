import Head from "next/head"
import Layout from "../layout/Layout"
import Link from "next/link"
import styles from '../styles/Form.module.css';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
 export default function Login() {

	const formik = useFormik({
		initialValues:{
			email:'',
			password:''
		},
 		onSubmit
	})
 	async function onSubmit(values){
		console.log(values)
	}
//handleGoogleSignin
 async function handleGoogleSignin(){
	signIn('google',{callbackUrl:"http://localhost:3000"})
 }

	return (
		
		<Layout>
			<Head>
			<title>Login</title>
			</Head>
			<section className="w-3/4 mx-auto flex flex-col gap-10">
			<div className="title">
				<h1 className="text-gray-800  text-4xl">Login Now</h1>
 			</div>
    
      <form className="flex flex-col gap-5"onSubmit={formik.handleSubmit}>
				<div className={styles.input_group}>
					<input 
					type="email"
					name="email"
					placeholder="Email"
					className={styles.input_text}
					 {...formik.getFieldProps('email')}
					/>
				</div>
 				<div className={styles.input_group}>
					<input 
					type="password"
					name="password"
					placeholder="password"
					className={styles.input_text}
					{...formik.getFieldProps('password')} 
					/>
				</div>
 
				{/*login button */}
				<div className={styles.button}>
					<button type="submit">
						Login
					</button>
				</div>
				<div className="input-button">
				<button type="button" className={styles.custom_button}>
						Sign in with Google
					</button>
				</div>
 			</form>
       {/*bottom */}
			 <p className="text-center text-black-500">
				dont have an account yet?<Link href={'/Register'} className="text-blue-700">Sign Up</Link>
			 </p>
			</section>       
		</Layout>
			
		
	)
}
