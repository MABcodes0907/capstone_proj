import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, } from'react-router-dom';

import Home from './Home';
import Login from './Login';
import Layout from './Layout';
import Register from './Register';
import Account from './Account';
import Cottage from './Cottage';
import Room from './Room';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Booking from './Booking';



export const UserContext = createContext();


export function UserContextProvider(){
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect( () => {
        if (!user){
            axios.get('/profile').then(({data}) => {
                setUser(data);
                setReady(true);
            })
        }
    }, []
);
    return (
        <UserContext.Provider value={{user, setUser, ready}}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/account/:subpage?" element={<Account />} />
                    <Route path="/cottage" element={<Cottage />} />
                    <Route path="/room" element={<Room />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cottage/booking" element={<Booking />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    );
}