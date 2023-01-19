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

const Section2 = () => {
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

  return (
    <>
      <div className="section-2 body-margin">

        <div className="section-2-left">

          <div className="section-2-heading"> &gt; Read Investment Strategy</div>
          <div className="section-2-invest">Invest Now</div>
          <div style={{ display: "flex" }}>
            <div className="section-2-discord ">
              <img src={DiscordImage} alt="Discord" style={{ maxHeight: '24px' }} />
              Chat on Discord
            </div>
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

            <div style={{ display: "flex", margin: "2rem" }}>
              <div className="section-2-boardroom-data-4">
                <div>Daily Returns</div>
                <div>
                  {boardroomAPR.toFixed(2)}%
                </div>
              </div>



              <div className="section-2-boardroom-data-4">
                <div>Your Stake:</div>
                <div>
                  {getDisplayBalance(stakedBalance)}
                </div>
                <div>= $

                  {tokenPriceInDollars_}
                </div>
              </div>
              <div className="section-2-boardroom-data-4">
                <div>Earned:</div>
                <div>
                  {getDisplayBalance(earnings)}
                </div>
                <div>= $
                  {earnedInDollars}
                </div>
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