"use client"
import "./CoinPriceFutures.css";
import Image from "next/image";
import CoinPriceData from "@/packages/Components/Trade/Futures/Price/price";



const CoinPriceFutures = () => {
  return (
    <>
      <div>
        <div className="Futures-container">
          <div className="Futures-price-data-container">
            <div className="Coin-data-all">
              <div className="coin-logo">
                <Image
                  className="coin-logo-backround"
                  src="/logo/Futures/logoback.svg"
                  alt="btc-logo"
                  width={37}
                  height={37}
                />
                BTC/USD
                <Image
                  className="arrow-img"
                  src="/logo/Futures/arrow.svg"
                  alt="arrow-logo"
                  width={6}
                  height={9}
                />
              </div>
              <div className="border-line"></div>
              <div className="coin-price"><CoinPriceData/></div>
            </div>

            <div className="price-changes">
              <div className="twofourhr">
                24h Change
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                24h High
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                24h Low
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                24h Vol
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                1h Funding
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                Rollover
                <span>-5.01%</span>
              </div>
              <div className="twofourhr">
                Next Funding
                <span>-5.01%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinPriceFutures;
