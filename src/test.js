import { React, useState } from "react";
import "./styles.css";

const Square = ({ squareId, onClickHandler, gameValues }) => {
	return (
		<div
			onClick={() => {
				onClickHandler(squareId);
			}}
			className='squareContainer'
			id={squareId}
		>
			{gameValues[squareId]}
		</div>
	);
};

const Board = () => {
	const [userVal, setUserVal] = useState("X");
	const [winner, setWinner] = useState(null);
	const boardRowsObj = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	];
	const squaresValuesObj = {
		0: "",
		1: "",
		2: "",
		3: "",
		4: "",
		5: "",
		6: "",
		7: "",
		8: "",
	};
	const [boardValues, setBoardValues] = useState({ ...squaresValuesObj });

	const findMatch = (boardValues) => {
		const caseMatch = [
			// hr
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			//cross
			[0, 4, 8],
			[2, 4, 6],
			// vr
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
		];

		caseMatch.forEach((row) => {
			if (
				boardValues[row[0]] !== "" &&
				boardValues[row[1]] !== "" &&
				boardValues[row[2]] !== ""
			) {
				if (
					boardValues[row[0]] === boardValues[row[1]] &&
					boardValues[row[1]] === boardValues[row[2]]
				) {
					setWinner(boardValues[row[1]]);
				}
			}
		});
	};

	const onClickSquareHandler = (sqrNum) => {
		let squaresVal = { ...boardValues };

		if (squaresVal[sqrNum] === "" && !winner) {
			squaresVal[sqrNum] = userVal;
			setBoardValues({
				...squaresVal,
			});

			findMatch(squaresVal);

			if (userVal === "X") setUserVal("O");
			else setUserVal("X");
		} else {
			return;
		}
	};

	const onReset = () => {
		setBoardValues({ ...squaresValuesObj });
		setWinner(null);
		setUserVal("X");
	};

	return (
		<div className='gameBoard'>
			<div id='statusArea' className='status'>
				Next player: <span>{userVal}</span>
			</div>
			{winner && (
				<div id='winnerArea' className='winner'>
					Winner:
					<span>{winner}</span>
				</div>
			)}
			<button className='buttonStyle' onClick={onReset}>
				Reset
			</button>

			<div className='boardStyle'>
				{boardRowsObj.map((row) => (
					<div className='boardRow'>
						<Square
							squareId={row[0]}
							onClickHandler={onClickSquareHandler}
							gameValues={boardValues}
						/>
						<Square
							squareId={row[1]}
							onClickHandler={onClickSquareHandler}
							gameValues={boardValues}
						/>
						<Square
							squareId={row[2]}
							onClickHandler={onClickSquareHandler}
							gameValues={boardValues}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

const Game = () => {
	return (
		<div className='game'>
			<Board />
		</div>
	);
};
export default Game;
