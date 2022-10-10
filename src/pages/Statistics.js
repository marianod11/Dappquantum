import "../components/static.css"
import CardStatic from "../components/CardStatic";
import CardStatic2 from "../components/CardStatic2";

function Statistics() {
    return (
      <div >
            <div id="content" class="container">
            <div class="layout-px-spacing">
                <div class="row layout-top-spacing">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="widget widget-one">
                            <div class="widget-heading">
                                <h6 class="" style={{"fontSize": "30px;"}}>Statistics</h6>
                            </div>
                            <div class="w-chart" style={{"marginTop": "40px"}}>
                                <div class="w-chart-section">
                                    <div class="w-detail">
                                        <p class="w-title" style={{"fontSize": "-40px"}}>TVL</p>
                                        <p class="w-stats">423,964</p>
                                    </div>
                                    <div class="w-chart-render-one">
                                        <div id="total-users"></div>
                                    </div>
                                </div>
                                <div class="w-chart-section">
                                    <div class="w-detail">
                                        <p class="w-title" style={{"fontSize": "20px"}}>Apy</p>
                                        <p class="w-stats" >380,4%</p>
                                    </div>
                                    <div class="w-chart-render-one">
                                        <div id="paid-visits"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CardStatic name="Total Balance" deposit="41,7" />
                    <CardStatic name="Your Deposits" deposit="41,7"/>
                    <CardStatic name="Your Withdraws" deposit="41,7"/>
                    <CardStatic2  name="Your NFTS" deposit="10"/>
                    <CardStatic2  name="Enrolled" deposit="12"/>
                    <CardStatic2  name="Team members" deposit="34"/>
                    
                   
            </div>
            <div class="footer-wrapper">
                <div class="footer-section f-section-1">
                    <p class="">Copyright © 2021 <a target="_blank" href="hftxvault.netlify.app">Quantum</a>, All rights reserved.</p>
                </div>
            </div>
        </div>
     
    </div>
      </div>
    );
  }
  
  export default Statistics;