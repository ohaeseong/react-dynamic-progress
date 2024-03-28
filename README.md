![](https://images.velog.io/images/alskt0419/post/7517c720-e26c-4b7c-82f0-c16fb1652ea2/progress_preview.gif)

https://www.npmjs.com/package/@ohaeseong/react-progress-bar

## Install

```
  yarn add @ohaeseong/react-progress-bar
```

## Usage

```
'use client' // If you want to use this package in Next.js, you have to configure it to render only on the client side.
import React from 'react';
import { ProgressBar } from '@ohaeseong/react-progress-bar';

function App() {

  return <ProgressBar value={80} />;
}

```

## Props

| Name                     | Type                                                | Default       | Description                                 |
| ------------------------ | --------------------------------------------------- | ------------- | ------------------------------------------- |
| value (required)         | number(0 - 100)                                     | .             | Percentage of completed progress bar value. |
| width                    | string                                              | auto          | Width of the bar                            |
| height                   | string                                              | 15px          | Height of the bar                           |
| margin                   | string                                              | none          | Margin of the bar                           |
| color                    | string (color code)                                 | #E5E7E9       | Color of the "non-completed" bar            |
| trackColor               | string (color code)                                 | #706af3       | Color of the completed bar                  |
| borderRadius             | string                                              | 3px           | Border radius of the bar                    |
| labelColor               | string (color code)                                 | #f9f9f9       | Label color of the bar                      |
| labelSize                | string (1rem, 12px ...)                             | 0.8rem        | Label size of the bar                       |
| labelVisible             | boolean (true === show label, false === hide label) | false         | Visibility of the label                     |
| transitionDuration       | string (1s, 0.5s ...)                               | 1s            | Duration of the width transition            |
| transitionTimingFunction | string (ease, ease-in, ease-in-out ...)             | ease-in-out   | Timing function of the width transition     |
| labelAlignment           | string (top, bottom, null === center)               | null (center) | Position of the label                       |
