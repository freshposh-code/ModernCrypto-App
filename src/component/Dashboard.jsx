import { useTranslation } from "react-i18next";
import React from "react";
import styles from "../Style";

const Dashboard = () => {
  const { t } = useTranslation(["main"]);
  return (
    <>
      <section className={`${styles.paddingY}`}>
        <div className="text-center">
          <h3 className="text-white font-semibold sm:text-[55px] text-[30px] tracking-[2px]">
            <span className="text-green-500">{t("trusted")}</span> {t("inf")}
          </h3>
          <p className={`${styles.paragraph} sm:py-8 py-2`}>{t("dash-info")}</p>
        </div>
        <div className="w-[85%] m-auto py-4">
          <div className="absolute w-[20%] left-0 h-[10%] z-[1] green-gradient"></div>
          <img
            className="h-[100%] rounded-[18px]"
            src="https://cdn.dribbble.com/users/2631731/screenshots/15182067/media/d9080fc120123daee1acbbe86b506ff5.png?compress=1&resize=1600x1200&vertical=top"
            alt="dashboard"
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
