import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
export default function AddEdit() {
  const navigate = useNavigate();
  const location = useLocation();

  let id = location.state;
  if (id === null) {
    id = 0;
  }
  console.log(id)
  const [employeeId, setEmployeeId] = useState(12);
  const [state, setState] = useState(8);
  const [employee, setEmployee] = useState({ ID: 0, Name: '', age: 0 });
  const authAxios = axios.create({ baseURL: 'https://departments-a9275-default-rtdb.firebaseio.com/' })
  useEffect(() => {
    if (id != 0) {
      fetchData(id);
    } else {
      setEmployeeId(employeeId + 1);
      setEmployee({ ID: employeeId, Name: '', age: 0 });
      
    }
  }, [id])

  function fetchData(id) {
    id = id - 1;
    authAxios.get(`/${id}.json`).then((response) => {
      setEmployee(response.data);
    })
  }
  function handleOnChange(e) {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

  function updateEmployeeData() {
    if (id === 0) {
      console.log("pkay");
      authAxios.post('/.json' , employee).then((res) => {
        alert('Employee added successfully');
        setState(state + 1);
      })
    } else {
      let id1 = employee.ID - 1;
      authAxios.patch(`/${id1}.json`, employee).then((response) => {
        navigate('/');
      })
    }

  }
  console.log(employee.ID);
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ID</label>
        <input type="number" className="form-control" name='ID' onChange={handleOnChange} id="exampleInputEmail1" value={employee.ID} aria-describedby="emailHelp" disabled />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input type="text" className="form-control" name='Name' onChange={handleOnChange} value={employee.Name} id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Age</label>
        <input type="number" className="form-control" name='age' onChange={handleOnChange} value={employee.age} id="exampleInputPassword1" />
      </div>
      <button type="button" onClick={updateEmployeeData} className="btn btn-primary">Submit</button>
    </form>
  )
}
