import React, { useMemo } from "react";
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useBombStats from '../../../hooks/useBombStats';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from '../../../hooks/useBombFinance';
import DiscordImage from '../../../assets/img/discord.png';
import DocsImage from '../../../assets/img/docs2.png';
import BshareImage from '../../../assets/img/bshares.png';
import BombImage from '../../../assets/img/bomb.png';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';

import { Button } from '@material-ui/core';
import useRedeemOnBoardroom from '../../../hooks/useRedeemOnBoardroom';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';

import WithdrawModal from './WithdrawModal';
import DepositModal from './DepositModal';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import useModal from '../../../hooks/useModal';
import { AddIcon, RemoveIcon } from '../../../components/icons';
import IconButton from '../../../components/IconButton';
import useTokenBalance from '../../../hooks/useTokenBalance';
import styled from 'styled-components';

const Section2 = () => {
  const TVL = useTotalValueLocked();
  const bombFinance = useBombFinance();
  const bombStats = useBombStats();
  const earnings = useEarningsOnBoardroom();
  const boardroomAPR = useFetchBoardroomAPR();
  const totalStaked = useTotalStakedOnBoardroom();
  const tokenPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

  const stakedBalance = useStakedBalanceOnBoardroom();


  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
  const tokenPriceInDollars_ = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  );

  const tokenBalance = useTokenBalance(bombFinance.BSHARE);
  const { onReward } = useHarvestFromBoardroom();
  const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
  const { onRedeem } = useRedeemOnBoardroom();

  const canClaimReward = useClaimRewardCheck();
  const canWithdraw = useWithdrawCheck();

  const { onStake } = useStakeToBoardroom();
  const { onWithdraw } = useWithdrawFromBoardroom();
  const canWithdrawFromBoardroom = useWithdrawCheck();

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BShare'}
    />,
  );

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'BShare'}
    />,
  );


  return (
    <>
      <div className="section-2">

        <div className="section-2-left">

          <div className="section-2-heading">
            <a href="https://docs.bomb.money/strategies/general-quick-roi-strategy">
              &gt; Read Investment Strategy
            </a>
          </div>
          <div className="section-2-invest">Invest Now</div>
          <div style={{ display: "flex" }}>
            <div className="section-2-discord section-2-dis-doc">
              <img src={DiscordImage} alt="Discord" style={{ maxHeight: '24px' }} />
              Chat on Discord
            </div>
            <div className="section-2-docs section-2-dis-doc">
              <img src={DocsImage} alt="Docs" style={{ maxHeight: '24px' }} />
              Read Docs</div>
          </div>

          <div className="section-2-boardroom ">


            <div className="section-x-header" style={{ display: 'flex' }}>
              <img src={BshareImage} alt="icon" style={{ maxHeight: '48px' }} />

              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex' }}>
                  <div className='section-x-data-1'>
                    Boardroom
                  </div>
                </div>

                {/* add recommended */}

                <div className='section-x-data'>
                  <div className='section-x-data-2'>Stake BSHARE and earn BOMB every epoch</div>

                  <div className='section-x-data-3'>TVL:
                    <CountUp style={{ fontSize: '18px' }} end={TVL} separator="," prefix="$" />
                  </div>
                </div>
              </div>
            </div>
            <hr />


            <div style={{ display: "flex", margin: "2rem" }}>
              <div className="section-x-data-4">
                <div>Daily Returns</div>
                <div>
                  {Math.round(boardroomAPR.toFixed(2) / 360)}%
                </div>
              </div>



              <div className="section-x-data-4">
                <div>Your Stake:</div>
                <div>
                  <img src={BshareImage} alt="icon" style={{ maxHeight: '16px' }} />
                  {getDisplayBalance(stakedBalance)}
                </div>
                <div>= $

                  {tokenPriceInDollars_}
                </div>
              </div>
              <div className="section-x-data-4">
                <div>Earned:</div>
                <div>
                  <img src={BombImage} alt="Bomb.money" style={{ maxHeight: '16px' }} />
                  {getDisplayBalance(earnings)}
                </div>
                <div>= $
                  {earnedInDollars}
                </div>
              </div>
              <div className="section-2-staked ">
                <div className="section-2-staked-heading">
                  total staked :
                  <img src={BshareImage} alt="icon" style={{ maxHeight: '16px' }} />
                  {Math.round(getDisplayBalance(totalStaked))}
                </div>
                <div className='section-2-span-container'>
                  {/* <div onClick={approve} className='section-2-deposit hover-pointer'>deposit</div> */}
                  {/* <div onClick={onRedeem} className='section-2-deposit hover-pointer'>Withdraw</div> */}

                  <div style={{width:"53%"}}>
                    {approveStatus !== ApprovalState.APPROVED ? (
                      <Button style={{ width: "fit-content", height: "fit-content" }}
                        disabled={approveStatus !== ApprovalState.NOT_APPROVED}
                        className={approveStatus === ApprovalState.NOT_APPROVED ? 'shinyButton' : 'shinyButtonDisabled'}

                        onClick={approve}
                      >
                        Deposit
                      </Button>
                    ) : (
                      <>
                        <IconButton disabled={!canWithdrawFromBoardroom} onClick={onPresentWithdraw}>
                          <RemoveIcon color={!canWithdrawFromBoardroom ? '' : 'yellow'} />
                        </IconButton>
                        <StyledActionSpacer />
                        <IconButton onClick={onPresentDeposit}>
                          <AddIcon color={!canWithdrawFromBoardroom ? '' : 'yellow'} />
                        </IconButton>
                      </>
                    )}
                  </div>

                  <div>
                    <Button style={{ width: "fit-content", height: "fit-content" }}
                      disabled={stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)}
                      onClick={onRedeem}
                      className={
                        stakedBalance.eq(0) || (!canWithdraw && !canClaimReward)
                          ? 'shinyButtonDisabledSecondary'
                          : 'shinyButtonSecondary'
                      }
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
                      <div style={{marginTop:"16px", width:"100%"}}>
                      <Button style={{ width: "80%"}}
                  onClick={onReward}
                  className={earnings.eq(0) || !canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
                  disabled={earnings.eq(0) || !canClaimReward}
                >
                  Claim Reward
                </Button>
                      </div>
                

                {/* <div onClick={onReward} className='section-2-claimrewards hover-pointer'>
                  Claim Rewards
                </div> */}
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

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

export default Section2;