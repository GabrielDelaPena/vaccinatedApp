import React, { useState, createContext } from 'react'

export const ListContext = createContext()

export const ListProvider = ({ children }) => {

    const [lists, setLists] = useState(
        [
            {
                name: "Shaira Dela Peña",
                isVaccinated: true,
                id: 1
            },
            {
                name: "Gabriel Dela Peña",
                isVaccinated: true,
                id: 2
            },
            {
                name: "Patrick Dela Peña",
                isVaccinated: false,
                id: 3
            },
            {
                name: "Shirlmies Balat",
                isVaccinated: true,
                id: 4
            },
            {
                name: "Maximo Dela Peña",
                isVaccinated: false,
                id: 5
            }
        ]
    )

    const onDelete = (id) => {
        setLists(lists.filter(list => list.id !== id))
    }

    const onAdd = (list) => {
        const id = Math.floor(Math.random() * (1000 - 4)) + 4
        const newList = { ...list, id }
        setLists([...lists, newList])
    }

    const value = {
        lists,
        onDelete,
        onAdd
    }

    return (
        <ListContext.Provider value={value}>
            {children}
        </ListContext.Provider>
    )
}
