import { FirebaseError } from 'firebase/app';
import {  getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  email:string,
  passward:string
}


export default function  Signup (){

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = async ()=>{
    console.log({name,email,password}); 
  

  try{
    const auth = getAuth()
    await signInWithEmailAndPassword(auth,email,password)

    setName('')
    setEmail('')
    setPassword('')

    alert( 'サインインしました' );

  } catch(e){
    if(e instanceof FirebaseError){
      console.log(e)
      alert( '失敗しました' );
    }

  }

}

  return(
    <footer onClick={handleSubmit}>
      <div className='mt-20' >
        <h2 className='text-3xl mb-5 text-center'><span className='span'>S</span>ignin</h2>
        <div className='text-center'>
        <p className='text-xl'>Name</p>
        <input className='w-96 h-10 border-black border-solid border bg-white' 
        type="name"
        name="name"
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}

        />
        <p className='text-xl'>Email</p>
        <input className='w-96 h-10 border-black border-solid border bg-white' 
        type="email"
        name="email"
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <p className='text-xl'>Psssword</p>
        <input className='w-96 h-10 border-black border-solid border bg-white' 
        type="password"
        name="password"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <div className='mt-10'>
        <button className='w-32 h-10 border-black border-solid border 	bg-gray-800 text-white'>Login</button>
        </div>
        
        </div> 
      </div>
      <div className='relative top-20 text-center'>
          <button 
          
          className='homeBotton'
          ><Link href="/">Homeに戻る</Link></button>
      </div>
    </footer>
    
   );

}