# SWF Math Platform - Prototype

> **Full-Featured Interactive Prototype** với Node.js + Express + EJS

**Mục đích**: Prototype đầy đủ để demo cho khách hàng trước khi phát triển production  
**Công nghệ**: Node.js, Express.js, EJS Templates  
**Trạng thái**: ✅ Sẵn sàng demo

---

## 🚀 Quick Start

### Bước 1: Cài Đặt Dependencies

```powershell
cd d:\EIU\SWF\swf-prototype
npm install
```

### Bước 2: Chạy Server

```powershell
# Development mode (auto-reload)
npm run dev

# Hoặc production mode
npm start
```

### Bước 3: Mở Trình Duyệt

Server sẽ chạy tại: **http://localhost:3000**

---

## 📋 Tính Năng Đã Hoàn Thành

### ✅ Public Pages (6 pages)
- ✅ **Landing Page** (`/`) - Trang chủ với hero, features, testimonials
- ✅ **Khóa Học** (`/courses`) - Danh sách khóa học
- ✅ **Cuộc Thi** (`/competitions`) - Thông tin các cuộc thi
- ✅ **Blog** (`/blog`) - Tin tức và bài viết
- ✅ **Về Chúng Tôi** (`/about`) - Giới thiệu về SWF Math
- ✅ **404 Page** - Trang lỗi

### ✅ Auth Pages (2 pages)
- ✅ **Đăng Nhập** (`/login`) - Form đăng nhập với demo links
- ✅ **Đăng Ký** (`/register`) - Form đăng ký tài khoản

### ✅ Student Portal (5 pages)
- ✅ **Dashboard** (`/student/dashboard`) - Tổng quan học tập
- ✅ **Bài Thi** (`/student/tests`) - Danh sách đề thi
- ✅ **Chi Tiết Bài Thi** (`/student/test/:id`) - Thông tin đề thi
- ✅ **Làm Bài** (`/student/test/:id/take`) - Giao diện làm bài thi
- ✅ **Kết Quả** (`/student/results/:id`) - Xem kết quả (route sẵn)

### ✅ Parent Portal (2 pages)
- ✅ **Dashboard** (`/parent/dashboard`) - Theo dõi con em

### ✅ Teacher Portal (2 pages)
- ✅ **Dashboard** (`/teacher/dashboard`) - Quản lý lớp học

### ✅ Features
- ✅ **4 Layouts khác nhau**: Public, Auth, Student, Parent, Teacher
- ✅ **Responsive Design**: Tương thích mobile, tablet, desktop
- ✅ **Mock Data**: Dữ liệu giả lập đầy đủ cho demo
- ✅ **Interactive Elements**: Sidebar toggle, navigation, forms
- ✅ **Consistent Design**: Reuse CSS từ UX prototype

---

## 🎯 Demo Flow - Hướng Dẫn Khách Hàng

### Flow 1: Public → Student Dashboard

```
1. Mở http://localhost:3000
2. Trang chủ: Xem hero, features, testimonials
3. Click "Đăng Nhập" hoặc vào /login
4. Click link "Học Sinh Dashboard" (demo mode)
5. Explore Student Dashboard:
   - Stats cards
   - Recent tests
   - Progress tracking
   - Achievements
6. Click "Bài Thi" trong sidebar
7. Chọn một đề thi → Click "Xem Chi Tiết"
8. Click "Bắt Đầu Làm Bài"
9. Làm bài thi interactive (có timer, navigation)
```

### Flow 2: Parent Portal

```
1. Vào /login
2. Click "Phụ Huynh Dashboard"
3. Xem thông tin các con:
   - Điểm trung bình
   - Hoạt động gần đây
   - Tiến độ học tập
```

### Flow 3: Teacher Portal

```
1. Vào /login
2. Click "Giáo Viên Dashboard"
3. Xem:
   - Danh sách lớp học
   - Bài tập đang hoạt động
   - Thống kê học sinh
```

---

## 🗂️ Cấu Trúc Project

```
swf-prototype/
├── data/
│   └── mockData.js          # Mock data đầy đủ
├── public/
│   ├── css/                 # CSS (copy từ UX/)
│   ├── js/                  # JavaScript
│   └── img/                 # Images (placeholder)
├── views/
│   ├── layouts/
│   │   ├── public.ejs       # Layout cho index, blog...
│   │   ├── auth.ejs         # Layout cho login, register
│   │   ├── student.ejs      # Layout cho student portal
│   │   ├── parent.ejs       # Layout cho parent portal
│   │   ├── teacher.ejs      # Layout cho teacher portal
│   │   └── test-taking.ejs  # Layout full-screen cho làm bài
│   ├── public/              # Public pages
│   │   ├── index.ejs
│   │   ├── courses.ejs
│   │   ├── competitions.ejs
│   │   ├── blog.ejs
│   │   └── about.ejs
│   ├── auth/
│   │   ├── login.ejs
│   │   └── register.ejs
│   ├── student/
│   │   ├── dashboard.ejs
│   │   ├── tests.ejs
│   │   ├── test-detail.ejs
│   │   └── test-taking.ejs
│   ├── parent/
│   │   └── dashboard.ejs
│   ├── teacher/
│   │   └── dashboard.ejs
│   └── error/
│       └── 404.ejs
├── server.js                # Express server
├── package.json
└── README.md
```

---

## 📊 Mock Data

