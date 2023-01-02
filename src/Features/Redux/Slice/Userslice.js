import { createSlice } from "@reduxjs/toolkit";
import { UserReqs } from '../../Apis/UserRequest'

const initialState = {
          users: [],
          status: 'idle', // idle | loading | successful | failed
          error: null
}


const UserSlice = createSlice({
          name: 'users',
          initialState,
          reducers: {},
          extraReducers(builder) {
                    builder
                              .addCase(UserReqs.pending, (state, action) => {
                                        state.status = "loading"
                              })
                              .addCase(UserReqs.fulfilled, (state, action) => {
                                        state.status = "successful"
                                        state.users = action.payload
                              })
                              .addCase(UserReqs.rejected, (state, action) => {
                                        state.status = "failed"
                                        state.users = []
                                        state.error = action.error.message
                              })
          }
})


export const selectAlluser = state => state.Users.users
export const getstatus = state => state.Users.status
export const geterror = state => state.Users.error


export default UserSlice.reducer;