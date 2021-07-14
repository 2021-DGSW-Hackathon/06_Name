import { autobind } from "core-decorators";
import { action, observable } from "mobx";
import ShowPostRepository from "./ShowPostRepository";

@autobind
class ShowPostStore {
	@observable isSelectModal = false;
	@observable postList = {};
	@observable postIdx = null;

	@action
	selectPostModal() {
		this.isSelectModal = !this.isSelectModal;
	}

	@action
	setPostIdx(postIdx) {
		this.postIdx = postIdx;
	}

	@action
	getPost(idx) {
		const res = ShowPostRepository.getPost(idx);
		this.postList = res;
		return res;
	}
}

export default ShowPostStore;