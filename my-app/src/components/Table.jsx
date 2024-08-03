import React from 'react';
import '../style/Table.css'; // Make sure to create this file for custom styling

const Table = ({ data, setSearchParams, getTabledata, setEditData,setId }) => {
  const handledelete = (id) => {
    fetch(`https://skailama-gules.vercel.app/table/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      //  setProjects(data.data);
      // setData(data?.data)
      // console.log("table",data);

      alert(data.msg)
      getTabledata()

    }).catch((err) => {
      console.log(err);
    });
  }

  const handleedit = (item) => {
    setEditData(item?.desc)
    setId(item?._id)
    setSearchParams({ selected: "edit" })

  }

  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.createdAt}</td>
              <td>{item.status}</td>
              <td><button onClick={() => handleedit(item)}>Edit</button>&nbsp;<button onClick={() => handledelete(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
