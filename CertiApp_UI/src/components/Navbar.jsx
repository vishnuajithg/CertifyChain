import React from 'react'
import { BrowserProvider } from 'ethers'

const Navbar = () => {
  const provider = new BrowserProvider(window.ethereum);
  return (
    <>
    
        <div className='flex flex-row justify-between p-6 gap-2 bg-[#227B94]'>
        <div><a href="/"><h1 className="font-extrabold text-4xl float text-white">CertifyChain</h1></a></div>
        {/* <a className="bg-stone-300 p-2 rounded-md px-8 py-2 text-lg font-medium  mr-2" href="/">Home</a> */}
       <div className='flex flex-row gap-2'>
       <a className="bg-stone-300 p-2 rounded-md  px-8 py-2 text-lg font-medium " href="/issue">Issue Certificate</a>
  
  <center><button onClick={async ()=>{
  const signer = await provider.getSigner();
console.log('Address:',signer.address)}}className="bg-stone-300 p-2 rounded-md  px-8 py-2 text-lg font-medium ">Connect to MetaMask</button></center>


    {/* <a className="bg-blue-400 p-2 rounded-md px-8 py-2  mr-2" href="/view">View</a> */}
    
       </div>
    </div>
    </>
  )
}

export default Navbar