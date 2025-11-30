import { IconName } from "@/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  LINKEDIN = "LinkedIn",

}

type TSocialInfo = {
  icon: IconName;
  link: string;
  fathomEventName: string;
};

export const SOCIALS: Record<SocialPlatforms, TSocialInfo> = {
  [SocialPlatforms.INSTA]: {
    icon: "instagram",
    link: "https://www.instagram.com/coderit",
    fathomEventName: "Social: Instagram icon clicked",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/coderit",
    fathomEventName: "Social: LinkedIn icon clicked",
  },
};

