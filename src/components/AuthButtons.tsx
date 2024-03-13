import { cn } from "@/lib/utils.ts";

export type AuthButtonsProps = {
  className?: string;
};

export default function AuthButtons({ className }: AuthButtonsProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-[14px] font-medium leading-[16px] text-medium-grey md:flex-row",
        className,
      )}
    >
      <button className="hover:text-black">Login</button>
      <button className="mt-[16px] self-stretch rounded-[14px] border-[1.5px] border-solid border-medium-grey px-[22px] py-[13px] hover:border-black hover:text-black md:ml-[40px] md:mt-0 md:self-auto">
        Register
      </button>
    </div>
  );
}
