import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCounter } from "./service";
import { fetchListRepo } from "./service";

export const getCounter: any = createAsyncThunk(
  'counter',
  async () => {
    const response = await fetchCounter()
    return response.data
  }
)

export const getRepoListAsync: any = createAsyncThunk(
  'repo',
  async () => {
    const response = await fetchListRepo()
    return response.data
  }
)