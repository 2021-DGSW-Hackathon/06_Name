import ImageSlider from "components/ImageSlider/ImageSlider";
import useStores from "lib/useStore";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";


const HotPostContainer = observer(() => {
	const { store } = useStores();
	const { handlePost, postLIst } = store.HotPostStore;
	console.log(postLIst);

	const requestHandleHotPost = useCallback(async () => {
		try {
			const res = await handlePost();
		} catch (err) {
			return err;
		}
	});

	useEffect(() => {
		requestHandleHotPost();
	}, []);

	return (
		<>
			<ImageSlider postLIst={postLIst} />
		</>
	)
})

export default HotPostContainer;