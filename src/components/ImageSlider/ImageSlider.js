import axios from "axios";
import { useState } from "react"
import { SERVER } from '../../config/config.json';

import FadeIn from "react-fade-in";

const ImageSlider = () => {
	const [postList, setPostList] = useState([]);
	const fetchEvents = async () => {

		try {
			const res = await axios.get(`${SERVER}/like/hot`);
			setPostList(res.data.data.posts);
		} catch (e) {
			console.log(e);
		}
	};

	fetchEvents();


	return (
		<FadeIn delay={400}>
			<div className="postList">
				{postList.map(post => {
					return (
						<>
							<div>
								{post.title}
								{post.content}
								<img src={post.picture} className="pic"></img>
							</div>
						</>
					)
				})}
			</div>
		</FadeIn>
	)
}

export default ImageSlider;