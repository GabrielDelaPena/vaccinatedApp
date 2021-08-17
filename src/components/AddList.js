import React, { useState, useContext } from 'react'
import { ListContext } from './ListContext'

const AddList = () => {
    const { onAdd } = useContext(ListContext)
    const [name, setName] = useState('')
    const [isVaccinated, setIsVaccinated] = useState(false)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateIsVaccinated = (e) => {
        setIsVaccinated(e.currentTarget.checked)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        onAdd({name: name, isVaccinated: isVaccinated})
        setName('')
        setIsVaccinated('')
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Name: <span><input type="text" value={name} onChange={updateName} /></span></label>
            <label>Status: <input type="checkbox" value={isVaccinated} onChange={updateIsVaccinated} /></label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddList
