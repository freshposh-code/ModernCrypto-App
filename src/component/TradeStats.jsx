import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../Style";
import { tradeStats } from "./constant/Data";
import Stats from "./Stats";

const TradeStats = () => {
  const { t } = useTranslation(["hero"]);

  return (
    <section id="pricing">
      <div
        className={`${styles.paddingY}  flex items-center flex-col sm:mt-20 mt-1 sm:flex-row`}
      >
        <div className={``}>
          <h2
            className={`text-white font-semibold sm:text-[43px] text-[32px] z-[1]`}
          >
            <span className="text-green-500 font-serif">{t("predict")}</span>{" "}
            {t("texth2")}
          </h2>
        </div>
        <div className="sm:mt-0 mt-3">
          <p className={`${styles.paragraph}`}>{t("textp2")}</p>
        </div>
      </div>

      <div className="text-white flex gap-10 flex-wrap">
        {tradeStats.map((stat) => (
          <div
            key={stat.id}
            className="w-[100%] flex items-center gap-6 bg-gray-800/20 gray-hover rounded-md flex-1  px-4 py-10"
          >
            <div>
              <div className="flex items-center text-xl gap-2 leading-[3.5rem]">
                {stat.Name} {stat.icon}
              </div>
              <h1 className="text-3xl tracking-[1px]">{stat.Camount}</h1>
            </div>
            <div>
              <img
                className="w-[100%] h-[100%] object-cover"
                src={stat.TradeImg}
                alt={stat.Name}
              />
            </div>
          </div>
        ))}
      </div>
      <Stats />
    </section>
  );
};

export default TradeStats;
