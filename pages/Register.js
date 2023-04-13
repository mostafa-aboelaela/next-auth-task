import Head from "next/head"
import Layout from '../layout/Layout'
import Link from "next/link"
import styles from '../styles/Form.module.css';
import { useFormik } from 'formik';

export default function Register() {
  
	const formik = useFormik({
		initialValues:{
			username:'',
			email:'',
			password:'',
			cpassword:''
		},
		onSubmit
	})
  
	async function  onSubmit(values) {
    console.log(values)
	}
	 
	return (
		<Layout>
			<Head>
			<title>Register</title>
			</Head>
			<section className="w-3/4 mx-auto flex flex-col gap-10">
			<div className="title">
				<h1 className="text-gray-800  text-4xl">Register</h1>
 			</div>
    
      <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
				<div className={styles.input_group}>
					<input 
					type="text"
					name="Username"
					placeholder="Username"
					className={styles.input_text}
					{...formik.getFieldProps('username')}

					/>
				</div>
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
				<div className={styles.input_group}>
					<input 
					type="password"
					name="password"
					placeholder="Confirm password"
					className={styles.input_text}
					{...formik.getFieldProps('cpassword')}

					/>
				</div>
				{/*login button */}
				<div className={styles.button}>
					<button type="submit">
						SignUp
					</button>
				</div>
			</form>
       {/*bottom */}
			 <p className="text-center text-black-500 ">
				 Have an account go to?<Link href={'/Login'} className="text-blue-700">Sign In</Link>
			 </p>
			</section>
		</Layout>
	)
}
