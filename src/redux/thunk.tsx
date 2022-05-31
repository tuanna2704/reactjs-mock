import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListRepo } from "./service";

export const getRepoListAsync: any = createAsyncThunk(
  'repo',
  async () => {
    const response = await fetchListRepo()
    return response.data
  }
)