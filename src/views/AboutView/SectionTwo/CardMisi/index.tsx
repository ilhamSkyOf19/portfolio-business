import type { TablerIcon } from "@tabler/icons-react";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  number: number;
  icon: TablerIcon;
};
const CardMisi: FC<Props> = ({ icon: Icon, number }) => {
  const { t } = useTranslation();

  const missions = t(`about.visionMission.missions.${number}`, {
    returnObjects: true,
  }) as {
    type: string;
    title: string;
    description: string;
  };

  return (
    <div className="flex flex-col justify-start items-start col-span-1 rounded-2xl bg-surface-container-lowest shadow-md p-space-sm">
      <div className="w-14 h-14 bg-primary/15 rounded-xl flex justify-center items-center">
        <Icon size={30} className="text-primary" />
      </div>

      <div className="mt-space-xs flex flex-row justify-start items-center gap-space-xs">
        <span className="text-xs">0{number}</span>
        <span className="text-xs">/</span>
        <span className="text-xs uppercase font-medium">{missions.type}</span>
      </div>

      <span className="text-xl font-medium my-space-xs">{missions.title}</span>

      <span className="text-sm leading-6 pb-space-xs">
        {missions.description}
      </span>
    </div>
  );
};

export default CardMisi;
