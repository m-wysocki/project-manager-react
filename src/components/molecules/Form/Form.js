import PropTypes from 'prop-types'
import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { MDBBtn, MDBInput } from 'mdbreact';
import { connect } from 'react-redux';
import FormRadio from "../../atoms/FormRadio/FormRadio";
import withContext from '../../../hoc/withContext';
import { addItem as addItemAction} from '../../../actions';
import { Select } from '../../atoms/Select/Select';

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
const StyledInput = styled(MDBInput)`
  :focus{
      box-shadow: none !important;
      border-width: 2px !important;
  }
`;
const StyledSelect = styled(Select)`
  display: block;
  width: 100%;
`;

class FormAddItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      typeAddItem: props.pageContext,
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
    const {typeAddItem} = this.state;
    const {addItem, projects, users} = this.props;

    return(
      <Formik initialValues={{
        logo: 'https://source.unsplash.com/120x120/?company',
        avatar: 'https://source.unsplash.com/240x240/?user',
        name: '',
        type: '',
        goalTime: '',
        maxTime: '',
        taskTime: '00:00',
        email: '',
        projectID: '',
        userID: ''
      }}
      onSubmit={(values) => {
        console.log(values);
        addItem(typeAddItem,values)
      }}>
        {({
            values,
            handleChange,
            handleBlur,
            isSubmitting
          }) => (
            <>
            <div>
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
            </div>
            <Form>
              <StyledInput
                // onChange={this.handleInputChange}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                label="Name"
              />
              {typeAddItem === types.projects ?
                <>
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.logo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="logo"
                    type="text"
                    label="Logo"
                  />
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="type"
                    type="text"
                    label="Type"
                  />
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.goalTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="goalTime"
                    type="number"
                    label="Goal time (hours)" maxLength={4}
                  />
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.maxTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="maxTime"
                    type="number"
                    label="Max time (hours)" maxLength={4}
                  />
                </>
                : null}
              {typeAddItem === types.tasks ?
                <>
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.taskTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="taskTime"
                    type="text"
                    label="Task time" maxLength={5}
                  />
                  <div className="md-form">
                      <StyledSelect name="projectID" type="text" onChange={handleChange} value={values.projectID}>
                            <option hidden="true">Choose Project</option>
                            {projects.map(({id, name})=>(
                              <option key={id} value={id}>{name}</option>
                            ))}
                      </StyledSelect>
                  </div>
                    <div className="md-form">
                        <StyledSelect name="userID" type="text" onChange={handleChange} value={values.userID}>
                            <option hidden="true">Choose User</option>
                            {users.map(({id, name})=>(
                                <option key={id} value={id}>{name}</option>
                            ))}
                        </StyledSelect>
                    </div>

                </>
                : null}
              {typeAddItem === types.users ?
                <>
                <StyledInput
                  // onChange={this.handleInputChange}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  type="email"
                  label="E-mail"
                />
                  <StyledInput
                    // onChange={this.handleInputChange}
                    value={values.avatar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="avatar"
                    type="text"
                    label="Avatar"
                  />
                </>
                : null}
              <SubmitBtn color="primary" type="submit" disabled={isSubmitting}>
                Add
              </SubmitBtn>
            </Form>
            </>
        )}
      </Formik>

    )
  }

}

FormAddItem.propTypes = {
  pageContext: PropTypes.oneOf(['projects','tasks','users']),
  addItem: PropTypes.func.isRequired,
  projects: PropTypes.instanceOf(Array).isRequired,
  users: PropTypes.instanceOf(Array).isRequired
};

FormAddItem.defaultProps = {
  pageContext: 'projects'
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, id) => dispatch(addItemAction(itemType, id))
});

const mapStateToProps = state => {
  const { projects, users } = state;
  return { projects, users };
};

export default connect(mapStateToProps, mapDispatchToProps)(withContext(FormAddItem));