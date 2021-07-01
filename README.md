![](https://images.velog.io/images/alskt0419/post/7517c720-e26c-4b7c-82f0-c16fb1652ea2/progress_preview.gif)

react progress bar

# Install 
```
  yarn add @ohaeseong/react-progress-bar
```

# Usage

```
import React from 'react';
import { ProgressBar } from '@ohaeseong/react-progress-bar';

function App() {

  return <ProgressBar value={80} />;
}

```

# Props
| Name | Type | Default | Description |
| ------ | --- | --- | ------- |
| value (required)|  number(0 - 100)    |.    |         |
| width | string |  auto  | Default |
| height | string |  15px  | Default |
| margin | string |  none  | Default |
| bgColor | string (color code) |  #E5E7E9  | Default |
| progressColor | string (color code) |  #706af3  | Default |
| borderRadius | string |  3px  | Default |
| labelColor |  string (color code) |  #f9f9f9  | Default |
| labelSize | string (1rem, 12px ...) |  0.8rem  | Default |
| isLabelVisible | boolean (true === show labe, false === hide labe) |  false  | Default |
| transitionDuration | string (1s, 0.5s ...) |  1s  | Default ||    progressColor   |.    |.    | Default |
| transitionTimingFunction |string (ease, ease-in, ease-in-out ...) |.    | Default |
| labelAlignment | string (top, bottom, null === center) |.    | Default |





