import type { ReactNode } from "react";

type CustomListProps = {
  children: ReactNode;
  className?: string;
};

type CustomListItemProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const CustomList = ({ children, className }: CustomListProps) => {
  return (
    <ul className={`flex flex-col gap-3 ${className ?? ""}`}>{children}</ul>
  );
};

export const CustomListItem = ({
  children,
  icon,
  className,
}: CustomListItemProps) => {
  return (
    <li className={`flex items-start gap-3 ${className ?? ""}`}>
      {icon && <span className="shrink-0">{icon}</span>}

      <div>{children}</div>
    </li>
  );
};

export default CustomList;
