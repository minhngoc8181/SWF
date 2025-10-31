const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// Mock data
const mockData = require('./data/mockData');

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to pass common data to all views
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.mockData = mockData;
  next();
});

// ==================== PUBLIC ROUTES ====================

app.get('/', (req, res) => {
  res.render('public/index', {
    layout: 'layouts/public',
    title: 'SWF Math - Nền Tảng Học Toán Online',
    competitions: mockData.competitions,
    testimonials: mockData.testimonials
  });
});

app.get('/courses', (req, res) => {
  res.render('public/courses', {
    layout: 'layouts/public',
    title: 'Khóa Học - SWF Math',
    courses: mockData.courses
  });
});

app.get('/competitions', (req, res) => {
  res.render('public/competitions', {
    layout: 'layouts/public',
    title: 'Các Cuộc Thi - SWF Math',
    competitions: mockData.competitions
  });
});

app.get('/blog', (req, res) => {
  res.render('public/blog', {
    layout: 'layouts/public',
    title: 'Blog - SWF Math',
    posts: mockData.blogPosts
  });
});

app.get('/about', (req, res) => {
  res.render('public/about', {
    layout: 'layouts/public',
    title: 'Về Chúng Tôi - SWF Math'
  });
});

// ==================== AUTH ROUTES ====================

app.get('/login', (req, res) => {
  res.render('auth/login', {
    layout: 'layouts/auth',
    title: 'Đăng Nhập - SWF Math'
  });
});

app.get('/register', (req, res) => {
  res.render('auth/register', {
    layout: 'layouts/auth',
    title: 'Đăng Ký - SWF Math'
  });
});

// ==================== UNIFIED ROUTES (ALL ROLES) ====================

app.get('/profile', (req, res) => {
  // In real app, get user from session/token
  // For now, default to student user
  const user = mockData.studentUser;
  
  res.render('shared/profile', {
    layout: 'layouts/profile',
    title: 'Hồ Sơ - SWF Math',
    user: user,
    stats: mockData.studentStats,
    achievements: mockData.achievements,
    currentPath: req.path
  });
});

app.get('/settings', (req, res) => {
  // In real app, get user from session/token
  const user = mockData.studentUser;
  
  res.render('shared/settings', {
    layout: 'layouts/profile',
    title: 'Cài Đặt - SWF Math',
    user: user,
    children: mockData.children, // Only for parents
    currentPath: req.path
  });
});

// ==================== STUDENT ROUTES ====================

app.get('/student/dashboard', (req, res) => {
  res.render('student/dashboard', {
    layout: 'layouts/student',
    title: 'Dashboard - SWF Math',
    user: mockData.studentUser,
    stats: mockData.studentStats,
    recentTests: mockData.recentTests,
    upcomingEvents: mockData.upcomingEvents,
    progress: mockData.studentProgress,
    achievements: mockData.achievements
  });
});

app.get('/student/tests', (req, res) => {
  res.render('student/tests', {
    layout: 'layouts/student',
    title: 'Bài Thi - SWF Math',
    user: mockData.studentUser,
    tests: mockData.tests,
    competitions: mockData.competitions
  });
});

app.get('/student/test/:id', (req, res) => {
  const test = mockData.tests.find(t => t.id === parseInt(req.params.id));
  res.render('student/test-detail', {
    layout: 'layouts/student',
    title: `${test?.name || 'Bài Thi'} - SWF Math`,
    user: mockData.studentUser,
    test: test || mockData.tests[0]
  });
});

app.get('/student/test/:id/take', (req, res) => {
  const test = mockData.tests.find(t => t.id === parseInt(req.params.id));
  res.render('student/test-taking', {
    layout: 'layouts/test-taking',
    title: `Làm Bài: ${test?.name || 'Bài Thi'} - SWF Math`,
    user: mockData.studentUser,
    test: test || mockData.tests[0],
    questions: mockData.questions
  });
});

app.get('/student/results/:id', (req, res) => {
  const result = mockData.testResults.find(r => r.id === parseInt(req.params.id));
  res.render('student/results', {
    layout: 'layouts/student',
    title: 'Kết Quả Bài Thi - SWF Math',
    user: mockData.studentUser,
    result: result || mockData.testResults[0]
  });
});

app.get('/student/courses', (req, res) => {
  res.render('student/courses', {
    layout: 'layouts/student',
    title: 'Khóa Học Của Tôi - SWF Math',
    user: mockData.studentUser,
    courses: mockData.myCourses,
    currentPath: req.path
  });
});

