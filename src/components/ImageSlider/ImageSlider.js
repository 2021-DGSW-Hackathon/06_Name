import axios from "axios";
import { useState } from "react"
import Slider from "react-slick";
import { SERVER } from '../../config/config.json';
import './ImageSlider.scss';


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

	const settings = {
		dots: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true
	};

	return (
		<Slider {...settings} className="sli">
			{postList.map(post => {
				return (
					<div className="piczone">
						<img src={post.picture} className="pic"></img>
						<span className="hot-post" style={{ fontSize: '18px' }}>
							제목 : <b>{post.title}<br /></b>
							내용 : {post.content} <br />
							좋아요 수 :{post.countLike} <br />
						</span>
					</div>
				)
			})}
		</Slider >
	)
}

export default ImageSlider;