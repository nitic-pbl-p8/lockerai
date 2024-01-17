import { CalendarIcon } from '@lockerai/core/icon/calendar-icon';
import Image from 'next/image';

interface Props {
  isRetrieved: boolean;
}

export const LostItemDetail: React.FC<Props> = (Props) => {
  if (Props.isRetrieved) {
    return (
      <div className="flex w-[384px] flex-col gap-3">
        <Image
          //public/tmpicon.pngを一時的に使用
          src="/tmpphone.png"
          width={384}
          height={240}
          alt="user-icon"
          className="rounded-3xl"
        ></Image>
        <p className="w-fit items-center rounded-full border border-solid border-cyan-7 bg-cyan-3 px-4 py-2 text-base text-cyan-11">retrieved</p>
        <p className="truncate text-2xl font-bold text-sage-11">phone, iPhone 15, white, at station platform, around 5 o’clock</p>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-[24px] w-[24px]" />
          <p className="text-xl text-sage-11">Oct. 13, 2023 15:32 reported</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-[384px] flex-col gap-3">
        <Image
          //public/tmpicon.pngを一時的に使用
          src="/tmpphone.png"
          width={384}
          height={240}
          alt="user-icon"
          className="rounded-3xl"
        ></Image>
        <p className="w-fit items-center rounded-full border border-solid border-purple-7 bg-purple-3 px-4 py-2 text-base text-purple-11">
          Delivered
        </p>
        <p className="truncate text-2xl font-bold text-sage-11">phone, iPhone 15, white, at station platform, around 5 o’clock</p>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-[24px] w-[24px]" />
          <p className="text-xl text-sage-11">Oct. 13, 2023 15:32 reported</p>
        </div>
      </div>
    );
  }
};
