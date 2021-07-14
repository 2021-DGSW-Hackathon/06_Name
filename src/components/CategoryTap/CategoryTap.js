import './CategoryTap.scss';
import { useMemo, useState } from "react";

import { Button, makeStyles, withStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import FormControl from '@material-ui/core/FormControl';

const CategoryTap = () => {
  const [postList, setPostList] = useState([]);
  const [type, setType] = useState(0);
  const options = [
    { value: "가수", label: "가수" },
    { value: "배우", label: "배우" },
    { value: "유튜버", label: "유튜버" },
    { value: "애니메이션", label: "애니메이션" },
    { value: "스포츠", label: "스포츠" },
    { value: "해외", label: "해외" },
    { value: "기타", label: "기타" },
  ];
  const [category, SetCategory] = useState();

  const categorySet = (e) => {
    SetCategory(e.value)
  }

  return (
    <>
      <div>
        <Select onChange={categorySet} options={options} className="sel" />
      </div>
    </>
  )
}

export default CategoryTap;