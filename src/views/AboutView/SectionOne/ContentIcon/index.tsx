import {
  IconBrandReact,
  IconBrandVite,
  IconCode,
  IconDatabase,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconSettings,
  IconShieldCheck,
  IconStack2,
  IconTerminal,
} from "@tabler/icons-react";
import type { CSSProperties } from "react";

const spreadStyle = (
  x: string,
  y: string,
  rotate: string,
  delay: number,
): CSSProperties =>
  ({
    "--spread-x": x,
    "--spread-y": y,
    "--spread-rotate": rotate,
    "--delay": `${delay}ms`,
  }) as CSSProperties;

const CotentIcon = () => {
  return (
    <div className="w-120 h-100 relative flex justify-center items-center">
      {/* Main Icon */}
      <div className="flex justify-center items-center bg-surface-container-low w-30 h-30 rounded-4xl shadow-[20px_20px_30px_rgba(41,117,254,0.3),inset_-6px_-6px_15px_rgba(41,117,254,0.3)] -rotate-10 border-r-4 border-b-4 border-surface-container-low animate-float z-10">
        <IconCode size={70} className="text-primary" />
      </div>

      {/* Device */}
      <div
        className="absolute top-6 left-30 animate-spread"
        style={spreadStyle("0px", "0px", "-14deg", 100)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[-5px_20px_30px_rgba(41,117,254,0.1),inset_0px_0px_10px_rgba(41,117,254,0.3)] -rotate-14 border border-surface-container-low hover:shadow-[-5px_20px_30px_rgba(41,117,254,0.3),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconDeviceLaptop size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            device
          </span>
        </div>
      </div>

      {/* Glow Circle */}
      <div
        className="absolute top-12 w-4 h-4 rounded-full bg-linear-to-br from-blue-400 via-primary to-blue-600 shadow-[0_0_10px_rgba(41,117,254,0.8),0_0_25px_rgba(41,117,254,0.5)] blur-sm animate-spread"
        style={spreadStyle("0px", "0px", "0deg", 150)}
      />

      {/* Security */}
      <div
        className="absolute top-30 left-10 animate-spread"
        style={spreadStyle("0px", "0px", "-14deg", 200)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[-30px_-30px_30px_rgba(41,117,254,0.3),inset_0px_0px_10px_rgba(41,117,254,0.3)] -rotate-14 border border-surface-container-low hover:shadow-[-30px_-30px_30px_rgba(41,117,254,0.5),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconShieldCheck size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            security
          </span>
        </div>
      </div>

      {/* Terminal */}
      <div
        className="absolute bottom-25 left-0 animate-spread"
        style={spreadStyle("0px", "0px", "-14deg", 300)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-16 h-16 rounded-3xl shadow-[-10px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] -rotate-14 border border-surface-container-low hover:shadow-[-10px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconTerminal size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            terminal
          </span>
        </div>
      </div>

      {/* Glow Circle */}
      <div
        className="absolute bottom-45 left-30 w-3 h-3 rounded-full bg-linear-to-br from-blue-400 via-primary to-blue-600 shadow-[0_0_10px_rgba(41,117,254,0.8),0_0_25px_rgba(41,117,254,0.5)] blur-sm animate-spread"
        style={spreadStyle("0px", "0px", "0deg", 350)}
      />

      {/* Vite */}
      <div
        className="absolute bottom-10 left-20 animate-spread"
        style={spreadStyle("0px", "0px", "14deg", 400)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[10px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] rotate-14 border border-surface-container-low hover:shadow-[10px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconBrandVite size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            vite
          </span>
        </div>
      </div>

      {/* Glow Circle */}
      <div
        className="absolute bottom-12 left-45 w-2 h-2 rounded-full bg-linear-to-br from-blue-400 via-primary to-blue-600 shadow-[0_0_10px_rgba(41,117,254,0.8),0_0_25px_rgba(41,117,254,0.5)] blur-xs animate-spread"
        style={spreadStyle("0px", "0px", "0deg", 450)}
      />

      {/* React */}
      <div
        className="absolute bottom-10 left-60 animate-spread"
        style={spreadStyle("0px", "0px", "-20deg", 500)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[10px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] -rotate-20 border border-surface-container-low hover:shadow-[10px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconBrandReact size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            react
          </span>
        </div>
      </div>

      {/* Stack */}
      <div
        className="absolute -bottom-5 right-10 animate-spread"
        style={spreadStyle("0px", "0px", "-14deg", 600)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[-30px_10px_40px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] -rotate-14 border border-surface-container-low hover:shadow-[-30px_10px_40px_rgba(41,117,254,0.6),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconStack2 size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            stack
          </span>
        </div>
      </div>

      {/* Settings */}
      <div
        className="absolute bottom-25 right-20 animate-spread"
        style={spreadStyle("0px", "0px", "14deg", 700)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-14 h-14 rounded-3xl shadow-[10px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] rotate-14 border border-surface-container-low hover:shadow-[10px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconSettings size={30} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            settings
          </span>
        </div>
      </div>

      {/* Glow Circle */}
      <div
        className="absolute bottom-25 right-10 w-2 h-2 rounded-full bg-linear-to-br from-blue-400 via-primary to-blue-600 shadow-[0_0_10px_rgba(41,117,254,0.8),0_0_25px_rgba(41,117,254,0.5)] blur-xs animate-spread"
        style={spreadStyle("0px", "0px", "0deg", 750)}
      />

      {/* Database */}
      <div
        className="absolute top-14 right-15 animate-spread"
        style={spreadStyle("0px", "0px", "14deg", 800)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[-5px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] rotate-14 border border-surface-container-low hover:shadow-[-5px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconDatabase size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            database
          </span>
        </div>
      </div>

      {/* Glow Circle */}
      <div
        className="absolute top-30 right-10 w-2 h-2 rounded-full bg-linear-to-br from-blue-400 via-primary to-blue-600 shadow-[0_0_10px_rgba(41,117,254,0.8),0_0_25px_rgba(41,117,254,0.5)] blur-xs animate-spread"
        style={spreadStyle("0px", "0px", "0deg", 850)}
      />

      {/* Mobile */}
      <div
        className="absolute top-40 -right-5 animate-spread"
        style={spreadStyle("0px", "0px", "10deg", 900)}
      >
        <div className="flex justify-center items-center bg-surface-container-low w-18 h-18 rounded-3xl shadow-[-5px_20px_30px_rgba(41,117,254,0.2),inset_0px_0px_10px_rgba(41,117,254,0.3)] rotate-10 border border-surface-container-low hover:shadow-[-5px_20px_30px_rgba(41,117,254,0.4),inset_0px_0px_10px_rgba(41,117,254,0.3)] transition-all duration-300 ease-in-out group animate-float">
          <IconDeviceMobile size={40} stroke={1.5} className="text-primary" />
          <span className="absolute -top-1 -left-1 text-[0.7rem] font-medium bg-surface-container-low py-0.5 px-2 shadow-md rounded-md origin-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            mobile
          </span>
        </div>
      </div>
    </div>
  );
};

export default CotentIcon;
