import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const getMangas = createAsyncThunk(
    'getMangas',
    async (data, {rejectWithValue, dispatch})=>{
        const response = await fetch(`http://134.122.75.14:8666/api/v1/manga/?limit=12&${data}`)
        const dataX = await response.json()
        dispatch(mangasInfo(dataX?.results))
    }
)

const MangaSlice = createSlice({
    name:"MangaSlice",
    initialState:{
        mangas:[],
        
    },
    reducers:{
        mangasInfo: (state, action) =>{
            state.mangas = action.payload;
            
        },
        // paginationDec(state,action) => {
            
        // },
    }
})

export const {mangasInfo} = MangaSlice.actions;

export default MangaSlice.reducer;