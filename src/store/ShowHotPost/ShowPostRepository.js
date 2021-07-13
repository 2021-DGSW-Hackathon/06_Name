import axios from 'axios';
import { SERVER } from '../../config/config';

class ShowPostRepository {
	getPost = async (idx) => {
		const res = await axios.get(`${SERVER}/community/${idx}`)

		const data = res.data.data.posts;

		return data;
	}
}

export default ShowPostRepository;