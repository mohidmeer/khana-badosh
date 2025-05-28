import NavBar from '@/components/shared/NavBar'
import Link from 'next/link'

export default function NotFound() {
    return (
      
         <div>
            <NavBar/>
            <div className='flex flex-col h-screen justify-center items-center '>
                <h1 className='text-[300px] font-extrabold animate-pulse '>404</h1>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className='underline'>Return Home</Link>
            </div>
         </div>
     
    )
}