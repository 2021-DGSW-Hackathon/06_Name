import { action, observable } from "mobx"
import { autobind } from 'core-decorators';
import HotPostRepository from './HotPostRepository';


@autobind
class HotPostStore {
	@observable postList = [];

	@action
	async handlePost() {
		const res = await HotPostRepository.Post();
		this.postList = res.posts[0];
		return res;
	}

}

export default HotPostStore;