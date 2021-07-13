import axios from "axios";
import Modal from "components/Modal/Modal";
import useStores from "lib/useStore";
import { useCallback, useState } from "react"
import Slider from "react-slick";
import { SERVER } from '../../config/config.json';
import './ImageSlider.scss';


const ImageSlider = () => {
	const [postList, setPostList] = useState([]);
	const [index, setIndex] = useState();
	// const { stores } = useStores();
	// const { isSelectModal, selectPostModal } = stores.ShowPostStore;
	const fetchEvents = async () => {
		try {
			const res = await axios.get(`${SERVER}/like/hot`);
			const data = await axios.get(`${SERVER}/community/1`);
			console.log(data)
			setPostList(res.data.data.posts);
		} catch (e) {
			console.log(e);
		}
	};

	fetchEvents();

	// const showPostModal = useCallback(async (idx) => {
	// 	try {
	// 		let res = axios.get(`${SERVER}/community/${idx}`)
	// 		await selectPostModal();

	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }, [isSelectModal]);

	const settings = {
		dots: true,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3800,
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