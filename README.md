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
| value (required)|  number( 0 - 100)    |.    |         |
| width | string |.    | Default |
| height | string |.    | Default |
| margin | string |.    | Default |
| bgColor | string |.    | Default |
| progressColor | string |.    | Default |
| borderRadius | string |.    | Default |
| labelColor |  string |.    | Default |
| labelSize | string |.    | Default |
| isLabelVisible | boolean (true === show labe, false === hide labe) |.    | Default |
| transitionDuration | string (1s, 0.5s ...) |.    | Default ||    progressColor   |.    |.    | Default |
| transitionTimingFunction |string (ease, ease-in, ease-in-out ...) |.    | Default |
| labelAlignment | string (top, bottom, null === center) |.    | Default |





