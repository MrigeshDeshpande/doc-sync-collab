import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import "../assets/styles/editor.css"

const Editor =()=>{

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "Let's Go..."
        }),
    ],
    content: "",
    });

    if (!editor) {
        return null; 
      }

    return(
        <div className="editor-container">
            <EditorContent editor={editor} />
        </div>
    )
}

export default Editor;