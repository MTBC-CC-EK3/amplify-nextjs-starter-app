import React from "react";
import { cn } from "utils";
import { GridColumns } from "types";

type GridItemProps = React.PropsWithChildren & {
  className?: string;
  columnSpan?: GridColumns;
};

export const GridItem = React.memo(function GridItem({
  className,
  columnSpan = 1,
  children,
}: GridItemProps) {
  const _className = React.useMemo(() => {
    const columnSpanLookup: Record<GridColumns, string> = {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
    };

    return cn(columnSpanLookup[columnSpan], className);
  }, [className, columnSpan]);

  return <div className={_className}>{children}</div>;
});