Tất cả mock data nằm trong `data/mockData.js`:

- **Users**: Student, Parent, Teacher
- **Tests**: 5 đề thi mẫu (IKMC, AMC, Singapore, TIMO, IMC)
- **Courses**: 4 khóa học
- **Competitions**: 4 cuộc thi
- **Blog Posts**: 3 bài viết
- **Testimonials**: 3 phản hồi
- **Progress, Stats, Achievements**: Đầy đủ

---

## 🎨 Design System

### Colors

```
Primary Blue:   #4A90E2
Primary Green:  #7BC043
Primary Orange: #FF9F40
Primary Purple: #9B59B6

Secondary:
- Yellow: #FFE66D
- Pink:   #FF6B9D
- Sky:    #AED9E0
- Mint:   #B8E6B8
```

### Typography

```
Body:    Inter, Segoe UI, sans-serif
Heading: Poppins, Quicksand, sans-serif
Code:    JetBrains Mono, monospace
```

---

## 🔧 Customization

### Thay Đổi Mock Data

Edit `data/mockData.js`:

```javascript
studentUser: {
  name: 'Tên Mới',
  // ...
}
```

### Thêm Route Mới

Edit `server.js`:

```javascript
app.get('/your-route', (req, res) => {
  res.render('your-view', {
    layout: 'layouts/public',
    title: 'Your Title'
  });
});
```

### Thêm Page Mới

Tạo file mới trong `views/`:

```ejs
<!-- views/your-page.ejs -->
<h1>Your Content</h1>
```

---

## 📱 Responsive Design

Prototype hỗ trợ:

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1200px
- **Wide**: > 1200px

Test bằng Chrome DevTools (F12 → Toggle device toolbar)

---

## 🚀 Routes Cheat Sheet

### Public
```
/                    - Landing page
/courses             - Danh sách khóa học
/competitions        - Các cuộc thi
/blog                - Blog
/about               - Về chúng tôi
```

### Auth
```
/login               - Đăng nhập (có demo links)
/register            - Đăng ký
```

### Student
```
/student/dashboard           - Dashboard học sinh
/student/tests               - Danh sách bài thi
/student/test/:id            - Chi tiết bài thi
/student/test/:id/take       - Làm bài thi
/student/results/:id         - Kết quả (placeholder)
/student/courses             - Khóa học (placeholder)
/student/games               - Trò chơi (placeholder)
/student/progress            - Tiến độ (placeholder)
/student/profile             - Hồ sơ (placeholder)
```

### Parent
```
/parent/dashboard            - Dashboard phụ huynh
/parent/child/:id            - Chi tiết con (placeholder)
/parent/reports              - Báo cáo (placeholder)
/parent/settings             - Cài đặt (placeholder)
```

### Teacher
```
/teacher/dashboard           - Dashboard giáo viên
/teacher/class/:id           - Chi tiết lớp (placeholder)
/teacher/students            - Học sinh (placeholder)
/teacher/assignments         - Bài tập (placeholder)
```

---

## 💡 Demo Tips

### Cho Khách Hàng:

1. **Bắt đầu từ Landing Page** (`/`) để thấy overview
2. **Demo Student Flow** - Flow phổ biến nhất:
   - Login → Dashboard → Tests → Take Test
3. **Show Responsive** - Resize browser để thấy mobile view
4. **Highlight Features**:
   - 4 layouts khác nhau cho từng role
   - Interactive test-taking
   - Progress tracking
   - Modern design

### Notes:

- ⚠️ **Không có backend thật** - Tất cả là mock data
- ⚠️ **Form không submit** - Chỉ navigate qua links
- ⚠️ **Placeholder routes** - Một số routes chỉ có layout
- ✅ **Full UI/UX** - Đầy đủ design như production
- ✅ **Fast iteration** - Dễ dàng thay đổi và adjust

---

## 🎯 Next Steps

Sau khi khách hàng approve prototype:

1. **Finalize Design** - Thu thập feedback và điều chỉnh
2. **Plan Backend** - Design API endpoints
3. **Choose Tech Stack** - React/Vue/Angular cho production
4. **Database Design** - ERD và schema
5. **Development** - Bắt đầu phát triển thật

---

## 📝 Development Notes

### Dependencies

```json
{
  "express": "^4.18.2",
  "ejs": "^3.1.9",
  "express-ejs-layouts": "^2.5.1"
}
```

### Dev Dependencies

```json
{
  "nodemon": "^3.0.1"
}
```

### Scripts

```
npm start     - Run server (production mode)
npm run dev   - Run with nodemon (auto-reload)
```

---

## 🤝 Support

Để hỗ trợ hoặc thắc mắc về prototype:

1. Check `server.js` để hiểu routing
2. Check `data/mockData.js` để xem/edit data
3. Check `views/layouts/` để hiểu layout structure
4. CSS/JS đều nằm trong `public/`

---

## ✅ Checklist Demo

- [ ] Đã cài node modules (`npm install`)
- [ ] Server chạy thành công (`npm run dev`)
- [ ] Test tất cả public pages
- [ ] Test 3 dashboards (Student, Parent, Teacher)
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Test navigation giữa các pages
- [ ] Chuẩn bị câu hỏi từ khách hàng

---

**Happy Demoing! 🎉**

Prototype này ready để demo cho khách hàng. Mọi feedback có thể được implement nhanh chóng vì cấu trúc đơn giản và modular.
