import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [localState, setLocalState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLocalState(false);
    }, 2000);
  });

  return (
    <React.Fragment>
      {localState && <h2>Loading...</h2>}
      {!localState && <h2>Nada</h2>}
    </React.Fragment>
  );
};

export default Loader;
