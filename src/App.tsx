import React, { useEffect, useState } from "react";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/index";

function App() {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isBackgroundWhite, setBackgroundWhite] = useState(false);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth-interview-preparation")) {
      setAuth(true);
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          isAuth,
          setAuth,
          isBackgroundWhite,
          setBackgroundWhite,
          isLoginFormVisible,
          setLoginFormVisible,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
