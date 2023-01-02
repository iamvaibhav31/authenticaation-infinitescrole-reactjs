import { createAsyncThunk } from "@reduxjs/toolkit";
import { Userreq } from '../../Helper/axios'



export const UserReqs = createAsyncThunk("Users/UserReqs", async () => {
          try {
                    const response = await Userreq.get()
                    return response.data
          } catch (e) {
                    return e.message
          }
})