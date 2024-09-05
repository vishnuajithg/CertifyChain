import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers'
import { abi } from "../scData/Cert.json";
import { CertModuleCert } from "../scData/deployed_addresses.json";
import sig  from '../img/signature.png';
import logo  from '../img/logo.png';



const View = () => {
  const { id } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      const provider = new BrowserProvider(window.ethereum);  
      try {
        // const res = await fetch(`http://localhost:5000/certificate/${id}`);
        // console.log(res)
        // console.log("Data-Retrieved:",SearchId, name, course, grade, date)
        // const signer = await provider.getSigner();
        const instance  = new Contract(CertModuleCert, abi,provider);
        const data = await instance.Certificates(id);
        console.log("Tx Data:",data);
        console.log("Search ID:", id)
        console.log('Certificate data:', data.id, data.name, data.course, data.grade, data.date);

        
        // if (!res.ok) {
        //   throw new Error('Certificate not found');
        // }
        // const data1 = await res.json();
        setCertificateData(data);
      } catch (error) {
        console.error('Error fetching certificate:', error);
        setError(error.message);
      }
    };
    fetchCertificate();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!certificateData) {
    return <div className="flex justify-center items-center  h-[83vh]">Loading...</div>;
  }

  return (
   <>
   <div className="flex justify-center items-center  h-[83vh]">
   {/* <div class="border-solid border-2 border-indigo-600 ..."></div> */}
      <div className="ring-offset-2 ring-2 ring-[#BF9B30] ring-2 rounded border-8 m-0 border-solid border-2 border-[#BF9B30] p-16 w-3/4 h-3/4  bg-amber-50 ...">
        <center><img src={logo} className='w-[50px] mt-[-40px] mb-5'  alt="CertiApp Logo" /></center>
        <h1 className="text-5xl font-serif font-bold mb-2 text-center">CERTIFICATE</h1>
        <h2 className="text-2xl font-serif font-bold mb-10 text-center italic">OF ACHIEVEMENT</h2>
        <p className='text-center text-[18px] mb-3'>This is to certify that</p>
        <h1 className="text-5xl font-serif font-bold mb-4 text-center italic">{(certificateData.name).toUpperCase()}</h1>
        <p className="mb-6 text-center mt-[-20px]">__________________________________________________________________________________________</p>
        <p className="text-center text-[18px] mt-[-20px]">has successfully completed the requirements for <b>{certificateData.course}</b> with dedication and commitment, </p>
        <p className="text-center text-[18px]">achieving a grade <b>{certificateData.grade}. </b>In recognition of your hard work and achievement, we proudly present this certificate. </p>
        <p className='text-center text-[18px] '>Your efforts in mastering the skills and knowledge taught in this program will contribute to your continued success and growth.</p>
        <p className="mb-6 text-[18px] mt-24 float-left ml-[70px]">Awarded on: <b>{certificateData.date}</b></p>
        <img src={sig} className="w-[60px] mt-[60px] ml-[1000px]" alt="Signature" />
      </div>
    </div>
    <div className='flex justify-center mt-[-60px] mb-5'> <a href="/" className="bg-[#A04747] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </a></div>
   </>
  );
};

export default View;
