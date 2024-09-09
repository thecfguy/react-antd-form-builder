import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FormBuilder } from "../components";
import { Form } from "antd";
import FormItems from "../components/form-builder/form-items";
const argsTemp = {
    fieldProps: [
        {
            key: "File",
            fieldProps: {
                action: "https://s3.amazonaws.com/[mybucket]/",
                extra: {
                    "x-amz-credential": "AKIAZT2DSAEDY6ILBCOD/20220118/us-east-1/s3/aws4_request",
                    Policy: "eyJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJvbmV0b3VjaC1hc3NldHMtZGV2In0seyJhY2wiOiJwcml2YXRlIn0seyJ4LWFtei1zZXJ2ZXItc2lkZS1lbmNyeXB0aW9uIjoiQUVTMjU2In0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVpUSEVJTDJHWTZJTEJDT0QvMjAyMjAxMTgvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMjIwMTE4VDA3MjQxNloifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidGVtcGZpbGVzIl1dLCJleHBpcmF0aW9uIjoiMjAyMi0wMS0xOFQwODoyNDoxNi4wMDBaIn0=",
                    "x-amz-server-side-encryption": "AES256",
                    "x-amz-date": "20220118T072416Z",
                    "x-amz-algorithm": "AWS4-HMAC-SHA256",
                    key: "tempfiles",
                    signature: "d5d7908b0d568a08a5e0a34ef08288cf8ea327889ad4c5dea71494c43c75108a"
                }
            },
            hiddenFieldProps: ["action", "headers"]
        },
        {
            key: "Photo",
            fieldProps: {
                action: "https://s3.amazonaws.com/[mybucket]/",
                extra: {
                    "x-amz-credential": "AKIAZT2DSAEDY6ILBCOD/20220118/us-east-1/s3/aws4_request",
                    Policy: "eyJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJvbmV0b3VjaC1hc3NldHMtZGV2In0seyJhY2wiOiJwcml2YXRlIn0seyJ4LWFtei1zZXJ2ZXItc2lkZS1lbmNyeXB0aW9uIjoiQUVTMjU2In0seyJ4LWFtei1jcmVkZW50aWFsIjoiQUtJQVpUSEVJTDJHWTZJTEJDT0QvMjAyMjAxMTgvdXMtZWFzdC0xL3MzL2F3czRfcmVxdWVzdCJ9LHsieC1hbXotYWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsieC1hbXotZGF0ZSI6IjIwMjIwMTE4VDA3MjQxNloifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwidGVtcGZpbGVzIl1dLCJleHBpcmF0aW9uIjoiMjAyMi0wMS0xOFQwODoyNDoxNi4wMDBaIn0=",
                    "x-amz-server-side-encryption": "AES256",
                    "x-amz-date": "20220118T072416Z",
                    "x-amz-algorithm": "AWS4-HMAC-SHA256",
                    key: "tempfiles",
                    signature: "d5d7908b0d568a08a5e0a34ef08288cf8ea327889ad4c5dea71494c43c75108a"
                },
                hiddenFieldProps: ["action", "headers"]
            }
        }
    ],
    formProps: {
        layout: "vertical"
    }
};

