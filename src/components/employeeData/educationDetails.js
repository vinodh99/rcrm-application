import React, { Component } from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Input, Button, Icon, Card } from "antd";
class EdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      universityList: [this.university],
      count: 0
    };
  }

  // To generate mock Form.Item
  getFields() {
    // const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const children = [];
    const fields = [
      ["School/University", "Name"],
      ["Degree", "Bachelors/Masters"],
      ["Years Completed", "years"],
      ["Major Study", "Specialization"],
      ["Minor Study", "field"],
      ["GPA", ""],
      ["Country", ""],
      ["State", ""],
      ["City", ""]
    ];
    for (let i = 0; i < fields.length; i++) {
      if (i === 0 || i === 1 || i === 2 || i === 3) {
        children.push(
          <Col span={12} key={i}>
            <Form.Item {...formItemLayout} label={`${fields[i][0]}`}>
              {getFieldDecorator(`field-${i}`, {
                rules: [
                  {
                    required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder={fields[i][1]} />)}
            </Form.Item>
          </Col>
        );
      } else {
        children.push(
          <Col span={12} key={i}>
            <Form.Item {...formItemLayout} label={`${fields[i][0]}`}>
              {getFieldDecorator(`field-${i}`, {
                rules: [
                  {
                    required: false
                    // message: 'Input something!',
                  }
                ]
              })(<Input placeholder={fields[i][1]} />)}
            </Form.Item>
          </Col>
        );
      }
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };
  componentDidMount() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };
  changeList = () => {
    console.log(this.state.count);
    this.setState({
      count: this.state.count + 1,
      universityList: [...this.state.universityList, this.university]
    });
    console.log(this.state.count);
    // val++;

    // this.setState({ universityList: [this.state.universityList[0].splice(1)] })
  };
  deleteList = e => {
    console.log("target value", e.target.value);
    let array = [...this.state.universityList]; // make a separate copy of the array
    // let index = array.indexOf(e.target.value)
    // if (index !== -1) {
    array.splice(e.target.value);
    this.setState({ universityList: array });
    // }
  };
  university = value => {
    // const { i } = this.state.i;
    return (
      <div style={{ paddingBottom: 40 }}>
        <Card
          type="inner"
          title="University / School"
          extra={
            <Button value={value} onClick={e => this.deleteList(e)}>
              Delete
            </Button>
          }
        >
          <Form
            className="ant-advanced-search-form"
            onSubmit={this.handleSearch}
          >
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={24} style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  Clear
                </Button>
                {/* <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a> */}
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div>
          {this.state.universityList.map((university, index) => (
            <div key={index}>{university(index + 1)}</div>
            // <University />
          ))}
        </div>
        <Button
          value={this.state.count}
          style={{ marginTop: 8 }}
          onClick={e => this.changeList(e)}
        >
          <Icon type="plus" />
          Add another school/University
        </Button>
      </div>
    );
  }
}

const WrappedEdDetails = Form.create({ name: "advanced_search" })(EdDetails);

export default WrappedEdDetails;
