import { IconCheck, IconChevronRight, IconMenu } from "@tabler/icons-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../../utils/navigation";
import { cn } from "../../../utils/cn";
import logo from "../../../assets/logo-medium.png";

type Props = {
  currentPathname: string;
};
const Drawer: FC<Props> = ({ currentPathname }) => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-1" className="drawer-button cursor-pointer">
          <IconMenu size={24} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div></div>
        <ul className="menu bg-surface min-h-full w-70 p-4 relative">
          {/* Sidebar content here */}
          <li className="pointer-events-none">
            <span className="font-semibold text-xl">Menu</span>
          </li>

          {navigation.map((item, index) => (
            <li key={index} className={cn(index === 0 ? "mt-4" : "mt-1")}>
              <Link
                to={item.link}
                className={cn(
                  "h-16 w-full flex flex-row justify-between items-center gap-4",
                  currentPathname === item.link && "bg-primary text-white",
                )}
              >
                <div className="flex flex-row justify-start items-center gap-4">
                  <div className="h-10 w-10 flex justify-center items-center rounded-xl bg-surface-container">
                    <item.icon size={20} className="text-base-content" />
                  </div>

                  <span className="font-semibold text-lg">{item.name}</span>
                </div>

                {currentPathname === item.link ? (
                  <IconCheck size={24} />
                ) : (
                  <IconChevronRight size={24} />
                )}
              </Link>
            </li>
          ))}

          <div className="absolute flex flex-row justify-start items-center bottom-0 w-62 py-space-sm border-t border-base-content/30 gap-space-xs">
            <img src={logo} alt="Logo" className="w-8" loading="lazy" />
            <span className="font-semibold text-xl text-on-surface tracking-tight">
              IamDev<span className="text-primary">.</span>
            </span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
