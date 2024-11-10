"use client";
import { navbarData, copyRightIcon } from "@/assets";

const Navbar = ({ id }) => {
  return (
    <div className="w-[80px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-600 px-4 py-14 xl:py-6 z-10">
      <a href="/#hero" aria-label="Home">
        <span className="text-2xl font-semibold text-red-900 mb-18">𝓢𝓘𝓓</span>
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold mb-9 dark:text-white ">
          Kusur
        </span>
      </a>
      <div className="flex flex-col gap-y-1 sm:gap-y-2 xl:gap-y-1 xs:gap-y-0">
        {navbarData.map((item, i) => (
          <a
            key={i}
            href={`/#${item.id}`}
            className="group flex flex-col items-center gap-y-2"
            aria-label={item.name}
          >
            <span
              className={`text-2xl group-hover:scale-125 transition-all xs:group-hover:scale-100 xl:group-hover:scale-115 ${
                item.id === id
                  ? "text-red-500 scale-110 xl:scale-100 xs:scale-80"
                  : "text-yellow-600 scale-100 xl:scale-90 xs:scale-70"
              }`}
            >
              {item.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white ${
                i % 2 === 0 ? "translate-x-2" : "-translate-x-2"
              } ${item.id === id && "translate-x-0 opacity-100"}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-red-900 mt-6  xs:text-[13px] ">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider mt-20 dark:text-gray-200 transition-colors ">
          {copyRightIcon} 2019-{new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
};

export default Navbar;
