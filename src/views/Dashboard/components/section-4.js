import React from "react";

function section4() {
    return (
        <>
            <div className='section-4 body-margin'>
                <div className='section-4-header'>
                    <div className='section-2-boardroom-data-1'>
                        Bonds
                    </div>
                    <div className='section-4-data-2'>
                        BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
                    </div>
                </div>


                <div style={{display:"flex"}}>
                    <div className="section-4-grid-1 ">
                        <div className='section-4-grid-1-top'>
                            Current Price : Bomb^2
                        </div>
                        <div className='section-4-grid-1-bottom'>
                            BBOND = 6.2872 BTCB
                        </div>
                    </div>
                    <div className="section-4-grid-2">
                        <div>Available to redeem</div>
                        <div className="section-4-token-amount">456</div>
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
                            <div>Redeem Bomb</div>
                            <div className="section-4-info-3-redeem">Redeem</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default section4;