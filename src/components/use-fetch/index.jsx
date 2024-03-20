import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function useFetch(url, options = {}) {
  // 3 states
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
      setPending(false);
    } catch (err) {
      setError(`${err}. Some error occured.`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

useFetch.propTypes = {
  url: PropTypes.string,
  options: PropTypes.object,
};
