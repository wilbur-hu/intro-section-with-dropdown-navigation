import logo from "@assets/images/logo.svg";
import { Menu, MenuData } from "@/components/Menu.tsx";

export type HeaderProps = {
  className?: string;
  menuData: MenuData;
};

export default function Header({ menuData }: HeaderProps) {
  return (
    <header className="flex items-start justify-start">
      <img src={logo} alt="logo" className="ml-[41.26px] mt-[32.07px] " />

      <Menu menu={menuData} className="ml-[60px] mt-[34px] w-[378px]" />

      <div className="ml-auto mr-[40px] mt-[21px] flex items-center text-[14px] font-medium leading-[16px] text-medium-grey">
        <button className="hover:text-black">Login</button>
        <button className="ml-[40px] rounded-[14px] border-[1.5px] border-solid border-medium-grey px-[22px] py-[13px] hover:border-black hover:text-black">
          Register
        </button>
      </div>
    </header>
  );
}
