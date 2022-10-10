

function CardStatic2({name, deposit}){
    return(
      
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-card-four" style={{"height": "100%"}}>
            <div class="widget-content">
                <div class="w-header">
                    <div class="w-info">
                        <h6 class="value">{name}</h6>
                    </div>
                </div>
                <div class="w-content">
                    <div class="w-info">
                        <p class="value">{deposit}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
    )
}


export default CardStatic2