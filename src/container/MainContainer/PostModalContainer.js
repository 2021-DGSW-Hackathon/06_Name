import useStores from 'lib/useStore';
import { observer } from 'mobx-react';
import Modal from '../../components/Modal/Modal'
import SelectPost from '../../components/Post/SelectPost';

const PostModalContainer = observer(() => {
	const { store } = useStores();
	const { isSelectModal, selectPostModal, postIdx, getPost, postList } = store.ShowPostStore;

	return (
		<>
			{isSelectModal ? (
				<Modal width={'1280px'} height={'880px'} handleClose={selectPostModal} none={true}>
					<SelectPost idx={postIdx} getPost={getPost} postList={postList} />
				</Modal>
			) : null}
		</>
	)
})

export default PostModalContainer;