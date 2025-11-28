import React, { useEffect, useMemo, useState } from "react";
import {
  MinusIcon,
  PlusIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MediumIcon,
  PlayIcon,
  TikTokIcon,
  XIcon,
} from "@/assets/icons";

export type IconName =
  | "minus"
  | "plus"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "medium"
  | "play"
  | "tiktok"
  | "x";

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: IconName;
  color?: string;
  /**
   * Pass in the name of a globalConstant fontSize value or a css value. Defaults to `bodyBig` size.
   */
  size?: string;
  hover?: boolean;
  hoverColor?: string;
}

const NAME_TO_ICON_MAP: Record<IconName, string> = {
  minus: MinusIcon,
  plus: PlusIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  play: PlayIcon,
  tiktok: TikTokIcon,
  x: XIcon,
};

const Icon: React.FC<IconProps> = ({
  name,
  color,
  hover,
  hoverColor,
  ...rest
}) => {
  const IconSVG = useMemo(() => NAME_TO_ICON_MAP[name], [name]);

  if (!IconSVG) console.warn(`Invalid icon name: ${name}`);

  const [icon, setIcon] = useState(
    <IconSVG fill={color} style={{ transition: "fill 0.3s ease" }} {...rest} />
  );

  useEffect(() => {
    setIcon(
      <IconSVG
        fill={color}
        style={{ transition: "fill 0.3s ease" }}
        {...rest}
      />
    );
  }, [color]); // without this, icons will not re-render when the navbar colour changes

  if (hover && IconSVG) {
    return (
      <i
        onMouseEnter={() =>
          setIcon(
            <IconSVG
              fill={hoverColor}
              style={{ transition: "fill 0.3s ease" }}
              {...rest}
            />
          )
        }
        onMouseLeave={() =>
          setIcon(
            <IconSVG
              fill={color}
              style={{ transition: "fill 0.3s ease" }}
              {...rest}
            />
          )
        }
      >
        {icon}
      </i>
    );
  }

  return IconSVG ? (
    <i>
      <IconSVG
        fill={color}
        style={{ transition: "fill 0.3s ease" }}
        {...rest}
      />
    </i>
  ) : null;
};

export default Icon;

