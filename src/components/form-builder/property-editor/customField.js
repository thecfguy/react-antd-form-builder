import { Form } from "antd";
import React from "react";
import { FormElement } from "../../elements";

const camel2title = (camelCase) => {
    if (Array.isArray(camelCase)) camelCase = camelCase[camelCase.length - 1];
    if (typeof camelCase === "string")
        return camelCase
            .replace(/([A-Z])/g, (match) => ` ${match}`)
            .replace(/^./, (match) => match.toUpperCase())
            .trim();
    else return camelCase;
};

const CustomField = ({ name, key, value }) => {
    const rest = { ...value };
    const { type, options = [], ...restValue } = rest;

    if (type === "number") {
        return (
            <Form.Item style={{ margin: 0 }} name={name}>
                <FormElement
                    key={name}
                    element={{
                        field_name: [name, "value"],
                        options: options,
                        label: camel2title(name),
                        type: "NumberInput",
                        ...restValue
                    }}
                />
            </Form.Item>
        );
    } else if (type === "select") {
        return (
            <Form.Item name={name} style={{ margin: 0 }}>
                <FormElement
                    key={name}
                    element={{
                        field_name: [name, "value"],
                        options: options,
                        label: camel2title(name),
                        type: "Dropdown",
                        ...restValue
                    }}
                />
            </Form.Item>
        );
    }

    return null;
};

export default CustomField;
