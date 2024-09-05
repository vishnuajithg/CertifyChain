import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [certiid, setcertiid] = useState('');
  const navigate = useNavigate();

  const redirectToCertificate = () => {
    navigate(`/certificate/${certiid}`);
  };


  return (
    <>
   
    
    
    
    <div className="flex flex-col items-center  justify-center bg-white-300 h-[83vh]">
      <div className="pb-4 mt-[-100px]">
        <img src={Logo} width="400" height="400" />
      </div>
      <input
        type="text"
        id="CertificateID"
        name="CertificateID"
        className="border-2 border-[#227B94] mb-2 p-2 rounded-md font-semibold text-center mb-8 w-64 "
        placeholder="Enter Certificate ID to View"
        value={certiid}
        onChange={(e) => setcertiid(e.target.value)}
      />
      <button
        className="border-1 bg-[#A04747] px-12 py-3 mt-[-10px] font-semibold  rounded text-white text-1xl"
        onClick={redirectToCertificate}
      >
        Search
      </button>

    </div>
    
    </>
  );
};

export default Home;
