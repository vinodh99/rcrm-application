
import React, { Component } from 'react';
// import { request } from 'http';
import request from 'superagent';
import {Form, Input,Row,Col} from 'antd';
import './addEmployee.css';
// import { Layout, Menu, Icon } from 'antd';
// import './index.css'; 
// const { Header, Sider, Content, Footer } = Layout;


class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',

        }
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleSubmitMessage= this.handleSubmitMessage.bind(this);
    }

    handleMessageInput(e){
        const target = e.target;
        let value='';
        switch(target.name){
            case "firstName":
            value = target.value;
            case "lastName":
            value = target.value;
            case "emailAddress":
            value = target.value3;
            case "homePhone":
            value = target.value;
            case "workPhone":
            value = target.value;
            case "dob":
            value = target.value;
        }
        // e.preventDefault();
        // var object= {};
        // object[firstName] = e.target.value;
        this.setState({
            [target.type]: value
        });
        // console.log("xyz"+this.state.firstName)
    }
    handleSubmitMessage(e){
        console.log('satrting to submit profile');
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailAddress: this.state.emailAddress,
                homePhone: this.state.homePhone,
                workPhone: this.state.workPhone,
                dob: this.state.dob
              };
        // console.log(data);
        request.post('http://localhost:3002/product')
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
          <Form onSubmit={this.handleSubmitMessage}>
          <Row>
               <Col>
                    <Input
                        name= "firstName"
                        type= "value"
                        value={this.state.lastName}                
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
            value={this.state.lastName}                
            onChange={this.handleMessageInput}
            placeholder= "home-phone"
            />

            <Input
            name= "workPhone"
            type= "value"
            value={this.state.lastName}                
            onChange={this.handleMessageInput}
            placeholder= "work-phone"
            />
               </Col>

          </Row>

            <Input
            name= "dob"
            type= "value"
            value={this.state.lastName}                
            onChange={this.handleMessageInput}
            placeholder= "date of birth"
            />
            <button type='Submit' value='Submit'>Submit</button>
          </Form>
        </div>
      </div>
    );
  }
}



export default AddEmployee;
