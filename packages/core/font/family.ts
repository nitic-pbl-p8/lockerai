import { type fonts } from '@lockerai/design-token';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Fira_Code, Noto_Sans } from 'next/font/google';

// HACK: Since SWC forces argument properties to be written in literals, fonts cannot be used interchangeably.
// Therefore, the consistency of variable is only ensured by generics.
export const firaCode = Fira_Code<(typeof fonts)['fira-code']['variable']>({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const notoSans = Noto_Sans<(typeof fonts)['noto-sans']['variable']>({
  weight: ['400', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-noto-sans',
});

export const getFontVariables = (fontsWithVariable: NextFontWithVariable[]) => fontsWithVariable.map((font) => font.variable).join(' ');
