import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AddList from './AddList'
import { ListContext } from './ListContext'

const Lists = () => {

    const [lists, setLists] = useContext(ListContext)

    return (
        <>
            <div>
                <h3>Lists</h3>
                {lists.map(list => (
                    <Link to={`/list/${list.id}`} key={list.id} className="lists">{list.name}</Link>
                ))}
            </div>
            <div>
                <AddList />
            </div>
        </>
    )
}

export default Lists
