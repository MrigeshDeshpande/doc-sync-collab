import React, { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family"; // For font type
import Color from "@tiptap/extension-color"; // For text color
import RightRail from "./RightRail"; // Toolbar component

import "../assets/styles/editor.css";

const Editor = ({ setEditorContent, editorContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit, 
      TextStyle,
      FontFamily.configure({
        types: ['textStyle'], 
      }),
     
      Color.configure({
        types: ["textStyle"], 
      }),
     
      TextAlign.configure({
        types: ["paragraph", "heading"], 
      }),
      Link,
    ],
    content: editorContent, 
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML()); // Update content state
    },
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
      editor.commands.setContent(editorContent);
    }
  }, [editorContent, editor]);

  if (!editor) return null;

  return (
    <div className="editor-container">
      {/* Text Editor */}
      <div className="editor-content-wrapper">
        <EditorContent editor={editor} />
      </div>

      {/* Toolbar */}
      <RightRail editor={editor} /> 
    </div>
  );
};

export default Editor;
