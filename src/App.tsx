import { useEffect, useState } from 'react';
import { createWord, getWordsList } from './services/wordsService';
import Word from './components/word/Word';
import IWord from './interfaces/word.interface';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';

const App = () => {
	const [wordsList, setWordsList] = useState<Array<IWord>>([]);
	const [showAddWordModal, setShowAddWordModal] = useState(false);
	const [newWord, setNewWord] = useState<Partial<IWord>>({
		title: '',
		form: '',
		meaning: '',
	});

	const handleCloseAddWordModal = () => {
		// setNewWord({
		// 	title: '',
		// 	form: '',
		// 	meaning: '',
		// });
		setShowAddWordModal(false);
	};
	const handleShowAddWordModal = () => setShowAddWordModal(true);

	useEffect(() => {
		getWordsFromServer();
	}, [wordsList]);

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

	const addWord = async () => {
		const savedWord = await createWord(newWord);
		setWordsList([...wordsList, savedWord]);
		handleCloseAddWordModal();
	};

	return (
		<div className='App'>
			<Navbar />
			<div>
				<Button variant='primary' onClick={handleShowAddWordModal}>
					Add New Word
				</Button>

				<Modal show={showAddWordModal} onHide={handleCloseAddWordModal}>
					<Modal.Header closeButton>
						<Modal.Title>Add Word</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FloatingLabel
							controlId='floatingInput'
							label='title'
							className='mb-3'
						>
							<Form.Control
								onChange={(event) => {
									const newValue = event.currentTarget.value;
									setNewWord({ ...newWord, title: newValue });
								}}
								type='text'
								placeholder='word'
								required
							/>
						</FloatingLabel>
						<FloatingLabel
							controlId='floatingInput'
							label='form'
							className='mb-3'
						>
							<Form.Control
								onChange={(event) => {
									const newValue = event.currentTarget.value;
									setNewWord({ ...newWord, form: newValue });
								}}
								type='text'
								placeholder='word'
							/>
						</FloatingLabel>
						<FloatingLabel controlId='floatingTextarea2' label='Meaning'>
							<Form.Control
								onChange={(event) => {
									const newValue = event.currentTarget.value;
									setNewWord({ ...newWord, meaning: newValue });
								}}
								as='textarea'
								placeholder='Leave a comment here'
								style={{ height: '100px', marginTop: '15px' }}
							/>
						</FloatingLabel>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleCloseAddWordModal}>
							Close
						</Button>
						<Button variant='primary' onClick={addWord}>
							Add
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			<div className='words-list'>
				{wordsList.map((wordItem, i) => {
					return <Word word={wordItem} key={i} onWordUpdate={updateWordItem} />;
				})}
			</div>
		</div>
	);
};

export default App;
