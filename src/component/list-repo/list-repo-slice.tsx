import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRepoListAsync } from '../../redux/thunk';

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
    getRepoList: (state) => {
      state = state
    },
  },
  extraReducers: (builder) => {
     builder
       .addCase(getRepoListAsync.pending, (state) => {
          state.loading = 'pending'
       })
       .addCase(getRepoListAsync.fulfilled, (state, action) => {
          state.loading = 'success'
          state.repo = action.payload
       });
   }
 
})

export const { getRepoList } = repoSlice.actions

export default repoSlice.reducer