import { useTranslation } from "react-i18next";
import styles from "../Style";

const Questions = () => {
  const { t } = useTranslation(["common"]);

  const faq = [
    {
      Question: `${t("FAQH1")}`,
      Ans: `${t("FAQP1")}`,
    },
    {
      Question: `${t("FAQH2")}`,
      Ans: `${t("FAQP2")}`,
    },
    {
      Question: `${t("FAQH3")}`,
      Ans: `${t("FAQP3")}`,
    },
    {
      Question: `${t("FAQH4")}`,
      Ans: `${t("FAQP4")}`,
    },
  ];
  return (
    <>
      <section
        className={`${styles.marginY} pt-12 flex justify-between sm:flex-row flex-col`}
      >
        <div className="py-10">
          <div>
            <h1 className={`${styles.heading2} max-w-[500px]`}>
              {t("h1q")} <span className="text-green-500">{t("ques")}</span>
              <p className={`${styles.paragraph} max-w-[900px] py-2`}>
                {t("pq")}
              </p>
            </h1>
          </div>
        </div>
        <div>
          <div>
            {faq.map((element) => {
              return (
                <div class="container mx-auto px-6 mb-10" key={element.id}>
                  <div class="max-w-2xl m-8 mx-auto overflow-hidden">
                    <div class="py-1 border-b outline-none group" tabIndex="1">
                      <div class="flex items-center justify-between py-3 text-gray-300 transition duration-500 cursor-pointer group ease">
                        <div class="transition duration-500 ease group-hover:text-green-500">
                          {element.Question}
                        </div>

                        <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-green-500 text-gray-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              d="M1 1l8 8 8-8"
                            />
                          </svg>
                        </div>
                      </div>

                      <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                        <p class={`${styles.paragraph} py-2`}>{element.Ans}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
