import { createContext,useContext,useState } from "react";


const initialState = {
    filterKeys: [],
    sort: {
        key: 'name',
        order: 1
    }
}

const ListParamsContext = createContext(initialState)

export function ListParamsProvider({children}) {
    const [listParams, setListParams] = useState(initialState)
    return <ListParamsContext.Provider value={[listParams, setListParams]}>{children}</ListParamsContext.Provider>
}

export function useListParams() {
    return useContext(ListParamsContext)
}