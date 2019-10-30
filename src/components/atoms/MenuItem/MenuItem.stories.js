import React from 'react';
import { storiesOf } from '@storybook/react';
import projectsIcon from 'assets/images/icons/projects.svg';
import tasksIcon from 'assets/images/icons/tasks.svg';
import usersIcon from 'assets/images/icons/users.svg';
import MenuItem from './MenuItem';

storiesOf('MenuItem', module)
  .add('Projects', () => <MenuItem className="active"><img src={projectsIcon} alt=""/>Projects</MenuItem>)
  .add('Tasks', () => <MenuItem><img src={tasksIcon} alt=""/>Tasks</MenuItem>)
  .add('Users', () => <MenuItem><img src={usersIcon} alt=""/>Users</MenuItem>);