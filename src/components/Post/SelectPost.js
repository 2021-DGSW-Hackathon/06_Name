import { observer } from "mobx-react";

const { default: useStores } = require("lib/useStore")

const SelectPost = ({ idx, getPost, postList }) => {
	const fetchPost = async () => {
		try {
			const data = await getPost(idx);
			console.log(data)
		} catch (e) {
			console.log(e);
		}

		return (
			<>
				<div>
					{postList.title}
				</div>
			</>
		)
	}
}

export default SelectPost;