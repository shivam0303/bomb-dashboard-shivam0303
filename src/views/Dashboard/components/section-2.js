import React from "react";
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';


const Section2 = () =>{

  const boardroomAPR = useFetchBoardroomAPR();
  const totalStaked = useTotalStakedOnBoardroom();

    return(
        <>
        <div className="section-2 body-margin">
          
          <div className="section-2-left">
            
            <div className="section-2-heading"> &gt; Read Investment Strategy</div>
            <div className="section-2-invest">Invest Now</div>
            <div style={{display:"flex"}}>
              <div className="section-2-discord ">Chat on Discord</div>
              <div className="section-2-docs ">Read Docs</div>
            </div>
            
              <div className="section-2-boardroom ">
                <div className="section-2-boardroom-header ">
                  <div className='section-2-boardroom-data-1'>Boardroom</div>

{/* add recommended */}

                  <div className='section-2-boardroom-data'>
                  <div className='section-2-boardroom-data-2'>Stake BSHARE and earn BOMB every epoch</div>
                  
{/* UPDATE TVL  */}
                  <div className='section-2-boardroom-data-3'>TVL:$1,008,430</div>
                  </div>
                  <hr />
                </div>
             
                <div style={{display:"flex", margin:"2rem"}}>
                <div className="section-2-boardroom-data-4">
                  <div>Daily Returns</div>
                  <div>
                  {boardroomAPR.toFixed(2)}%
                  </div>
                </div>
        

{/* ADD STAKED AND EARNED FROM BOARDROOM */}

                <div className="section-2-boardroom-data-4">
                  <div>Your Stake:</div>
                  <div>6.0000</div>
                  <div>= $1171.62</div>
                </div>
                <div className="section-2-boardroom-data-4">
                  <div>Earned:</div>
                  <div>1660.4413</div>
                  <div>= $298.88</div>
                </div>
                <div className="section-2-staked ">
                  <div className="section-2-staked-heading">total staked : {getDisplayBalance(totalStaked)}</div>
                  <div className='section-2-span-container'>
                    <div className='section-2-deposit'>deposit</div>
                    <div className='section-2-deposit'>Withdraw</div>
                  </div>
                  <div className='section-2-claimrewards'>
                    Claim Rewards
                  </div>
                </div>
                </div>
                
              </div>
            </div>
          

          <div className="section-2-right">
            Latest News
          </div>

        </div>

        </>
    );
}

export default Section2;