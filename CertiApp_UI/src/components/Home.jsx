import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers'

const Home = () => {
  const [certiid, setcertiid] = useState('');
  const navigate = useNavigate();

  const redirectToCertificate = () => {
    navigate(`/certificate/${certiid}`);
  };
  const provider = new BrowserProvider(window.ethereum);

  return (
    <>
{/* d
    } */}
    <button onClick={async ()=>{
      const signer = await provider.getSigner();
    console.log('Address:',signer.address)}}className="float-right bg-blue-400 p-2 text-white rounded-md px-8 py-2 mr-2">Connect to MetaMask</button>
    <br />
    <br /><br /><br /><br />
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-3xl">Certificate DApp</h1>
      <div className="pb-4">
        <img src={Logo} width="400" height="400" />
      </div>
      <input
        type="text"
        id="CertificateID"
        name="CertificateID"
        className="border-2 border-zinc-950 mb-2"
        placeholder="Enter Certificate ID to View"
        value={certiid}
        onChange={(e) => setcertiid(e.target.value)}
      />
      <button
        className="border-1 bg-blue-700 px-12 py-4 rounded text-white text-1xl"
        onClick={redirectToCertificate}
      >
        Search
      </button>
    </div></>
  );
};

export default Home;
