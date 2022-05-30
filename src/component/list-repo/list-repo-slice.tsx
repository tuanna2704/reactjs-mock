import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getListRepo } from '../../redux/thunk';

export interface Repo {
  id: number,
  name: string,
  description: string,
  watchers_count:number,
  language:string,
  open_issues:number,
  private:boolean,
}

const initialState: any = {
  repo:[],
  loading:'idle',
}

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
     builder
       .addCase(getListRepo.pending, (state) => {
          state.loading = 'pending'
       })
       .addCase(getListRepo.fulfilled, (state, action) => {
          state.loading = 'success'
          state.repo = action.payload
       });
   }
 
})

export const { } = repoSlice.actions

export default repoSlice.reducer