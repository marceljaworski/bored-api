import React, { useState, useEffect , createContext } from 'react';
export const BoredContext = createContext();

function BoredProvider({ children }) {
  useEffect(() => {
    fetch("")
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then(json => setTodos(json));
  }, []);

  return (
    <BoredContext.Provider>
      {children}
    </BoredContext.Provider>
  )
}

export default bored