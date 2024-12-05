import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import "./manual.css";
export default function EditorComponent({ value, setValue }: any) {

    function onChange(e: any) {
        setValue(e.target.value);
    }

    return (
        <Editor value={value} onChange={onChange} />
    );
}