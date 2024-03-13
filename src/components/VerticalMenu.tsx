import { MenuData, MenuItem } from "@/lib/model/menu.ts";
import arrowDown from "@assets/images/icon-arrow-down.svg";
import arrowUp from "@assets/images/icon-arrow-up.svg";
import iconCloseMenu from "@assets/images/icon-close-menu.svg";
import { cn } from "@/lib/utils.ts";
import { useState } from "react";
import AuthButtons from "@/components/AuthButtons.tsx";

export type VerticalMenuProps = {
  menuData: MenuData;
  className?: string;
  onCloseButtonClicked?: () => void;
};

export default function VerticalMenu({
  menuData,
  className,
  onCloseButtonClicked,
}: VerticalMenuProps) {
  return (
    <div
      className={cn(
        "absolute flex min-h-full min-w-full justify-end",
        className,
      )}
      onClick={onCloseButtonClicked}
    >
      <div
        className={cn("flex w-[240px] flex-col bg-white")}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          className="mr-[20px] mt-[22px] h-[24px] w-[24px] self-end"
          onClick={onCloseButtonClicked}
        >
          <img
            src={iconCloseMenu}
            alt="close menu"
            className="object-contain"
          />
        </button>

        <ul className={cn("mx-[24px] mt-[32px] flex flex-col")}>
          {menuData.map((menuItem) => (
            <li
              key={menuItem.label}
              className="text mt-[16px] text-[16px] font-medium leading-[26px] text-medium-grey first:mt-0"
            >
              <SubMenu menuItem={menuItem} />
            </li>
          ))}
        </ul>

        <AuthButtons className="mx-[24px] mt-[32px]" />
      </div>
    </div>
  );
}

type SubMenuProps = {
  className?: string;
  menuItem: MenuItem;
};

function Arrow({ up, className }: { up: boolean; className?: string }) {
  return (
    <img
      src={up ? arrowUp : arrowDown}
      alt="arrow"
      className={cn("object-contain", className)}
    />
  );
}

function SubMenu({ menuItem, className }: SubMenuProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center" onClick={() => setExpanded(!expanded)}>
        <span>{menuItem.label}</span>
        <Arrow
          up={expanded}
          className={cn("ml-[16px]", { hidden: !menuItem.subMenu })}
        />
      </div>

      {expanded && menuItem.subMenu && (
        <ul className="ml-[24px] mt-[24px] flex flex-col">
          {menuItem.subMenu.map((item) => (
            <li
              key={item.label}
              className="mt-[16px] flex items-center first:mt-0"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt="icon"
                  className="mr-[14px] w-[20px] max-w-none shrink-0 object-contain"
                />
              )}
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
