import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCounter } from "./service";

export const getCounter: any = createAsyncThunk(
    'counter',
    async () => {
        console.log(
            'abcd'
        )
      const response = await fetchCounter()
      console.log(response.data)
      return response.data
    }
  )