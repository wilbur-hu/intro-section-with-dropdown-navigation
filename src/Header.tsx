import logo from "@assets/images/logo.svg";
import { Menu, MenuData } from "@/components/Menu.tsx";
import AuthButtons from "@/components/AuthButtons.tsx";
import iconMenu from "@assets/images/icon-menu.svg";

export type HeaderProps = {
  className?: string;
  menuData: MenuData;
};

export default function Header({ menuData }: HeaderProps) {
  return (
    <header className="flex items-start justify-start">
      <img
        src={logo}
        alt="logo"
        className="mt-[16px] h-[35px] w-[87px] object-contain md:ml-[41.26px] md:mt-[32.07px]"
      />

      <Menu
        menu={menuData}
        className="ml-[60px] mt-[34px] w-[378px] max-md:hidden"
      />

      <AuthButtons className="ml-auto mr-[40px] mt-[21px] max-md:hidden" />

      <button className="ml-auto mr-[16px] mt-[25px] md:hidden">
        <img src={iconMenu} alt="menu" />
      </button>
    </header>
  );
}
