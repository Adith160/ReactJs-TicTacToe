// StartPage.js
import React, {useState} from 'react';
import '../Styles/StartPage.css';
import O_img from '../Assets/Images/O.svg';
import X_img from '../Assets/Images/X.svg';
import GameArea from './GameArea';
import Toast from './Toast';

function StartPage({onInvite }) {
  const [NewGame, setNewGame] = useState(false);
  const [Choice, setUserChoice] = useState(null);
  const [ShowToast, setShowToast] = useState(false);

  const handleInvite = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };


  const handleNewGame = () => {
    setNewGame(true);
    localStorage.setItem("UserScore", JSON.stringify(0));
    localStorage.setItem("CompScore", JSON.stringify(0));
    localStorage.setItem("TieScore", JSON.stringify(0));
  };

  const handleUserSelection = (e, selection) => {
    setUserChoice(selection);
    e.target.style.backgroundColor = '#D9D9D9';
  };
  return (
    <>
       {NewGame ? (
          <GameArea Choice={Choice} />
        ) : (
          <div className="PlayArea">
          <div className="icons">
            <img alt="XImage" src={X_img} />
            <img alt="OImage" src={O_img} />
          </div>
          <div className="pickPlayer">
            PICK PLAYER
            <div className="options">
              <div className="xButton btn" onClick={(e) => handleUserSelection(e, 'X')}>
               
              </div>
              <div className="oButton btn" onClick={(e) => handleUserSelection(e, 'O')}>
              </div>
            </div>
          </div>
  
          <button name="New" className="newGame txt" onClick={handleNewGame}>
            NEW GAME ( VS CPU )
          </button>
          <button className="dummy txt">NEW GAME ( VS HUMAN ) Coming soon</button>
          <button className="newGame txt" onClick={handleInvite}>
            Invite your friend
          </button>
      </div>
        )}

        {ShowToast && <Toast />} 
    </>
  );
}

export default StartPage;
