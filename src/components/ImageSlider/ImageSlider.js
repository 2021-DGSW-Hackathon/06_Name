import axios from "axios";
import Modal from "components/Modal/Modal";
import useStores from "lib/useStore";
import { observer } from "mobx-react";
import { useCallback, useEffect, useState } from "react"
import Slider from "react-slick";
import { SERVER } from '../../config/config.json';
import './ImageSlider.scss';


const ImageSlider = observer(() => {
	const [postList, setPostList] = useState([]);
	const { store } = useStores();
	const { isSelectModal, selectPostModal, setPostIdx } = store.ShowPostStore;

	useEffect(() => {
		fetchEvents();
	}, []);

	const fetchEvents = async () => {
		try {
			const res = await axios.get(`${SERVER}/like/hot`);
			setPostList(res.data.data.posts);
		} catch (e) {
			console.log(e);
		}
	};

	const showPostModal = useCallback(async (postIdx) => {
		console.log(isSelectModal, 1)
		setPostIdx(postIdx);
		selectPostModal();
		console.log(isSelectModal, 2)
	});

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
						<img src={post.picture} className="pic" onClick={() => showPostModal(post.postIdx)}></img>
						<span className="hot-post" style={{ fontSize: '18px' }}>
							제목 : <b>{post.title}<br /></b>
							내용 : {post.content} <br />
							좋아요 수 : {post.countLike} <br />
						</span>
					</div>
				)
			})}
		</Slider >
	)
})

export default ImageSlider;