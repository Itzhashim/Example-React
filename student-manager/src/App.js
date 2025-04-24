import React, {useState} from'react';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [editId, setEditId] = useState(null);
  const [inputName, setInputName] = useState("");
  const [inputRoll, setInputRoll] = useState("");


  const handleAdd = () => {
    if(name.trim() === '' || roll.trim() === '') return;

    const newStudent= {
      id: Date.now(),
      name,
      roll
    };

    setStudents([...students, newStudent]);
    setName('');
    setRoll('');
  };

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (id,inputName,inputRoll) => {
    setStudents(students.map(student => student.id === id ? {...student, name: inputName, roll: inputRoll} : student));
    setEditId('');
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setInputName(student.name);
    setInputRoll(student.roll);
  };

  //const handleUpdate = (id,inputName,inputRoll) => {
    //updateStudent(id,inputName,inputRoll);
    //setEditId('');
  //};

  return(
    <div>
      <h1>Student Manager</h1>

      <div>
        <input
          type = "text"
          value = {name}
          onChange={(e) => setName(e.target.value)}
          placeholder = "Name"
        />
        <input
          type = "number"
          value = {roll}
          onChange={(e) => setRoll(e.target.value)}
          placeholder = "Roll No" 
        />
        <button onClick={() => handleAdd()}>Add</button>
      </div>

      <ul>
        {students.map(student => (
          <li key = {student.id}>
            {editId === student.id ? (
              <>
                <input
                  type = "text"
                  value = {inputName}
                  onChange={(e) => setInputName(e.target.value)}
                />
                 <input
                  type = "number"
                  value = {inputRoll}
                  onChange={(e) => setInputRoll(e.target.value)}
                />
                <button onClick={() => updateStudent(student.id,inputName,inputRoll)}>Save</button>

              </>
            ) :(
              <>  
                Name: {student.name}  Roll: {student.roll}
                <button onClick={() => handleEdit(student)}>Update</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </>
            )
          }
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App;
