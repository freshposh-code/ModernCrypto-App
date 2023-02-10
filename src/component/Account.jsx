import { apple, google } from "../assets";
import { useTranslation } from "react-i18next";
import styles from "../Style";
import FAQ from "./FAQ";

const Account = () => {
  const { t } = useTranslation(["main"]);
  return (
    <>
      <section
        id="company"
        className={`bg-gray-900/20 rounded-xl sm:p-[3.5rem] p-[1rem]`}
      >
        <div className="flex items-center justify-around md:flex-row flex-col">
          <div className="">
            <h1 className={`${styles.heading2}`}>{t("socialh1")}</h1>
            <h1 className={`${styles.heading2}`}>
              <span className="text-green-500">{t("instant")}</span> {t("no")}
              <span className="text-green-500"> {t("hassle")}</span>.
            </h1>
          </div>
          <div>
            <p className={`${styles.paragraph} max-w-[480px] py-2`}>
              {t("socialp")}
            </p>
            <div className="flex gap-6 rounded-md py-2 xs:w-32 w-20">
              <img className="border-s" src={apple} alt="socail" />
              <img className="border-s" src={google} alt="socail" />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
};

export default Account;
