// import React, { useRef, useState } from 'react';
// // import '@toast-ui/editor/dist/toastui-editor.css';
// // import { Editor } from '@toast-ui/react-editor';
// import './Editor.scss'
// import axios from 'axios';
// import { SERVER } from '../../config/config.json';

// const EditorComponents = () => {
//   const editorRef = useRef();
//   const [content, setContent] = useState();
//   const [file, setFile] = useState();

//   const btnClick = () => {
//     const editorInstance = editorRef.current.getInstance();
//     const getContent_md = editorInstance.getMarkdown();
//     setContent(getContent_md);
//   }

//   const onChangeFile = async (e) => {
//     setFile(e.target.value);

//     const formData = new FormData();
//     formData.append('file', file);

//     const res = await axios.post(`${SERVER}/upload`, formData);

//     console.log(res);
//   }

//   return (
//     <>
//       <div className="editor">
//         <input className="title-form" type="text"></input>
//         <Editor usageStati dstics={false} value="Editor" ref={editorRef} />
//       </div>
//       <div>
//         <button style={{ marginTop: '10px' }} onClick={btnClick}>Button</button>
//         <input className="file-form" type='file' onChange={onChangeFile}></input>
//       </div>
//     </>
//   )
// }

// export default EditorComponents;