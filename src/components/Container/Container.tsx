import React from "react";
import { cn } from "utils";
import { ThemeSize } from "types";

type Color = "none" | "blue" | "white";
type MaxWidth = "none" | "2xl" | "xl" | "lg";
type Padding = "none" | ThemeSize;

type ContainerProps = React.PropsWithChildren & {
  className?: string;
  color?: Color;
  maxWidth?: MaxWidth;
  paddingX?: Padding;
  paddingY?: Padding;
};

export const Container = React.memo(function Container({
  className,
  color = "none",
  maxWidth = "none",
  paddingX = "none",
  paddingY = "none",
  children,
}: ContainerProps) {
  const { bgClassName, maxWidthClassName } = React.useMemo(() => {
    const colorLookup: Record<Color, string> = {
      none: "bg-transparent",
      blue: "bg-primaryBlue",
      white: "bg-white",
    };

    const maxWidthLookup: Record<MaxWidth, string> = {
      none: "w-full",
      "2xl": "max-w-screen-2xl",
      xl: "max-w-screen-xl",
      lg: "max-w-screen-lg",
    };

    const paddingXLookup: Record<Padding, string> = {
      none: "px-0",
      xs: "px-4",
      sm: "px-8",
      md: "px-12",
      lg: "px-16",
      xl: "px-20",
      xxl: "px-28",
    };

    const paddingYLookup: Record<Padding, string> = {
      none: "py-0",
      xs: "py-4",
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-20",
      xxl: "py-28",
    };

    const bgClassName = cn(colorLookup[color], className);
    const maxWidthClassName = cn(
      "m-auto",
      maxWidthLookup[maxWidth],
      paddingXLookup[paddingX],
      paddingYLookup[paddingY]
    );

    return { bgClassName, maxWidthClassName };
  }, [className, color, maxWidth, paddingX, paddingY]);

  return (
    <section className={bgClassName}>
      <div className={maxWidthClassName}>{children}</div>
    </section>
  );
});
