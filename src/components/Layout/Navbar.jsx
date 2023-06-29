import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((i, index) => (
          <div className="flex items-center" key={index}>
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#F6BA00]" : "800px:text-white"
              }  font-[500] px-6 cursor-pointer !pb-[30px] 800px:!pb-[0px]`}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
