# nc2hex

Converts a CSS named color from [this list](https://www.w3.org/TR/css-color-4/#named-colors) to its hexadecimal value.

Returns `null` if the color is not one of those.

## Examples

```js
console.log(colorify('rebeccapurple')); // #663399
console.log(colorify('darkgreen')); // #006400
console.log(colorify('lightyellow')); // #ffffe0
console.log(colorify('eighth')); // null
```