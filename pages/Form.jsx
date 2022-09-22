import React, { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  const InputList = ({ FirstName, LastName, id }) => {
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/data/${id}`)
      .then((res)=>{
        window.location.reload()
      })
    };

    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }}>{FirstName}</div>
        <div style={{ width: "10%" }}>{LastName}</div>
        <div style={{ width: "10%" }}>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    );
  };

  const [FName, setFName] = useState("");
  const handleChangeFName = (e) => {
    setFName(e.target.value);
  };

  const [LName, setLName] = useState("");
  const handleChangeLName = (e) => {
    setLName(e.target.value);
  };

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/data").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleSubmitForm = () => {
    // const res = await fetch("http://localhost:8000/comments", {
    //   method: "POST",
    //   body: JSON.stringify({ body : comment }),
    //   headers: {
    //     'Content-Type' : 'application.json'
    //   }
    // });
    // const data = await res.json();
    // console.log(data);

    const Data = {
      FirstName: FName,
      LastName: LName,
    };

    axios.post("http://localhost:8000/data", Data).then((res) => {
      console.log(Data);
      window.location.reload()
    });
  };

  return (
    <div>
      <div>
        <input type="text" value={FName} onChange={handleChangeFName} />
        <input type="text" value={LName} onChange={handleChangeLName} />
        <button onClick={handleSubmitForm}>Submit</button>
      </div>
      <div>
        {Data.map((data) => {
          return (
            <InputList
              key={data.id}
              FirstName={data.FirstName}
              LastName={data.LastName}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Form;
