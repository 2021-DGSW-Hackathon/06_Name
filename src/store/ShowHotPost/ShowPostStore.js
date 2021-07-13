import { autobind } from "core-decorators";
import { action, observable } from "mobx";

@autobind
class ShowPostStore {
	@observable isSelectModal = false;

	@action
	selectPostModal() {
		this.isSelectModal = !this.isSelectModal;
	}
}

export default ShowPostStore;