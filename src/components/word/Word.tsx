import React, { FC, FocusEvent } from 'react';
import IWord from '../../interfaces/word.interface';

import './Word.css';

type Props = {
	word: IWord;
	onWordUpdate: (word: IWord) => void;
};

const Word: FC<Props> = ({ word, onWordUpdate }) => {
	const wordInputUpdated = (event: FocusEvent<HTMLHeadingElement, Element>) => {
		console.log('word input updated');
		const newMeaningValue = event.currentTarget.textContent;
		const updatedWordObj: IWord = {
			...word,
			meaning: newMeaningValue || '',
		};
		onWordUpdate(updatedWordObj);
	};

	return (
		<div className='word'>
			<h3 className='word__title'>{word.title}</h3>
			<span className='word__form'>{word.form}</span>
			<p
				onBlur={wordInputUpdated}
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
