import PropTypes from 'prop-types'
import React from 'react';
// import styles from './Form.module.scss';
import styled from 'styled-components';
import { MDBBtn } from "mdbreact";
import FormItem from "../../atoms/FormItem/FormItem";
import FormRadio from "../../atoms/FormRadio/FormRadio";
import withContext from '../../../hoc/withContext';

const types = {
  projects: 'projects',
  tasks: 'tasks',
  users: 'users'
}

const descriptions = {
  projects: 'super project',
  tasks: 'difficult task',
  users: 'smart user'
}

const RadioWrapper = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 30px;
`;

const SubmitBtn = styled(MDBBtn)`
  margin: 15px 0 !important;
`;
const Header = styled.h4`
  font-weight: 400;
`;

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typeAddItem: props.pageContext,
      name: '',
      type: '',
      goalTime: '',
      maxTime: '',
      taskTime: '',
      email: ''
    }
  }


  handleRadioButtonChange = (type) => {
    this.setState({
      typeAddItem: type
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    const {typeAddItem, name, type, goalTime, maxTime, taskTime, email} = this.state;
    return(
          <form
            autoComplete="off"
            // onSubmit={(e) => context.addItem(e, this.state)}
            // className={styles.addItemForm}
          >
            <Header>Add {descriptions[typeAddItem]}</Header>
            <RadioWrapper>
              <FormRadio
                id={types.projects}
                checked={typeAddItem === types.projects}
                changeFn={() => {this.handleRadioButtonChange(types.projects)}}
              >Project</FormRadio>

              <FormRadio
                id={types.tasks}
                checked={typeAddItem === types.tasks}
                changeFn={() => {this.handleRadioButtonChange(types.tasks)}}
              >Task</FormRadio>

              <FormRadio
                id={types.users}
                checked={typeAddItem === types.users}
                changeFn={() => {this.handleRadioButtonChange(types.users)}}
              >User</FormRadio>
            </RadioWrapper>
            <FormItem
              // onChange={this.handleInputChange}
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            {typeAddItem === types.projects ?
              <>
                <FormItem
                  onChange={this.handleInputChange}
                  value={type}
                  name="type"
                  type="text"
                  placeholder="Type"
                />
                <FormItem
                  onChange={this.handleInputChange}
                  value={goalTime}
                  name="goal_time"
                  type="text"
                  placeholder="Goal time" maxLength={4}
                  required
                />
                <FormItem
                  onChange={this.handleInputChange}
                  value={maxTime}
                  name="max_time"
                  type="text"
                  placeholder="Max time" maxLength={4}
                  required
                />
              </>
              : null}
            {typeAddItem === types.tasks ?
              <FormItem
                onChange={this.handleInputChange}
                value={taskTime}
                name="task_time"
                type="text"
                placeholder="Task time" maxLength={4}
                required
              />
              : null}
            {typeAddItem === types.users ?
              <FormItem
                onChange={this.handleInputChange}
                value={email}
                name="email"
                type="email"
                placeholder="E-mail"
              />
              : null}
            <SubmitBtn color="primary" type="submit">Add</SubmitBtn>
          </form>
    )
  }
}



export default withContext(Form);

Form.propTypes = {
  pageContext: PropTypes.oneOf(['projects','tasks','users'])
}

Form.defaultProps = {
  pageContext: 'projects'
}