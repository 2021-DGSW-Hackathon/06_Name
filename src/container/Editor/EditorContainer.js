import { useState } from 'react';
import Editor from '../../components/Editor/Editor';

const EditorContainer = () => {
  const [desc, setDesc] = useState('');
  function onEditorChange(value) {
    setDesc(value)
  }

  return (
    <div>
      <Editor value={desc} onChange={onEditorChange} />
    </div>
  )
};

export default EditorContainer;