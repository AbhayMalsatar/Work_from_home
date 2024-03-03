import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';;

const SearchDelete = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const authAxios = axios.create({ baseURL: 'https://departments-a9275-default-rtdb.firebaseio.com/' })

  useEffect(() => {  
    fetchData(); 
  })
  const fetchData = () => {
    authAxios.get('/.json').then((response) => {
      setData(Object.values(response.data));
    })
  }

  function DeleteById(id) {
    id = id - 1;
    authAxios.delete(`/${id}.json`).then((res) => {
      alert("Deleted Successfully");
    }).catch((err)=>{})
  }

  function EditById(id) {
    navigate('/AddEdit', {state : id});
  }
  
  function login() {
    localStorage.clear();
    navigate("/");
  }
  


  return (
    <div>
     
      <button type="button" style={{marginRight:10}} onClick={() => EditById(0)}  className="btn btn-success">Add Employee</button>

      <button style={{textAlign:'end'}} type="button" onClick={() => login()}  className="btn btn-danger">log out</button>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((row) => (
            <tr key={row.ID}>
              <td>{row.ID}</td>
              <td>{row.Name}</td>
              <td>{row.age}</td>
              <td><button type="button" onClick={() => DeleteById(row.ID)}  className="btn btn-danger" style={{marginRight:10}}>Delete</button><button type="button" onClick={() => EditById(row.ID)}  className="btn btn-primary">Update</button>
              </td>
            </tr>

          ))}
      </tbody>
    </Table>
    </div>
  );
};

export default SearchDelete;
