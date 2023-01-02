import { configureStore } from "@reduxjs/toolkit";

import UserSlice from './Slice/Userslice'



export const store = configureStore({
          reducer: {
                    Users: UserSlice,
          }
});