import React from 'react';
import { storiesOf } from '@storybook/react';
import ProjectCard from './ProjectCard';

const styles = {
  margin: "50px"
}
const SidebarDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf('ProjectCard', module)
  .addDecorator(SidebarDecorator)
  .add('Default', () => <ProjectCard/>);