import React, { useState } from 'react'

const AddList = () => {
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
        await fetch('http://localhost:8000/lists', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                isVaccinated: isVaccinated
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        window.location.replace('/lists')
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Name: <span><input type="text" value={name} onChange={updateName}/></span></label>
            <label>Status: <input type="checkbox" value={isVaccinated} onChange={updateIsVaccinated}/></label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddList
