const express = require("express");
const router = express.Router();
const sample = require("../Models/Certidetails");
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/issue', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'issueCertificate.html'));
});


router.post('/certificate',async(req, res) => {
    try{
        const data=req.body;
        console.log(data)
        const details=await sample.create(data);
        res.status(201).redirect('/thank-you');
    }
    catch(error){
        console.log(error);
        res.status(500).json();
    }
});


router.get('/thank-you', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formsubmitted.html'));
});


// router.get("certificate/:id",async (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'view.html'));
  
// });

router.get('/certificate/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Fetching certificate with ID: ${id}`);

    try {
        const certificate = await sample.findOne({ certiid: id });
        if (!certificate) {
            console.log(`Certificate not found for ID: ${id}`);
            return res.status(404).json({ message: 'Certificate not found' });
        }
        console.log(`Certificate found: ${certificate}`);
        res.json(certificate);
    } catch (error) {
        console.log(`Error fetching certificate: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;