import React from 'react';
import { storiesOf } from '@storybook/react';
import SidebarTop from './SidebarTop';

const styles = {
  maxWidth: '300px'
}
const SidebarDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('SidebarTop', module)
  .addDecorator(SidebarDecorator)
  .add('Default', () => <SidebarTop/>);