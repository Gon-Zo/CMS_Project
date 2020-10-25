import React, {useState} from "react";
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components'

export default (props) => {

    const height = props.height

    const isMenu = props.isMenu

    const handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }

    const filePickerCallback = (cb, value, meta) => {

        const input = document.createElement('input');

        input.setAttribute('type', 'file');

        input.setAttribute('accept', 'image/*');

        input.onchange = function () {

            const file = this.files[0];

            const reader = new FileReader();

            reader.onload = function () {

                const id = 'blobid' + (new Date()).getTime();

                const blobCache = tinymce.activeEditor.editorUpload.blobCache;

                const base64 = reader.result.split(',')[1];

                const blobInfo = blobCache.create(id, file, base64);

                blobCache.add(blobInfo);

                cb(blobInfo.blobUri(), {title: file.name});
            };
            reader.readAsDataURL(file);
        };

        input.click();
    }

    const setting = {
        menubar: isMenu,
        max_height: height,
        max_width: height,
        min_height: height,
        min_width: height,
        selector: 'textarea',
        image_title: true,
        content_css: 'writer',
        automatic_uploads: true,
        file_picker_types: 'image',
        file_picker_callback: filePickerCallback,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
            'undo redo | formatselect | image bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
    }

    return (
        <div style={{
            position: "relative"
        }}>
            <Editor
                initialValue=""
                init={setting}
                onEditorChange={handleEditorChange}/>

            <ButtonBox className={"mt-2"}>
                <button>Next</button>
            </ButtonBox>

        </div>
    )

}




const ButtonBox = styled.div `
    width : 100%;
    text-align : end;
`;
