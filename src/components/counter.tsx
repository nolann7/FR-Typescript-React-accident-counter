import { useEffect, useState } from 'react';
import {
  decrement,
  increment,
  reset,
  update,
  selectCount,
} from '../store/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [inputCount, setInputCount] = useState(String(count));

  useEffect(() => {
    setInputCount(String(count));
  }, [count]);

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
        <button
          onClick={() => {
            dispatch(reset());
            setInputCount(String(0));
          }}
        >
          🔁 Reset
        </button>
        <button onClick={() => dispatch(increment())}>➕ Increment</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(update(Number(inputCount)));
          }}
        >
          <input
            type="number"
            value={inputCount}
            onChange={(e) => setInputCount(e.target.value)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
