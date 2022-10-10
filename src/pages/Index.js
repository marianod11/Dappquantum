import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Index({connectWalletHandler, connButtonText, buyNft, approve}) {
  return (
    <div className="App">
        <Nav connectWalletHandler={connectWalletHandler}
              connButtonText={connButtonText}
              buyNft={buyNft} 
              approve={approve}/>
        <Sidebar />
    </div>
  );
}

export default Index;