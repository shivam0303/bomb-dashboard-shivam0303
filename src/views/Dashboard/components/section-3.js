import React,{useEffect} from "react";
import useStatsForPool from '../../../hooks/useStatsForPool';
import useBank from '../../../hooks/useBank';
import {Typography} from '@material-ui/core';

const Section3 = () =>{
  useEffect(() => window.scrollTo(0, 0));
  const bankId = "BombBtcbLPBShareRewardPool"; 
  const bank = useBank(bankId);
  let statsOnPool = useStatsForPool(bank);

  const bankId_ = "BshareBnbLPBShareRewardPool"; 
  const bank_ = useBank(bankId_);
  let statsOnPool_ = useStatsForPool(bank_);

    return (
        <>
        {console.log(statsOnPool)}
        <div className='section-3 body-margin'>
          <div style={{display:"flex"}}>
            <div className="section-2-boardroom-header">
              <div className="section-2-boardroom-data-1">
                Bomb Farms
              </div>
              <div className="section-2-boardroom-data-2">
                Stake your LP tokens in our farms to start $BSHARE
              </div>
            </div>
            <div className="Bomb-Farms-claim">
              Claim All
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div className="section-3-info-head-left">BOMB-BTCB</div>
            {/* recommended */}
            <div className="section-3-info-head-right">TVL:$ {statsOnPool?.TVL}</div>
          </div>
          <hr />

          <div style={{display:"flex"}}>
            <div className="bomb-farms-t1">
              <span>
                <div>Daily Returns</div>
                <div>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>  
                </div>
              </span>
              <span>
                <div>Your Stake</div>
                <div>124.21</div>
                <div>=$1171.62</div>
              </span>
              <span>
                <div>Earned</div>
                <div>124.21</div>
                <div>=$1171.62</div>
              </span>
            </div>
            <div className="section-3-div">
              <div className='section-3-div-btn'>Deposit</div>
              <div className='section-3-div-btn'>Withdraw</div>
              <div className='section-3-div-btn'>Claim Reward</div>
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div className="section-3-info-head-left">BSHARE-BNB</div>
            {/* recommended */}
            <div className="section-3-info-head-right">TVL:$ {statsOnPool_?.TVL}</div>
          </div>
          <hr />

          <div style={{display:"flex"}}>
            <div className="bomb-farms-t1">
              <span>
                <div>Daily Returns</div>
                <div>
                <Typography>{bank_.closedForStaking ? '0.00' : statsOnPool_?.dailyAPR}%</Typography> 
                </div>
              </span>
              <span>
                <div>Your Stake</div>
                <div>124.21</div>
                <div>=$1171.62</div>
              </span>
              <span>
                <div>Earned</div>
                <div>124.21</div>
                <div>=$1171.62</div>
              </span>
            </div>
            <div className="section-3-div">
              <div className='section-3-div-btn'>Deposit</div>
              <div className='section-3-div-btn'>Withdraw</div>
              <div className='section-3-div-btn'>Claim Reward</div>
            </div>
          </div>
          
        </div>

        </>
    )
}


export default Section3;