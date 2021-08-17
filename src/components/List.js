import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ListContext } from './ListContext'


const List = () => {

    const { lists, onDelete } = useContext(ListContext)
    const { name } = useParams()

    return (
        <div>
            <h3>Information</h3>
            {lists.filter(list => list.name === name).map((list) => (
                <div key={list.id}>
                    <p>Name: {list.name}</p>
                    <p>Status: <span className={list.isVaccinated ? 'green' : 'red'}>{list.isVaccinated ? 'Vaccinated' : 'Not Vaccinated'}</span></p>
                    <button onClick={() => onDelete(list.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default List
