import React from 'react';
import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { PrimeReactProvider } from 'primereact/api';
import Ways from "./routes";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../public/formulario.css';
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service";
import './App.css';


const App = () => {

  const [userInfo, setUserInfo] = useState({
    name: 'Chico',
    isLogged: false,
    level: 'admin'
  });
  

  return(
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{userInfo, setUserInfo}}>
          <PrimeReactProvider>
            <Ways />
          </PrimeReactProvider>
        </AuthContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;


  
 