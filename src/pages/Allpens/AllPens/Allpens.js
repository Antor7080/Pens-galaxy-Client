import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllPen from '../Allpen/AllPen';

const Allpens = () => {
    const [allPens, setAllPens] = useState();
    const { databaseUrl } = useAuth()
    const url = databaseUrl('pens')
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPens(data))
    }, [url])

    return (
        <>
            <Header></Header>
            <div className="container">
                <h2 className=" text-center mt-5 pt-5">Our All Pen Collection</h2>
                <div className="row">
                    {
                        allPens?.map(allPens => <AllPen
                            key={allPens.id}
                            allPens={allPens}
                        ></AllPen>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Allpens;