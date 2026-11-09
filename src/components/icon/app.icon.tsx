import type { TablerIcon } from "@tabler/icons-react";
import { ICON_CONFIG } from "../../constants/constant";

interface AppIconProps {
  icon: TablerIcon;
  size?: number;
  stroke?: number;
  className?: string;
}

export function AppIcon({
  icon: Icon,
  size = ICON_CONFIG.size,
  stroke = ICON_CONFIG.stroke,
  className,
}: AppIconProps) {
  return (
    <Icon
      size={size}
      stroke={stroke}
      className={className}
      aria-hidden="true"
    />
  );
}
