import React from 'react';
import EditorComponents from '../components/Editor/Editor';
import EditorContainer from '../container/Editor/EditorContainer';
import Header from 'components/Header/Header';
import Upload from '../components/upload/Upload';
import CategoryTap from 'components/CategoryTap/CategoryTap';

const EditorPage = () => {
  return (
    <>
      <Header />
      <CategoryTap />
      <EditorComponents />
    </>
  )
}

export default EditorPage;