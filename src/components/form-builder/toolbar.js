/**
 * <Toolbar />
 */
import React, { useEffect, useState } from "react";
import ToolbarItem from "./toolbar-draggable-item";
import FormItems from "./form-items";

function buildItems(items, fieldProps = [], defaultItems) {
    let resultItems = defaultItems;
    if (items) resultItems = items;

    resultItems = resultItems.map((field) => {
        let found = fieldProps.find((overrideField) => field.key === overrideField.key);
        if (found)
            field.fieldProps = {
                ...field.fieldProps,
                ...found.fieldProps,
                hiddenFieldProps: found?.hiddenFieldProps || []
            };
        return field;
    });
    return resultItems;
}
//TODO: Fields still need to implement

const Toolbar = ({ toolbarItems, fieldProps, ...props }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(buildItems(toolbarItems, fieldProps, FormItems));
    }, [toolbarItems, fieldProps]);

    return (
        <div>
            {items.map((item) => (
                <ToolbarItem data={item} key={item.key} />
            ))}
        </div>
    );
};

export default Toolbar;
