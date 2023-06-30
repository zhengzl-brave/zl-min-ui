---
nav:
  path: /components
group:
  title: '基础组件'
  order: 1
---

## Button-按钮

Demo:

### 普通按钮
```tsx
import React from 'react';
import { Button } from 'zl-min-ui';

export default () => <Button text="普通按钮" style={{width: 200}} />;
```

### 高亮按钮
```tsx
import React from 'react';
import { Button } from 'zl-min-ui';

export default () => <Button text="高亮按钮" style={{width: 200}} type="highlight" />
```

### 禁用按钮
```tsx
import React from 'react';
import { Button } from 'zl-min-ui';

export default () => <Button text="禁用按钮" style={{width: 200}} disabled />
```
