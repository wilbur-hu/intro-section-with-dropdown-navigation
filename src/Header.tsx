import logo from "@assets/images/logo.svg";
import { MenuData } from "@/lib/model/menu";
import AuthButtons from "@/components/AuthButtons.tsx";
import iconMenu from "@assets/images/icon-menu.svg";
import { HorizontalMenu } from "@/components/HorizontalMenu.tsx";

export type HeaderProps = {
  className?: string;
  menuData: MenuData;
  onMenuButtonClicked?: () => void;
};

export default function Header({ menuData, onMenuButtonClicked }: HeaderProps) {
  return (
    <header className="flex items-start justify-start">
      <img
        src={logo}
        alt="logo"
        className="mt-[24px] h-[34px] w-[87px] object-contain md:ml-[40px] md:mt-[24px]"
      />

      <button
        className="ml-auto mr-[16px] mt-[25px] md:hidden"
        onClick={onMenuButtonClicked}
      >
        <img src={iconMenu} alt="menu" />
      </button>

      <HorizontalMenu
        menu={menuData}
        className="ml-[60px] mt-[34px] w-[378px] max-md:hidden"
      />

      <AuthButtons className="ml-auto mr-[40px] mt-[21px] h-[42px] max-md:hidden" />
    </header>
  );
}
