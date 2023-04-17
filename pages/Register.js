import Head from "next/head"
import Layout from '../layout/Layout'
import Link from "next/link"
import styles from '../styles/Form.module.css';
import { useFormik } from 'formik';
import {registerValidate} from '../lib/Validate'
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter()
	const formik = useFormik({
		initialValues:{
			username:'',
			email:'',
			password:'',
			cpassword:''
		},
		validate:registerValidate,
		onSubmit 
	})
  
	async function  onSubmit(values) {
    const options ={
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(values)
		}
		await fetch('http://localhost:3000/api/auth/signup',options)
		  .then(res => res.json())
			.then((data)=>{
				if(data)router.push('http://localhost:3000')

			})
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
				{formik.errors.username &&formik.touched.username ? <span className="text-rose-500">{formik.errors.username}</span> : <></>}

				<div className={styles.input_group}>
				<input 
					type="email"
					name="email"
					placeholder="Email"
					className={styles.input_text}
					 {...formik.getFieldProps('email')}
					/>
				</div>
				{formik.errors.email &&formik.touched.email ? <span className="text-rose-500">{formik.errors.email}</span> : <></>}

				<div className={styles.input_group}>
					<input 
					type="password"
					name="password"
					placeholder="password"
					className={styles.input_text}
					{...formik.getFieldProps('password')}

					/>
				</div>
				{formik.errors.password &&formik.touched.password ? <span className="text-rose-500">{formik.errors.password}</span> : <></>}

				<div className={styles.input_group}>
					<input 
					type="password"
					name="cpassword"
					placeholder="Confirm password"
					className={styles.input_text}
					{...formik.getFieldProps('cpassword')}
					/>
				</div>
				{formik.errors.cpassword &&formik.touched.cpassword ? <span className="text-rose-500">{formik.errors.cpassword}</span> : <></>}

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
