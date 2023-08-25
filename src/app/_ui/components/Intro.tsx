import Image from "next/image";
import { CheckCircle } from "@/app/_ui/icons/CheckCircle";
import { importantToKnow } from "@/app/_ui/content/content";
import { Button } from "@/app/_ui/components/Button";

interface IntroProps {
  onGetStartedClick: () => void;
}

export const Intro = ({ onGetStartedClick }: IntroProps) => {
  return (
    <div className="flex flex-col flex-1 w-full px-5 py-8 mx-auto overflow-hidden lg:max-w-4xl ">
      <Image
        src="/krishna1.svg"
        width={343}
        height={413}
        className="absolute -bottom-2 right-0 z-0 object-cover pointer-events-none w-[343px] h-[413px] lg:w-[500px] lg:h-[600px]"
        alt="Doodles Illustration"
      />
      <div className="z-10 flex flex-col items-center flex-1 w-full">
        <h1 className="text-brand-cerulean-blue font-bold text-[32px] sm:text-4xl">
          Gita Quiz
        </h1>

        <h3 className="text-black font-bold text-2xl mt-[51.55px] sm:text-3xl">
          Things to know before you start:
        </h3>

        <div className="flex flex-col items-start mt-5 space-y-5 sm:mt-10">
          {importantToKnow.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle />
              <p className="text-sm font-normal text-brand-storm-dust sm:text-xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="z-10 w-full"
        block
        size={"small"}
        onClick={onGetStartedClick}
      >{`Let's Get Started`}</Button>
    </div>
  );
};