import { Provider } from "mobx-react"
import { BrowserRouter } from 'react-router-dom';
import stores from './stores';
import App from './components/App';

const Root = () => {
	return (
		<Provider store={stores}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}

export default Root;