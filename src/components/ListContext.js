import React, { useState, createContext, useEffect } from 'react'

export const ListContext = createContext()

export const ListProvider = ({ children }) => {

    const [lists, setLists] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/lists')
        const data = await response.json()
        setLists(data)
    }

    return (
        <ListContext.Provider value={[lists, setLists]}>
            {children}
        </ListContext.Provider>
    )
}
