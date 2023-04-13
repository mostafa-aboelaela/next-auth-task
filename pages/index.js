import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
//import { useSession } from "next-auth/react"
import {getSession,useSession, signOut} from "next-auth/react"

 
export default function Home() {

  const {data:session} = useSession()

	function handleSignOut(){
    signOut()
	}

  return (
    <div className={styles.container}>
      <Head>
				<title>Home Page</title>
			</Head>
         
				 {session ? User({session,handleSignOut}):Guest()}
    </div>
  )
}
 //gest
function Guest(){
	return(
		<main className="container mx-auto text-center py-20">
		<h3 className="text-4xl font-bold">
		      Guest Home Page
	  </h3>
		<div className="flex justify-center">
			<Link href={'/Login'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-white'>Sign In</Link>
		</div>
	</main>
	)
}


 //Authorize user
 function User({session,handleSignOut}){
	return(
		<main className="container mx-auto text-center py-20">
		<h3 className="text-4xl font-bold">
		      Authorize User Home Page
	  </h3>
		<div className="details">
			<h5>{session.user.name}</h5>
			<h5>{session.user.email}</h5>
		</div>
   
     <div className="flex justify-center">
			<button onClick={handleSignOut} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500  bg-gray-50'>Sign Out</button>
		 </div>

		<div className="flex justify-center">
			<Link href={'/Profile'} className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-white'>Profile Page</Link>
		</div>
	</main>
	)
 }

 export async function getServerSideProps({req}){
	 const session = await getSession({req})
   
	 if(!session){
		return{
			redirect:{
				destination:'/Login',
				permanent:false
			}
		}
	 }

	 return{
		props:{session}
	 }
 }