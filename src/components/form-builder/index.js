import React, { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { theme as ANTDTheme, Row, Col, Tabs, Button, Form, Modal, Layout, ConfigProvider } from "antd";
import Toolbar from "./toolbar";
import FormBuilderContext from "../form-builder-context";
import FormRenderer from "../form-renderer";
import FormViewer from "../form-viewer";
import DropZone from "./drop-zone";
import PropTypes from "prop-types";
import { themeTypes } from "../appConstants";

const { Sider, Content } = Layout;
const { TabPane } = Tabs;
const FormBuilder = ({
    fields,
    toolbarItems,
    onUpdate,
    fieldProps,
    formProps,
    showPreviewTab,
    theme = themeTypes.dark,
    ...props
}) => {
    const isDarkTheme = theme === "dark";
    const [elements, setElements] = useState([]);
    const [showPreview, setShowPreview] = useState(false);
    const [formValue, setFormValue] = useState({});

    useEffect(() => {
        setElements(fields);
    }, [fields]);
    const updateFormElement = useCallback(
        (elem) => {
            setElements([...elem]);
            onUpdate?.(elem);
        },
        [onUpdate]
    );
    const onFormSubmit = useCallback((values) => {
        setFormValue(values);
        setShowPreview(true);
    }, []);
    return (
        <DndProvider backend={HTML5Backend}>
            <ConfigProvider
                theme={{
                    algorithm: isDarkTheme ? ANTDTheme.darkAlgorithm : ANTDTheme.defaultAlgorithm
                }}
            >
                <FormBuilderContext.Provider value={{ elements, setElements, updateFormElement, isDarkTheme }}>
                    {showPreviewTab ? (
                        <>
                            <Tabs defaultActiveKey="1" centered>
                                <TabPane tab="Editor" key="1">
                                    <Layout
                                        style={{ height: "100%", display: "flex", alignItems: "stretch", gap: "10px" }}
                                    >
                                        <Sider theme={theme} width={250} breakpoint="md" collapsedWidth={0}>
                                            <Toolbar toolbarItems={toolbarItems} fieldProps={fieldProps} />
                                        </Sider>
                                        <Content
                                            style={{
                                                padding: 24,
                                                margin: 0,
                                                minHeight: 280
                                            }}
                                        >
                                            <DropZone
                                                elements={elements}
                                                onUpdate={updateFormElement}
                                                formProps={formProps}
                                            />
                                        </Content>
                                    </Layout>
                                </TabPane>
                                <TabPane tab="Preview" key="2">
                                    <Row>
                                        <Col span={2}></Col>
                                        <Col span={20}>
                                            <Form {...formProps} layout="horizontal" onFinish={onFormSubmit} onSubmit>
                                                <FormRenderer elements={elements}></FormRenderer>
                                                <Form.Item>
                                                    <Button type="primary" htmlType="submit">
                                                        Submit
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </Col>
                                        <Col span={2}></Col>
                                    </Row>
                                </TabPane>
                            </Tabs>
                            <Modal
                                title="View"
                                footer={null}
                                width={"90%"}
                                open={showPreview}
                                onCancel={(e) => setShowPreview(false)}
                                style={{ width: "100%", resize: "auto" }}
                            >
                                <FormViewer elements={elements} values={formValue}></FormViewer>
                            </Modal>
                        </>
                    ) : (
                        <Layout style={{ height: "100%", display: "flex", alignItems: "stretch", gap: "10px" }}>
                            <Sider
                                theme={isDarkTheme ? "dark" : "light"}
                                width={250}
                                breakpoint="md"
                                collapsedWidth={0}
                            >
                                <Toolbar toolbarItems={toolbarItems} fieldProps={fieldProps} />
                            </Sider>
                            <Content
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280
                                }}
                            >
                                <DropZone elements={elements} onUpdate={updateFormElement} formProps={formProps} />
                            </Content>
                        </Layout>
                    )}
                </FormBuilderContext.Provider>
            </ConfigProvider>
        </DndProvider>
    );
};

FormBuilder.defaultProps = {
    fields: [],
    showPreviewTab: true,
    formProps: {
        labelAlign: "left",
        colon: true,
        requiredMark: true,
        labelCol: { span: 5 }
    }
};
FormBuilder.propTypes = {
    fields: PropTypes.array,
    onUpdate: PropTypes.func,
    fieldProps: PropTypes.array,
    formProps: PropTypes.object,
    showPreviewTab: PropTypes.bool
};

export default FormBuilder;
