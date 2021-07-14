import axios from "axios";
import Modal from "components/Modal/Modal";
import SelectPost from "components/Post/SelectPost";
import useStores from "lib/useStore";
import { inject, observer } from "mobx-react";
import { useCallback, useEffect, useState } from "react"
import Slider from "react-slick";
import { SERVER } from '../../config/config.json';
import './ImageSlider.scss';


const ImageSlider = observer(() => {
	const [postList, setPostList] = useState([]);
	const [modal, setModal] = useState(false);
	const [index, setIndex] = useState();

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

	const modalSet = (postIdx) => {
		setModal(!modal);
		setIndex(postIdx)
	}

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
		<>
			<Slider {...settings} className="sli">
				{postList.map(post => {
					return (
						<div className="piczone">
							<img src={post.picture} className="pic" onClick={() => modalSet(post.postIdx)} />
							<span className="hot-post" style={{ fontSize: '18px' }}>
								제목 : <b>{post.title}<br /></b>
								내용 : {post.content} <br />
								좋아요 수 : {post.countLike} <br />
							</span>
						</div>
					)
				})}
			</Slider >
		</>
	)
})

export default ImageSlider;