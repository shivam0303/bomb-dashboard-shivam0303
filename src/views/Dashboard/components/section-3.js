import React, { useEffect, useMemo } from "react";
import useStatsForPool from '../../../hooks/useStatsForPool';
import useBank from '../../../hooks/useBank';
import useEarnings from '../../../hooks/useEarnings';
import { Typography } from '@material-ui/core';
import { getDisplayBalance } from '../../../utils/formatBalance';
import Bombbtc from '../../../assets/img/bomb-btc-lp-512.png';
import Bsharebnb from '../../../assets/img/bshare-bnb-lp-512.png';
import BshareImage from '../../../assets/img/bshare-200x200.png';
import useShareStats from '../../../hooks/usebShareStats';
import useStakedBalance from '../../../hooks/useStakedBalance';

import useHarvest from '../../../hooks/useHarvest';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import {Button} from '@material-ui/core';
import useRedeem from '../../../hooks/useRedeem';

const Section3 = () => {
  const bankId = "BombBtcbLPBShareRewardPool";
  const bank = useBank(bankId);
  let statsOnPool = useStatsForPool(bank);

  const bankId_ = "BshareBnbLPBShareRewardPool";
  const bank_ = useBank(bankId_);
  let statsOnPool_ = useStatsForPool(bank_);

  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const tShareStats = useShareStats();
  const tokenStats = tShareStats;
  const tokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const earnedInDollars_ = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(2);

  const earnings2 = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const tShareStats2 = useShareStats();
  const tokenStats2 = tShareStats2;
  const tokenPriceInDollars2 = useMemo(
    () => (tokenStats2 ? Number(tokenStats2.priceInDollars).toFixed(2) : null),
    [tokenStats2],
  );
  const earnedInDollars2 = (Number(tokenPriceInDollars2) * Number(getDisplayBalance(earnings2))).toFixed(2);
  const stakedBalance2 = useStakedBalance(bank_.contract, bank_.poolId);
  const earnedInDollars_2 = (
    Number(tokenPriceInDollars2) * Number(getDisplayBalance(stakedBalance2, bank_.depositToken.decimal))
  ).toFixed(2);

  const {onReward} = useHarvest(bank);
  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);
  const { onRedeem } = useRedeem(bank);

  const {onReward_} = useHarvest(bank);
  const [approveStatus_, approve_] = useApprove(bank.depositToken, bank.address);
  const { onRedeem_ } = useRedeem(bank);

  return (
    
    <>
      {/* {console.log(statsOnPool)} */}
      <div className='section-3'>
        <div style={{ display: "flex" }}>
          <div className="section-x-header">

            <div className="section-x-data-1">
              Bomb Farms
            </div>
            <div className="section-x-data-2">
              Stake your LP tokens in our farms to start $BSHARE
            </div>
          </div>

          <div className="Bomb-Farms-claim">
            Claim All
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src={Bombbtc} alt="icon" style={{ maxHeight: '48px' }} />
          <div className="section-3-info-head-left">BOMB-BTCB</div>
          {/* recommended */}
          <div className="section-3-info-head-right">TVL:${statsOnPool?.TVL}</div>
        </div>
        <hr />

        <div style={{ display: "flex" }}>
          <div className="bomb-farms-t1">
            <span>
              <div>Daily Returns</div>
              <div style={{textAlign:"left"}}>
                <Typography variant="h5">{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </div>
            </span>
            <span>
              <div>Your Stake</div>
              <div>
              <img src={Bombbtc} alt="icon" style={{ maxHeight: '16px' }} />
                {getDisplayBalance(stakedBalance, bank.depositToken.decimal)}
              </div>
              <div>
                {`≈ $${earnedInDollars_}`}
              </div>
            </span>
            <span>
              <div>Earned</div>
              <div>
              <img src={BshareImage} alt="Bomb.money" style={{ maxHeight: '16px' }} />
                {getDisplayBalance(earnings)}
              </div>
              <div>
                {`≈ $${earnedInDollars}`}
              </div>
            </span>
          </div>
          <div className="section-3-div">
            
            <Button style={{width:"fit-content", height:"fit-content"}}
                disabled={
                  bank.closedForStaking ||
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                }
                onClick={approve}
                className={
                  bank.closedForStaking ||
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                    ? 'shinyButtonDisabled'
                    : 'shinyButton'
                }
              >
                Deposit
              </Button>
           
            <Button style={{width:"fit-content", height:"fit-content"}} 
            className="shinyButtonDisabled" 
            onClick={onRedeem}>
              Withdraw
            </Button>
            
            <Button style={{width:"fit-content", height:"fit-content"}}
              onClick={onReward}
              disabled={earnings.eq(0)}
              className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Claim
            </Button>
            
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <img src={Bsharebnb} alt="icon" style={{ maxHeight: '48px' }} />
          <div className="section-3-info-head-left">BSHARE-BNB</div>
          {/* recommended */}
          <div className="section-3-info-head-right">TVL:${statsOnPool_?.TVL}</div>
        </div>
        <hr />

        <div style={{ display: "flex" }}>
          <div className="bomb-farms-t1">
            <span>
              <div>Daily Returns</div>
              <div style={{textAlign:"left"}}>
                <Typography variant="h5">{bank_.closedForStaking ? '0.00' : statsOnPool_?.dailyAPR}%</Typography>
              </div>
            </span>
            <span>
              <div>
                Your Stake
              </div>
              <div>
              <img src={Bsharebnb} alt="icon" style={{ maxHeight: '16px' }} />
                {getDisplayBalance(stakedBalance, bank_.depositToken.decimal)}
              </div>
              <div>
                {`≈ $${earnedInDollars_2}`}
              </div>
            </span>
            <span>
              <div>Earned</div>
              <div>
              <img src={BshareImage} alt="Bomb.money" style={{ maxHeight: '16px' }} />
                {getDisplayBalance(earnings2)}
              </div>
              <div>
                {`≈ $${earnedInDollars2}`}
              </div>
            </span>
          </div>
          <div className="section-3-div">
          <Button style={{width:"fit-content", height:"fit-content"}}
                disabled={
                  bank_.closedForStaking ||
                  approveStatus_ === ApprovalState.PENDING ||
                  approveStatus_ === ApprovalState.UNKNOWN
                }
                onClick={approve_}
                className={
                  bank_.closedForStaking ||
                  approveStatus_ === ApprovalState.PENDING ||
                  approveStatus_ === ApprovalState.UNKNOWN
                    ? 'shinyButtonDisabled'
                    : 'shinyButton'
                }
              >
                Deposit
              </Button>
           
            <Button style={{width:"fit-content", height:"fit-content"}} className="shinyButtonDisabled" 
            onClick={onRedeem_}>
              Withdraw
            </Button>
            
            <Button style={{width:"fit-content", height:"fit-content"}}
              onClick={onReward_}
              disabled={earnings.eq(0)}
              className={earnings.eq(0) ? 'shinyButtonDisabled' : 'shinyButton'}
            >
              Claim
            </Button>
          </div>
        </div>

      </div>

    </>
  )
}
export default Section3;