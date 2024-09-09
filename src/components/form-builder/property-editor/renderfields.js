import React from "react";
import { FormElement } from "../../elements";
import Columns from "./Columns";
import Options from "./options";
import Rules from "./rules";

const camel2title = (camelCase) => {
    if (Array.isArray(camelCase)) camelCase = camelCase[camelCase.length - 1];
    if (typeof camelCase === "string")
        return camelCase
            .replace(/([A-Z])/g, (match) => ` ${match}`)
            .replace(/^./, (match) => match.toUpperCase())
            .trim();
    else return camelCase;
};

const renderField = (name, value, nonEditableProperties = []) => {
    const getHiddenStatus = (name) => {
        if (nonEditableProperties && nonEditableProperties.includes(name)) {
            return true;
        }
        return false;
    };
    let type = "TextArea";
    let options = [];
    switch (typeof value) {
        case "boolean":
            type = "RadioButtons";
            options = [
                { label: "Yes", value: true },
                { label: "No", value: false }
            ];
            return (
                <FormElement
                    key={name}
                    element={{ field_name: name, options: options, label: camel2title(name), type: type }}
                />
            );
        case "string": {
            if (name === "content") {
                type = "TextArea";
                return (
                    <FormElement
                        element={{
                            maxLength: 1000,
                            field_name: name,
                            options: options,
                            label: camel2title(name),
                            type: type
                        }}
                    />
                );
            } else {
                type = "TextInput";
                return (
                    <FormElement
                        element={{
                            hidden: getHiddenStatus(name),
                            field_name: name,
                            options: options,
                            label: camel2title(name),
                            type: type,
                            maxLength: 255
                        }}
                    />
                );
            }
            break;
        }
        case "number":
            type = "NumberInput";
            return (
                <FormElement
                    key={name}
                    element={{ field_name: name, options: options, label: camel2title(name), type: type }}
                />
            );
        case "object":
            if (name === "options") {
                return <Options key={name} name={["options"]}></Options>;
            }
            if (name === "rules") {
                return <Rules key={name} name={["rules"]} value={value}></Rules>;
            }
            if (name === "columns") {
                return <Columns key={name} name={["columns"]} />;
            }
            break;
        default:
            type = "TextArea";
            return (
                <FormElement
                    key={name}
                    element={{ field_name: name, options: options, label: camel2title(name), type: type }}
                />
            );
    }
};

export { renderField };
