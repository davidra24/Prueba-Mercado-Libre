import React, { createContext, useState } from 'react'

export const ItemsContext = createContext({})

/**
 * 
 * @param {children}
 * @returns Retorna un Provider que se utiliza para encapsular el estado global de la aplicación
 */
export const ItemsContextProvider = ({children}) => {
    const [search, setSearch] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [item, setItem] = useState({})
    const state = {
        search, searchQuery, setSearch, setSearchQuery, item, setItem
    }
    return (
        <ItemsContext.Provider value={{state}}>
            {children}
        </ItemsContext.Provider>
    )
}