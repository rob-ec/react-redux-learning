import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {

    const ninjaList = ninjas.map(ninja => {
        //if (ninja.age <= 20)
        //    return null;

        return (
            <article className='ninja' key={ninja.id}>
                <h2>{ninja.name}</h2>
                <p><span>Age:</span> {ninja.age}</p>
                <p><span>Belt:</span> {ninja.belt}</p>
                <div className='closeButtom' onClick={() => {deleteNinja(ninja.id);}}>delete</div>
            </article>
        );
    });

    return (
        <div className='ninja-list'>
            <header><h1>Ninjas</h1></header>
            {ninjaList}
        </div>
    );
}

export default Ninjas;