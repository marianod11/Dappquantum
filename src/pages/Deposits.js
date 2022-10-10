function Deposits() {
    return (
      <div >
         <div id="content" class="container">
            <div class="layout-px-spacing">

                <div class="row layout-top-spacing"> 
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">

                        <div class="widget widget-account-invoice-three">

                            <div class="widget-heading">
                                <div class="wallet-usr-info">
                                    <div class="usr-name">
                                        <span style={{"fontSize": "17px", "margin": "5px"}}>0x12345678910111213141516</span>
                                    </div>
                                    
                                </div>
                                <div class="wallet-balance">
                                    <p class="balanceWallet" style={{"fontSize": "2.5rem"}}>Wallet <br></br> Balance</p>
                                    <h1 class="balance"><span class="w-currency" style={{"fontSize": "3.5rem"}}>$</span>2953</h1>
                                </div>
                            </div>
                            <div class="widget-content">
                                <div class="bills-stats">
                                    <span><h4>My Account</h4></span>
                                </div>

                                <div class="invoice-list">

                                    <div class="inv-detail">
                                        <div class="info-detail-1">
                                            <p style={{"fontSize": "20px"}}>Total Deposited</p>
                                            <p><span class="w-currency" style={{"fontSize": "20px"}}>$</span> <span class="bill-amount" style={{"fontSize": "37px"}}>2000</span></p>
                                        </div>
                                        <div class="info-detail-2" style={{"marginTop": "30px"}}>
                                            <p style={{"fontSize": "20px"}}>Amount</p>
                                           
                                            <ul class="navbar-item flex-row ml-md-auto" style={{"display": "flex"}}>
                                                <p style={{"fontSize": "20px"}}>$ <input class="inputDeposit" pattern="[0-9]+"/></p>
                                                <button class="botonDeposit">Stake!</button>

                                
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div class="widget widget-table-two">

                            <div class="widget-heading">
                                <h5 class="">Recent Orders</h5>
                            </div>

                            <div class="widget-content">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th><div class="th-content">Amount</div></th>
                                                <th><div class="th-content">Start Day</div></th>
                                                <th><div class="th-content">Time</div></th>
                                                <th><div class="th-content th-heading">Status</div></th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-success">Completed</span></div></td>
                                            </tr>
                                            
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-danger">Pending</span></div></td>
                                            </tr>
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-success">Completed</span></div></td>
                                            </tr>                                            
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-danger">Pending</span></div></td>
                                            </tr>
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-danger">Pending</span></div></td>
                                            </tr>
                                            <tr>
                                                
                                                <td><div class="td-content product-brand text-primary">$2000</div></td>
                                                <td><div class="td-content product-invoice">07/16/2022</div></td>
                                                <td><div class="td-content pricing"><span class="">03:45</span></div></td>
                                                <td><div class="td-content"><span class="badge badge-success">Copmleted</span></div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
            <div class="footer-wrapper">
                <div class="footer-section f-section-1">
                    <p class="">Copyright © 2021 <a target="_blank" href="">Quantum</a>, All rights reserved.</p>
                </div>
                
            </div>
        </div>
        </div>
    );
  }
  
  export default Deposits;