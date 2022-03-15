import axios from 'axios';
import { WORDS_API_URL } from '../constants/api';

export const getWordsList = async () => {
	try {
		const res = await axios.get(WORDS_API_URL);
		return res.data.words;
	} catch (err) {
		console.log(err);
	}
};
