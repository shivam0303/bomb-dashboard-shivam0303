import React from "react";
import { getDisplayBalance } from '../../../utils/formatBalance';
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useBondStats from '../../../hooks/useBondStats';
import BbondImage from '../../../assets/img/bbond.png';
// import useModal from '../../../../hooks/useModal';
// import ExchangeModal from './ExchangeModal';

const Section4 = () => {
    const bondStat = useBondStats();
    const bondsPurchasable = useBondsPurchasable();

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
                            <div className="section-4-info-3-purchase">Purchase</div>
                        </div>
                        <hr />
                        <div className="section-4-info-3">
                            {/* onClick={onPresent} */}
                            <div >Redeem Bomb</div>
                            <div className="section-4-info-3-redeem">Redeem</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Section4;