import './Banner.css';
function Banner(){
    return(
        <div className="banner">
            <div className='row'>
                <div className='col '>
                    <p>MARKET CAP</p>
                    <p className='value'>$1.78T</p>
                </div>
                <div className='col '>
                    <p>EXCHANGE VOL</p>
                    <p className='value'>$69.40B</p>
                 </div>
                 <div className='col '>
                    <p>ASSETS</p>
                    <p className='value'>2,295</p>
                 </div>
                 <div className='col '>
                    <p>EXCHANGES</p>
                    <p className='value'>73</p>
                 </div>
                 <div className='col '>
                    <p>MARKETS</p>
                    <p className='value'>15,783</p>
                 </div>
                 <div className='col '>
                    <p>BTC DOM INDEX</p>
                    <p className='value'>34.0%</p>
                 </div>
            </div>
        </div>
    )
}

export default Banner;


// MARKET CAP
// $1.78T
// EXCHANGE VOL
// $69.40B
// ASSETS
// 2,295
// EXCHANGES
// 73
// MARKETS
// 15,783
// BTC DOM INDEX
// 34.0%