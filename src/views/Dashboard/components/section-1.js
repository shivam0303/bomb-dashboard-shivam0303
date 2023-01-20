import React, { useState, useMemo } from "react";
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import ProgressCountdown from './ProgressCountdown';
import moment from 'moment';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import useCashPriceInEstimatedTWAP from '../../../hooks/useCashPriceInEstimatedTWAP';
import CountUp from 'react-countup';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useBombStats from '../../../hooks/useBombStats';
import { roundAndFormatNumber } from '../../../0x';
import usebShareStats from '../../../hooks/usebShareStats';
import useBondStats from '../../../hooks/useBondStats';
import BombImage from '../../../assets/img/bomb.png';
import BbondImage from '../../../assets/img/bbond.png';
import BshareImage from '../../../assets/img/bshare-200x200.png';
import FoxImage from '../../../assets/img/metamask-fox.svg';
import useBombFinance from '../../../hooks/useBombFinance';


const Section1 = () => {

  const [hover, setHover] = useState(false);

  const bombFinance = useBombFinance();
  const tBondStats = useBondStats();
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const cashStat = useCashPriceInEstimatedTWAP();
  const scalingFactor = useMemo(() => (cashStat ? Number(cashStat.priceInDollars).toFixed(4) : null), [cashStat]);
  const currentEpoch = useCurrentEpoch();
  const { to } = useTreasuryAllocationTimes();
  const TVL = useTotalValueLocked();
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);

  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  return (
    <>
      <div className="section1">
        <div className="section1-header">
          Bomb Finance Summary
        </div>
        <hr />
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
                  <td>
                    <img src={BombImage} alt="Bomb.money" style={{ maxHeight: '24px' }} />
                    $BOMB
                  </td>
                  <td>{roundAndFormatNumber(bombCirculatingSupply, 2)}</td>
                  <td>{roundAndFormatNumber(bombTotalSupply, 2)}</td>
                  <td>
                    <div>${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}</div>
                    <div>{bombPriceInBNB ? " " + bombPriceInBNB : '-.----'} BNB</div>
                  </td>
                  <td>
                    <img style={{ cursor: hover ? "pointer" : "default", maxHeight: '24px' }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)} onClick={() => {
                        bombFinance.watchAssetInMetamask('BOMB');
                      }} src={FoxImage} alt="Bomb.money" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={BshareImage} alt="Bomb.money" style={{ maxHeight: '24px' }} />
                    $BSHARE
                  </td>
                  <td>{roundAndFormatNumber(bShareCirculatingSupply, 2)}</td>
                  <td>{roundAndFormatNumber(bShareTotalSupply, 2)}</td>
                  <td>
                    <div>${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}</div>
                    <div> {bSharePriceInBNB ? " " + bSharePriceInBNB : '-.----'} BNB</div>
                  </td>
                  <td>
                    <img style={{ cursor: hover ? "pointer" : "default", maxHeight: '24px' }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)} onClick={() => {
                        bombFinance.watchAssetInMetamask('BSHARE');
                      }} src={FoxImage} alt="Bomb.money" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={BbondImage} alt="Bomb.money" style={{ maxHeight: '24px' }} />
                    $BBOND
                  </td>
                  <td>{roundAndFormatNumber(tBondCirculatingSupply, 2)}</td>
                  <td>{roundAndFormatNumber(tBondTotalSupply, 2)}</td>
                  <td>
                    <div>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}</div>
                    <div>{tBondPriceInBNB ? " " + tBondPriceInBNB : '-.----'} BTC</div>
                    </td>
                  <td>
                    <img style={{ cursor: hover ? "pointer" : "default", maxHeight: '24px' }}
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)} onClick={() => {
                        bombFinance.watchAssetInMetamask('BBOND');
                      }} src={FoxImage} alt="Bomb.money" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="section1-info-right">
            <div style={{ height: "30%" }}>
              <div className="big-text">
                Current Epochs
              </div>
              <div className="big-big-text">
                {Number(currentEpoch)}
              </div>
              <hr />
            </div>
            <div style={{ height: "35%" }}>
              <div className="big-big-text">
                <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" />
              </div >
              <div className="big-text">Next epoch in</div>

            </div>
            <hr />
            <div className="mid-text" style={{ height: "30%" }}>
              <div style={{ padding: "5px" }}>Live TWAP : {scalingFactor}</div>
              <div>TVL :
                <CountUp style={{ fontSize: '14px' }} end={TVL} separator="," prefix="$" />
              </div>
              <div style={{ padding: "5px" }}>Last Epoch TWAP : {scalingFactor}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;