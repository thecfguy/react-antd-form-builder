import React, { useState, useEffect, useCallback } from "react";
import { useDrop } from "react-dnd";
import ItemTypes from "../ItemTypes";
import classes from "../css/drop-zone.module.css";
import SortableElement from "../form-builder/sortable-element";
import { Form, theme } from "antd";
import PropertyEditor from "../form-builder/property-editor";

const dropZoneLabel = {
    border: "1px dashed #e9e9e9",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    fontSize: "1.5em",
    fontWeight: "bold"
};

export const DropZone = ({ elements, onUpdate, formProps }) => {
    const { token } = theme.useToken();
    const bgColor = token.colorBgContainer;
    const [visible, setVisible] = useState(false);
    const [currentElement, setCurrentElement] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [{ canDrop, isOver, draggedItem }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => item,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            draggedItem: monitor.getDropResult()
        })
    }));
    // console.log(elements,"<<<<elements")

    // const idCount = elements.reduce((acc, obj) => {
    //     acc[obj.id] = (acc[obj.id] || 0) + 1;
    //     return acc;
    //   }, {});
    useEffect(() => {
        if (draggedItem && elements && onUpdate)
            if (draggedItem.id) {
                // filter out the  unique id of the dragged item
                //   const filteredData = elements.filter(obj => idCount[obj.id] === 1);
                //     onUpdate(filteredData)
                onUpdate([...elements, draggedItem]);
            }
    }, [draggedItem, elements, onUpdate]);

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            let elems = [...elements];
            [elems[dragIndex], elems[hoverIndex]] = [elems[hoverIndex], elems[dragIndex]];
            onUpdate(elems);
        },
        [elements, onUpdate]
    );

    const editHandler = (element, index) => {
        setCurrentElement(element);
        setCurrentIndex(index);
        setVisible(true);
    };
    const deleteHandler = (element, index) => {
        onUpdate?.(elements.filter((element, i) => index !== i));
    };

    const submitHandler = (values) => {
        const element = { ...currentElement, ...values };
        onUpdate?.(elements.map((e, i) => (currentIndex !== i ? e : element)));
    };

    const onPropertyEditFromElement = (values, index) => {
        const element = { ...values };
        onUpdate?.(elements.map((e, i) => (index !== i ? e : element)));
    };

    const isActive = canDrop && isOver;
    let backgroundColor = bgColor;
    if (isActive) {
        backgroundColor = token.colorBgElevated;
    } else if (canDrop) {
        backgroundColor = token.colorBgLayout;
    }

    return (
        <div ref={drop} className={classes.dropzone} style={{ backgroundColor: backgroundColor }}>
            <Form labelAlign="right" colon requiredMark labelCol={{ span: 5 }} {...formProps}>
                {elements.map((element, index) => {
                    return (
                        <SortableElement
                            key={element.id}
                            index={index}
                            element={element}
                            onMove={moveCard}
                            onEdit={editHandler}
                            onEditProperties={onPropertyEditFromElement}
                            onDelete={deleteHandler}
                        />
                    );
                })}
                {elements.length === 0 && <div style={dropZoneLabel}>Drag and drop elements here</div>}
            </Form>
            <PropertyEditor
                show={visible}
                element={currentElement}
                onClose={(e) => setVisible(false)}
                onSubmit={submitHandler}
            ></PropertyEditor>
        </div>
    );
};

export default DropZone;
