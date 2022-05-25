import type { Story } from '@storybook/react';

import { Styles as StylesComponent } from './Styles';

export default {
  title: 'Styles'
} as any;

const Template: Story<any> = () => (
  <div>
    <StylesComponent />
  </div>
);

export const Styles = Template.bind({});
