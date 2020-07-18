import React from 'react';

const Ninjas = ({ninjas}) => {
    
    const ninjaList = ninjas.map(ninja => {
        return (
            <article className='ninja' key={ninja.id}>
                <h2>{ninja.name}</h2>
                <p><span>Age:</span> {ninja.age}</p>
                <p><span>Belt:</span> {ninja.belt}</p>
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