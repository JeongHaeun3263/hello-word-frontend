import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import DUMMY_WORDS from './DUMMY_WORDS';
import Word from './components/word/Word';

const App = () => {
	const [wordsList, setWordsList] = useState<Array<any>>([]);

	useEffect(() => {
		setWordsList(DUMMY_WORDS);
	}, []);

	console.log(wordsList);

	// const getWordsList = async () => {
	// 	try {
	// 		const res = await axios.get('http://localhost:4000/words');
	// 		setWordsList(res.data.words);
	// 		console.log(wordsList);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<div className='App'>
			<h1>Hello Word</h1>
			<div className='words-list'>
				{wordsList.map((wordItem, i) => {
					return <Word word={wordItem} key={i} />;
				})}
			</div>
		</div>
	);
};

export default App;
