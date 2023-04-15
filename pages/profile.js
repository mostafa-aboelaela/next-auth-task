import Link from "next/link";
import {getSession} from 'next-auth/react'
// eslint-disable-next-line react/display-name, import/no-anonymous-default-export
export default () => {
	return(
		<section className="container mx-auto text-center">
			<h3 className="text-4xl font-bold">Profile Page</h3>
			<Link href={"/"}>Home Page</Link>
		</section>
	)
}

export async function getServerSideProps({req}){
	const session = await getSession({req})
	if(!session){
		return{
			redirect:{
				distination:"/login",
				premanent:false

			}
		}
	}
	// authorize user return session
 return{
	props:{session}
 }

}
