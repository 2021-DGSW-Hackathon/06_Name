import React from 'react';
import EditorContainer from '../container/Editor/EditorContainer';
import Header from 'components/Header/Header';
import Upload from 'components/upload/Upload';

const EditorPage = () => {
  return (
    <>
      <Header />
      <Upload />
      <EditorContainer />
    </>
  )
}

export default EditorPage;