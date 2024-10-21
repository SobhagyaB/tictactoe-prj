import React, { useState, useEffect } from 'react';


const Tictactable = () => {
    let [state1, setState1] = useState(null);
    let [state2, setState2] = useState(null);
    let [state3, setState3] = useState(null);
    let [state4, setState4] = useState(null);
    let [state5, setState5] = useState(null);
    let [state6, setState6] = useState(null);
    let [state7, setState7] = useState(null);
    let [state8, setState8] = useState(null);
    let [state9, setState9] = useState(null);

    function randomnum1() {
        let randomval = Math.random() > 0.2 ? "X" : "O";
        setState1(randomval);
    }
    function randomnum2() {
        let randomval = Math.random() < 0.7 ? "X" : "O";
        setState2(randomval);
    }
    function randomnum3() {
        let randomval = Math.random() < 0.7 ? "X" : "O";
        setState3(randomval);
    }
    function randomnum4() {
        let randomval = Math.random() < 0.3 ? "X" : "O";
        setState4(randomval);
    }
    function randomnum5() {
        let randomval = Math.random() < 0.8 ? "X" : "O";
        setState5(randomval);
    }
    function randomnum6() {
        let randomval = Math.random() < 0.9 ? "X" : "O";
        setState6(randomval);
    }
    function randomnum7() {
        let randomval = Math.random() < 0.2 ? "X" : "O";
        setState7(randomval);
    }
    function randomnum8() {
        let randomval = Math.random() < 0.5 ? "X" : "O";
        setState8(randomval);
    }
    function randomnum9() {
        let randomval = Math.random() < 0.5 ? "X" : "O";
        setState9(randomval);
    }

    useEffect(() => {
        const winningCombinations = [
            [state1, state2, state3], // Row 1
            [state4, state5, state6], // Row 2
            [state7, state8, state9], // Row 3
            [state1, state4, state7], // Column 1
            [state2, state5, state8], // Column 2
            [state3, state6, state9], // Column 3
            [state1, state5, state9], // Diagonal 1
            [state3, state5, state7], // Diagonal 2
        ];

        for (const [a, b, c] of winningCombinations) {
            if (a && a === b && a === c) {
                alert(`Winner: ${a}`);
                resetGame();
                return;
            }
        }
    }, [state1, state2, state3, state4, state5, state6, state7, state8, state9]);

    // Reset game function
    const resetGame = () => {
        setState1(null);
        setState2(null);
        setState3(null);
        setState4(null);
        setState5(null);
        setState6(null);
        setState7(null);
        setState8(null);
        setState9(null);
    };

    return (
        <div>
            <h1>TicTac Game</h1>
            <table>
                <tbody>
                    <tr>
                        <td className={state1} onClick={randomnum1}>{state1}</td>
                        <td className={state2} onClick={randomnum2}>{state2}</td>
                        <td className={state3} onClick={randomnum3}>{state3}</td>
                    </tr>
                    <tr>
                        <td className={state4} onClick={randomnum4}>{state4}</td>
                        <td className={state5} onClick={randomnum5}>{state5}</td>
                        <td className={state6} onClick={randomnum6}>{state6}</td>
                    </tr>
                    <tr>
                        <td className={state7} onClick={randomnum7}>{state7}</td>
                        <td className={state8} onClick={randomnum8}>{state8}</td>
                        <td className={state9} onClick={randomnum9}>{state9}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Tictactable;
