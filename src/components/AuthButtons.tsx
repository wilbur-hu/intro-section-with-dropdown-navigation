import { cn } from "@/lib/utils.ts";

export type AuthButtonsProps = {
  className?: string;
};

export default function AuthButtons({ className }: AuthButtonsProps) {
  return (
    <div
      className={cn(
        "flex items-center text-[14px] font-medium leading-[16px] text-medium-grey",
        className,
      )}
    >
      <button className="hover:text-black">Login</button>
      <button className="ml-[40px] rounded-[14px] border-[1.5px] border-solid border-medium-grey px-[22px] py-[13px] hover:border-black hover:text-black">
        Register
      </button>
    </div>
  );
}
