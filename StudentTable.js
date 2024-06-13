
import React from 'react'; // Import React từ thư viện react

function StudentTable({ students, deleteStudent, setEditingStudent }) { // Khai báo component StudentTable và nhận các props students, deleteStudent, setEditingStudent
  return (
    <table> 
      <thead> 
        <tr>
          <th class="col-name">Tên</th> 
          <th class="col-dob">Ngày sinh</th>
          <th class="col-gender">Giới tính</th> 
          <th class="col-action">Lựa Chọn</th> 
        </tr>
      </thead>
      <tbody> {/* Phần thân của bảng */}
        {students.map((student, index) => ( // Lặp qua danh sách sinh viên và tạo một hàng cho mỗi sinh viên
          <tr key={index}> {/* Khóa duy nhất cho mỗi hàng là chỉ số của sinh viên */}
            <td>{student.name}</td> {/* Hiển thị tên sinh viên */}
            <td>{student.dob}</td> {/* Hiển thị ngày sinh của sinh viên */}
            <td>{student.gender === 'Male' ? 'Nam' : 'Nữ'}</td> {/* Hiển thị giới tính của sinh viên */}
            <td>
              <button onClick={() => setEditingStudent({ student, index })}>Sửa</button> {/* Nút sửa, khi bấm sẽ thiết lập sinh viên đang chỉnh sửa */}
              <button onClick={() => deleteStudent(index)}>Xóa</button> {/* Nút xóa, khi bấm sẽ xóa sinh viên theo chỉ số */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable; // Xuất component StudentTable để có thể sử dụng ở nơi khác
