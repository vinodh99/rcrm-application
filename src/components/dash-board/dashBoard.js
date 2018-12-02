import React, { Component } from 'react';
import './dashBoard.css';
// import ContentData from '../content/index.js';
import PropTypes from 'prop-types';
import {IndexLink, Link} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink } from "react-router-dom";


const { Header, Content, Footer, Sider, Row, Col } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {

    constructor(props){
        super(props);        
    }

  // state = {
  //   collapsed: false,
  // };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // }

  render() {
    return (

      // <Layout style={{ minHeight: '100vh' }}>
      //   <Sider
      //     // collapsible
      //     // collapsed={this.state.collapsed}
      //     // onCollapse={this.onCollapse}
      //   >
      //     <div className="logo" />
      //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      //       <Menu.Item key="1">
      //         <Icon type="pie-chart" />
      //         <span>Option 1</span>
      //       </Menu.Item>
      //       <Menu.Item key="2">
      //         <Icon type="desktop" />
      //         <span>Option 2</span>
      //       </Menu.Item>
      //       <SubMenu
      //         key="sub1"
      //         title={<span><Icon type="user" /><span>User</span></span>}
      //       >
      //         <Menu.Item key="3">Tom</Menu.Item>
      //         <Menu.Item key="4">Bill</Menu.Item>
      //         <Menu.Item key="5">Alex</Menu.Item>
      //       </SubMenu>
      //       <SubMenu
      //         key="sub2"
      //         title={<span><Icon type="team" /><span>Team</span></span>}
      //       >
      //         <Menu.Item key="6">Team 1</Menu.Item>
      //         <Menu.Item key="8">Team 2</Menu.Item>
      //       </SubMenu>
      //       <Menu.Item key="9">
      //         <Icon type="file" />
      //         <span>File</span>
      //       </Menu.Item>
      //     </Menu>
      //   </Sider>
      //   <Layout>
      //     <Header style={{ background: '#fff', padding: 0 }} />
      //     <Content style={{ margin: '0 16px' }}>
      //       <Breadcrumb style={{ margin: '16px 0' }}>
      //         <Breadcrumb.Item>User</Breadcrumb.Item>
      //         <Breadcrumb.Item>Bill</Breadcrumb.Item>
      //       </Breadcrumb>
      //       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
      //       <NavLink to={{ pathname: "/AddEmployee" }}>Add Employee</NavLink>
      //               {/* <Col span={8}> <Link to={{ pathname: "/AddEmployee" }}>Add Employee</Link> </Col> */}

      //       </div>
      //     </Content>
      //     <Footer style={{ textAlign: 'center' }}>
      //       Ant Design ©2018 Created by Ant UED
      //     </Footer>
      //   </Layout>
      // </Layout>
      <div>
          <Layout style={{ minHeight: '100vh' }}>
        <Sider
          // collapsible
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
           <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Perosnal Details</span></span>}
            >
              <Menu.Item key="1" >Add Applicant</Menu.Item>
              <Menu.Item key="2">Search Applicant</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="desktop" />
              <span>Documents</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>Education Details</span></span>}
            >
              <Menu.Item key="4">Tom</Menu.Item>
              <Menu.Item key="5">Bill</Menu.Item>
              <Menu.Item key="6">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>Certifications</span></span>}
            >
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>Language</span>
            </Menu.Item>
            <Menu.Item key="10">
              <Icon type="file" />
              <span>Work Experience</span>
            </Menu.Item>  
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 580 }}>
          <NavLink to={{ pathname: "/AddEmployee" }}>Add Employee</NavLink>
          {"|"}
          <NavLink to={{ pathname: "/SearchEmployee" }}>Search Employee</NavLink>
                    </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/* Ant Design ©2018 Created by Ant UED */}
          </Footer>
        </Layout>
      </Layout>


      </div>
        
    );
  }
}



export default DashBoard;
  