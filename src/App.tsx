import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Word from './components/word/Word';
import IWord from './interfaces/word.interface';
import Navbar from './components/navbar/Navbar';
import { getWordsList } from './services/wordsService';

const App = () => {
	const [wordsList, setWordsList] = useState<Array<IWord>>([]);

	useEffect(() => {
		getWordsFromServer();
	}, []);

	const getWordsFromServer = async () => {
		const words = await getWordsList();
		setWordsList(words);
	};

	const updateWordItem = (updatedWord: IWord) => {
		const updatedList = wordsList.map((wordItem: IWord) => {
			if (wordItem._id === updatedWord._id) {
				return updatedWord;
			}
			return wordItem;
		});

		setWordsList(updatedList);
	};

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
