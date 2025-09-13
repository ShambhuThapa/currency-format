export type TCurrencyFormatProps = {
  value: any;
  currency?: string;
  locale?: string;
  round?: boolean;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  compact?: boolean;
  style?: "currency" | "decimal" | "percent";
};
