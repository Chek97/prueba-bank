import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { RootState } from './state/reducers';
import { startGetDeposit, startGetHistory } from './state/action-creators';

function App() {

  const state = useSelector((state: RootState) => state.bank);
  const history = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    dispatch(startGetDeposit());
    dispatch(startGetHistory());
  }, []);
   
  return (
    <div className="App container">
      <header className="p-2">
        <h1 className="App-header">{state}</h1>
      </header>
      <div className="pt-3 button-container">
        <button className="btn btn-primary p-3" onClick={() => depositMoney(1000)}>Deposit</button>
        <button className="btn btn-danger p-3" onClick={() => withdrawMoney(1000)}>Withdraw</button>
        <button className="btn btn-info p-3" onClick={() => bankrupt(state)}>Bankrupt</button>
      </div>
      <div className="History p-5">
        <h1>History</h1>
        <ul className="list-group list-group-vertical">
          {
            history.map((hitoryElement: any, idx: number) => (
              <li 
                className={
                  `list-group-item list-group-item-${(hitoryElement.type === 'deposit' && 'success') || (hitoryElement.type === 'withdraw' && 'danger') || (hitoryElement.type === 'amount' && 'info')}`
                } 
                key={idx}
              >
                {hitoryElement.type}: {hitoryElement.amount}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
