import type { Story } from '@storybook/react';

import { Sample as SampleComponent } from './Sample';

export default {
  title: 'Sample'
} as any;

const Template: Story<any> = ({ name, sharedStyle }) => (
  <div>
    <SampleComponent name={name} sharedStyle={sharedStyle}/>
  </div>
);

export const Sample = Template.bind({});

Sample.argTypes = {
  sharedStyle: {
    options: ['battleshipGrey', 'coolGrey', 'lightGrey', 'coralPink', 'darkSkyBlue'],
    control: { type: 'radio' }
  }
}

Sample.args = {
  name: 'Sample',
  sharedStyle: 'battleshipGrey'
};
