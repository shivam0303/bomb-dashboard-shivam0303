import React,{useCallback,useMemo} from "react";
import { getDisplayBalance } from '../../../utils/formatBalance';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useBondStats from '../../../hooks/useBondStats';
import BbondImage from '../../../assets/img/bbond.png';
import {Button} from '@material-ui/core';
import useBombFinance from '../../../hooks/useBombFinance';
import {useTransactionAdder} from '../../../state/transactions/hooks';
import useModal from '../../../hooks/useModal';
import ExchangeModal from './ExchangeModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
// import useModal from '../../../../hooks/useModal';
// import ExchangeModal from './ExchangeModal';

const Section4 = () => {
    const bondStat = useBondStats(); 
    const bombFinance = useBombFinance();
    const bondsPurchasable = useBondsPurchasable();
    const balance = useTokenBalance(bombFinance.BOMB);
    const balance_ = useTokenBalance(bombFinance.BBOND);
   
    const addTransaction = useTransactionAdder();
    const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
    const handleBuyBonds = useCallback(
        async (amount) => {
          const tx = await bombFinance.buyBonds(amount);
          addTransaction(tx, {
            summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
          });
        },
        [bombFinance, addTransaction],
      );

      const [onPresent, onDismiss] = useModal(
        <ExchangeModal
          title={"Purchase"}
          description={!isBondPurchasable
            ? 'BOMB is over peg'
            : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'}
          max={balance}
          onConfirm={(value) => {
            handleBuyBonds(value);
            onDismiss();
          }}
          action={"Purchase"}
          tokenName={"BOMB"}
        />,
      );

      const handleRedeemBonds = useCallback(
        async (amount) => {
          const tx = await bombFinance.redeemBonds(amount);
          addTransaction(tx, {summary: `Redeem ${amount} BBOND`});
        },
        [bombFinance, addTransaction],
      );
      const bondBalance = useTokenBalance(bombFinance?.BBOND);
      const [onPresent_, onDismiss_] = useModal(
        <ExchangeModal
          title={"Redeem"}
          description={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
          max={balance_}
          onConfirm={(value) => {
            handleRedeemBonds(value); 
            onDismiss_();
          }}
          action={"Redeem"}
          tokenName={"BBOND"}
        />,
      );

    // const [onPresent, onDismiss] = useModal(
    //     <ExchangeModal
    //       title="Purchase"
    //       description={priceDesc}
    //       max={balance}
    //       onConfirm={(value) => {
    //         onExchange(value);
    //         onDismiss();
    //       }}
    //       action={action}
    //       tokenName={fromTokenName}
    //     />,
    //   );

    return (
        
        <>
            <div className='section-4'>
                <div className='section-4-header' style={{ display: "flex" }}>
                    <img src={BbondImage} alt="Bomb.money" style={{ maxHeight: '48px' }} />

                    <div>
                        <div className='section-x-data-1'>
                            Bonds
                        </div>
                        <div className='section-4-data-2'>
                            BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
                        </div>
                    </div>


                </div>


                <div style={{ display: "flex" }}>
                    <div className="section-4-grid-1 ">
                        <div className='section-4-grid-1-top'>
                            Current Price : Bomb^2
                        </div>
                        <div className='section-4-grid-1-bottom'>
                            10,000 BBOND = {Number(bondStat?.tokenInFtm).toFixed(4) || '-'} BTC
                        </div>
                    </div>
                    <div className="section-4-grid-2">
                        <div>Available to redeem</div>
                        <div className="section-4-token-amount">
                            <img src={BbondImage} alt="Bomb.money" style={{ maxHeight: '36px' }} />
                            {getDisplayBalance(bondsPurchasable, 18, 4)}
                        </div>
                    </div>
                    <div className="section-4-info-3-container">
                        <div className='section-4-purchase'>
                            <div>
                                <div>
                                    Purchase BBOND
                                </div>
                                <div>
                                    Bomb is over peg
                                </div>
                            </div>
                            <div className="section-4-info-3-purchase">
                                <Button style={{ width: "fit-content", height: "fit-content" }}
                                    className="shinyButton"
                                    onClick={onPresent}>
                                    Purchase
                                </Button>
                            </div>
                        </div>
                        <hr />
                        <div className="section-4-info-3">
                            {/* onClick={onPresent} */}
                            <div >Redeem Bomb</div>
                            <div className="section-4-info-3-redeem">
                                <Button style={{ width: "fit-content", height: "fit-content" }}
                                    className="shinyButton"
                                    onClick={onPresent_}>
                                    Redeem
                                </Button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Section4;