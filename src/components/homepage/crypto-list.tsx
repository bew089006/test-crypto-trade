import { useEffect, useState } from "react";
import styles from './crypto-list.module.scss';
import CryptoDetail from "./crypto-detail";
import { Link, Route } from "react-router-dom";

const axios: any = require('axios');

interface ICrypto {
  asset_id:     string;  
  name:         string;
  price_usd:    number;
  data_end:     string;
}

interface ICrytoWithIndex extends ICrypto {
  index:  number;
}

async function fetchData() {
  let response = await axios({
    method: 'get',
    url: "https://rest.coinapi.io/v1/assets?filter_asset_id=btc,ada,matic",
    headers: {
      // "X-CoinAPI-Key": process.env.COIN_API_KEY
      "X-CoinAPI-Key": "656CC165-658E-483A-94D7-334967243593",
    },
  })

  return response;
}

const CrytoDetail: React.FC<any> = (props: { data: ICrytoWithIndex }) => {
  const { data } = props;

  return <tr key={data.index}>
    <th>{data.index}</th>
    <th>{data.asset_id}</th>
    <th>{data.name}</th>
    <th>{data.price_usd}</th>
    <th>{data.data_end}</th>
    <th>
      <button 
        className={styles.view} 
        onClick={() => {
          return <Route exact path="/hompage/:asset_id" component={CryptoDetail} />
        }}
      >View</button>
    </th>
  </tr>
}

const CryptoList: React.FC = () => {
  const [cryptoData, setCryptoData] = useState([]);

  const headers: string[] = ['ลำดับที่', "Asset Name", "Name", "lasted Price", "Last Updated DateTime"];

  useEffect(() => {
    fetchData().then((res) => {
      setCryptoData(res.data)
    });
  }, []);

  return <div className={styles.wrapper}>
    
    <table>
      <tr key={"header"}>
        {headers.map(ele => <th>{ele}</th>)}
      </tr>
      {cryptoData.map((ele: ICrypto, index: number) => {
        return <CrytoDetail key={index} data={{ index, ...ele }}/>
      })}
    </table>
  </div>;
} 

export default CryptoList;