import { useEffect, useState } from "react";

export default function Pagination() {
  const [data, updateData] = useState([]);
  const [limit, updateLimit] = useState(10);
  const [total, updateTotal] = useState(0);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(">>Res", res);
        if (typeof res?.total == "number") updateTotal(res.total);
        if (Array.isArray(res?.products)) updateData(res.products);
      })
      .catch((err) => {
        alert("Some Error Occured");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [limit]);

  return (
    <div>
      {Array.isArray(data) &&
        !!data.length &&
        data.map((it, index) => {
          return <div key={index+it?.title}>{it?.title || "no title found"}</div>;
        })}
      {limit <= total && (
        <button
          onClick={() => {
            updateLimit((prev) => prev + 10);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
