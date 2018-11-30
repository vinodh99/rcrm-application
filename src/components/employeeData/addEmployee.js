import React, { Component } from 'react';
// import { request } from 'http';
import request from 'superagent';
// import { Layout, Menu, Icon } from 'antd';
// import './index.css'; 
// const { Header, Sider, Content, Footer } = Layout;


class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName:''
        }
        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleSubmitMessage= this.handleSubmitMessage.bind(this);
    }

    handleMessageInput(e){
        // e.preventDefault();
        // var object= {};
        // object[firstName] = e.target.value;
        this.setState({firstName: e.target.value});
        // console.log("xyz"+this.state.firstName)
    }
    handleSubmitMessage(e){
        // e.preventDefault();
        console.log('satrting to submit profile');
        // if(this.state.isFormFilledProfile){
            const data = {
                firstName: this.state.firstName
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
    //  }
    }


  render() {
    return (
        <div>
        <div>
          <form onSubmit={this.handleSubmitMessage}>
            <input
            //   type= 'text' 
            onChange={this.handleMessageInput}
            value={this.state.firstName}                
            />
            <button type='Submit' value='Submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}



export default AddEmployee;
