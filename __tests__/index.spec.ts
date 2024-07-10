import reorderList from '../src';

describe('api.basic', () => {
  test('order by id and index', () => {
    const steps = [
      { id: 301, title: '安装包', step: 1 },
      { id: 302, title: '添加 jsw-presets 工具', step: 2 },
      { id: 303, title: '更新 astrojs', step: 3 },
      { id: 304, title: '添加 image-zoom 插件', step: 4 },
      { id: 305, title: '处理一个报错', step: 5 },
    ];

    const ids = [305, 302, 301, 303, 304]; // by id
    const indexes = [4, 1, 0, 2, 3]; // by index
    const result = [
      { id: 305, title: '处理一个报错', step: 5 },
      { id: 302, title: '添加 jsw-presets 工具', step: 2 },
      { id: 301, title: '安装包', step: 1 },
      { id: 303, title: '更新 astrojs', step: 3 },
      { id: 304, title: '添加 image-zoom 插件', step: 4 },
    ]

    const res1 = reorderList(steps, ids, { field: 'id' });
    const res2 = reorderList(steps, indexes);

    expect(res1).toEqual(result);
    expect(res2).toEqual(result);
  });
});
