import { useState } from "react"

import FadeIn from "react-fade-in";

const ImageSlider = ({ postLIst }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<FadeIn delay={400}>
			<div className="postList">
				{postLIst.map((post, index) => {
					return (
						<>
							{post.title}
						</>
					)
				})}
			</div>
		</FadeIn>
	)
}

export default ImageSlider;