## Licence
Liscensed under the BSD License (BSD-LICENSE.txt)

## Examples of use:
```javascript
$('.goods-container').ClassBySize([
	{maxWidth: 600, className: 'goods-3'},
	{minWidth: 600, maxWidth: 800, className: 'goods-4'},
	{minWidth: 800, maxWidth: 1000, className: 'goods-5'},
	{minWidth: 1000, className: 'goods-6'},
	{}
]);
$(window).ClassBySize([
	{maxWidth: 800, className: 'small-width', applyTo: 'body'},
	{maxHeight: 800, className: 'small-height', applyTo: 'body'},
]);
```

