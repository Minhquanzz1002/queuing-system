import {User} from "@modules/users/interface";
import {createSlice} from "@reduxjs/toolkit";

interface IStore {
    user: User | null;
    statusLogin: boolean;
    token: string | null;
}

const profileStore = createSlice({
    name: 'profileStore',
    initialState: {
        user: null,
        statusLogin: false,
        token: null,
    } as IStore,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            state.statusLogin = true;
        },
        logout: (state) => {
            state.user = null;
            state.statusLogin = false;
            state.token = null;
        },
        clearToken: (state) => {
            state.token = null;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }
    }
});

export default profileStore;