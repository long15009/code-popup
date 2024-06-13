
import './App.css';

import './App.css'; 
import React, { useState } from 'react'; 
import StudentTable from './StudentTable'; 
import StudentForm from './StudentForm'; 


function App() {
  const [students, setStudents] = useState([]); // Khai báo state 'students' và hàm 'setStudents', khởi tạo giá trị ban đầu là một mảng rỗng
  const [editingStudent, setEditingStudent] = useState(null); // Khai báo state 'editingStudent' và hàm 'setEditingStudent', khởi tạo giá trị ban đầu là null
  const [isPopupOpen, setIsPopupOpen]= useState(false);
  const [isDeletePopupOpen,setIsDeletePopupOpen]=useState(false)
  const [deleteIndex, setDeleteIndex]= useState(null)
  const addStudent = (student) => { // Hàm để thêm sinh viên mới vào mảng students
    setStudents([...students, student]); // Cập nhật state students với một mảng mới bao gồm các sinh viên hiện tại và sinh viên mới
  
  };

  const deleteStudent = (index) => { // Hàm để xóa sinh viên theo chỉ số (index) trong mảng students
    const newStudents = [...students]; // Tạo một bản sao của mảng students
    newStudents.splice(deleteIndex, 1); // Xóa một phần tử tại vị trí index
    setStudents(newStudents); // Cập nhật state students với mảng mới đã bị xóa
    closeDeletePopup()
  };
  const openDeletePopup = (index) =>{
    setDeleteIndex(index)
    setIsDeletePopupOpen(true)
  }
  const closeDeletePopup = ()=>{
    setDeleteIndex(null)
    setIsDeletePopupOpen(false)
  }
  const editStudent = (index, updatedStudent) => { // Hàm để chỉnh sửa thông tin sinh viên
    const newStudents = [...students]; // Tạo một bản sao của mảng students
    newStudents[index] = updatedStudent; // Cập nhật sinh viên tại vị trí index với thông tin mới
    setStudents(newStudents); // Cập nhật state students với mảng mới đã chỉnh sửa
  };
  const openPopup = ()=>{
    setIsPopupOpen(true)
  }
  const closePopup = ()=>{
    setIsPopupOpen(false)
    setEditingStudent(null)
  }
  const handleBackgroundClick = (e)=>{
    if(e.target.className='popup'){
      closeDeletePopup() 
      closePopup()
  }}

  return (
    <div className="App"> 
      <div class="title"> 
        <h1>Quản lý sinh viên</h1> 
      </div>
      <button onClick={openPopup}>Thêm Sinh Viên</button>
      {isPopupOpen &&(

      <div className='popup'onClick={handleBackgroundClick}>

      <div class="stdForm" onClick={(e)=>e.stopPropagation()}>
        <button className='close-btn'onClick={closePopup}>x</button>
        <StudentForm 
          addStudent={addStudent} // Truyền hàm addStudent vào component StudentForm
          editingStudent={editingStudent} // Truyền state editingStudent vào component StudentForm
          editStudent={editStudent} // Truyền hàm editStudent vào component StudentForm
          closePopup={closePopup}
        />
      </div>
      </div>
      )}
      {isDeletePopupOpen &&(
        <div className='popup'onClick={handleBackgroundClick}>
          <div className='popup-content'>
            <p>Bạn chắc chắn muốn xóa sinh viên này ?</p>
            <button className='btn-form-de' onClick={deleteStudent}>Xóa</button>
            <button className='btn-form-de' onClick={closeDeletePopup}>Hủy</button>
          </div>
        </div>
      )}
      <div class="stdtable"> 
        <StudentTable 
          students={students} // Truyền state students vào component StudentTable
          deleteStudent={openDeletePopup} // Truyền hàm deleteStudent vào component StudentTable
          setEditingStudent={(studentInfo)=>{
            setEditingStudent(studentInfo)
            openPopup()
          }} // Truyền hàm setEditingStudent vào component StudentTable
          
        />
      </div>
    </div>
  );
}

export default App; // Xuất component App để có thể sử dụng ở nơi khác
