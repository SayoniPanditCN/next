import React from 'react'

const InputList = ({ FirstName, LastName, handleEntryDelete }) => {
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/data/${id}`)
      .then((res)=>{
        window.location.reload()
      })
      handleEntryDelete()
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

export default InputList