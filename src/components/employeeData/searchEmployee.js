import React, { Component } from 'react';
import EmployeeData from '../../api/api';
import { searchedEmployeeAction, allEmployees } from '../../actions/employeeActions';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import './addEmployee.css';
import { cloneableGenerator } from 'redux-saga/utils';
import { Table } from 'antd';
// import employeeSearch from '../../reducers/employeeSearch';
class SearchEmployee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    // this.handleUserData = this.handleUserdata.bind(this)
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this)
    this.handleMessageInput = this.handleMessageInput.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(allEmployees())
  }

  handleSubmitMessage(e) {
    e.preventDefault();
    const data = this.state.value;
    console.log(data);
    // this.props.dispatch(searchedEmployeeAction(data))

  }

  handleMessageInput(e) {
    this.setState({
      value: e.target.value
    });
    this.props.dispatch(searchedEmployeeAction(e.target.value))

  }


  render() {
    const empdata =
      this.props.employees;

    const columns = [{
      title: 'first name',
      dataIndex: 'firstName',
      // key: '10',
    }, {
      title: 'lastName',
      dataIndex: 'lastName',
      // key: '2',
    }, {
      title: 'homePhone',
      dataIndex: 'homePhone',
      // key: 'homePhone',
    }];
    // console.log(this.props);
    return (
      <div>
        <div className="input-form">
          <Form onSubmit={this.handleSubmitMessage}>
            <Input
              type="text"
              placeholder="search employee here"
              value={this.state.value}
              onChange={this.handleMessageInput}
            />
            <Button>search</Button>

          </Form>
        </div>
        <div>
          <p> {this.props.searchedEmployee} </p>
          <div>
            <Table columns={columns} dataSource={empdata} size="middle" />
            {/* <h4>Small size table</h4>
                 <Table columns={columns} dataSource={data} size="small" /> */}
          </div>

        </div>
      </div>

    );
  }
}
SearchEmployee.propTypes = {
  // Define your PropTypes here
};
const mapStateToProps = (state) => {
  // console.log('hello ' + JSON.stringify(state))
  // const jsondata = Object.keys(state.employee.employees).map(function(key) {
  //   return [state.employee.employees[key]];
  // })
  return {
    searchedEmployee: state.employee.value,
    employees: state.employee.employees
  }
}



export default connect(mapStateToProps)(SearchEmployee);
