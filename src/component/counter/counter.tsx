import React, { useEffect } from 'react'
import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counter-slice';
import './counter.css';
import { getCounter } from '../../redux/thunk'

export function CounterComponent() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCounter()); 
  }, []);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}