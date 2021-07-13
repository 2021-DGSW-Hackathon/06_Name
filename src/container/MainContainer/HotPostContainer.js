import ImageSlider from "components/ImageSlider/ImageSlider";
import useStores from "lib/useStore";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect } from "react";


const HotPostContainer = observer(() => {
	return (
		<>
			<ImageSlider />
		</>
	)
});

export default HotPostContainer;