import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useTranslation } from "react-i18next";
import styles from "../Style";
import { CurrencyBitcoin } from "@mui/icons-material";
import { exchange } from "./constant/Data";
import BalanceIcon from "@mui/icons-material/Balance";
import Dashboard from "./Dashboard";

const Exchange = () => {
  const { t } = useTranslation(["main"]);
  return (
    <>
      <section
        id="exchange"
        className={` bg-gray-900/20 w-full ${styles.marginY}`}
      >
        <div className="rounded-[15px] b-shadow">
          <div className="sm:p-20 p-3">
            <div className="flex justify-between md:flex-row flex-col gap-12">
              <div className="/">
                <h1 className={`${styles.heading2} max-w-[600px]`}>
                  <span className="text-green-500 font-extrabold">
                    {t("generate")}
                  </span>{" "}
                  {t("th1")}
                </h1>
                <p className={`${styles.paragraph}`}>{t("tp1")}</p>
              </div>
              <div className="flex flex-col relative">
                <div className="text-white bg-gradient p-4 px-8 max-w-[-580px] rounded-[15px] flex flex-col items-center justify-center">
                  <div className="flex flex-row gap-[5.5rem]">
                    <h3>
                      <CurrencyBitcoin className="text-green-800" /> BTC
                    </h3>
                    <p>
                      <ArrowOutwardIcon style={{ color: "green" }} /> 0.7%
                    </p>
                  </div>
                  <h2 className="py-4 text-2xl">$14.538.00</h2>
                </div>
                <div className="absolute top-[5.5rem] right-0">
                  <img
                    className="w-[150px]"
                    src="https://chemceed.com/wp-content/uploads/2019/07/Rising-Arrow-Graph.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <section className="flex gap-12 md:flex-row flex-col">
              <div className="md:mt-52  mt-4">
                {exchange.map((element) => (
                  <div key={element.id} className="py-6">
                    <p className="text-white py-2">{element.exchange}</p>
                    <div className="text-white flex flex-row xm:gap-11 gap-5">
                      <h2 className="text-3xl">{element.price}</h2>
                      <select className="bg-gray-900/5 cursor-pointer">
                        <option>{element.option1}</option>
                        <option>{element.option2}</option>
                        <option>{element.option3}</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:mt-52 mt-4">
                <div className="text-white h-[240px]">
                  <div className="h-[100%] px-8 rounded-2xl flex flex-col justify-center items-center bg-gradient leading-10">
                    <BalanceIcon style={{ fontSize: "45px" }} />
                    <h3>{t("balance")}</h3>
                    <p className="text-2xl">$14.536,00</p>
                    <p className="pt-6">12/24</p>
                  </div>
                </div>
              </div>
              <div className="md:mt-52 mt-4">
                <div className="py-12">
                  <h1 className={`${styles.heading2}`}>
                    {t("th2")}{" "}
                    <span className="text-green-500">{t("maximum")} </span>
                    {t("benefit")}
                  </h1>
                  <p className={`${styles.paragraph} py-3`}>{t("tp2")}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Dashboard />
    </>
  );
};

export default Exchange;
