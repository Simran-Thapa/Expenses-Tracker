
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const { balance } = useContext(GlobalContext);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
}

export default Balance;


