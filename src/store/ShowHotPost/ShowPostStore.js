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
		console.log(this.isSelectModal, 3)
		this.isSelectModal = !this.isSelectModal;
		console.log(this.isSelectModal, 4)
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