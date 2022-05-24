import type { Story } from '@storybook/react';

import { Sample as SampleComponent } from './Sample';

export default {
  title: 'Sample'
} as any;

const Template: Story<any> = ({ name }) => (
  <div>
    <SampleComponent name={name} />
  </div>
);

export const Sample = Template.bind({});

Sample.args = {
  name: 'Sample'
};
