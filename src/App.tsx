import iconTodo from "@assets/images/icon-todo.svg";
import iconCalendar from "@assets/images/icon-calendar.svg";
import iconReminders from "@assets/images/icon-reminders.svg";
import iconPlanning from "@assets/images/icon-planning.svg";
import Header from "@/Header.tsx";
import heroDesktop from "@assets/images/image-hero-desktop.png";
import heroMobile from "@assets/images/image-hero-mobile.png";
import Footer from "@/Footer.tsx";
import { MenuData } from "@/lib/model/menu.ts";
import { useState } from "react";
import VerticalMenu from "@/components/VerticalMenu.tsx";
import { cn } from "@/lib/utils.ts";

function App() {
  const menu: MenuData = [
    {
      label: "Features",
      subMenu: [
        { label: "Todo List", icon: iconTodo },
        { label: "Calendar", icon: iconCalendar },
        { label: "Reminders ", icon: iconReminders },
        { label: "Planning", icon: iconPlanning },
      ],
    },
    {
      label: "Company",
      subMenu: [{ label: "History" }, { label: "Our Team" }, { label: "Blog" }],
    },
    {
      label: "Careers",
    },
    { label: "About" },
  ];

  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <>
      <Header
        menuData={menu}
        onMenuButtonClicked={() => setMenuExpanded(true)}
      />
      <VerticalMenu
        menuData={menu}
        className={cn(
          "absolute right-0 top-0 min-h-full w-[240px]",
          menuExpanded ? "visible" : "invisible",
        )}
        onCloseButtonClicked={() => setMenuExpanded(false)}
      />
      <div className="flex flex-col items-start justify-start md:flex-row">
        <div className="mx-[16px] mt-[47.75px] md:ml-[165px] md:mr-0 md:mt-[171px]">
          <main className="flex flex-col items-center md:items-start">
            <h1 className="text-[36px] font-bold leading-[42px] tracking-[-0.5px] md:w-[540px] md:text-[80px] md:leading-[80px] md:tracking-[-1.11px]">
              Make
              <br className="max-md:hidden" /> remote work
            </h1>

            <p className="mt-[16px] text-center text-[16px] font-medium leading-[26px] text-medium-grey md:mt-[48px] md:w-[445px] md:text-left md:text-[18px] md:leading-[28px]">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>

            <button
              className="mt-[24px] rounded-[15px] border bg-black pb-[13px] pl-[31px]
                        pr-[28px] pt-[15px] text-[18px] font-bold leading-[28px] tracking-[-0.25px] text-almost-white
                        hover:border-solid hover:border-black hover:bg-almost-white hover:text-black md:mt-[51px] "
            >
              Learn more
            </button>
          </main>
          <Footer className="mt-[48px] md:mt-[108px] md:h-[35.9px] md:w-[477.63px]" />
        </div>
        <img
          src={heroDesktop}
          alt="hero"
          className="ml-[125px] mt-[67px] h-[640px] w-[480px] object-contain max-md:hidden"
        />
        <img
          src={heroMobile}
          alt="hero"
          className="-order-1 mt-[24px] object-contain md:hidden"
        />
      </div>
    </>
  );
}

export default App;
