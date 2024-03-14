import React from "react";
import { cn } from "utils";
import { SpacingSize, JustifyContent, AlignItems } from "types";

type FlexDirection = "row" | "column" | "rowReverse" | "columnReverse";

type FlexProps = React.PropsWithChildren & {
  className?: string;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  gap?: SpacingSize;
};

export const Flex = React.memo(function Flex({
  className,
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "normal",
  gap = "none",
  children,
}: FlexProps) {
  const _className = React.useMemo(() => {
    const flexDirectionLookup: Record<FlexDirection, string> = {
      row: "flex-row",
      column: "flex-col",
      rowReverse: "flex-row-reverse",
      columnReverse: "flex-col-reverse",
    };

    const justifyContentLookup: Record<JustifyContent, string> = {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    const alignItemsLookup: Record<AlignItems, string> = {
      normal: "items-[normal]",
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    };

    const gapLookup: Record<SpacingSize, string> = {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-5",
      lg: "gap-10",
      xl: "gap-14",
      xxl: "gap-20",
    };

    return cn(
      "flex",
      flexDirectionLookup[flexDirection],
      justifyContentLookup[justifyContent],
      alignItemsLookup[alignItems],
      gapLookup[gap],
      className
    );
  }, [className, flexDirection, justifyContent, alignItems, gap]);

  return <div className={_className}>{children}</div>;
});
