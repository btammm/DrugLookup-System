# Drug Lookup System

Drug Lookup System là hệ thống tra cứu thuốc theo hoạt chất, tên thương mại và công dụng được phát triển trong môn **Công nghệ Phần mềm** tại **Trường Đại học Công nghệ TP.HCM (HUTECH)** theo mô hình **Agile Scrum**.

---

# Thành viên nhóm

| MSSV       | Họ và tên         |
| ---------- | ----------------- |
| 2380601985 | Phạm Bảo Tâm      |
| 2380614806 | Trần Xuân Thanh   |
| 2380614880 | Nguyễn Quang Huy  |
| 2380614961 | Nguyễn Quang Tiến |
| 2380613796 | Lê Đỗ Duy Tân     |

---

# Mục tiêu dự án

Xây dựng một hệ thống hỗ trợ người dùng tra cứu thông tin thuốc thông qua:

* Hoạt chất
* Tên thương mại
* Công dụng
* Mục đích sử dụng

Hệ thống cho phép quản lý dữ liệu thuốc, tài khoản người dùng và thống kê thông tin phục vụ tra cứu.

---

# Công nghệ sử dụng

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MySQL 8.4
* Aiven Cloud Database

## Authentication

* JWT
* Bcrypt

## Quản lý dự án

* Agile Scrum
* Jira

## Quản lý mã nguồn

* Git
* GitHub

## Triển khai hệ thống

* Vercel
* Render
* Aiven Cloud

---

# Kiến trúc hệ thống

Frontend (Vercel)

↓

Backend API (Render)

↓

MySQL Database (Aiven Cloud)

---

# Chức năng hệ thống

## Quản lý tài khoản

* Đăng ký
* Đăng nhập
* Đăng xuất
* Đổi mật khẩu
* Cập nhật thông tin cá nhân

## Tra cứu thuốc

* Tra cứu theo tên thuốc
* Tra cứu theo hoạt chất
* Tra cứu theo công dụng
* Xem chi tiết thuốc

## Quản lý thuốc

* Thêm thuốc
* Chỉnh sửa thuốc
* Xóa thuốc
* Quản lý danh sách thuốc

## Thống kê

* Thuốc mới cập nhật
* Số lượng thuốc
* Thống kê dữ liệu thuốc

---

# Triển khai hệ thống

## Frontend

Vercel

URL:

https://drug-lookup-system.vercel.app/login.html

---

## Backend

Render

API URL:

https://druglookup-api.onrender.com

---

## Database

Aiven Cloud MySQL

---

# Thông tin truy cập

## Demo Account

Email:

[teacher@example.com](mailto:teacher@example.com)

Password:

123456

---

# Hướng dẫn cài đặt

## Clone Repository

```bash
git clone https://github.com/btammm/DrugLookup-System.git
```

---

## Cài đặt Backend

```bash
cd backend

npm install
```

---

## Tạo file .env

```env
DB_HOST=

DB_PORT=

DB_USER=

DB_PASSWORD=

DB_NAME=

JWT_SECRET=
```

---

## Chạy Backend

```bash
node server.js
```

---

## Chạy Frontend

Mở:

frontend/login.html

hoặc truy cập trực tiếp qua Vercel.

---

# Agile Scrum

## Product Backlog

* 10 Epics
* 20 User Stories
* 50+ Tasks/Subtasks

---

## Sprint

Sprint 1

Authentication & UI Design

Sprint 2

Drug Lookup Module

Sprint 3

Statistics, Deployment & Testing

---

## Scrum Artifacts

* Product Backlog
* Sprint Backlog
* Sprint Planning
* Daily Scrum
* Sprint Review
* Sprint Retrospective
* Burndown Chart
* Scrum Board

---

# Git Flow

## Branches

main

develop

feature/login

feature/drug-management

feature/statistics

feature/profile

feature/deployment

---

# Release

Release 1.0

Implemented Features

* Authentication
* Drug Lookup
* Statistics
* Profile Management
* Cloud Deployment

---

# License

Academic Project

HUTECH Software Engineering Course

2026
