import './Community.scss';
import { useMemo, useState } from "react";

import { Button, makeStyles, withStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import Select from 'react-select';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import { SERVER } from '../../config/config.json';

const ColorButton = withStyles((theme) => ({
	root: {
		boxShadow: 'none',
		color: theme.palette.getContrastText('#0077FF'),
		fontWeight: 300,
		backgroundColor: '#0077FF',
		width: '10rem',
		'&:hover': {
			boxShadow: 'none',
			backgroundColor: '#0077FF',
		},
		borderRadius: '15px',
	},
}))(Button);


const Community = () => {
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

	const getPostByHot = async () => {
		try {
			const res = await axios.get(`${SERVER}/like/hotlist`);
			const data = res.data.data.posts
			setPostList(data);
		} catch (err) {
			console.log(err);
		}
	}

	const getPostByDate = async () => {
		try {
			const res = await axios.get(`${SERVER}/community/sort`);
			const data = res.data.data.posts;
			console.log(data)
			setPostList(data);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<div>
				<ColorButton variant="contained" className="list-ink" style={{ marginRight: '20px' }} onClick={getPostByHot}>인기순</ColorButton>
				<ColorButton variant="contained" className="list-ch" onClick={getPostByDate}>최신순</ColorButton>
				<Select onChange={categorySet} options={options} className="sel" />
			</div>
			{postList ? (
				<div className="content">
					{postList.map(post => {
						return (
							<div className="com">
								<div className="com-title">
									{post.title}
								</div>
								<div className="com-content">
									{post.content}
								</div>
								<div className="com-picture">
									{post.picture}
								</div>
								<div className="com-like">
									{post.countLike}
								</div>
							</div>
						)
					})}
				</div>
			) : null}
		</>
	)
}

export default Community;