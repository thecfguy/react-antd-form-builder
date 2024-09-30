import React from "react";
import {
    Divider,
    Form,
    Input,
    InputNumber,
    Select,
    Checkbox,
    Radio,
    Slider,
    Rate,
    Button,
    DatePicker,
    TimePicker,
    Row,
    Col
} from "antd";
import Signature from "./signature";
import Upload from "./Upload";
import EditableTable from "./EditableTable";

const FormElement = ({ element, onAnyChange }) => {
    const { hidden, dropEffect, type, id, label, field_name, rules, ...data } = element;

    const wrapFormItem = (children) => {
        return (
            <Form.Item hidden={hidden} label={label} key={field_name} name={field_name} rules={rules}>
                {children}
            </Form.Item>
        );
    };
    const renderElement = () => {
        switch (type) {
            case "Header":
                const level = data?.level?.value || 1;
                let styles = {
                    textAlign: data?.align?.value || "center"
                };

                if (level === 1) return <h1 style={styles}>{data.content}</h1>;
                if (level === 2) return <h2 style={styles}>{data.content}</h2>;
                if (level === 3) return <h3 style={styles}>{data.content}</h3>;
                if (level === 4) return <h4 style={styles}>{data.content}</h4>;
                if (level === 5) return <h5 style={styles}>{data.content}</h5>;
                if (level === 6) return <h6 style={styles}>{data.content}</h6>;
                return <h1>{data.content}</h1>;
            case "Paragraph":
                styles = {
                    textAlign: data?.align?.value || "center"
                };
                return <p style={styles}>{data.content}</p>;
            case "LineBreak": {
                const { content, ...props } = data;
                return <Divider {...props}>{content}</Divider>;
            }
            case "Image": {
                if (data.src === "") data.src = "https://via.placeholder.com/728x90.png?text=Place+Your+Image+Here";
                return (
                    <div style={{ textAlign: "center" }}>
                        <img style={{ maxWidth: "100%" }} src={data.src} alt={data.alt} />
                    </div>
                );
            }
            case "TextInput":
                return wrapFormItem(<Input {...data} />);
            case "NumberInput":
                return wrapFormItem(<InputNumber {...data} />);
            case "Dropdown":
                return wrapFormItem(<Select {...data} />);
            case "Tags":
                return wrapFormItem(<Select {...data} mode="tags" />);
            case "Checkboxes": {
                if (data.alignVertical) {
                    const { options, ...rest } = data;
                    return wrapFormItem(
                        <Checkbox.Group {...rest}>
                            <Row gutter={[16, 16]}>
                                {options?.map((option, index) => {
                                    return (
                                        <Col span={24} key={index}>
                                            <Checkbox value={option.value}>{option.label}</Checkbox>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Checkbox.Group>
                    );
                }
                return wrapFormItem(<Checkbox.Group {...data} />);
            }

            case "RadioButtons": {
                if (data.alignVertical) {
                    const { options, ...rest } = data;
                    return wrapFormItem(
                        <Radio.Group {...rest}>
                            <Row gutter={[16, 16]}>
                                {options?.map((option, index) => {
                                    return (
                                        <Col span={24} key={index}>
                                            <Radio value={option.value}>{option.label}</Radio>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Radio.Group>
                    );
                }
                return wrapFormItem(<Radio.Group {...data} />);
            }
            case "TextArea":
                return wrapFormItem(<Input.TextArea {...data} />);
            case "DatePicker":
                return wrapFormItem(<DatePicker inputReadOnly {...data} />);
            case "TimePicker":
                return wrapFormItem(<TimePicker inputReadOnly {...data} />);
            case "Range":
                const marks = { [data.min]: data.minLabel, [data.max]: data.maxLabel };
                return wrapFormItem(<Slider {...data} marks={marks} />);
            case "Rating":
                return wrapFormItem(<Rate {...data} />);
            case "Signature":
                return wrapFormItem(<Signature {...data} />);
            case "File":
                return wrapFormItem(
                    <Upload {...data}>
                        <Button>
                            <i className="fas fa-upload"></i> Upload
                        </Button>
                    </Upload>
                );
            case "Photo":
                return wrapFormItem(
                    <Upload {...data} listType="picture-card">
                        <div>
                            <div style={{ marginTop: 8 }}>
                                <i className="far fa-images"></i> &nbsp;Upload
                            </div>
                        </div>
                    </Upload>
                );

            case "Table":
                return wrapFormItem(<EditableTable {...data} element={element} onAnyChange={onAnyChange} />);

            default:
                return <div>{JSON.stringify(data)}</div>;
        }
    };
    return renderElement();
};

export default FormElement;
