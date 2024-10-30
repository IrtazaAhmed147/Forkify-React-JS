import { createSlice } from "@reduxjs/toolkit";

export const getApi = createSlice({
    name: 'getApi',
    initialState: {
        item: [],
        results: 0, 
        input: '',
    },
    reducers: {
        setItems: (state, action) => {
            state.item = action.payload.data.recipes;
            state.results = action.payload.results
            console.log(action.payload)
          },
        getValue: (state, action)=> {   
            state.input = action.payload
            console.log(action.payload)
        }
    }
})


export const { setItems, item, getValue, input, results} = getApi.actions
export default getApi.reducer


export const fetchApi = (input)=> async (dispatch)=> {

    if (!input) return
    try {
        

            const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}`
            const response = await fetch(url)
            const res = await response.json()
    
            dispatch(setItems(res))
            return res
        




    } catch (error) {
            console.log(error)        
    }
}