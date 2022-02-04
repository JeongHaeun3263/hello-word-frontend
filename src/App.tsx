import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import DUMMY_WORDS from './DUMMY_WORDS';
import Word from './components/word/Word';
import IWord from './interfaces/word.interface';
import Navbar from './components/navbar/Navbar';

const App = () => {
	const [wordsList, setWordsList] = useState<Array<IWord>>([]);

	useEffect(() => {
		const wordListFromLocalStorageString = localStorage.getItem('my-words');
		if (wordListFromLocalStorageString) {
			const wordListFromLocalStorageArray = JSON.parse(
				wordListFromLocalStorageString
			);
			setWordsList(wordListFromLocalStorageArray);
		} else {
			setWordsList(DUMMY_WORDS);
		}
	}, []);

	useEffect(() => {
		const wordsListString = JSON.stringify(wordsList);
		localStorage.setItem('my-words', wordsListString);
	}, [wordsList]);

	const updateWordItem = (updatedWord: IWord) => {
		const updatedList = wordsList.map((wordItem: IWord) => {
			if (wordItem._id === updatedWord._id) {
				return updatedWord;
			}
			return wordItem;
		});

		setWordsList(updatedList);
	};

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
			<Navbar />
			<div className='words-list'>
				{wordsList.map((wordItem, i) => {
					return <Word word={wordItem} key={i} onWordUpdate={updateWordItem} />;
				})}
			</div>
		</div>
	);
};

export default App;
