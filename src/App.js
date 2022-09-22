import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
} from "react-router-dom";
import "./App.css";
import { useStateValue } from "./config/StateProvider";
import CryptoChart from "./CryptoChart";
import { apiKey } from "./string";
import StickyHeadTable from "./TableChart";

function App() {
  const [{}, dispatch] = useStateValue();
  const [cryptoData, setCryptoData] = useState([]);

  let url =
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";

  useEffect(() => {
    fetch(url + qString)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("data", result);
          setCryptoData(result.data);
        },

        (error) => {
          console.log("error", error);
        }
      );
  }, []);

  return (
    <div className="app">
      <Router>
        <Switching>
          <Route path="/">
            <CryptoChart />

            {cryptoData?.map((v, i) => (
              <StickyHeadTable key={i} data={v} />
            ))}
          </Route>
        </Switching>
      </Router>
    </div>
  );
}

export default App;
