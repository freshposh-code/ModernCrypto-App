import { CurrencyBitcoin, LanguageOutlined, Send } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import React from "react";
import styles from "../Style";
import { icon } from "./constant/Data";
import i18next from "i18next";

const Footer = () => {
  const { t } = useTranslation(["footer"]);

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const footer = [
    {
      id: 1,
      head: `${t("head1")}`,

      Links: [
        {
          link: `${t("link1")}`,
        },
        {
          link: `${t("link2")}`,
        },
        {
          link: `${t("link3")}`,
        },
        {
          link: `${t("link4")}`,
        },
      ],
    },
    {
      id: 2,
      head: `${t("head2")}`,

      Links: [
        {
          link: `${t("link5")}`,
        },
        {
          link: `${t("link6")}`,
        },
        {
          link: `${t("link7")}`,
        },
        {
          link: `${t("link8")}`,
        },
      ],
    },
    {
      id: 3,
      head: `${t("head3")}`,

      Links: [
        {
          link: `${t("link9")}`,
        },
        {
          link: `${t("link10")}`,
        },
        {
          link: `${t("link11")}`,
        },
        {
          link: `${t("link12")}`,
        },
      ],
    },
  ];

  return (
    <>
      <section className="flex md:flex-row flex-col sm:gap-20 gap-10">
        <div>
          <h1 className="text-white font-normal flex items-center px-[0] sm:text-[44px] xm:text-[40px] text-[26px]">
            <CurrencyBitcoin
              style={{ fontSize: "47px" }}
              className="text-green-400 font-bold"
            />
            <span className="text-green-500 font-extrabold">C</span>rypto.
          </h1>
          <p className={`${styles.paragraph} text-gray-400 max-w-[340px] py-2`}>
            {t("textp")}
          </p>
          <div className="flex">
            {icon.map((element, index) => (
              <div key={element}>
                <div
                  className={`${
                    icon !== index.length - 1 ? "mr-5" : "mr-0"
                  } py-2`}
                >
                  {element.socialI}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap">
          {footer.map((element, index) => (
            <div className="" key={element}>
              <h2
                className={`font-bold text-white py-4 text-[1.1rem] ${
                  footer !== index.length - 1 ? "mr-20" : "mr-0"
                }`}
              >
                {element.head}
              </h2>
              <ul className="text-gray-400">
                {element.Links.map((links, index) => (
                  <li
                    className={`${
                      element !== index.length - 1 ? "mb-4" : "mb-0"
                    } cursor-pointer`}
                    key={links}
                  >
                    {links.link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="relative">
          <h2 className="text-white text-2xl max-w-[320px] py-4">
            {t("texth1")}
          </h2>
          <div className="border-xy flex items-center">
            <input
              className="bg-gray-800/40 text-white w-[100%] p-2 py-2"
              type="email"
              placeholder="email"
            />
            <Send
              style={{ fontSize: "39px" }}
              className="text-white bg-green-500 absolute right-0"
            />
          </div>
          <div className="flex items-center py-10">
            <LanguageOutlined style={{ color: "white" }} />
            <select
              className="border text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
            <p className="text-gray-400 ml-4">{t("textp2")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
