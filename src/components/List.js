import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const List = () => {

    const [list, setList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8000/lists/${id}`)
        const data = await response.json()
        setList(data)
    }

    const deleteData = async () => {
        const res = await fetch(`http://localhost:8000/lists/${id}`, {
            method: 'DELETE'
        })
        window.location.replace('/lists')
    }

    return (
        <div>
            <h3>Information</h3>
            <div className="the_lists_info">
                <p>Name: {list.name}</p>
                <p>Status: <span className={list.isVaccinated ? 'green' : 'red'}>{list.isVaccinated ? 'Vaccinated' : 'Not Vaccinated'}</span></p>
                <button onClick={deleteData}>Delete</button>
            </div>
        </div>
    )
}

export default List
