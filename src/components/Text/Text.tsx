import React from "react";
import { cn } from "utils";
import { FontSize, FontWeight } from "types";

type TextProps = React.PropsWithChildren & {
  className?: string;
  size?: FontSize;
  weight?: FontWeight;
  inline?: boolean;
  onClick?: () => void;
};

export const Text = React.memo(function Text({
  className,
  size = "base",
  weight = "normal",
  inline = false,
  onClick,
  children,
}: TextProps) {
  const _className = React.useMemo(() => {
    const fontWeightLookup: Record<FontWeight, string> = {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    const fontSizeLookup: Record<FontSize, string> = {
      base: "text-base",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-lg",
      lg: "text-2xl",
      xl: "text-3xl",
      xxl: "text-4xl",
    };

    return cn(
      fontSizeLookup[size],
      fontWeightLookup[weight],
      inline && "inline",
      className
    );
  }, [size, weight, inline, className]);

  return (
    <p className={_className} onClick={onClick}>
      {children}
    </p>
  );
});
