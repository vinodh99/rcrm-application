import React, { Component } from 'react';
import EmployeeData from '../../api/api';
import { searchedEmployeeAction, allEmployees } from '../../actions/employeeActions';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import './addEmployee.css';
import { Table } from 'antd';
// import employeeSearch from '../../reducers/employeeSearch';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // this.handleUserData = this.handleUserdata.bind(this)

    render() {
        // const empdata = []
        // this.props.employees;
        const columns = [{
            title: 'first name',
            dataIndex: 'firstName',
            key: '1',
        }, {
            title: 'lastName',
            dataIndex: 'lastName',
            key: '2',
        }, {
            title: 'Email Address',
            dataIndex: 'emailAddress',
            key: '3',
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
                        <br />
                        <br />
                        <Button>search</Button>

                    </Form>
                </div>
                <div>
                    {/* <p> {this.props.searchedEmployee} </p> */}
                    <div>
                        <Table columns={columns} dataSource={this.empdata()} size="middle" />
                        {/* <h4>Small size table</h4>
                 <Table columns={columns} dataSource={data} size="small" /> */}
                    </div>

                </div>
            </div>

        );
    }
}



export default Login;
