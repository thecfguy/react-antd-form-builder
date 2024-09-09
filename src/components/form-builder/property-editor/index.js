import React, { useEffect, useState } from "react";
import { Button, Drawer, Form, Space, Grid } from "antd";
import { renderField } from "./renderfields";
import { isMobile } from "./../../Utils";

const PropertyEditor = ({ element, show, onClose, onSubmit }) => {
    const { type, id, dropEffect, field_name, ...editableProps } = element || {
        type: null,
        id: null,
        dropEffecct: null,
        field_name: null,
        hiddenFieldProps: []
    };
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const { useBreakpoint } = Grid;

    useEffect(() => {
        form.setFieldsValue(editableProps);
    }, [editableProps, form]);

    useEffect(() => {
        if (!visible) onClose?.();
    }, [visible, onClose]);

    useEffect(() => {
        if (show) setVisible(show);
    }, [show]);

    const onFinish = (values) => {
        onSubmit?.(values);
        setVisible(false);
    };

    return (
        <Drawer
            title="Edit Properties"
            onClose={(e) => setVisible(false)}
            visible={visible}
            width={isMobile(useBreakpoint()) ? "100%" : "736px"}
            footer={
                <Space>
                    <Button
                        type="primary"
                        onClick={(e) => {
                            form.submit();
                        }}
                    >
                        Submit
                    </Button>
                    <Button style={{ marginRight: 8 }} onClick={(e) => setVisible(false)}>
                        Cancel
                    </Button>
                </Space>
            }
        >
            <Form
                form={form}
                onFinish={onFinish}
                labelAlign="left"
                colon
                requiredMark
                layout="vertical"
                labelCol={{ span: 8 }}
            >
                {Object.keys(editableProps).map((name) => {
                    return renderField(name, editableProps[name], editableProps["hiddenFieldProps"]);
                })}
            </Form>
        </Drawer>
    );
};

export default PropertyEditor;
