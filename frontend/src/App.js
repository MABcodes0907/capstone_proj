import axios from "axios";
import React from "react";
import {UserContextProvider} from './UserContext';
import {AdminContextProvider} from './AdminContext'


axios.defaults.baseURL = "http://localhost:3500";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
        <AdminContextProvider>
          {/* rest of the app */}
        </AdminContextProvider>
    </UserContextProvider>
    );
  }
export default App;
