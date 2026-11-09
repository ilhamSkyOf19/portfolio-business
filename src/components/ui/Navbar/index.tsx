import { Link } from "react-router-dom";
import useNavbar from "./useNavbar";
import { cn } from "../../../utils/cn";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { themeOptions } from "../../../utils/theme";
import logo from "../../../assets/logo-medium.png";
import Drawer from "../Drawer";
import { navigation } from "../../../utils/navigation";

const Navbar = () => {
  const {
    currentPathname,
    lang,
    theme,
    setTheme,
    currentTheme,
    handleSetLang,
    t,
  } = useNavbar();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-xs">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <div className="flex flex-row justify-start items-center gap-space-xs">
          <img src={logo} alt="Logo" className="w-8" loading="lazy" />
          <span className="font-semibold text-xl text-on-surface tracking-tight">
            IamDev<span className="text-primary">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2.5 bg-surface-container-low rounded-full p-1 shadow-xs">
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-200 text-on-surface-variant dark:text-on-surface text-sm",
                currentPathname === item.link
                  ? "bg-primary shadow-sm text-on-primary font-semibold"
                  : "hover:text-on-surface dark:hover:text-on-surface-variant font-medium",
              )}
            >
              {t(`navigation.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-surface-container-low rounded-full p-1 text-xs">
            <button
              type="button"
              className={cn(
                "px-2 py-0.5 rounded-full font-medium",
                lang === "en" && "bg-primary text-on-primary",
              )}
              onClick={() => handleSetLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={cn(
                "px-2 py-0.5 rounded-full font-medium",
                lang === "id" && "bg-primary text-on-primary",
              )}
              onClick={() => handleSetLang("id")}
            >
              ID
            </button>
          </div>

          {/* theme */}
          <div className="dropdown dropdown-end">
            <button
              type="button"
              tabIndex={0}
              role="button"
              className="m-1 h-8.5 px-2 flex flex-row justify-center items-center rounded-lg hover:bg-primary transition-all ease-in-out duration-200 hover:text-primary-container"
            >
              <div className="flex flex-row justify-start items-start gap-2.5">
                <div
                  className={cn(
                    "grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm",
                    currentTheme.container,
                  )}
                >
                  {currentTheme.content.map((item, index) => (
                    <div
                      key={index}
                      className={cn("size-1 rounded-full", item)}
                    />
                  ))}
                </div>

                <IconChevronDown size={20} />
              </div>
            </button>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 md:w-52 p-2 shadow-sm dark:bg-base-200"
            >
              {themeOptions.map((item, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => setTheme(item.key as typeof theme)}
                    className=" w-full flex flex-row justify-between items-start gap-2.5 "
                  >
                    <div className="flex flex-row justify-start items-center gap-2.5">
                      <div
                        className={cn(
                          "grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm",
                          item.container,
                        )}
                      >
                        {item.content.map((item, index) => (
                          <div
                            key={index}
                            className={cn("size-1 rounded-full", item)}
                          />
                        ))}
                      </div>

                      <span className="text-xs font-medium">{item.label}</span>
                    </div>

                    {theme === item.key && <IconCheck size={16} />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <Drawer currentPathname={currentPathname} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
