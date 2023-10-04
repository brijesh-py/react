import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    count < 20 ? setCount(count + 1) : {};
  };

  const decrement = () => {
    count > 0 ? setCount(count - 1) : {};
  };

  return (
    <div className="card text-center p-5 bg-slate-200">
      <h1 className="text-6xl font-black">Counter</h1>
      <div className="my-4">
        <button
          class="h-10 px-6 font-semibold rounded-md bg-black text-white me-3 mb-2"
          type="submit"
        >
          {count}
        </button>
        <div>
          <button
            class="h-10 px-6 font-semibold rounded-md bg-black text-white me-3 mb-2"
            type="submit"
            onClick={increment}
          >
            Increment
          </button>

          <button
            class="h-10 px-6 font-semibold rounded-md bg-black text-white mb-2"
            type="submit"
            onClick={decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
