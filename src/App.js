import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/HomePage';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
		<Nav />
		<Routes>
			<Route path="/" element={<Main />} />
		</Routes>
		<Footer />
	</>
  );
}

export default App;
