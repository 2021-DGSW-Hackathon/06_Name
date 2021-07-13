import Main from 'components/Main/Main'
import { Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import * as Pages from "../pages";

const MainPage = () => {
	return (
		<>
			<Header />
			<Main />
		</>
	)
}

export default MainPage;