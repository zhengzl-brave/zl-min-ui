---
nav:
  path: /components
group:
  title: '主题'
  order: 2
---

## ThemeToggle-主题定制

```tsx
import React from 'react';
import { Button, ThemeToggle, Card } from 'zl-min-ui'

export default () => {
  return (
    <div className="demo-body">
      <div className="horizon-center">
        <Button className="highlight" style={{ width: 200 }} text="主题颜色"></Button>
      </div>
      <Card />
      <div className="horizon-center">
        <ThemeToggle />
      </div>
    </div>
  )
}
```

