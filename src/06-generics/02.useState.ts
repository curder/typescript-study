// 元祖：useState 练习

function useState<T>(initialState: T): [T, (state: T) => void] {
  let state = initialState;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}

const [counter, setCounter] = useState(0);
const [message, setMessage] = useState("hello");
const [banners, setBanners] = useState<any[]>([]);

export {};
