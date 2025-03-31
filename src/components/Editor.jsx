import React, {useEffect} from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import "../assets/styles/editor.css";

const Editor = ({ setEditorContent, editorContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
          placeholder: "Start writing here...",
      }),
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editorContent !== editor.getHTML()) {
        console.log("Updating editor with restored content:", editorContent);
        editor.commands.setContent(editorContent);
    }
}, [editorContent, editor]);

  if (!editor) return null;

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;