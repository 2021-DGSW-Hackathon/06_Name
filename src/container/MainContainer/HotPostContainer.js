import ImageSlider from "components/ImageSlider/ImageSlider";
import Login from "components/Login/Login";
import useStores from "lib/useStore";

const HotPostContainer = () => {
	const { stores } = useStores();
	const { isSelectModal } = stores.ShowPostStore;
	return (
		<>
			<ImageSlider />
			<Login />
		</>
	)
};

export default HotPostContainer;