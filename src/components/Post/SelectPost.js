import useStores from "lib/useStore";

const SelectPost = ({ postIdx }) => {
	let data;
	const { store } = useStores();
	const { getPost } = store.ShowPostStore;
	const fetchPost = async () => {
		try {
			data = await getPost(postIdx);
		} catch (e) {
			console.log(e);
		}

		return (
			<>
				<div>
					{data.title}
				</div>
			</>
		)
	}
}

export default SelectPost;