import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  console.log(error, data, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending... please wait...</h3> : null}
    </div>
  );
}
