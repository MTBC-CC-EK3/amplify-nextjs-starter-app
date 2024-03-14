import React from "react";
import { cn } from "utils";
import { SpacingSize, GridColumns, AlignItems } from "types";

type JustifyItems = "start" | "end" | "center" | "stretch";

type GridProps = React.PropsWithChildren & {
  className?: string;
  columns?: GridColumns;
  justifyItems?: JustifyItems;
  alignItems?: AlignItems;
  gap?: SpacingSize;
};

export const Grid = React.memo(function Grid({
  className,
  columns = 1,
  justifyItems = "stretch",
  alignItems = "normal",
  gap = "none",
  children,
}: GridProps) {
  const _className = React.useMemo(() => {
    const columnsLookup: Record<GridColumns, string> = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
    };

    const justifyItemsLookup: Record<JustifyItems, string> = {
      start: "justify-items-start",
      end: "justify-items-end",
      center: "justify-items-center",
      stretch: "justify-items-stretch",
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
      xl: "gap-15",
      xxl: "gap-20",
    };

    return cn(
      "grid",
      columnsLookup[columns],
      justifyItemsLookup[justifyItems],
      alignItemsLookup[alignItems],
      gapLookup[gap],
      className
    );
  }, [className, columns, justifyItems, alignItems, gap]);

  return <div className={_className}>{children}</div>;
});
