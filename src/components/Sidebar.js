import img1 from "../img/item1.png"
import img2 from "../img/item2.png"
import img3 from "../img/item3.png"
import img4 from "../img/item4.png"
import img5 from "../img/item5.png"
import img6 from "../img/item6.png"
import "../components/sidebar.css"
import "../components/nav.css"
import {Link} from"react-router-dom"



function Sidebar({active}) {

  

  return (
    <div >
         
        <div class="overlay"></div>
        <div class="search-overlay"></div>
        <div class="sidebar-wrapper sidebar-theme">
            <nav id="sidebar">
                <div class="shadow-bottom"></div>
                <ul class="list-unstyled menu-categories" id="accordionExample">
                    <li class="menu">
                        <Link to="/" data-active="true" aria-expanded="true" class="dropdown-toggle">
                            <div class="">
                                <img src={img1} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Statistics</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/dashboard" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img2} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/deposits" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img3} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Deposits</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/withdrawn"  aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img3} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Withdraws</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/matrix" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img4} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Matrix</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/giftnftt" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img5} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Gift NFT</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/help" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img6} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Help</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link to="/stake" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img5} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Stake</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link href="my-Account.html" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src="" alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>My Account</span>
                            </div>
                        </Link>
                    </li>
                    <li class="menu">
                        <Link href="calculator.html" aria-expanded="false" class="dropdown-toggle">
                            <div class="">
                                <img src={img6} alt="Image" style={{"max-width": "17px", "margintop": "-2px", "marginRight": "5px", "opacity": "70%"}}/>
                                <span style={{"fontSize": "20px"}}>Calculator</span>
                            </div>
                        </Link>
                    </li>                    
                </ul>
            </nav>
        </div>


    </div>
  );
}

export default Sidebar;