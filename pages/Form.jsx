import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();

  const [FName, setFName] = useState("");
  const handleChangeFName = (e) => {
    setFName(e.target.value);
  };

  const [LName, setLName] = useState("");
  const handleChangeLName = (e) => {
    setLName(e.target.value);
  };

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
    if (router.query.data) {
      axios
        .put(`http://localhost:8000/data/${router.query.data}`, Data)
        .then((res) => {
          router.push("/UserList");
        });
    }
    axios.post("http://localhost:8000/data", Data).then((res) => {
      router.push("/UserList");
    });
  };

  useEffect(() => {
    if (router.query.data) {
      axios
        .get(`http://localhost:8000/data/${router.query.data}`)
        .then((res) => {
          setFName(res.data.FirstName);
          setLName(res.data.LastName);
        });
    }
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          value={FName}
          onChange={handleChangeFName}
          placeholder="First name"
        />
        <input
          type="text"
          value={LName}
          onChange={handleChangeLName}
          placeholder="Last name"
        />
        <button onClick={handleSubmitForm}>Submit</button>
      </div>
    </div>
  );
}

export default Form;
