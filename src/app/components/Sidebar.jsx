import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import {
  
  CollapsIcon,
  LogoIcon,
  LogoutIcon,
  
 
} from "./icons";

const menuItems = [
  { id: 1, label: "Screen 1",  link: "/", key: "screen1" },
  { id: 2, label: "Screen 2",  link: "/posts",  key: "screen2"},
  { id: 3, label: "Screen 3",  link: "/users",key: "screen3" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap h-32 justify-center",
      // {
      //   ["bg-light-lighter"]: activeMenu.id === menu.id,
      // }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <LogoIcon />
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              GitaQuiz
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          )}
        </div>

        <div className="flex flex-col  mt-10 ">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} >
                <Link  href={menu.link}>
                  <div className="flex py-4 px-3 items-center w-full h-full ">
                  
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                  {/* <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4 h-32`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
