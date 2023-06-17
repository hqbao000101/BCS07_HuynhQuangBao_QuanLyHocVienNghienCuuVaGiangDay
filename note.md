---
marp: true
---

# Project: 
Quản lý học viện nghiên cứu & giảng dạy

Xây dựng chương trình quản lý cho một học viện nghiên cứu giảng dạy và ứng dụng. Đối tượng
quản lý bao gồm các sinh viên đang theo học, các nhân viên đang làm việc tai học viện, các
khách hàng đên giao dịch mua bán sản phẩm ứng dụng. Dựa vào một số đặt tính của từng đối
tượng, người quản lý cần đưa ra cách thức đánh giá khác nhau.
Vậy hãy xây dựng các lớp sau:
• Lớp Person: bao gồm các thuộc tính họ tên, địa chỉ, mã, email
• Các lớp Student, Employee, Customer (mô tả dưới đây) kế thừa lớp Person.
  - Lớp Student: bao gồm các thuộc tính toán, lý, hóa.
  - Lớp Employee: bao gồm thuộc tính số ngày làm việc, lương theo ngày.
  - Lớp Customer: bao gồm thuộc tính tên công ty, trị giá hóa đơn, đánh giá
  - Lớp ListPerson để quản lý các đối tượng trên

# Requirements:
Chương trình cho phép thực hiện:
  1. Thêm người dùng vào danh sách
  2. Xóa 1 người dùng khỏi danh sách theo mã
  3. Cập nhật thông tin người dùng
  4. Sắp xếp danh sách theo thứ tự họ tên
  5. Lọc danh sách người dùng theo loại người dùng
  6. Người dùng học viên sẽ có tính năng tính điểm trung bình
  7. Người dùng Giảng viên sẽ có tính năng tính lương

# Objectives
- Học viên tự thiết kế UI cho bài tập.
- Xử lý các validation phù hợp
- Ứng dụng các kiến thức OOP của ES6 và các cú pháp của ES6