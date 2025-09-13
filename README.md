# 📊 currency-format-js

A lightweight and flexible number formatting utility for JavaScript and TypeScript.

Supports:

- ✅ Basic number formatting with commas
- ✅ Custom decimal precision
- ✅ Optional rounding
- ✅ Currency format (e.g $3 )
- ✅ Compact formats (e.g., 1.2K, 3.4M)
- ✅ Percent formatting (e.g., 0.85 → 85%)
- ✅ Graceful handling of invalid or edge-case inputs

---

## 📦 Installation

```bash
npm install currency-format-js
# or
yarn add currency-format-js
```

Usage
```
import { formatCurrency } from "currency-format-js";
```

## Usage Examples

```javascript
const { formatCurrency } = require('currency-format-js');

// Basic currency formatting
console.log(formatCurrency({ value: 1234.56, currency: "USD" }));
// Output: $1,234.56

console.log(formatCurrency({ value: 123456789, currency: "INR" }));
// Output: ₹12,34,56,789

console.log(formatCurrency({ value: 123456789, currency: "USD", compact: true }));
// Output: $123M

console.log(formatCurrency({ value: 0.1234, currency: "JPY" }));
// Output: ¥0

// Different currencies
console.log(formatCurrency({ value: 1500, currency: "EUR" }));
// Output: €1,500.00


console.log(formatCurrency({ value: 1000000, currency: "CNY" }));
// Output: CN¥1,000,000.00

// Fraction digits control
console.log(formatCurrency({ value: 1234.5678, currency: "USD", maxFractionDigits: 2 }));
// Output: $1,234.57

console.log(formatCurrency({ value: 1234.5, currency: "USD", minFractionDigits: 2 }));
// Output: $1,234.50

// Rounding
console.log(formatCurrency({ value: 1234.567, currency: "USD", round: true }));
// Output: $1,235

// Compact notation
console.log(formatCurrency({ value: 1000000, currency: "USD", compact: true }));
// Output: $1M

console.log(formatCurrency({ value: 1500000, currency: "USD", compact: true }));
// Output: $1.5M

console.log(formatCurrency({ value: 1234567890, currency: "USD", compact: true }));
// Output: $1.2B

// Different locales
console.log(formatCurrency({ value: 1234.56, currency: "EUR", locale: "de-DE" }));
// Output: 1.234,56 €

console.log(formatCurrency({ value: 1234.56, currency: "EUR", locale: "fr-FR" }));
// Output: 1 234,56 €

// Non-currency number formatting
console.log(formatCurrency({ value: 1234.56, style: "decimal" }));
// Output: 1,234.56

console.log(formatCurrency({ value: 0.456, style: "percent" }));
// Output: 45.6%

// Custom fraction digits with rounding
console.log(formatCurrency({
  value: 1234.5678,
  currency: "USD",
  minFractionDigits: 1,
  maxFractionDigits: 3
}));
// Output: $1,234.568

// Large numbers
console.log(formatCurrency({ value: 123456789012345, currency: "USD" }));
// Output: $123,456,789,012,345

// Small numbers with specific formatting
console.log(formatCurrency({ value: 0.001234, currency: "USD", maxFractionDigits: 6 }));
// Output: $0.001234
```
## 👨‍💻 Author

Built with ❤️ by [Shambhu Thapa](https://www.shambhuthapa.com.np/)

