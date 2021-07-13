import axios from "axios"
import { SERVER } from '../../config/config.json'

class HotPostRepository {
	Post = async () => {
		const { data } = await axios.get(`${SERVER}/like/hot`);

		return data;
	};
}

export default new HotPostRepository();