import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    studentId: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // Function to handle form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you can perform any action with the form data, like sending it to an API or processing it in any way you need

    axios.post('http://192.168.1.144:8080/user', formData)
    console.log(formData);
  };

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>
            Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            University:&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Student ID:&nbsp;&nbsp;
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
