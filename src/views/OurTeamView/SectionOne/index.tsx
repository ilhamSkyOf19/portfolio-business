import { useTranslation } from "react-i18next";
import LabelTopCorner from "../../../components/ui/LabelTopCorner";
import CardTeam from "./CardTeam";
import { teamData } from "./CardTeam/data";

const SectionOne = () => {
  const { t } = useTranslation();
  const highlights = t("team.hero.highlights", { returnObjects: true }) as {
    value: string;
    title: string;
  }[];
  return (
    <section
      id="ourTeam"
      className="relative bg-surface w-full overflow-hidden pt-space-sm pb-space-lg px-space-sm md:px-space-md"
    >
      <div className="w-full flex flex-col justify-start items-center pt-space-md">
        <div className="md:w-2/3 w-full flex flex-col justify-start items-center">
          <LabelTopCorner label={t("team.hero.eyebrow")} />

          <h1 className="text-center text-4xl font-semibold mt-space-xs leading-12">
            {t("team.hero.firstTitle")}
            <br className="md:hidden" /> {t("team.hero.secondTitle")}
          </h1>

          <p className="text-on-surface-variant text-center mt-space-xs">
            {t("team.hero.description")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mt-space-sm">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="col-span-1 h-28 rounded-2xl bg-primary/5 p-space-sm flex flex-col justify-center items-center gap-1"
              >
                <span className="text-center font-semibold text-2xl text-primary">
                  {item.value}
                </span>
                <span className="text-center text-xs text-base-content/70 font-medium">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          {/* team */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-space-sm mt-space-lg items-stretch">
            {teamData.map((item, index) => (
              <div
                key={item.id}
                className={index === 0 ? "md:col-start-2" : "md:col-start-3"}
              >
                <CardTeam data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
