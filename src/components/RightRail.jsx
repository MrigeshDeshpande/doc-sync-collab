import React from "react";
import { Button } from "@mui/material";
import "../assets/styles/rightrail.css"
import { Select, MenuItem, TextField } from "@mui/material";

const RightRail = ({ editor }) => {
    if (!editor) return null;
  
    return (
      <div className="right-rail">
        {/* Font Style */}
        <Select
          value="default"
          onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
          fullWidth
          margin="normal"
        >
          <MenuItem value="default">Default Font</MenuItem>
          <MenuItem value="Arial">Arial</MenuItem>
          <MenuItem value="Times New Roman">Times New Roman</MenuItem>
          <MenuItem value="Roboto">Roboto</MenuItem>
        </Select>
  
        {/* Font Size */}
        <Select
          value="16px"
          onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}
          fullWidth
          margin="normal"
        >
          <MenuItem value="12px">12px</MenuItem>
          <MenuItem value="14px">14px</MenuItem>
          <MenuItem value="16px">16px</MenuItem>
          <MenuItem value="18px">18px</MenuItem>
        </Select>
  
        {/* Font Color */}
        <TextField
          type="color"
          label="Text Color"
          onChange={(e) => editor.chain().focus().setTextColor(e.target.value).run()}
          fullWidth
          margin="normal"
        />
  
        {/* Text Alignment */}
        <Button onClick={() => editor.chain().focus().setTextAlign('left').run()}>Left Align</Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('center').run()}>Center Align</Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('right').run()}>Right Align</Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('justify').run()}>Justify</Button>
  
        {/* Headings */}
        <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>Heading 1</Button>
        <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>Heading 2</Button>
        <Button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>Heading 3</Button>
  
        {/* Text Decoration */}
        <Button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</Button>
        <Button onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</Button>
  
        {/* Lists */}
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>Bullet List</Button>
        <Button onClick={() => editor.chain().focus().toggleOrderedList().run()}>Ordered List</Button>
        <Button onClick={() => editor.chain().focus().toggleTaskList().run()}>Task List</Button>
  
  
        {/* Clear Formatting */}
        <Button onClick={() => editor.chain().focus().clearNodes().run()}>Clear Formatting</Button>
  
      </div>
    );
  };


export default RightRail;
