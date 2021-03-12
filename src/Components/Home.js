import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import axios from "axios";

const styles = {
  container: {
    width: "100px",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    margin: "50px auto",
  },
  item: {
    margin: "2px",
    // background: "purple",
  },
};

export default function Home() {
  const { count, changeCount } = useContext(Context);
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/api")
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data && <div>{data}</div>}
      <div style={styles.container}>
        <div style={styles.item}>
          <button onClick={() => changeCount(1)}>+</button>
        </div>
        <div style={styles.item}>{count}</div>
        <div style={styles.item}>
          <button onClick={() => changeCount(-1)}>-</button>
        </div>
      </div>
    </div>
  );
}
