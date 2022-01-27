import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
};

//usage
//const dispatch = useDispatch(); 
//dispatch(setIsAuthenticated(true));

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
    },
});



//Selectors
//usage
//const isAuthenticated = useSelector(selectIsAuthenticated);

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;

export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;