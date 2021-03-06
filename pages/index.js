import Head from 'next/head'
import { FaWhatsapp, FaLinkedinIn, FaGoogle, FaEnvelope,FaLock } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100" >
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className='flex flex-col flex-1 items-center justify-center  w-full flex-grow text-center px-20'>
      <div className="bg-slate-100 rounded-2xl shadow-2xl sm:w-32 md:w-2/3  flex  max-w-4xl">
      <div className='w-3/5 p-5' > {/* sigin */}
        <div className='sm:text-left font-extrabold text-xl mt-2 ml-2 text-sky-500' ><span className='text-black'>Currency</span>Converter</div>
        <div className='py-1'></div>
        <h2 className='max-w-md text-3xl font-bold text-sky-500  mb-2'><span className='text-black'>Welcome</span><p></p> Sign in to account</h2>
        <div className='border-2 w-12 border-sky-500 inline-block bg-sky-500 mb-2'></div>
        <div className='flex justify-center my-3 '>
          <a className='border-2 border-gray-300 rounded-md p-3 mx-3 ' href='#'>
            <FaLinkedinIn className='text-sm'></FaLinkedinIn>
          </a>
          <a className='border-2 border-gray-300 rounded-md p-3 mx-3' href='#'>
            <FaGoogle className='text-sm'></FaGoogle>
          </a>
          <a className='border-2 border-gray-300 rounded-md p-3 mx-3' href='#'>
            <FaWhatsapp className='text-sm'></FaWhatsapp>
          </a>
        </div>

        <p className=' text-gray-400  my-3'>Please enter your email and password</p>
        <div className='md:flex-col flex flex-col items-center'>
        <div className='bg-gray-200 w-64 p-1 flex items-center flex-grow'>
          <FaEnvelope className='m-2 text-gray-500'></FaEnvelope>
          <input type="email" name="email" placeholder='Email' className='bg-gray-200 outline-none text-sm flex-1'></input>
        </div>
        <div className='bg-gray-200 w-64 p-1 flex items-center mt-3 flex-grow'>
          <FaLock className='m-2 text-gray-500'></FaLock>
          <input type="password" name="password" placeholder='Password' className='bg-gray-200 outline-none text-sm flex-1'></input>
        </div>
        <div className='flex w-64 mb-4 justify-center'>
          <label className='flex items-center text-xs' >
            <a href='' className='text-xs ml-40 mt-2 font-normal' >Forgot Password?</a>
          </label>
        </div>
        <button  className='rounded-full border-2 border-sky-500 px-4 py-1 inline-block font-semibold hover:bg-sky-500  hover:text-white'>Log In</button>

          
        </div>

        
      </div>

      <div className='w-2/5   bg-sky-400 text-white rounded-br-2xl rounded-tr-2xl py-36 px-12'>
        <h2 className='text-3xl font-bold mb-2'>Ready to join us?</h2>
        <div className='border-2 w-10 border-white inline-block bg-white mb-2'></div>
        <p className='mb-8 '>Provide your details to enjoy exclusive features the app provides</p>
        <button className='rounded-full border-2 border-white px-4 py-1 inline-block font-semibold hover:bg-white  hover:text-sky-400'>Sign Up</button>
        </div>
        </div>
    </main>
      
        

      
    </div>
  )
}
