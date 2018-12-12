
import React, { Component } from 'react';
// import { request } from 'http';
import request from 'superagent';
import {Form, Input,Row,Col, Button} from 'antd';
import './addEmployee.css';
// import { Layout, Menu, Icon } from 'antd';
// import './index.css'; 
// const { Header, Sider, Content, Footer } = Layout;


class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state={
        }
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleSubmitMessage= this.handleSubmitMessage.bind(this);
    }

    handleMessageInput(e){
 
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log("xyz"+this.state.firstName)
    }
    handleSubmitMessage(e){
        // e.preventDefault();
        console.log('starting to submit profile');
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailAddress: this.state.emailAddress,
                homePhone: this.state.homePhone,
                workPhone: this.state.workPhone,
                dob: this.state.dob
              };
        // console.log(data);
        request.post('https://swag-api.herokuapp.com/product')
        .send(data)
        .set('Accept', 'application/json')
        .end((err,res)=> {
            if(err){
                console.log('no error');
            } else{
            console.log('success');
              }
         });

    }

  render() {
    return (
        <div>
        <div className= "input-form">
          <Form>
          <Row>
               <Col>
                    <Input
                        name= "firstName"
                        type= "text"
                        value={this.state.firstName}                
                        onChange={this.handleMessageInput}
                        placeholder= "first name"
                    />
                    <Input
                        name= "lastName"
                        type= "value"
                        value={this.state.lastName}                
                        onChange={this.handleMessageInput}
                        placeholder= "last name"
                    />
               </Col>
               <Col>
               <Input
            name= "homePhone"
            type= "value"
            value={this.state.homePhone}                
            onChange={this.handleMessageInput}
            placeholder= "home-phone"
            />

            <Input
            name= "workPhone"
            type= "value"
            value={this.state.workPhone}                
            onChange={this.handleMessageInput}
            placeholder= "work-phone"
            />
               </Col>

          </Row>

            <Input
            name= "dob"
            type= "value"
            value={this.state.dob}                
            onChange={this.handleMessageInput}
            placeholder= "date of birth"
            />
            <Button type='Submit'onClick={this.handleSubmitMessage}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}



export default AddEmployee;
