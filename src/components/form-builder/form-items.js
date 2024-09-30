const FormItems = [
    {
        key: "Header",
        name: "Header Text",
        icon: "fas fa-heading",
        fieldProps: {
            content: "Header",
            level: {
                type: "number",
                value: 1,
                max: 6,
                min: 1
            },
            align: {
                type: "select",
                value: "center",
                options: [
                    { label: "Left", value: "left" },
                    { label: "Center", value: "center" },
                    { label: "Right", value: "right" }
                ]
            }
        }
    },
    {
        key: "Paragraph",
        name: "Paragraph",
        icon: "fas fa-paragraph",
        fieldProps: {
            content: "Your text"
        }
    },
    {
        key: "LineBreak",
        name: "Line Break",
        icon: "fas fa-arrows-alt-h",
        fieldProps: {
            content: "Divider",
            plain: false,
            dashed: false
        }
    },
    {
        key: "Image",
        name: "Image",
        icon: "far fa-image",
        fieldProps: {
            field_name: "image_",
            src: "",
            alt: "Update URL"
        }
    },
    {
        key: "Dropdown",
        name: "Dropdown",
        icon: "far fa-caret-square-down",
        fieldProps: {
            field_name: "dropdown_",
            label: "Select",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Select value from list" }]
        }
    },
    {
        key: "Tags",
        name: "Tags",
        icon: "fas fa-tags",
        fieldProps: {
            field_name: "tags_",
            label: "Tag",
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Select atleast one tag" }]
        }
    },
    {
        key: "Checkboxes",
        name: "Checkboxes",
        icon: "far fa-check-square",
        fieldProps: {
            field_name: "checkboxes_",
            label: "Checkbox",
            alignVertical: true,
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Select atleast one option" }]
        }
    },
    {
        key: "RadioButtons",
        name: "Multiple Choice",
        icon: "far fa-dot-circle",

        fieldProps: {
            field_name: "radiobuttons_",
            label: "Options",
            alignVertical: true,
            options: [
                { label: "Option 1", value: "Option 1" },
                { label: "Option 2", value: "Option 2" },
                { label: "Option 3", value: "Option 3" }
            ],
            rules: [{ required: false, message: "Choose any one option" }]
        }
    },
    {
        key: "TextInput",
        name: "Text Input",
        icon: "fas fa-font",
        fieldProps: {
            field_name: "text_input_",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }]
        }
    },
    {
        key: "NumberInput",
        name: "Number Input",
        icon: "fas fa-plus",
        fieldProps: {
            field_name: "number_input_",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }]
        }
    },
    {
        key: "TextArea",
        name: "Multi-line Input",
        icon: "fas fa-text-height",
        fieldProps: {
            field_name: "text_area_",
            label: "Label",
            rules: [{ required: false, message: "Please enter value" }]
        }
    },
    {
        key: "Rating",
        name: "Rating",
        icon: "fas fa-star",
        fieldProps: {
            field_name: "rating_",
            label: "Rate",
            allowClear: true,
            allowHalf: false,
            count: 5,
            rules: [{ required: false, message: "Please rate" }]
        }
    },
    {
        key: "DatePicker",
        name: "Date",
        icon: "far fa-calendar-alt",
        fieldProps: {
            field_name: "date_picker_",
            label: "Date",
            allowClear: true,
            format: "MM/DD/YYYY",
            rules: [{ required: false, message: "Please select date" }]
        }
    },
    {
        key: "TimePicker",
        name: "Time",
        icon: "far fa-clock",
        fieldProps: {
            field_name: "time_picker_",
            label: "Time",
            format: "hh:mm a",
            allowClear: true,
            hourStep: 1,
            minuteStep: 1,
            rules: [{ required: false, message: "Please select time" }]
        }
    },
    {
        key: "Signature",
        name: "Signature",
        icon: "fas fa-pen-square",
        fieldProps: {
            field_name: "signature_",
            label: "Signature",
            rules: [{ required: false, message: "Please sing form" }]
        }
    },
    {
        key: "Photo",
        name: "Photo",
        icon: "fa fa-camera",
        fieldProps: {
            field_name: "photo_",
            label: "Photo",
            multiple: true,
            accept: "image/png, image/jpeg",
            rules: [{ required: false, message: "Upload atleast one photo" }]
        }
    },
    {
        key: "File",
        name: "File Attachment",
        icon: "fas fa-file",
        fieldProps: {
            field_name: "file_",
            label: "Attach File",
            static: true,
            maxCount: 5,
            multiple: true,
            rules: [{ required: false, message: "Upload atleast one file" }]
        }
    },
    {
        key: "Range",
        name: "Range",
        icon: "fas fa-sliders-h",
        fieldProps: {
            field_name: "range_",
            label: "Label",
            step: 1,
            min: 1,
            max: 5,
            minLabel: "Easy",
            maxLabel: "Difficult"
        }
    },

    ,
    // {
    //   key: "Phone",
    //   name: "Phone",
    //   icon: "fas fa-phone",
    //   fieldProps: {
    //     field_name: "phone_",
    //     label: "Label",
    //   },
    // },

    {
        key: "Table",
        name: "Table",
        icon: "fas fa-table",
        fieldProps: {
            field_name: "table_",
            columns: [
                {
                    title: "Column 1",
                    dataIndex: "column1",
                    key: "column1",
                    inputType: "Text",
                    isRequired: false
                },
                {
                    title: "Column 2",
                    dataIndex: "column2",
                    key: "column2",
                    inputType: "Text",
                    isRequired: false
                },
                {
                    title: "Column 3",
                    dataIndex: "column3",
                    key: "column3",
                    inputType: "Text",
                    isRequired: false
                }
            ],
            noOfRows: 3,
            autoAddLastRow: false
        }
    }
    // {
    //     key: 'TwoColumnRow',
    //     name: 'Two Column Row',
    //     icon: 'fas fa-columns',
    //     fieldProps: {
    //         field_name: 'two_col_row_',
    //         canHaveAnswer: false,
    //         label: '',
    //     }
    // },
    // {
    //     key: 'ThreeColumnRow',
    //     name: 'Three Column Row',
    //     icon: 'fas fa-columns',
    //     fieldProps: {
    //         field_name: 'three_col_row_',
    //         canHaveAnswer: false,
    //         label: '',
    //     }
    // },
    // {
    //     key: 'FourColumnRow',
    //     name: 'Four Column Row',
    //     icon: 'fas fa-columns',
    //     fieldProps: {
    //         field_name: 'four_col_row_',
    //         canHaveAnswer: false,
    //         label: '',
    //     }
    // }
];

export default FormItems;
