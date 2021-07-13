import ImageSlider from "components/ImageSlider/ImageSlider";
import Login from "components/Login/Login";
import Modal from "components/Modal/Modal";
import SelectPost from "components/Post/SelectPost";
import useStores from "lib/useStore";
import { observer } from "mobx-react";

const HotPostContainer = observer(() => {
	return (
		<>
			<ImageSlider />
			<Login />
		</>
	)
});

export default HotPostContainer;