import clientDatabiz from "@assets/images/client-databiz.svg";
import clientAudioPhile from "@assets/images/client-audiophile.svg";
import clientMeet from "@assets/images/client-meet.svg";
import clientMaker from "@assets/images/client-maker.svg";
import { cn } from "@/lib/utils.ts";

export type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const clientIcons = [
    clientDatabiz,
    clientAudioPhile,
    clientMeet,
    clientMaker,
  ];

  return (
    <footer className={cn("flex items-center justify-between", className)}>
      {clientIcons.map((icon) => (
        <div className="ml-[28.5px] first:ml-0 md:ml-0">
          <img src={icon} alt="client" className="object-contain" />
        </div>
      ))}
    </footer>
  );
}
