# reorder-list
> Reorder items by ids.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/reorder-list
```

## usage
```js
import reorderList from '@jswork/reorder-list';

const steps = [
  { id: 301, title: '安装包', step: 1 },
  { id: 302, title: '添加 jsw-presets 工具', step: 2 },
  { id: 303, title: '更新 astrojs', step: 3 },
  { id: 304, title: '添加 image-zoom 插件', step: 4 },
  { id: 305, title: '处理一个报错', step: 5 }
];

const ids = [305, 302, 301, 303, 304]; // by id
const indexes = [4, 1, 0, 2, 3]; // by index

const result1 = reorderList(steps, ids, { field: 'id' });
const result2 = reorderList(steps, indexes);
console.log(result1);
console.log(result2);

/*
  const result = [
    { id: 305, title: '处理一个报错', step: 5 },
    { id: 302, title: '添加 jsw-presets 工具', step: 2 },
    { id: 301, title: '安装包', step: 1 },
    { id: 303, title: '更新 astrojs', step: 3 },
    { id: 304, title: '添加 image-zoom 插件', step: 4 },
  ]
*/
```

## types
```ts
/// <reference types="@jswork/reorder-list/global.d.ts" />
```

## license
Code released under [the MIT license](https://github.com/afeiship/reorder-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/reorder-list
[version-url]: https://npmjs.org/package/@jswork/reorder-list

[license-image]: https://img.shields.io/npm/l/@jswork/reorder-list
[license-url]: https://github.com/afeiship/reorder-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/reorder-list
[size-url]: https://github.com/afeiship/reorder-list/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/reorder-list
[download-url]: https://www.npmjs.com/package/@jswork/reorder-list
