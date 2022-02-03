import React, { FC } from 'react';
import IWord from '../../interfaces/word.interface';

import './Word.css';

type Props = {
	word: IWord;
};

const wordInputUpdated = () => {
	console.log('word has been changed');
};

const Word: FC<Props> = ({ word }) => {
	return (
		<div className='word'>
			<h3
				onBlur={wordInputUpdated}
				className='word__title'
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{word.title}
			</h3>
			<span
				className='word__form'
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{word.form}
			</span>
			<p
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
