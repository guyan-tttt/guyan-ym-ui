测试案例：按钮样式
测试名称：测试按钮的类型样式

测试描述：验证按钮组件是否支持主按钮、成功、警告、危险、信息等不同类型的样式。
```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render different types of button styles', async () => {
  const wrapper = mount(Button, {
    props: { type: 'primary' }
  });
  expect(wrapper.find('button').classes()).toContain('primary');

  wrapper.setProps({ type: 'success' });
  expect(wrapper.find('button').classes()).toContain('success');

  // 重复上述步骤，测试其他类型...
});
```

测试名称：测试按钮的朴素、圆角、圆形样式

测试描述：验证按钮组件是否支持朴素、圆角、圆形等不同样式。
测试代码：
```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render button with different shapes', async () => {
  const wrapper = mount(Button, {
    props: { shape: 'plain' }
  });
  expect(wrapper.find('button').classes()).toContain('plain');

  wrapper.setProps({ shape: 'round' });
  expect(wrapper.find('button').classes()).toContain('round');

  wrapper.setProps({ shape: 'circle' });
  expect(wrapper.find('button').classes()).toContain('circle');
});
```

测试名称：测试按钮的禁用状态

测试描述：验证按钮组件是否能够正确显示禁用状态。
测试代码
```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render button in disabled state', async () => {
  const wrapper = mount(Button, {
    props: { disabled: true }
  });
  expect(wrapper.find('button').attributes('disabled')).toBe('true');
});
```
测试名称：测试按钮的加载中状态

测试描述：验证按钮组件是否能够正确显示加载中状态。
测试代码：
```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render button in loading state', async () => {
  const wrapper = mount(Button, {
    props: { loading: true }
  });
  expect(wrapper.find('button').classes()).toContain('loading');
});
```


测试案例：按钮尺寸和图标
测试名称：测试按钮的尺寸调整

测试描述：验证按钮组件是否支持不同尺寸的调整。

```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render button with different sizes', async () => {
  const wrapper = mount(Button, {
    props: { size: 'small' }
  });
  expect(wrapper.find('button').classes()).toContain('small');

  wrapper.setProps({ size: 'medium' });
  expect(wrapper.find('button').classes()).toContain('medium');

  wrapper.setProps({ size: 'large' });
  expect(wrapper.find('button').classes()).toContain('large');
});
```
测试名称：测试按钮的图标自定义

测试描述：验证按钮组件是否支持图标的自定义。
测试代码
```js
import { mount } from 'vitest';
import Button from '@/components/Button';

it('should render button with custom icon', async () => {
  const wrapper = mount(Button, {
    props: { icon: 'custom-icon' }
  });
  expect(wrapper.find('use').attributes('href')).toBe('#custom-icon');
});
```
测试案例：按钮组
测试名称：测试按钮组的组合使用
测试描述：验证按钮组是否能够正确组合使用。
测试代码
```js
import { mount } from 'vitest';
import ButtonGroup from '@/components/ButtonGroup';
import Button from '@/components/Button';

it('should render button group with multiple buttons', async () => {
  const wrapper = mount(ButtonGroup, {
    slots: {
      default: [Button, Button]
    }
  });
  expect(wrapper.findAll('button')).toHaveLength(2);
});
```
