

function CardStatic({name, deposit}){
    return(
      
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <div class="widget widget-account-invoice-two">
                            <div class="widget-content">
                                <div class="account-box">
                                    <div class="info">
                                        <div class="inv-title">
                                            <h2 class="">{name}</h2>
                                        </div>
                                        <div class="inv-balance-info">
                                            <p class="inv-balance" style={{"fontSize": "30px","color": "#ffff"}}>{deposit}</p>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     
    )
}


export default CardStatic