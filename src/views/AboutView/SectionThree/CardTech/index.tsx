import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../../../utils/cn";
import type { TechCategory } from "../../../../utils/stack";

type Props = {
  techStack: TechCategory;
};

const CardTech: FC<Props> = ({ techStack }) => {
  const { t } = useTranslation();

  const { id, type, content } = techStack;
  const IconTitle = content.iconTitle;

  // Mengambil translasi kategori
  const translatedCategory = t(`about.technology.categories.${id}`, {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    items: Record<
      string,
      {
        type: string;
        description: string;
      }
    >;
  };

  return (
    <div className="col-span-1 flex flex-col justify-start items-start h-120 bg-base-200 rounded-xl shadow-sm p-space-sm">
      {/* Category Header */}
      <div className="w-full flex flex-row justify-between items-center gap-space-xs">
        <div className="flex flex-row justify-start items-center gap-space-xs min-w-0">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex justify-center items-center">
            <IconTitle size={22} className="text-primary" />
          </div>

          <div className="flex flex-col justify-start items-start min-w-0">
            <span className="text-xl font-medium">
              {translatedCategory.title}
            </span>

            <span className="text-xs text-on-surface-variant">
              {translatedCategory.description}
            </span>
          </div>
        </div>

        <div className="shrink-0 flex flex-row justify-center items-center gap-1 px-space-xs py-1 rounded-full bg-primary/20">
          <span className="text-on-surface-variant text-xs font-medium">
            {content.tech.length}
          </span>

          <span className="text-on-surface-variant text-xs font-medium">
            Stacks
          </span>
        </div>
      </div>

      {/* Technology List */}
      <div
        className={cn(
          "grid w-full mt-space-xs gap-space-xs grid-cols-1 overflow-y-auto scrollbar-none mask-[linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)] pb-20",

          type === "row" ? "md:grid-cols-2" : "md:grid-cols-1",

          ((content.tech.length > 4 && type === "row") ||
            (content.tech.length > 2 && type === "column")) &&
            "md:overflow-y-auto md:scrollbar-none md:mask-[linear-gradient(to_bottom,black_0%,black_75%,transparent_100%)] md:pb-20",

          !(
            (content.tech.length > 4 && type === "row") ||
            (content.tech.length > 2 && type === "column")
          ) && "md:overflow-visible md:mask-none md:pb-0",
        )}
      >
        {content.tech.map((item) => {
          const Icon = item.icon;

          // Mengambil translasi masing-masing teknologi
          const translatedTech = translatedCategory.items[item.nama];

          return (
            <div
              key={item.nama}
              className={cn(
                "w-full flex-col min-w-0 flex justify-start items-start bg-primary/10 p-3 rounded-2xl",
                type === "row" ? "min-h-35" : "min-h-30",
              )}
            >
              {/* Technology Header */}
              <div className="w-full flex flex-row justify-between items-center gap-space-sm">
                <div className="flex flex-row justify-start items-center gap-space-xs min-w-0">
                  <Icon size={18} className="shrink-0 text-primary" />

                  <span className="text-base font-medium">{item.nama}</span>
                </div>

                <span className=" py-0.5 px-1.5 rounded-sm bg-primary/15 text-[0.625rem] font-medium text-primary">
                  {translatedTech.type}
                </span>
              </div>

              {/* Technology Description */}
              <p className="text-xs mt-2 leading-5 text-base-content/70">
                {translatedTech.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardTech;
