import { createSlice } from "@reduxjs/toolkit";

export const getApi = createSlice({
    name: 'getApi',
    initialState: {
        item: [],
        results: 0, 
        input: '',
        page: 1,
        loading: false,
        specificRecipe: '',
    },
    reducers: {
        setItems: (state, action) => {
            state.item = action.payload.data.recipes;
            state.results = action.payload.results
            state.loading = false
            console.log(action.payload)
          },
        getValue: (state, action)=> {   
            state.input = action.payload
            state.page = 1
            state.loading = true
        },
        handleNextEvent: (state, action)=> {
            state.page += 1
            console.log(action)
        },
        getRecipeId: (state, action)=> {
            state.specificRecipe = action.payload
            console.log(action.payload)
        }
    }
})


export const { setItems, item, getValue, input, results, handleNextEvent, getRecipeId, specificRecipe} = getApi.actions
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



export const getRecipeApi =  (id)=> async(dispatch)=> {

    try {
        const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        const response = await fetch(url)
        const res = await response.json()
        // console.log(res.data)
        dispatch(getRecipeId(res.data.recipe))

    } catch (error) {
    console.log(error)      
    }

    // https://forkify-api.herokuapp.com/api/v2/recipes/${specificRecipeKey}
 }