import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { getRepoListAsync } from './thunk';
import { useEffect } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useGetListRepo = () => {
    const repos = useSelector((state: RootState) => state.repo)
    const dispatch = useDispatch()
    useEffect(() => {
        if (repos.loading !== 'success' && repos.loading !== 'pending') {
            dispatch(getRepoListAsync()); 
        } 
    },[repos,dispatch])
}