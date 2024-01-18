import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type ImageIconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'children'>;

export const ImageIcon = ({ ...props }: ImageIconProps): ReactNode => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_200_7643)">
      <path d="M125 66.667H125.083" stroke="#1B543A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M104.167 175H50C43.3696 175 37.0107 172.366 32.3223 167.678C27.6339 162.989 25 156.63 25 150V50C25 43.3696 27.6339 37.0107 32.3223 32.3223C37.0107 27.6339 43.3696 25 50 25H150C156.63 25 162.989 27.6339 167.678 32.3223C172.366 37.0107 175 43.3696 175 50V104.167"
        stroke="#1B543A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 133.333L66.6667 91.6662C74.4 84.2245 83.9333 84.2245 91.6667 91.6662L125 125"
        stroke="#1B543A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M116.667 116.667L125 108.333C130.583 102.967 137.083 101.467 143.183 103.833"
        stroke="#1B543A"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M133.333 158.333H183.333" stroke="#1B543A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M158.333 133.333V183.333" stroke="#1B543A" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_200_7643">
        <rect width="200" height="200" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
