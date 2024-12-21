import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, } from'react-router-dom';

import AdminLayout from './AdminLayout';
import Admin from './Admin';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';

export const AdminContext = createContext();

export function AdminContextProvider(){
    const [admin, setAdmin] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect( () => {
        if (!admin){
            axios.get('/adminprofile').then(({data}) => {
                setAdmin(data);
                setReady(true);
            })
        }
    }, []
);
    return (
        <AdminContext.Provider value={{admin, setAdmin, ready}}>
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/adminregister" element={<AdminRegister />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                </Route>
            </Routes>
        </AdminContext.Provider>
    );
}
