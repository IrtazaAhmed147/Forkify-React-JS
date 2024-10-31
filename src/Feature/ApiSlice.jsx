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
        loader: false,
        bookmark: [],
    },
    reducers: {
        setItems: (state, action) => {
            state.item = action.payload.data.recipes;
            state.results = action.payload.results
            state.loading = false
        },
        getValue: (state, action) => {

            if (action.payload.trim()) {
                state.input = action.payload
                state.page = 1
                state.loading = true
            }

        },
        handleNextEvent: (state) => {
            state.page += 1
        },
        getRecipeId: (state, action) => {
            state.specificRecipe = action.payload
            state.loader = false
        },
        loadBar: (state, action) => {
            state.loader = true
        },
        setbookmark: (state, action) => {

            const existingBookmark = state.bookmark.find(item => item.id === action.payload.id);

            if (existingBookmark) {
                // Recipe already exists in bookmarks, remove it

                state.bookmark = state.bookmark.filter(item => item.id !== action.payload.id);
            } else {
                // Recipe not in bookmarks, add it
                state.bookmark.push(action.payload);
            }

        }
    }
})


export const { setItems, item, getValue, input, results, handleNextEvent, getRecipeId, specificRecipe, loadBar, loader, setbookmark, bookmark } = getApi.actions
export default getApi.reducer


export const fetchApi = (input) => async (dispatch) => {


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



export const getRecipeApi = (id) => async (dispatch) => {

    try {
        const url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        const response = await fetch(url)
        const res = await response.json()
        dispatch(getRecipeId(res.data.recipe))

    } catch (error) {
        console.log(error)
    }

}