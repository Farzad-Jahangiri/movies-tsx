import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 h-[10vh] flex justify-center items-center _font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className=" text-white text-xl hover:text-orange-200 transition-all duration-500">
          دی‌جی‌مارت فیلم
        </Link>
        <nav>
          <ul className="flex justify-start items-center gap-4">
            <li>
              <Link
                className="bg-white transition-all duration-500 hover:bg-orange-400 hover:text-white text-blue-500 flex justify-center items-center w-20 h-8 rounded-md"
                href={"/"}
              >
                خانه
              </Link>
            </li>
            <li>
              <Link
                className="bg-white transition-all duration-500 hover:bg-orange-400 hover:text-white text-blue-500 flex justify-center items-center w-20 h-8 rounded-md"
                href={"/movies"}
              >
                فیلم‌ها
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
