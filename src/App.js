import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GithubUsers from './pages/GithubUsers';
import './App.css';
import UserDetails from './pages/UserDetails';
import Covid from './components/Covid';

function App() {
	return (
    	<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GithubUsers />} />
					<Route path="/details/:id" element={<UserDetails />} />
					<Route path='/Covid' element={<Covid />}/>
				</Routes>
			</BrowserRouter>
    	</div>
	);
}

export default App;