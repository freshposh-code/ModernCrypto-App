import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../Style";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Stats = () => {
  const { t } = useTranslation(["hero"]);

  return (
    <>
      <section
        className={`${styles.paddingY} flex justify-between flex-wrap md:gap-[1rem] gap-[4.6rem] `}
      >
        <div className="text-white md:mt-0 mt-3 flex-1">
          <div className="flex items-center xm:px-5 px-1">
            <MonetizationOnIcon
              style={{ fontSize: "2.5rem" }}
              className="text-green-500  xm:px-1 px-0"
            />
            <h1 className="font-bold text-3xl ">{t("stath1")}</h1>
          </div>
          <p className={`${styles.paragraph} mt-6 max-w-[340px]`}>
            {t("statp1")}
          </p>
        </div>

        <div className="text-white md:mt-0 mt-3 flex-1">
          <div className="flex items-center xm:px-5 px-1">
            <SpeedIcon
              style={{ fontSize: "2.5rem" }}
              className="text-green-500 xm:px-1 px-0"
            />
            <h1 className="font-bold text-3xl ">{t("stath2")}</h1>
          </div>
          <p className={`${styles.paragraph} mt-6  max-w-[370px]`}>
            {t("statp2")}
          </p>
        </div>

        <div className="text-white md:mt-0 mt-3 flex-1">
          <div className="flex items-center xm:px-5 px-1">
            <SecurityIcon
              style={{ fontSize: "2.5rem" }}
              className="text-green-500 xm:px-1 px-0"
            />
            <h1 className="font-bold text-3xl ">{t("stath3")}</h1>
          </div>
          <p className={`${styles.paragraph} mt-6 max-w-[380px]`}>
            {t("statp3")}
          </p>
        </div>
      </section>
    </>
  );
};

export default Stats;
