import React from 'react'

const InputList = ({ FirstName, LastName }) => {
    const handleDelete = (id) => {
      console.log(id);
      axios.delete(`http://localhost:8000/data/${id}`)
      .then((res)=>{
        window.location.reload()
      })
    };

    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%" }}>{FirstName}</div>
        <div style={{ width: "10%" }}>{LastName}</div>
        <div>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => handleDelete(id)}>Edit</button>
        </div>
      </div>
    );
  };

export default InputList