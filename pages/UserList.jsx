import axios from "axios";
import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";

const UserList = () => {
    const [Data, setData] = useState([]);

const router = useRouter()
  const InputList = ({InfoData}) => {
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/data/${id}`).then((res) => {
        window.location.reload();
      });
    };

    const handleEdit = (InfoData) => {
        console.log(InfoData);
        router.push({
            pathname : "/Form",
            query : {
                data : InfoData.id
            }
        })
    }


    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }}>{InfoData.FirstName}</div>
        <div style={{ width: "10%" }}>{InfoData.LastName}</div>
        <div style={{ width: "10%" }}>
          <button onClick={() => handleDelete(InfoData.id)}>Delete</button>
          <button onClick={() => handleEdit(InfoData)}>Edit</button>
        </div>
      </div>
    );
  };



  useEffect(() => {
    axios.get("http://localhost:8000/data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {Data.map((data) => {
        return (
          <InputList
            key={data.id}
            InfoData={data}
            id={data.id}
          />
        );
      })}
      <div>
        <button>
          <a href="/Form">Back to the form</a>
        </button>
      </div>
    </div>
  );
};
export default UserList;
