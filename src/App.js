import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Statistics from "./pages/Statistics"
import Dashboard from "./pages/Dashboard"
import Deposits from "./pages/Deposits"
import Withdrawn from "./pages/Withdrawn"
import Matrix from "./pages/Matrix"
import GiftNft from "./pages/GiftNft"
import Help from "./pages/Help"
import Stake from "./pages/Stake"
import Navigation from "./components/Navigation";
import { useState } from "react";
import Index from "./pages/Index";

import {ethers} from 'ethers'
import abiMatrixCore from "./abis/MATRIXCORE.json"
import matrix1 from "./abis/MATRIXLVL1.json"
import matrix2 from "./abis/MATRIXLVL2.json"
import matrix3 from "./abis/MATRIXLVL3.json"
import matrix4 from "./abis/MATRIXLVL4.json"
import matrix5 from "./abis/MATRIXLVL5.json"
import matrix6 from "./abis/MATRIXLVL6.json"
import matrix7 from "./abis/MATRIXLVL7.json"
import matrix8 from "./abis/MATRIXLVL8.json"
import matrix9 from "./abis/MATRIXLVL9.json"
import matrix10 from "./abis/MATRIXLVL10.json"
import matrix11 from "./abis/MATRIXLVL11.json"
import matrix12 from "./abis/MATRIXLVL12.json"
import busdAbi from "./abis/BUSD.json"


function App() {

  const busd = "0xaC99AE050daE5456a56912280edF81EA88C7C651"
const nft = "0x7D2135F9452e8a03D16e61E1273A2E7F28aBbd3c"
const matrix ="0xdAED17d1BF04ae52c72323169aea707757c6407e"
const matrixLv2 ="0x9f2D2facFC519E96d15A755b5DCa851416e6a354"
const matrixLv3 ="0xb8887C35b82F17a7eA2E51E944E62117910e0Aa2"
const matrixLv4  = "0x68A7C5BB2C4E0E4B5f912DDb32B3AF82226f3F02"
const matrixLv5 = "0x61Fe1717E752989561186Fc79Cb4F6a13052267f"
const matrixLv6 ="0x6d5ACD79759e81aCD65A82a98e3C7278C9cB5009"
const matrixLv7 ="0x866ADF0C51D1f0598B0a663Ffc9ABF406A2a0860"
const matrixLv8 ="0xebf9E6c02B3F4aB39b534282872C53a968add49e"
const matrixLv9 ="0xacab0b79c72E50f65fc080B3B6563754390656AA"
const matrixLv10 ="0x49a58B25065d5B305db8223f997658B88151B212"
const matrixLv11= "0xcA100AFd4180002232878F51f69Bb53C323CBB37"
const matrixLv12 ="0x3C61Fd22Bc4e233B47f21AA6B8587c2C0aD41695"
const CoreMatrix ="0x12F0FE6C27a497fcF22a193278BB81B6dD8256B0"

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null); 
    const [connButtonText, setConnButtonText] = useState('Connect');

    const [contractCore, setContractCore] = useState(null);
    const [contractMatrix1, setContractMatrix1] = useState(null);
    const [contractMatrix2, setContractMatrix2] = useState(null);
    const [contractMatrix3, setContractMatrix3] = useState(null);
    const [contractMatrix4, setContractMatrix4] = useState(null);
    const [contractMatrix5, setContractMatrix5] = useState(null);
    const [contractMatrix6, setContractMatrix6] = useState(null);
    const [contractMatrix7, setContractMatrix7] = useState(null);
    const [contractMatrix8, setContractMatrix8] = useState(null);
    const [contractMatrix9, setContractMatrix9] = useState(null);
    const [contractMatrix10, setContractMatrix10] = useState(null);
    const [contractMatrix11, setContractMatrix11] = useState(null);
    const [contractMatrix12, setContractMatrix12] = useState(null);

    const [busdToken, setContractBusd] = useState(null);

  


    

const accountChangedHandler = (newAccount) => {
  setDefaultAccount(newAccount);
  updateEthers()
  sessionStorage.setItem("wallet", defaultAccount)
}


