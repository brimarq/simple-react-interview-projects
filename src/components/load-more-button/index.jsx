import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  // async function fetchProducts() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://dummyjson.com/products?limit=20&skip=${
  //         count === 0 ? 0 : count * 20
  //       }`
  //     );

  //     const result = await response.json();

  //     if (result && result.products && result.products.length) {
  //       setProducts((prevData) => [...prevData, ...result.products]);
  //       setLoading(false);
  //     }

  //     console.log(result);
  //   } catch (e) {
  //     console.log(e);
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchProducts();
  // }, [count]);

  useEffect(() => {
    /**
     * When using react strict mode, effects run twice on mounting in developmemt
     * https://react.dev/reference/react/StrictMode
     *
     * This led to the initially fetched products being duplicated in the ui, which caused there
     * to be duplicated keys when the `products` were mapped for rendering, throwing errors in
     * the browser console.
     *
     * So... rewrite the effect with a cleanup function that will only setProducts on
     * one execution and ignore doing so otherwise:
     * https://react.dev/learn/synchronizing-with-effects#fetching-data
     */
    let ignore = false;

    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );

        const result = await response.json();

        if (result && result.products && result.products.length) {
          if (!ignore) {
            setProducts((prevData) => [...prevData, ...result.products]);
            setLoading(false);
          }
        }

        console.log(result);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }

    fetchProducts();

    // cleanup fn after effect
    return () => {
      ignore = true;
    };
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data. Please wait...</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have loaded 100 products.</p> : null}
      </div>
    </div>
  );
}
