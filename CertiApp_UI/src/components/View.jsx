import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers'
import { abi } from "../scData/Cert.json";
import { CertModuleCert } from "../scData/deployed_addresses.json";

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
        const data = await instance.Certificates(1);
        console.log("Tx Data:",data);
        console.log("Search ID:", id)

        
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
    return <div>Loading...</div>;
  }

  return (
    <div class="container pm-certificate-container">
    <div class="outer-border"></div>
    <div class="inner-border"></div>
    
    <div class="pm-certificate-border col-xs-12">
      <div class="row pm-certificate-header">
        <div class="pm-certificate-title cursive col-xs-12 text-center">
          <h2>Buffalo Public Schools Certificate of Completion</h2>
        </div>
      </div>

      <div class="row pm-certificate-body">
        
        <div class="pm-certificate-block">
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2">empty</div>
                <div class="pm-certificate-name underline margin-0 col-xs-8 text-center">
                  <span class="pm-name-text bold">TrueNorth Administrator</span>
                </div>
                <div class="col-xs-2">empty</div>
              </div>
            </div>          

            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2">empty</div>
                <div class="pm-earned col-xs-8 text-center">
                  <span class="pm-earned-text padding-0 block cursive">has earned</span>
                  <span class="pm-credits-text block bold sans">PD175: 1.0 Credit Hours</span>
                </div>
                <div class="col-xs-2">empty</div>
                <div class="col-xs-12"></div>
              </div>
            </div>
            
            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2">empty</div>
                <div class="pm-course-title col-xs-8 text-center">
                  <span class="pm-earned-text block cursive">while completing the training course entitled</span>
                </div>
                <div class="col-xs-2">empty</div>
              </div>
            </div>

            <div class="col-xs-12">
              <div class="row">
                <div class="col-xs-2">empty</div>
                <div class="pm-course-title underline col-xs-8 text-center">
                  <span class="pm-credits-text block bold sans">BPS PGS Initial PLO for Principals at Cluster Meetings</span>
                </div>
                <div class="col-xs-2">empty</div>
              </div>
            </div>
        </div>       
        
        <div class="col-xs-12">
          <div class="row">
            <div class="pm-certificate-footer">
                <div class="col-xs-4 pm-certified col-xs-4 text-center">
                  <span class="pm-credits-text block sans">Buffalo City School District</span>
                  <span class="pm-empty-space block underline"></span>
                  <span class="bold block">Crystal Benton Instructional Specialist II, Staff Development</span>
                </div>
                <div class="col-xs-4">
                  empty
                </div>
                <div class="col-xs-4 pm-certified col-xs-4 text-center">
                  <span class="pm-credits-text block sans">Date Completed</span>
                  <span class="pm-empty-space block underline"></span>
                  <span class="bold block">DOB: </span>
                  <span class="bold block">Social Security # (last 4 digits)</span>
                </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
  );
};

export default View;
