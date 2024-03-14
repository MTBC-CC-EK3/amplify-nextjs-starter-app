import React from "react";
import { cn } from "utils";

type Variant = "fill" | "outline";
type TextVariant = "blue" | "gold" | "white";

type BoxButtonProps = React.PropsWithChildren & {
  className?: string;
  variant?: Variant;
  textVariant?: TextVariant;
  disabled?: boolean;
  onClick?: () => void;
};

export const BoxButton = React.memo(function BoxButton({
  className,
  variant = "fill",
  textVariant = "blue",
  disabled = false,
  onClick,
  children,
}: BoxButtonProps) {
  const _className = React.useMemo(() => {
    const variantLookup: Record<Variant, string> = {
      fill: " bg-primaryGold",
      outline: "bg-transparent",
    };

    const textVariantLookup: Record<TextVariant, string> = {
      blue: " text-primaryBlue",
      gold: "text-primaryGold",
      white: "text-white",
    };

    return cn(
      "px-6 py-3 font-medium text-sm tracking-[5px] border-2 border-primaryGold",
      variantLookup[variant],
      textVariantLookup[textVariant],
      disabled && "bg-gray-100 text-primaryGray border-0 cursor-not-allowed",
      className
    );
  }, [className, variant, textVariant, disabled]);

  return (
    <button
      className={_className}
      onClick={() => !disabled && onClick && onClick()}
    >
      {children}
    </button>
  );
});
