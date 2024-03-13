import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import { cn } from "../lib/utils.ts";
import { MenuData, MenuItem } from "@/lib/model/menu.ts";

export type HorizontalMenuProps = {
  menu: MenuData;
  className?: string;
};

type ArrowProps = {
  item: MenuItem;
  className?: string;
};

export function Arrow({ item, className }: ArrowProps) {
  if (item.subMenu === undefined || item.subMenu.length === 0) {
    return <></>;
  }

  return (
    <>
      <img
        src={arrowDown}
        alt="arrow down"
        className={cn("group-hover:hidden", className)}
      />
      <img
        src={arrowUp}
        alt="arrow up"
        className={cn("hidden group-hover:block", className)}
      />
    </>
  );
}

export function HorizontalMenu({ menu, className }: HorizontalMenuProps) {
  return (
    <ul className={cn("flex items-center justify-between", className)}>
      {menu.map((item) => {
        return (
          <li key={item.label} className="group relative flex items-center">
            <span className="text-[14px] font-medium leading-[16px] text-medium-grey hover:text-black">
              {item.label}
            </span>
            <Arrow item={item} className="ml-[9px]" />
            <div className="invisible absolute right-0 top-full justify-end pt-[20px] group-hover:visible">
              <SubMenu subMenu={item.subMenu} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

type SubMenuProps = {
  subMenu?: MenuItem[];
  className?: string;
};

function SubMenu({ subMenu, className }: SubMenuProps) {
  if (subMenu === undefined || subMenu.length === 0) {
    return <></>;
  }

  return (
    <ul
      className={cn(
        "flex  flex-col rounded-[10px] bg-white p-[24px] shadow-[0px_10px_40px_rgba(0,0,0,0.149126)]",
        className,
      )}
    >
      {subMenu.map((item) => {
        return (
          <li key={item.label} className="mt-[16px] flex items-end first:mt-0">
            {item.icon && (
              <img
                src={item.icon}
                alt={item.label}
                className="mr-[14px] h-[16px] w-[16px] max-w-none shrink-0"
              />
            )}
            <span className="h-[14px] shrink-0 text-nowrap text-[14px] leading-[14px] text-medium-grey hover:text-black">
              {item.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
