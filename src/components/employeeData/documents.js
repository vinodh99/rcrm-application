import React, { Component } from "react";
import "antd/dist/antd.css";
import "./addEmployee.css";
import {
    Form,
    Button,
    Upload,
    Radio,
    Icon,
    Cascader,
    Col,
    Row,
    Input

} from "antd";

// const { Option } = Select;
const RadioGroup = Radio.Group;
const residences = [{
    value: 'resume',
    label: 'resume',
}, {
    value: 'Cover Letter',
    label: 'Cover Letter',
}];
class Demo extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    };

    normFile = e => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col span={12}>
                        <Row >
                            <Form.Item {...formItemLayout} label='Title'>
                                {getFieldDecorator('title', {
                                    rules: [{ required: false }],
                                })(
                                    <Input
                                        name="title"
                                        type="text"
                                        placeholder="document title"
                                    />
                                )}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item {...formItemLayout}
                                label=" Type"
                                className="resume"
                            >
                                {getFieldDecorator('Type', {
                                    initialValue: ['resume'],
                                    rules: [{ type: 'array', required: false }],
                                })(
                                    <Cascader options={residences} />
                                )}

                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item
                                {...formItemLayout}
                                label="Attachment"
                                extra="Please upload your document"
                            >
                                {getFieldDecorator("upload", {
                                    valuePropName: "fileList",
                                    getValueFromEvent: this.normFile
                                })(
                                    <Upload
                                        name="file"
                                        action="http://ec2-52-24-8-126.us-west-2.compute.amazonaws.com:8080/candidate/5c1aae39f37a6f35c4d84586/documents/save"
                                        listType="files"
                                    >
                                        <Button>
                                            <Icon type="upload" /> Click to upload
                                </Button>
                                    </Upload>
                                )}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item {...formItemLayout} label='Resume Visibility'>
                                {getFieldDecorator('Resume Visibility', {
                                    rules: [{ required: false }],
                                })(
                                    <RadioGroup>
                                        <Radio value={1}>YES</Radio>
                                        <Radio value={2}>NO</Radio>
                                    </RadioGroup>)}
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                        </Button>
                            </Form.Item>
                        </Row>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const WrappedDemo = Form.create({ name: "validate_other" })(Demo);

export default WrappedDemo;