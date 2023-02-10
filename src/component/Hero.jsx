import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../Style";

const Hero = () => {
  const { t } = useTranslation(["hero"]);

  const trade = [
    {
      id: 1,
      Amount: "1M",
      info: `${t("infoh1")}`,
    },
    {
      id: 2,
      Amount: "360M",
      info: `${t("infoh2")}`,
    },
    {
      id: 3,
      Amount: "8.5%",
      info: `${t("infoh3")}`,
    },
  ];
  return (
    <>
      <section className="mt-20 flex flex-col sm:flex-row">
        <div>
          <h1 className="sm:text-[55px] text-[30px] font-extrabold text-white">
            {t("t1")}
            <span className="text-green-500 text-4xl xm:text-[54px] font-serif ">
              {" "}
              {t("t2")} <br className="sm:block hidden" />
            </span>
            {t("t3")}
          </h1>

          <div className="absolute top-0 left-0 w-[10%] h-[50%] z-[1] green-gradient"></div>
          <div className="absolute top-10 left-40 w-[15%] h-[10%] z-[1] light-green"></div>

          <p className={`${styles.paragraph} ${styles.marginY} max-w-[590px]`}>
            {t("textP")}
          </p>
          <div className="text-white flex flex-wrap text-center ">
            {trade.map((element, index) => (
              <div
                className={`${trade !== index.length - 1 ? "mr-36" : "mr-0"} `}
                key={element.id}
              >
                <div className="mb-16">
                  <h1 className="font-bold text-2xl">{element.Amount}</h1>
                  <p className="text-green-800">{element.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-[100%] h-[100%] sm:hidden md:flex">
          <div className="absolute h-[34%] w-[10%] right-20 z-[1] green-gradient2 px-12 "></div>
          <img
            className="w-[100%] h-[100%] sm:mt-8 mt-0 object-cover"
            src="https://www.pngall.com/wp-content/uploads/8/Stock-Trading-PNG-Download-Image.png"
            alt="trade"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
