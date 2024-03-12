import { MenuData } from "./components/Menu.tsx";
import iconTodo from "@assets/images/icon-todo.svg";
import iconCalendar from "@assets/images/icon-calendar.svg";
import iconReminders from "@assets/images/icon-reminders.svg";
import iconPlanning from "@assets/images/icon-planning.svg";
import Header from "@/Header.tsx";
import heroDesktop from "@assets/images/image-hero-desktop.png";
import clientDatabiz from "@assets/images/client-databiz.svg";
import clientAudioPhile from "@assets/images/client-audiophile.svg";
import clientMeet from "@assets/images/client-meet.svg";
import clientMaker from "@assets/images/client-maker.svg";

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

  return (
    <>
      <Header menuData={menu} />
      <div className="flex items-start justify-start">
        <div className="ml-[165px] mt-[171px]">
          <main>
            <h1 className="w-[540px] space-x-0 text-[80px] font-bold leading-[80px] tracking-[-1.11px]">
              Make
              <br /> remote work
            </h1>

            <p className="text-[18px] leading-[28px] text-medium-grey w-[445px] mt-[48px] font-medium">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

            <button className="bg-black text-almost-white  rounded-[15px] mt-[51px] text-[18px] leading-[28px] font-bold tracking-[-0.25px] pt-[15px] pb-[13px] pl-[31px] pr-[28px] ">Learn more</button>
          </main>
          <footer className="mt-[108px] flex justify-between items-center w-[447.63px] h-[35.9px]">
            <img src={clientDatabiz} alt="client" />
            <img src={clientAudioPhile} alt="client"  />
            <img src={clientMeet} alt="client"  />
            <img src={clientMaker} alt="client"  />
          </footer>
        </div>
        <img
          src={heroDesktop}
          alt="hero"
          className="mt-[67px] ml-[125px] h-[640px] w-[480px]"
        />
      </div>
    </>
  );
}

export default App;
