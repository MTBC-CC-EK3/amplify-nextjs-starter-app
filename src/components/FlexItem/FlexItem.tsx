import React from "react";
import { cn } from "utils";

type FlexGrow = 0 | 1 | 2 | 3 | 4 | 5;

type FlexItemProps = React.PropsWithChildren & {
  className?: string;
  flexGrow?: FlexGrow;
};

export const FlexItem = React.memo(function FlexItem({
  className,
  flexGrow = 0,
  children,
}: FlexItemProps) {
  const _className = React.useMemo(() => {
    const flexGrowLookup: Record<FlexGrow, string> = {
      0: "flex-grow-0",
      1: "flex-grow-1",
      2: "flex-grow-2",
      3: "flex-grow-3",
      4: "flex-grow-4",
      5: "flex-grow-5",
    };

    return cn(flexGrowLookup[flexGrow], className);
  }, [className, flexGrow]);

  return <div className={_className}>{children}</div>;
});
