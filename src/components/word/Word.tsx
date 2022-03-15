import React, { FC, FocusEvent, useState } from 'react';
import IWord from '../../interfaces/word.interface';

import './Word.css';

type Props = {
	word: IWord;
	onWordUpdate: (word: IWord) => void;
};

const Word: FC<Props> = ({ word, onWordUpdate }) => {
	const [isFocused, setIsFocused] = useState(false);

	const wordInputUpdated = (event: FocusEvent<HTMLHeadingElement, Element>) => {
		setIsFocused(false);
		const newMeaningValue = event.currentTarget.textContent;
		if (newMeaningValue === word.meaning) {
			return;
		}
		const updatedWordObj: IWord = {
			...word,
			meaning: newMeaningValue || '',
		};
		onWordUpdate(updatedWordObj);
	};

	return (
		<div className={`word ${isFocused && 'word-focused'}`}>
			<h3 className='word__title'>{word.title}</h3>
			<span className='word__form'>{word.form}</span>
			<p
				onBlur={wordInputUpdated}
				onFocus={() => setIsFocused(true)}
				className='word__meaning'
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{word.meaning}
			</p>
		</div>
	);
};

export default Word;
