
import React, { useState, useEffect } from 'react'; 

function StudentForm({ addStudent, editingStudent, editStudent }) { // Khai báo component StudentForm và nhận các props addStudent, editingStudent, editStudent
  const [name, setName] = useState(''); // Khai báo state 'name' và hàm 'setName', khởi tạo giá trị ban đầu là chuỗi rỗng
  const [dob, setDob] = useState(''); // Khai báo state 'dob' và hàm 'setDob', khởi tạo giá trị ban đầu là chuỗi rỗng
  const [gender, setGender] = useState('Male'); // Khai báo state 'gender' và hàm 'setGender', khởi tạo giá trị ban đầu là 'Male'

  useEffect(() => { // Sử dụng useEffect để cập nhật form khi editingStudent thay đổi
    if (editingStudent) { // Kiểm tra nếu đang chỉnh sửa sinh viên
      setName(editingStudent.student.name); // Cập nhật state 'name' với giá trị của sinh viên đang chỉnh sửa
      setDob(editingStudent.student.dob); // Cập nhật state 'dob' với giá trị của sinh viên đang chỉnh sửa
      setGender(editingStudent.student.gender); // Cập nhật state 'gender' với giá trị của sinh viên đang chỉnh sửa
    }
  }, [editingStudent]); // Chỉ chạy useEffect khi editingStudent thay đổi

  const handleSubmit = (e) => { // Hàm xử lý khi form được submit
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const student = { name, dob, gender }; // Tạo một đối tượng sinh viên mới từ các giá trị trong form
    if (editingStudent) { // Kiểm tra nếu đang chỉnh sửa sinh viên
      editStudent(editingStudent.index, student); // Gọi hàm editStudent với chỉ số và đối tượng sinh viên mới
    } else { // Nếu không phải chỉnh sửa sinh viên
      addStudent(student); // Gọi hàm addStudent với đối tượng sinh viên mới
    }
    setName(''); // Đặt lại giá trị của state 'name' về chuỗi rỗng
    setDob(''); // Đặt lại giá trị của state 'dob' về chuỗi rỗng
    setGender('Male'); // Đặt lại giá trị của state 'gender' về 'Male'
    
  };


  return (
    <div class="form-add">
    <form class="formall" onSubmit={handleSubmit}> 
      <div class="inf4"> 
        <label class="lb">Tên:</label> 
        <input class="input"
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div class="inf4"> 
        <label class="lb">Ngày sinh:</label> 
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)} 
          required 
        />
      </div>
      <div class="inf4"> 
        <label class="lb">Giới tính:</label> 
        <select value={gender} onChange={(e) => setGender(e.target.value)}> {/* Select để chọn giới tính */}
          <option value="Male">Nam</option> 
          <option value="Female">Nữ</option>
        </select>
      </div>
      <div class="inf4 btn"> 
        <button class="btn" type="submit">{editingStudent ? 'Cập nhật' : 'Thêm'}</button> 
      </div>
    </form>
    </div>

  );
}

export default StudentForm; // Xuất component StudentForm để có thể sử dụng ở nơi khác
