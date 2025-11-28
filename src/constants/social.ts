import { IconName } from "@/components/base/Icon";

export enum SocialPlatforms {
  INSTA = "Instagram",
  FACEBOOK = "Facebook",
  X = "X",
  LINKEDIN = "LinkedIn",
  TIKTOK = "TikTok",
  MEDIUM = "Medium",
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
  [SocialPlatforms.X]: {
    icon: "x",
    link: "https://www.x.com/coderit",
    fathomEventName: "Social: X icon clicked",
  },
  [SocialPlatforms.FACEBOOK]: {
    icon: "facebook",
    link: "https://www.facebook.com/coderit/",
    fathomEventName: "Social: Facebook icon clicked",
  },
  [SocialPlatforms.LINKEDIN]: {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/coderit",
    fathomEventName: "Social: LinkedIn icon clicked",
  },
  [SocialPlatforms.TIKTOK]: {
    icon: "tiktok",
    link: "https://www.tiktok.com/@coderit",
    fathomEventName: "Social: TikTok icon clicked",
  },
  [SocialPlatforms.MEDIUM]: {
    icon: "medium",
    link: "https://medium.com/@coderit",
    fathomEventName: "Social: Medium icon clicked",
  },
};

