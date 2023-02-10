import { Suspense } from "react";
import styles from "./Style";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import TradeStats from "./component/TradeStats";
import Exchange from "./component/Exchange";
import Account from "./component/Account";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <div className="w-[100%] overflow-hidden">
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <div className={`${styles.paddingY} ${styles.paddingX}`}>
              <Hero />
              <TradeStats />
              <Exchange />
              <Account />
              <Footer />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default App;
