import { TCurrencyFormatProps } from "./types";

export function formatCurrency({
  value,
  locale = "en-US",
  currency = "USD",
  round = false,
  minFractionDigits,
  maxFractionDigits,
  compact = false,
  style = "currency",
}: TCurrencyFormatProps) {
  // Handle null/undefined
  if (value === null || value === undefined) return "";

  const number = Number(value);

  // If invalid or not finite, return original input
  if (!isFinite(number)) return String(value);

  // Format options
  const options: Intl.NumberFormatOptions & {
    notation?: "standard" | "scientific" | "engineering" | "compact";
  } = {
    style: style as Intl.NumberFormatOptions["style"],
    notation: compact ? "compact" : "standard",
    minimumFractionDigits: round ? 0 : minFractionDigits,
    maximumFractionDigits: round ? 0 : maxFractionDigits,
  };

  // Only set currency if style is "currency"
  if (style === "currency") {
    options.currency = currency;
  }

  try {
    return new Intl.NumberFormat(locale, options).format(number);
  } catch (error) {
    console.error("Number formatting error:", error);
    return String(value);
  }
}
