import React from 'react';

import { Label } from '../components/2020-740';

export default {
  title: 'Label',
  component: Label,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Label {...args} />;
}

export const Base = Template.bind({});
