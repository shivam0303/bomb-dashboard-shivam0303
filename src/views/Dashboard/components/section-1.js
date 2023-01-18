import React from "react";

function section1 (){

    return(
        <>
        <div className="section1 body-margin">
          <div className="section1-header">
            Bomb Finance Summary
          </div>
          <hr/>
          <div className="section1-info">
            <div className='section1-info-left'>
              <table className="section1-table-custom">
                <thead>
                  <tr>
                    <th />
                    <th>Current Supply</th> 
                    
                    <th>Total Supply</th>
                    <th>Price</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                
                  <tr>
                    <td>$BOMB</td>
                    <td>8.66M</td>
                    <td>60.9K</td>
                    <td>$0.24 1.05BTCB</td>
                    <td>img</td>
                  </tr>
                  <tr>
                    <td>$BSHARE</td>
                    <td>11.43K</td>
                    <td>8.49m</td>
                    <td>$0.24 1.05BTCB</td>
                    <td>img</td>
                  </tr>
                  <tr>
                    <td>$BBOND</td>
                    <td>8.66M</td>
                    <td>60.9K</td>
                    <td>$0.24 1.05BTCB</td>
                    <td>img</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="section1-info-right">
                <div style={{height:"30%"}}>
                  <div>
                    Current Epochs
                  </div>
                  <div className="big-text">
                    23
                  </div>
                  <hr/>
                </div>
                <div style={{height:"30%"}}>
                  <div className="big-text">
                    03:38:36
                  </div>
                  Next epoch in
                </div>
                <hr/>
                <div style={{height:"30%"}}>
                  <div style={{padding:"5px"}}>Live TWAP : 1.17</div>
                  <div>TVL : 1.17</div>
                  <div style={{padding:"5px"}}>Last Epoch TWAP : 1.17</div>
                </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default section1;