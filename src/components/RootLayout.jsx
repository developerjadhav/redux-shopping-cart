import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './Navbar';
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar';
import { useSelector, useDispatch } from 'react-redux';
import { resetProgress } from '../store/progressSlice';

const RootLayout = () => {
    const progress = useSelector((state) => state.progress.value);
    const dispatch = useDispatch();
    return (
        <>
            <NavBar />
            <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => dispatch(resetProgress())}
            />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;