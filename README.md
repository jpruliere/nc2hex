# nc2hex

Converts a CSS named color from [this list](https://www.w3.org/TR/css-color-4/#named-colors) to its hexadecimal value.

Returns `null` if the color is not one of those.

## Examples

```js
const nc2hex = require('nc2hex');

console.log(nc2hex('rebeccapurple')); // #663399
console.log(nc2hex('darkgreen')); // #006400
console.log(nc2hex('lightyellow')); // #ffffe0
console.log(nc2hex('eighth')); // null
```