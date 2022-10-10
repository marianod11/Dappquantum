import LogoQua from "../img/quantum.png"
import "../components/nav.css"
import {Link} from"react-router-dom"
import {useState} from "react"
import Sidebar from "./Sidebar"


function Nav({connectWalletHandler, connButtonText, buyNft , approve}) {
  




    const [sidebar , setSidebar] = useState(false)
    const showSidebar = () => setSidebar(sidebar)

    return (
      <div >
        
    <div id="load_screen"> <div className="loader"> <div className="loader-content">
        <div className="spinner-grow align-self-center"></div>
    </div></div></div>
   
    
    <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">
            <ul className="navbar-item theme-brand flex-row  text-center">
                <li className="nav-item theme-logo">
                    <Link to ="/">
                        <img src={LogoQua} className="navbar-logo" alt="logo" style={{"width": "120px", "height": "40px"}}/>
                    </Link>
                </li>
            </ul>
        </header>
    </div>
        
    <div class="sub-header-container">
            <header class="header navbar navbar-expand-sm">
            <button onClick={showSidebar} class="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button>
            {sidebar && <Sidebar active={setSidebar} />}

            <button onClick={connectWalletHandler} >{connButtonText}</button>

            <button onClick={approve} >approveeee</button>
            <button onClick={buyNft} >buyyy</button>
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span style={{"font-size": "20px"}}>Statistics</span></li>
                            </ol>
                        </nav>

                    </div>
                </li>
            </ul>
        </header>
    </div>
      </div>
    );
  }
  
  export default Nav;