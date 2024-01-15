import { Image } from '@lockerai/core/component/image';
import { type ComponentPropsWithoutRef } from 'react';

type PinnedTaskSectionProps = Omit<ComponentPropsWithoutRef<'section'>, 'children' | 'className'>;
export const PinnedTask = ({ ...props }: PinnedTaskSectionProps) => (
  <section className="flex flex-col items-center gap-8" {...props}>
    <div className="flex w-[860px] flex-col items-center gap-5">
      <h1 className="w-fit text-5xl font-bold text-sage-12">
        You are currently <span className="text-purple-11">delivering</span>
      </h1>
      <p className="text-2xl text-sage-11">
        You are in the process of delivering a lost item. Please go to the nearest the Locker and store the lost item.
      </p>
    </div>

    <div className="flex justify-center gap-8">
      <div>
        <Image
          // public/tmpphone.pngを一時的に使用
          src="/tmpphone.png"
          width={480}
          height={320}
          alt="phone-image"
          className="rounded-3xl"
        />
      </div>
      <div className="flex h-[190px] w-[760px] flex-col gap-8">
        <p className="w-fit text-3xl font-bold text-sage-12">phone, iPhone 15, white, at station platform, around 5 o’clock</p>
        <div className="flex gap-4">
          <div className="flex items-center justify-center">
            <Image
              // public/tmpicon.pngを一時的に使用
              src="/tmpicon.png"
              width={40}
              height={40}
              alt="user-icon"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="w-fit text-xl text-sage-12">
                shio3616<span className="text-sage-11">(you)</span>
              </p>
            </div>
            <div>
              <p className="w-fit text-xl text-sage-11">Oct. 13, 2023 15:32 reported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