const argsTempPreLoaded = {
    fields: [
        {
            dropEffect: "move",
            content: "Header",
            id: "b8d264c4-ea10-4dd0-990e-6ad4ca090c42",
            type: "Header",
            field_name: "field_de8ce171-8877-4f70-9173-57e6f2668a9d"
        },
        {
            dropEffect: "move",
            content: "Your text",
            id: "b664c762-9673-4142-925f-e761fc3b9496",
            type: "Paragraph",
            field_name: "field_1e8fe106-5cb1-4a59-814b-c19e38732c68"
        },
        {
            dropEffect: "move",
            field_name: "field_a840e936-90f7-46df-a58b-f9a696de9155",
            src: "",
            alt: "Update URL",
            id: "f7c2092c-77af-48b6-ac74-b655efafbedf",
            type: "Image"
        },
        {
            dropEffect: "move",
            field_name: "field_f9078487-2a9f-48a7-bde6-c55e649fa5a7",
            label: "Select",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: true, message: "Select value from list" }],
            id: "4bf1b0ec-d615-43da-b332-2802edc1f41c",
            type: "Dropdown"
        },
        {
            dropEffect: "move",
            field_name: "field_7f4f1c0d-9cc0-4d73-b467-2cc1d04b0157",
            label: "Tag",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Select atleast one tag" }],
            id: "87704d1d-1e1b-41ad-b043-2d5fb9926682",
            type: "Tags"
        },
        {
            dropEffect: "move",
            field_name: "field_2c3ddee3-85f4-4548-a098-4807df842ff2",
            label: "Checkbox",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: true, message: "Select atleast one option" }],
            id: "f256c57b-a5ee-40d1-933c-ec446deb4182",
            type: "Checkboxes"
        },
        {
            dropEffect: "move",
            field_name: "field_326ec855-c0fb-4eb8-b45f-67bf344b14d2",
            label: "Options",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Choose any one option" }],
            id: "ed449311-46fe-431f-961d-56bac097e10a",
            type: "RadioButtons"
        },
        {
            dropEffect: "move",
            field_name: "field_d3693f24-c8ed-4330-85d3-14e83a366062",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }],
            id: "4f2db38c-e54f-4701-bf12-217f674a5436",
            type: "TextInput"
        },
        {
            dropEffect: "move",
            content: "Divider",
            plain: false,
            dashed: false,
            id: "c5bfe33f-60c9-4e9b-b95b-55ebddcf13ce",
            type: "LineBreak",
            field_name: "field_17c2eb42-2775-4c6f-a9d6-6b3bb7e93293"
        },
        {
            dropEffect: "move",
            field_name: "field_9535faf8-7812-4251-980f-6692e2767395",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }],
            id: "d115c616-b47d-468d-987d-eeade658577f",
            type: "TextArea"
        },
        {
            dropEffect: "move",
            field_name: "field_a1f071c0-fd48-4737-8a5e-57b60184bce1",
            label: "Date",
            allowClear: true,
            format: "MM/DD/YYYY",
            rules: [{ required: false, message: "Please select date" }],
            id: "8942bcdb-115c-4c72-9f87-6cf3552d327f",
            type: "DatePicker"
        },
        {
            dropEffect: "move",
            field_name: "field_bd16e659-d4bd-4d8f-affb-447df33e00ad",
            label: "Rate",
            allowClear: true,
            allowHalf: false,
            count: 5,
            rules: [{ required: false, message: "Please rate" }],
            id: "2e41f307-190a-4b53-8d0e-d59aaf500baa",
            type: "Rating"
        },
        {
            dropEffect: "move",
            field_name: "field_7650803a-63dd-4c30-a4f9-8562d6876f4f",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }],
            id: "2cc3f543-7fb4-4f47-a09f-e31f32c0ec5e",
            type: "NumberInput"
        },
        {
            dropEffect: "move",
            field_name: "field_eb7ed5e4-74b5-497e-b504-f268355b39a2",
            label: "Time",
            format: "hh:mm a",
            allowClear: true,
            hourStep: 1,
            minuteStep: 1,
            rules: [{ required: false, message: "Please select time" }],
            id: "004754f3-0642-4328-8210-c74f6a8610d4",
            type: "TimePicker"
        },
        {
            dropEffect: "move",
            field_name: "field_85d98c48-61f7-4e4f-9197-82ba3dde45bf",
            label: "Signature",
            rules: [{ required: false, message: "Please sing form" }],
            id: "cc4b711b-cab5-438c-831f-a5dceef15832",
            type: "Signature"
        },
        {
            dropEffect: "move",
            field_name: "field_26d97f40-6440-42e9-8384-ca71a7ebe792",
            label: "Photo",
            multiple: true,
            accept: "image/png, image/jpeg",
            rules: [{ required: false, message: "Upload atleast one photo" }],
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            headers: { authorization: "authorization-text" },
            id: "dc64347f-a648-4476-8ea4-7171b2975df6",
            type: "Photo"
        },
        {
            dropEffect: "move",
            field_name: "field_b31b3009-0da3-4dc5-ad59-a1bcaad8bc31",
            label: "Attach File",
            static: true,
            maxCount: 5,
            multiple: true,
            rules: [{ required: false, message: "Upload atleast one file" }],
            action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
            headers: { authorization: "authorization-text" },
            id: "f09bdb86-2753-48ef-b576-dd13c39bcbbc",
            type: "File"
        },
        {
            dropEffect: "move",
            field_name: "field_42f55a13-0b07-46b3-a76b-6e4d0a90baa5",
            label: "Label",
            step: 1,
            min: 1,
            max: 5,
            minLabel: "Easy",
            maxLabel: "Difficult",
            id: "91f785ca-6927-4445-b742-bef14a56f755",
            type: "Range"
        },
        {
            dropEffect: "move",
            field_name: "field_42f55a13-0b07-46b3-a76b-6e4d0a90baa5",

            id: "31f785ca-6927-4445-b742-bef14a56f755",
            type: "Table",
            label: "Table",
            columns: [
                {
                    title: "Column 1",
                    dataIndex: "column1",
                    key: "column1",
                    inputType: "Text",
                    isRequired: true
                },
                { title: "Column 2", dataIndex: "column2", key: "column2", inputType: "Text" },
                { title: "Column 3", dataIndex: "column3", key: "column3", inputType: "Text" }
            ],
            noOfRows: 3,
            autoAddLastRow: false
        }
    ],
    fieldProps: [
        {
            key: "File",
            fieldProps: {
                action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                headers: {
                    authorization: "authorization-text"
                }
            }
        },
        {
            key: "Photo",
            fieldProps: {
                action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                headers: {
                    authorization: "authorization-text"
                }
            }
        }
    ],
    formProps: {
        labelAlign: "left",
        colon: true,
        requiredMark: true,
        labelCol: { span: 5 }
    },
    toolbarItems: FormItems.filter((item) => item.key === "Header" || item.key === "Paragraph")
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "FormBuilder",
    component: FormBuilder,
    args: argsTemp,
    decorators: [
        (Story) => (
            <div style={{ margin: "3em" }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        )
    ]
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

// const FromScratch2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const FromScratch = {
    component: FormBuilder,
    args: argsTemp,
    decorators: [
        (Story) => (
            <div style={{ margin: "3em" }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        )
    ]
};

export const PreLoaded = {
    component: FormBuilder,
    args: argsTempPreLoaded,
    decorators: [
        (Story) => (
            <div style={{ margin: "3em" }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        )
    ]
};

export const NoPreview = {
    component: FormBuilder,
    args: {
        fields: [
            {
                dropEffect: "move",
                content: "Header",
                id: "b8d264c4-ea10-4dd0-990e-6ad4ca090c42",
                type: "Header",
                field_name: "field_de8ce171-8877-4f70-9173-57e6f2668a9d"
            },
            {
                dropEffect: "move",
                content: "Your text",
                id: "b664c762-9673-4142-925f-e761fc3b9496",
                type: "Paragraph",
                field_name: "field_1e8fe106-5cb1-4a59-814b-c19e38732c68"
            }
        ],
        onUpdate: function (fields) {
            console.log(fields);
        },
        showPreviewTab: false
    },
    decorators: [
        (Story) => (
            <div style={{ margin: "3em" }}>
                {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                <Story />
            </div>
        )
    ]
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args

// More on args: https://storybook.js.org/docs/react/writing-stories/args

const DnDFormInput = ({ fieldProps = [], value = [], onChange = null, ...props }) => {
    return <FormBuilder fieldProps={fieldProps} fields={value} onUpdate={onChange} {...props} />;
};

const FormTemplate = (args) => {
    return (
        <Form>
            <Form.Item name="customForm">
                <DnDFormInput showPreviewTab={false} />
            </Form.Item>
        </Form>
    );
};

export const AsAFormInput = FormTemplate.bind({});
