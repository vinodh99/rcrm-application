
import React, { Component } from 'react';
import request from 'superagent';
import { Radio, Form, Input, Row, Col, Button, Select } from 'antd';
import './addEmployee.css';
import { postEmployeeData } from '../../actions/employeeActions';
import { connect } from 'react-redux'

const Option = Select.Option;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const residences = [{
    value: 'India',
    label: 'India',
}, {
    value: 'United States',
    label: 'United States',
}];

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            primarySkills: []
        }
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    handleMessageInput(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log("xyz"+this.state.firstName)
    }
    handleSubmitMessage(e) {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)

                this.props.dispatch(postEmployeeData(values))

            }
            else {
                console.log(err)
            }
        });
    }
    primarySkills = (value) => {
        this.setState({
            primarySkills: value
        })
    }
    getFields() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        const children = [];
        const fields = [['firstName', 'firstName', 'First Name'], ['middleName', 'middleName', 'Middle Name'], ['lastName', 'lastName', 'Last Name'], ['mobileNumber', 'mobileNumber', 'mobileNumber'], ['postalCode', 'postalCode', 'Postal Code'], ['experience', 'experience', 'experience'], ['jobTitle', 'jobTitle', 'Job Title'], ['linkedinProfileUrl', 'linkedinProfileUrl', 'linkedin']];
        for (let i = 0; i < fields.length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 3) {
                children.push(
                    <Col span={12} key={i}>
                        <Form.Item {...formItemLayout} label={`${fields[i][2]}`}>
                            {getFieldDecorator(`${fields[i][0]}`, {
                                rules: [{
                                    required: true,
                                    message: 'Input something!',
                                }],
                            })(
                                <Input placeholder={fields[i][1]} />
                            )}
                        </Form.Item>
                    </Col>
                );
            }
            else {
                children.push(
                    <Col span={12} key={i}>
                        <Form.Item {...formItemLayout} label={`${fields[i][2]}`}>
                            {getFieldDecorator(`${fields[i][0]}`, {
                                rules: [{
                                    required: false,
                                    // message: 'Input something!',
                                }],
                            })(
                                <Input placeholder={fields[i][1]} />
                            )}
                        </Form.Item>
                    </Col>
                );
            }
        }
        return children;
    }
    Employee = (value) => {
        // const { i } = this.state.i;
        return (
            <div style={{ paddingBottom: 40 }}>
                {/* <Card
                    type="inner"
                    title="University / School"
                    extra={<Button value={value} onClick={(e) => this.deleteList(e)}>Delete</Button>}
                > */}
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={this.handleSearch}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                Clear
                            </Button>
                            {/* <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a> */}
                        </Col>
                    </Row>
                </Form>
                {/* </Card> */}
            </div>
        )
    }
    render() {

        const children = [];
        const arr = ['java', 'python', 'javascript', 'Node.js', 'SQL', 'mongoDB', 'HTLM5']
        for (let i = 0; i < arr.length; i++) {
            children.push(<Option key={(i + 10).toString(36) + i}>{arr[i]}</Option>);
        }
        // console.log(children)

        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '1',
        })(
            <Select style={{ width: 70 }}>
                <Option value="1">+1</Option>
                <Option value="91">+91</Option>
            </Select>
        );
        return (
            <div>
                <div >
                    <Form
                        onSubmit={this.handleSubmitMessage} >
                        <h1>Add Applicant</h1>
                        <Row gutter={80}>

                            <Col span={4}>
                                <div className="picture">
                                    <img src='http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png' default='image' height='200px' width='200px'></img>
                                </div>
                            </Col>
                            <Col span={20}>
                                {this.Employee()}
                            </Col>

                            {/* <Col span={10} >
                                <Row >
                                    <FormItem {...formItemLayout} label='First-Name'>
                                        {getFieldDecorator('firstName', {
                                            rules: [{ required: true, message: 'Please input your username!' }],
                                        })(
                                            <Input
                                                name="firstName"
                                                type="text"
                                                value={this.state.firstName}
                                                onChange={this.handleMessageInput}
                                                placeholder="first name"
                                            />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row >
                                    <FormItem {...formItemLayout} label='Last-Name'>
                                        {getFieldDecorator('lastName', {
                                            rules: [{ required: true, message: 'Please input your lastName!' }],
                                        })(
                                            <Input
                                                name="lastName"
                                                type="value"
                                                value={this.state.lastName}
                                                onChange={this.handleMessageInput}
                                                placeholder="last name"
                                            />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label="email">
                                        {getFieldDecorator('email', {
                                            rules: [{
                                                type: 'email', message: 'The input is not valid E-mail!',
                                            }, {
                                                required: true, message: 'Please input your E-mail!',
                                            }],
                                        })(
                                            <Input
                                                name="emailAddress"
                                                type="value"
                                                value={this.state.homePhone}
                                                onChange={this.handleMessageInput}
                                                placeholder="Email Address"
                                                style={{ textAlign: 'center' }}
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Work-Phone'>
                                        {getFieldDecorator('workphone', {
                                            rules: [{ required: true, message: 'Please input your number!' }],
                                        })(
                                            <Input
                                                type="number" addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="work-phone"
                                                name="workPhone"
                                                value={this.state.workPhone}
                                                onChange={this.handleMessageInput}
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='SSN'>
                                        {getFieldDecorator('SSN', {
                                            rules: [{ required: true, message: 'Please input your SSN number!' }],
                                        })(
                                            <Input
                                                name="SSN"
                                                type="number"
                                                value={this.state.workPhone}
                                                onChange={this.handleMessageInput}
                                                placeholder="xx-xxx-xxxx"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Skype-ID'>
                                        {getFieldDecorator('skype-ID', {
                                            rules: [{ required: true, message: 'Please input your skype-ID!' }],
                                        })(
                                            <Input
                                                name="skypeID"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="skype-ID"
                                            />)}
                                    </FormItem>


                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='facebook-ID'>
                                        {getFieldDecorator('facebook', {
                                            rules: [{ required: true, message: 'Please input your facebook ID!' }],
                                        })(
                                            <Input
                                                name="facebook"
                                                type="value"
                                                value={this.state.workPhone}
                                                onChange={this.handleMessageInput}
                                                placeholder="Facebook profile URL"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Address'>
                                        {getFieldDecorator('address', {
                                            rules: [{ required: true, message: 'Please input your address!' }],
                                        })(
                                            <Input
                                                name="address"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="Apt or unit no."
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Clearance'>
                                        {getFieldDecorator('Clearance', {
                                            rules: [{ required: true, message: 'Please select your clearance!' }],
                                        })(
                                            <RadioGroup onChange={this.onChange} value={this.state.value}>
                                                <Radio value={1}>YES</Radio>
                                                <Radio value={2}>NO</Radio>
                                            </RadioGroup>)}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label=" Residence">
                                        {getFieldDecorator('residence', {
                                            initialValue: ['United States'],
                                            rules: [{ type: 'array', required: true, message: 'Please select your country of residence!' }],
                                        })(
                                            <Cascader options={residences} />
                                        )}

                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='State'>
                                        {getFieldDecorator('State', {
                                            rules: [{ required: true, message: 'Please input your State!' }],
                                        })(
                                            <Input
                                                name="State"
                                                type="value"
                                                // value={this.state.dob}
                                                // onChange={this.handleMessageInput}
                                                placeholder="State"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Technology'>
                                        {getFieldDecorator('Technology', {
                                            rules: [{ required: true, message: 'Please input your Technology!' }],
                                        })(
                                            <Input
                                                name="technology"
                                                type="value"
                                                // value={this.state.dob}
                                                // onChange={this.handleMessageInput}
                                                placeholder="Technology"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Primary-skills'>
                                        {getFieldDecorator('Primary-skills', {
                                            rules: [{ required: true, message: 'Please input your Primary skills!' }],
                                        })(
                                            <Select
                                                mode="multiple"
                                                style={{ width: '100%' }}
                                                defaultValue={['java']}
                                            >
                                                {children}
                                            </Select>
                                            // <Input
                                            //     name="primary-skills"
                                            //     type="value"
                                            //     value={this.state.dob}
                                            //     onChange={this.handleMessageInput}
                                            //     placeholder="Primary-skills"
                                            // />
                                        )}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem style={{ float: 'right', width: '66.5%' }}>
                                        {/* {getFieldDecorator('submit', { */}
                            {/* rules: [{ required: true, message: 'Please input your skills!' }], */}
                            {/* })( */}
                            {/* <Button type='Submit' onClick={this.handleSubmitMessage}>Submit</Button> */}
                            {/* )} */}
                            {/* </FormItem> */}
                            {/* </Row> */}
                            {/* </Col>
                            <Col span={10}>
                                <Row>
                                    <FormItem {...formItemLayout} label='Middle-Name'>
                                        {getFieldDecorator('middleName', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input
                                                name="middleName"
                                                type="text"
                                                value={this.state.firstName}
                                                onChange={this.handleMessageInput}
                                                placeholder="middle name"
                                            />
                                        )}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Nick-Name'>
                                        {getFieldDecorator('Nick-Name', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input
                                                name="nickname"
                                                type="value"
                                                value={this.state.lastName}
                                                onChange={this.handleMessageInput}
                                                placeholder="nick name"
                                            />
                                        )}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Date-Of-Birth'>
                                        {getFieldDecorator('DOB', {
                                            rules: [{ required: true, message: 'please input your date of birth' }],
                                        })(
                                            <Input
                                                name="dob"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="MM-DD-YYYY"
                                            />
                                        )}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Home-Phone'>
                                        {getFieldDecorator('homePhone', {
                                            rules: [{
                                                required: false,
                                                // message: 'Please input your home-phone number!' 
                                            }],
                                        })(
                                            <Input type='number' addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="home-phone" />
                                        )}

                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Linked-In'>
                                        {getFieldDecorator('Linked-In', {
                                            rules: [{
                                                required: false,
                                            }],
                                        })(
                                            <Input
                                                name="linkedIn"
                                                type="value"
                                                value={this.state.workPhone}
                                                onChange={this.handleMessageInput}
                                                placeholder="linkedIn profile URL"
                                            />)}

                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Twitter'>
                                        {getFieldDecorator('twitter', {
                                            rules: [{
                                                required: false,
                                            }],
                                        })(
                                            <Input
                                                name="twitter"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="Twitter Profile URL"
                                            />)}

                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Work-Authorization'>
                                        {getFieldDecorator('work-authorization', {
                                            rules: [{
                                                required: true, message: 'please input your work authorization'
                                            }],
                                        })(
                                            <Input
                                                name="work Authorization"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="Work-Authorization"
                                            />)}

                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='City'>
                                        {getFieldDecorator('City', {
                                            rules: [{
                                                required: true, message: 'please input your City'
                                            }],
                                        })(
                                            <Input
                                                name="city"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="City"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Relocation'>
                                        {getFieldDecorator('relocation', {
                                            rules: [{ required: true, message: 'Please select your relocation!' }],
                                        })(
                                            <RadioGroup onChange={this.onChange} value={this.state.value}>
                                                <Radio value={1}>YES</Radio>
                                                <Radio value={2}>NO</Radio>
                                            </RadioGroup>)}
                                    </FormItem>
                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Postal-Code'>
                                        {getFieldDecorator('Postal-Code', {
                                            rules: [{ required: true, message: 'Please enter your Postal Code!' }],
                                        })(
                                            <Input
                                                name="postal-code"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="postal-code"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Job-Title'>
                                        {getFieldDecorator('Job-Title', {
                                            rules: [{ required: true, message: 'Please enter your Job-Title!' }],
                                        })(
                                            <Input
                                                name="Job-title"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="Job-title"
                                            />)}
                                    </FormItem>

                                </Row>
                                <Row>
                                    <FormItem {...formItemLayout} label='Skills'>
                                        {getFieldDecorator('Skills', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input
                                                name="skills"
                                                type="value"
                                                value={this.state.dob}
                                                onChange={this.handleMessageInput}
                                                placeholder="skills"
                                            />)}
                                    </FormItem>

                                </Row> */}
                            {/* </Col> */}
                        </Row>
                    </Form>
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        success: state.employee.success
    }
}

const wrappedAddEmployee = Form.create()(AddEmployee)
export default connect(mapStateToProps)(wrappedAddEmployee);
