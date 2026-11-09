import type { TablerIcon } from "@tabler/icons-react";
import type { FC } from "react";

type Props = {
  icon?: TablerIcon;
  label: string;
};
const LabelTopCorner: FC<Props> = ({ label, icon: Icon }) => {
  return (
    <div className="px-3.5 py-1 rounded-full bg-surface-container-highest dark:bg-surface-container-low flex flex-row justify-center items-center gap-space-xs">
      {Icon ? (
        <Icon size={16} className="text-primary" />
      ) : (
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      )}
      <span className="text-[0.7rem] font-semibold text-primary uppercase">
        {label}
      </span>
    </div>
  );
};

export default LabelTopCorner;
