import React, { useState, useEffect } from "react";
import { close, menu } from "../assets";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { CurrencyBitcoin, LanguageOutlined } from "@mui/icons-material";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 110) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const { t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length < 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  const navbar = [
    {
      id: "product",
      link: `${t("link")}`,
    },
    {
      id: "pricing",
      link: `${t("link2")}`,
    },
    {
      id: "exchange",
      link: `${t("link3")}`,
    },
    {
      id: "company",
      link: `${t("link4")}`,
    },
  ];

  return (
    <>
      <section id="product">
        <nav
          className={`flex p-4 items-center justify-between w-[100%] sm:px-[4rem] px-[1rem] z-[1] fixed ${
            color ? "header-bg" : "backgrd"
          }`}
        >
          <h1 className="text-white font-normal flex items-center px-[0] xm:text-[25px] text-[16px]">
            <CurrencyBitcoin
              style={{ fontSize: "37px" }}
              className="text-green-400 font-bold"
            />
            <span className="text-green-500 font-extrabold">C</span>rypto.
          </h1>
          <div className="">
            <ul className=" hidden sm:flex flex-1">
              {navbar.map((nav, index) => (
                <li
                  className={`text-white hover:text-green-500 duration-200 ${
                    navbar !== index.length - 1 ? "mr-[45px]" : "mr-[0px]"
                  }`}
                  key={nav.id}
                >
                  <a href={`#${nav.id}`}>{t(nav.link)}</a>
                </li>
              ))}
              <div className="flex items-center">
                <LanguageOutlined style={{ color: "white" }} />
                <select
                  className="border text-white cursor-pointer"
                  value={localStorage.getItem("i18nLng")}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </ul>
          </div>
          <div className="flex sm:hidden cursor-pointer">
            <img
              className="w-[20px] xm:w-[30px]"
              src={toggle ? close : menu}
              alt="menu"
              onClick={() => setToggle((prev) => !prev)}
            />

            <div
              className={`${toggle ? "flex" : "hidden"} 
               absolute right-0 top-20 bg-gray-800 p-4 mx-4 rounded-tr`}
            >
              <ul className=" flex items-center justify-center flex-col  ">
                {navbar.map((nav) => (
                  <li className="text-white text-[13px] py-2" key={nav.id}>
                    <a href={`#${nav.id}`}>{nav.link}</a>
                  </li>
                ))}

                <div className="flex items-center">
                  <LanguageOutlined style={{ color: "white" }} />
                  <select
                    className="bg-gray-800 text-[10px] my-2 text-white border-0 cursor-pointer"
                    onChange={handleLanguageChange}
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="es">Espanol</option>
                  </select>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
