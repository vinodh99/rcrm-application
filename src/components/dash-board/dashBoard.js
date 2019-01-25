import React, { Component } from 'react';
import './dashBoard.css';
import AddEmployee from '../employeeData/addEmployee';
import SearchEmployee from '../employeeData/searchEmployee';
import WrappedDemo from '../employeeData/documents';
import EdDetails from '../employeeData/educationDetails'
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAddEmp: false,
      isSearchEmp: false,
      isdoc: false,
      isEdDetails: false
    };
  }

  onButtonClicked = (comp) => {
    switch (comp) {
      case "add":
        this.setState({ isAddEmp: true, isSearchEmp: false, isdoc: false, isEdDetails: false });
        break;
      case "search":
        this.setState({ isSearchEmp: true, isAddEmp: false, isdoc: false, isEdDetails: false });
        break;
      case "doc":
        this.setState({ isdoc: true, isAddEmp: false, isSearchEmp: false, isEdDetails: false });
        break;
      case "edDetails":
        this.setState({ isEdDetails: true, isdoc: false, isAddEmp: false, isSearchEmp: false })
        break;
      default:
        this.setState({ isAddEmp: true, isSearchEmp: false });
    }
  }

  render() {

    const { isAddEmp, isSearchEmp, isdoc, isEdDetails } = this.state;


    return (
      // <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
        >
          <div className="logo" />
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <img src="https://rsrit.com/wp-content/uploads/2017/12/logo_dark.png" alt="image" width="200px" height="70px"></img>

            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>Personal Details</span></span>}
            >
              <Menu.Item key="1" onClick={() => this.onButtonClicked("add")} >Add Applicant</Menu.Item>
              <Menu.Item key="2" onClick={() => this.onButtonClicked("search")}>Search Applicant</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" onClick={() => this.onButtonClicked("doc")}>
              <Icon type="desktop" />
              <span>Documents</span>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => this.onButtonClicked("edDetails")}>
              <Icon type="book" />
              <span>Education</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="book" />
              <span>Certifications</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="file" />
              <span>Language</span>
            </Menu.Item>
            <Menu.Item key="7">
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
            {(isdoc ? (<WrappedDemo  {...this.props} />) : (""))}
            {(isEdDetails ? (<EdDetails {...this.props} />) : (""))}
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