app.get('/student/course/:id', (req, res) => {
  const course = mockData.myCourses.find(c => c.id === parseInt(req.params.id));
  res.render('student/course-detail', {
    layout: 'layouts/student',
    title: `${course?.name || 'Khóa Học'} - SWF Math`,
    user: mockData.studentUser,
    course: course || mockData.myCourses[0]
  });
});

app.get('/student/games', (req, res) => {
  res.render('student/games', {
    layout: 'layouts/student',
    title: 'Trò Chơi Toán Học - SWF Math',
    user: mockData.studentUser,
    currentPath: req.path
  });
});

app.get('/student/progress', (req, res) => {
  res.render('student/progress', {
    layout: 'layouts/student',
    title: 'Tiến Độ Học Tập - SWF Math',
    user: mockData.studentUser,
    progress: mockData.studentProgress,
    stats: mockData.studentStats,
    recentTests: mockData.recentTests,
    achievements: mockData.achievements,
    currentPath: req.path
  });
});

// ==================== PARENT ROUTES ====================

// Redirect /parent to /parent/dashboard
app.get('/parent', (req, res) => {
  res.redirect('/parent/dashboard');
});

app.get('/parent/dashboard', (req, res) => {
  res.render('parent/dashboard', {
    layout: 'layouts/parent',
    title: 'Dashboard Phụ Huynh - SWF Math',
    user: mockData.parentUser,
    children: mockData.children
  });
});

app.get('/parent/child/:id', (req, res) => {
  const child = mockData.children.find(c => c.id === parseInt(req.params.id));
  res.render('parent/child-detail', {
    layout: 'layouts/parent',
    title: `Tiến Độ ${child?.name || 'Con'} - SWF Math`,
    user: mockData.parentUser,
    child: child || mockData.children[0],
    progress: mockData.studentProgress
  });
});

app.get('/parent/reports', (req, res) => {
  res.render('parent/reports', {
    layout: 'layouts/parent',
    title: 'Báo Cáo Học Tập - SWF Math',
    user: mockData.parentUser,
    children: mockData.children
  });
});

app.get('/parent/settings', (req, res) => {
  res.render('parent/settings', {
    layout: 'layouts/parent',
    title: 'Cài Đặt - SWF Math',
    user: mockData.parentUser
  });
});

// ==================== TEACHER ROUTES ====================

// Redirect /teacher to /teacher/dashboard
app.get('/teacher', (req, res) => {
  res.redirect('/teacher/dashboard');
});

app.get('/teacher/dashboard', (req, res) => {
  res.render('teacher/dashboard', {
    layout: 'layouts/teacher',
    title: 'Dashboard Giáo Viên - SWF Math',
    user: mockData.teacherUser,
    classes: mockData.classes,
    stats: mockData.teacherStats,
    assignments: mockData.assignments
  });
});

app.get('/teacher/class/:id', (req, res) => {
  const classData = mockData.classes.find(c => c.id === parseInt(req.params.id));
  res.render('teacher/class-detail', {
    layout: 'layouts/teacher',
    title: `${classData?.name || 'Lớp Học'} - SWF Math`,
    user: mockData.teacherUser,
    class: classData || mockData.classes[0],
    students: mockData.students
  });
});

app.get('/teacher/assignments', (req, res) => {
  res.render('teacher/assignments', {
    layout: 'layouts/teacher',
    title: 'Bài Tập - SWF Math',
    user: mockData.teacherUser,
    assignments: mockData.assignments
  });
});

app.get('/teacher/students', (req, res) => {
  res.render('teacher/students', {
    layout: 'layouts/teacher',
    title: 'Học Sinh - SWF Math',
    user: mockData.teacherUser,
    students: mockData.students
  });
});

// ==================== 404 ====================

app.use((req, res) => {
  res.status(404).render('error/404', {
    layout: 'layouts/public',
    title: '404 - Không Tìm Thấy Trang'
  });
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🎓 SWF Math Prototype Server                            ║
║                                                            ║
║   🚀 Server running at: http://localhost:${PORT}             ║
║                                                            ║
║   📄 Available Routes:                                     ║
║   ├─ Public:  http://localhost:${PORT}/                     ║
║   ├─ Login:   http://localhost:${PORT}/login                ║
║   ├─ Student: http://localhost:${PORT}/student/dashboard    ║
║   ├─ Parent:  http://localhost:${PORT}/parent/dashboard     ║
║   └─ Teacher: http://localhost:${PORT}/teacher/dashboard    ║
║                                                            ║
║   👉 Press Ctrl+C to stop                                  ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
  `);
});
