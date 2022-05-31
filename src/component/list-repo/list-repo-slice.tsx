import { createSlice } from '@reduxjs/toolkit';
import { getRepoListAsync } from '../../redux/thunk';
import { RepoList } from '../../model/repo.model'

const initialState: RepoList = {
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
       .addCase(getRepoListAsync.pending, (state) => {
          state.loading = 'pending'
       })
       .addCase(getRepoListAsync.fulfilled, (state, action) => {
          state.loading = 'success'
          state.repo = action.payload
       });
   }
 
})

export const { } = repoSlice.actions

export default repoSlice.reducer