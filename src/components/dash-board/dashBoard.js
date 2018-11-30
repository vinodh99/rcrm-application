import React, { Component } from 'react';
import './index.css';
// import ContentData from '../content/index.js';
import PropTypes from 'prop-types';
import header from '../Header';
import {IndexLink, Link} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends Component {

    constructor(props){
        super(props);        
    }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
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
          <Content style={{ margin: '0 16px' }}>
          <Link to = "Library" activeClassName = "active"> Library</Link>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            {/* Ant Design ©2018 Created by Ant UED */}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}



export default DashBoard;
  