import { useState } from "react";

import { Button, withStyles } from '@material-ui/core'
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
		borderRadius: '2px',
	},
}))(Button);

const Community = () => {
	const [postList, setPostList] = useState([]);
	const [type, setType] = useState(0);

	const typeSetOne = () => {
		setType(0);
	}
	const typeSetTwo = () => {
		setType(1);
	}
	const typeSetThree = () => {
		setType(2);
	}
	return (
		<ColorButton>
		</ColorButton>
	)
}

export default Community;