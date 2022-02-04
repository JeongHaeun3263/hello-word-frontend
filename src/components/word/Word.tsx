import React, { FC, FocusEvent } from 'react';
import IWord from '../../interfaces/word.interface';

import './Word.css';

type Props = {
	word: IWord;
	onWordUpdate: Function;
};

const Word: FC<Props> = ({ word, onWordUpdate }) => {
	const wordInputUpdated = (event: FocusEvent<HTMLHeadingElement, Element>) => {
		const text = event.currentTarget.textContent;
		onWordUpdate(text);
	};

	return (
		<div className='word'>
			<h3
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
