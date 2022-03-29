import axios from 'axios';
import { WORDS_API_URL } from '../constants/api';
import IWord from '../interfaces/word.interface';

export const getWordsList = async () => {
	try {
		const res = await axios.get(WORDS_API_URL);
		return res.data.words;
	} catch (err) {
		console.log(err);
	}
};

export const createWord = async (newWord: Partial<IWord>) => {
	try {
		const res = await axios.post(WORDS_API_URL, newWord);
		return res.data.word;
	} catch (err) {
		console.log(err);
	}
};
