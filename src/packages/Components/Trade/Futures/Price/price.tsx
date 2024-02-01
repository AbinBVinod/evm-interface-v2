"use client"
import { useEffect , useState } from "react";


interface ApiResponse {
    data: {
        currency: string;
        rates: {
            USD: number;
        };
    };
}

const url = "https://api.coinbase.com/v2/exchange-rates?currency=BTC";

const CoinPriceData: React.FC = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((responseData: ApiResponse) => {
            setData(responseData); 
            // setLoading(false);
        })
        .catch((error) => {
            console.error('Failed to fetch data:', error);
            // setLoading(false);
        });
    };
    fetchData();
    const interval = setInterval(fetchData, 1); 
    return () => clearInterval(interval);
  }, []);
  
  const formatUsdRate = (rate: number | undefined): string => {
    if (rate === undefined) return '0';
    return Math.round(rate).toString(); 
  };

  return (
    <>
      <div>$ {formatUsdRate(data?.data.rates?.USD)}</div>
    </>
  );
};

export default CoinPriceData;