const connectWalletHandler = () => {
  if (window.ethereum && window.ethereum.isMetaMask) {

      window.ethereum.request({ method: 'eth_requestAccounts'})
      .then(result => {
        accountChangedHandler(result[0]);
        setConnButtonText(result[0].slice(0,4)+"..."+result[0].slice(38,42))


      })
      .catch(error => {
          setErrorMessage(error.message);
      
      });

  } else {
      console.log('Need to install MetaMask');
      setErrorMessage('Please install MetaMask browser extension to interact');
  }
}



const updateEthers = async () => {
  let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  setProvider(tempProvider);


    let tempSigner = tempProvider.getSigner();
		setSigner(tempSigner);
    
    let tempMatrixCore = new ethers.Contract(CoreMatrix, abiMatrixCore, tempSigner);
		setContractCore(tempMatrixCore);	

    
        let buscContyrac = new ethers.Contract(busd, busdAbi, tempSigner);
		setContractBusd(buscContyrac);

     

        let tempMatrix1 = new ethers.Contract(matrix, matrix1, tempSigner);
        setContractMatrix1(tempMatrix1); 

        let tempMatrix2 = new ethers.Contract(matrixLv2, matrix2, tempSigner);
		setContractMatrix2(tempMatrix2);  

        let tempMatrix3 = new ethers.Contract(matrixLv3, matrix3, tempSigner);
		setContractMatrix3(tempMatrix3);   

        let tempMatrix4 = new ethers.Contract(matrixLv4, matrix4, tempSigner);
		setContractMatrix4(tempMatrix4);  

        let tempMatrix5 = new ethers.Contract(matrixLv5, matrix5, tempSigner);
		setContractMatrix5(tempMatrix5);  

        let tempMatrix6 = new ethers.Contract(matrixLv6, matrix6, tempSigner);
		setContractMatrix6(tempMatrix6);   

        let tempMatrix7 = new ethers.Contract(matrixLv7, matrix7, tempSigner);
		setContractMatrix7(tempMatrix7);  

        let tempMatrix8 = new ethers.Contract(matrixLv8, matrix8, tempSigner);
		setContractMatrix8(tempMatrix8);   

        let tempMatrix9 = new ethers.Contract(matrixLv9, matrix9, tempSigner);
		setContractMatrix9(tempMatrix9); 

        let tempMatrix10 = new ethers.Contract(matrixLv10, matrix10, tempSigner);
		setContractMatrix10(tempMatrix10);  

        let tempMatrix11 = new ethers.Contract(matrixLv11, matrix11, tempSigner);
		setContractMatrix11(tempMatrix11); 

        let tempMatrix12 = new ethers.Contract(matrixLv12, matrix12, tempSigner);
		setContractMatrix12(tempMatrix12);   


 
}



const buyNft = async (address, lvl) =>{
    try {
      const buy = await contractCore.buyNft(defaultAccount, 10)
      console.log(buy)
    } catch (error) {
      console.log(error)
    }
}

const approve = async () =>{
  try {
    const balance = await busdToken.totalSupply()
    await busdToken.approve(CoreMatrix, balance)
  } catch (error) {
    console.log(error)
  }
}

const matrixData = async () =>{
  try {
   const data = await contractMatrix1.getMatrix()
   console.log(data.toString())
  } catch (error) {
    console.log(error)
  }
}

matrixData()



  return (
    
    <Router>
     
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="container-fluid p-0">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <Index  connectWalletHandler={connectWalletHandler}
      connButtonText={connButtonText} 
      buyNft={buyNft}
      approve={approve}
      
      />
    
      <Routes>
        
        <Route path="/" exact element={<Statistics  />} />
        <Route
          path="/dashboard"
          exact
          element={<Dashboard />}
        />
        <Route
          path="/deposits"
          exact
          element={<Deposits  />}
        />
        <Route
          path="/withdrawn"
          exact
          element={<Withdrawn  />}
        />
        <Route
          path="/matrix"
          exact
          element={<Matrix   />}
        />
        <Route
          path="/giftnftt"
          exact
          element={<GiftNft  />}
        />
        <Route
          path="/help"
          exact
          element={<Help  />}
        />
        <Route
          path="/stake"
          exact
          element={<Stake  />}
        />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
