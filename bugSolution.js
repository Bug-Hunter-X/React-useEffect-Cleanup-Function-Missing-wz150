```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
    // Cleanup function: cancel any ongoing tasks
    return () => {
       //Add cleanup logic if needed e.g. aborting a fetch request.
      console.log('Component unmounting...');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```