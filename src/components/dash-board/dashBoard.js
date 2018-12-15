import React, { Component } from 'react';
import './dashBoard.css';
// import ContentData from '../content/index.js';
import AddEmployee from '../employeeData/addEmployee';
import SearchEmployee from '../employeeData/searchEmployee';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink, Link } from "react-router-dom";


const { Header, Content, Footer, Sider, Row, Col } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddEmp: false,
      isSearchEmp: false
    };
  }

  onButtonClicked = (isAdd) => {
    if (isAdd === "add") {
      this.setState({ isAddEmp: true, isSearchEmp: false });
    } else {
      this.setState({ isSearchEmp: true, isAddEmp: false });
    }
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

    const { isAddEmp, isSearchEmp } = this.state;


    return (
      // <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
        // collapsible
        // collapsed={this.state.collapsed}
        // onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <img src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png" alt="image" width="200px" height="70px"></img>

            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Perosnal Details</span></span>}
            >
              <Menu.Item key="1" onClick={() => this.onButtonClicked("add")} >Add Applicant</Menu.Item>
              <Menu.Item key="2" onClick={() => this.onButtonClicked("")}>Search Applicant</Menu.Item>
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
            {/* <Link to={{ pathname: "/AddEmployee" }}>Add Employee</Link>
            {"|"}
            <Link to={{ pathname: "/SearchEmployee" }}>Search Employee</Link> */}
            {(isAddEmp ? (<AddEmployee {...this.props} />) : (""))}
            {(isSearchEmp ? (<SearchEmployee  {...this.props} />) : (""))}

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/* Ant Design ©2018 Created by Ant UED */}
          </Footer>
        </Layout>
      </Layout>

      // {/* </div> */}

    );
  }
}



export default DashBoard;