// Mock Data for SWF Math Prototype

const mockData = {
  // ==================== USERS ====================
  studentUser: {
    id: 1,
    name: 'Minh Khôi',
    email: 'khoi@student.com',
    avatar: '/img/avatar-student.svg',
    level: 12,
    xp: 1250,
    role: 'student',
    grade: '5'
  },

  parentUser: {
    id: 2,
    name: 'Nguyễn Văn A',
    email: 'vana@parent.com',
    avatar: '/img/avatar-parent.svg',
    role: 'parent'
  },

  teacherUser: {
    id: 3,
    name: 'Cô Hương',
    email: 'huong@teacher.com',
    avatar: '/img/avatar-teacher.svg',
    role: 'teacher',
    subject: 'Toán'
  },

  // ==================== STUDENT STATS ====================
  studentStats: {
    testsCompleted: 24,
    coursesEnrolled: 8,
    averageScore: 85,
    totalXP: 1250,
    currentStreak: 7,
    achievementsUnlocked: 15
  },

  // ==================== COMPETITIONS ====================
  competitions: [
    {
      id: 1,
      name: 'IKMC',
      fullName: 'International Kangaroo Mathematics Contest',
      description: 'Cuộc thi Toán Kangaroo quốc tế - Khuyến khích tư duy logic và giải quyết vấn đề',
      icon: '🦘',
      color: '#FF9F40',
      totalTests: 45
    },
    {
      id: 2,
      name: 'AMC',
      fullName: 'Australian Mathematics Competition',
      description: 'Cuộc thi Toán Úc - Phát triển kỹ năng toán học và tư duy phản biện',
      icon: '🎯',
      color: '#4A90E2',
      totalTests: 38
    },
    {
      id: 3,
      name: 'IMC',
      fullName: 'International Mathematics Contest',
      description: 'Cuộc thi Toán Quốc tế - Thử thách với các bài toán nâng cao',
      icon: '🌍',
      color: '#7BC043',
      totalTests: 32
    },
    {
      id: 4,
      name: 'TIMO',
      fullName: 'Thailand International Mathematical Olympiad',
      description: 'Olympic Toán Thái Lan - Phát triển tài năng toán học trẻ',
      icon: '🏆',
      color: '#9B59B6',
      totalTests: 28
    }
  ],

  // ==================== TESTS ====================
  tests: [
    {
      id: 1,
      name: 'IKMC 2024 - Vòng Sơ Loại',
      competition: 'IKMC',
      difficulty: 'easy',
      questions: 25,
      duration: 60,
      attempts: 120,
      avgScore: 78,
      description: 'Đề thi sơ loại IKMC 2024 dành cho học sinh cấp 1 và cấp 2',
      topics: ['Số học', 'Hình học', 'Logic']
    },
    {
      id: 2,
      name: 'AMC 2024 - Practice Test',
      competition: 'AMC',
      difficulty: 'medium',
      questions: 30,
      duration: 75,
      attempts: 85,
      avgScore: 72,
      description: 'Đề luyện tập AMC 2024 với các dạng bài thường gặp',
      topics: ['Đại số', 'Hình học', 'Xác suất']
    },
    {
      id: 3,
      name: 'Singapore Math - Grade 5',
      competition: 'Singapore',
      difficulty: 'medium',
      questions: 20,
      duration: 45,
      attempts: 150,
      avgScore: 82,
      description: 'Bài kiểm tra theo chương trình Singapore lớp 5',
      topics: ['Phân số', 'Tỉ lệ', 'Diện tích']
    },
    {
      id: 4,
      name: 'TIMO 2024 - Mock Test',
      competition: 'TIMO',
      difficulty: 'hard',
      questions: 20,
      duration: 90,
      attempts: 45,
      avgScore: 65,
      description: 'Đề thi thử TIMO 2024 - Mức độ Olympic',
      topics: ['Số học nâng cao', 'Tổ hợp', 'Hình học']
    },
    {
      id: 5,
      name: 'IMC 2024 - Regional',
      competition: 'IMC',
      difficulty: 'hard',
      questions: 25,
      duration: 120,
      attempts: 30,
      avgScore: 68,
      description: 'Vòng khu vực IMC 2024',
      topics: ['Đại số', 'Hình học', 'Số học']
    }
  ],

  // ==================== QUESTIONS ====================
  questions: [
    {
      id: 1,
      question: 'Tìm x biết: 3x + 5 = 20',
      options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
      correctAnswer: 2,
      explanation: '3x = 20 - 5 = 15, nên x = 15/3 = 5'
    },
    {
      id: 2,
      question: 'Một hình chữ nhật có chiều dài 12cm, chiều rộng 8cm. Diện tích là:',
      options: ['40 cm²', '80 cm²', '96 cm²', '100 cm²'],
      correctAnswer: 2,
      explanation: 'Diện tích = 12 × 8 = 96 cm²'
    },
    {
      id: 3,
      question: 'Phân số 3/4 bằng bao nhiêu phần trăm?',
      options: ['60%', '70%', '75%', '80%'],
      correctAnswer: 2,
      explanation: '3/4 = 0.75 = 75%'
    }
  ],

  // ==================== RECENT TESTS ====================
  recentTests: [
    {
      id: 1,
      name: 'IKMC 2024 Practice',
      competition: 'IKMC',
      score: 88,
      maxScore: 100,
      date: '2025-10-28',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Singapore Math - Unit 3',
      competition: 'Singapore',
      score: 92,
      maxScore: 100,
      date: '2025-10-25',
      status: 'completed'
    },
    {
      id: 3,
      name: 'AMC Practice Set 2',
      competition: 'AMC',
      score: 76,
      maxScore: 100,
      date: '2025-10-20',
      status: 'completed'
    }
  ],

  // ==================== TEST RESULTS ====================
  testResults: [
    {
      id: 1,
      testName: 'IKMC 2024 Practice',
      score: 88,
      maxScore: 100,
      percentage: 88,
      correctAnswers: 22,
      totalQuestions: 25,
      timeSpent: 45,
      completedDate: '2025-10-28',
      rank: 15,
      totalParticipants: 120,
      breakdown: {
        'Số học': { correct: 8, total: 10 },
        'Hình học': { correct: 7, total: 8 },
        'Logic': { correct: 7, total: 7 }
      }
    }
  ],

  // ==================== UPCOMING EVENTS ====================
  upcomingEvents: [
    {
      id: 1,
      title: 'IKMC 2025 - Vòng Chính Thức',
      date: '2025-11-15',
      time: '09:00',
      type: 'competition',
      color: '#FF9F40'
    },
    {
      id: 2,
      title: 'Bài tập Singapore Math - Chương 5',
      date: '2025-11-05',
      time: '14:00',
      type: 'homework',
      color: '#4A90E2'
    },
    {
      id: 3,
      title: 'Webinar: Mẹo Giải Toán Nhanh',
      date: '2025-11-08',
      time: '19:00',
      type: 'webinar',
      color: '#7BC043'
    }
  ],

  // ==================== STUDENT PROGRESS ====================
  studentProgress: [
    {
      id: 1,
      courseName: 'Singapore Math - Grade 5',
      progress: 68,
      lessonsCompleted: 15,
      totalLessons: 22,
      color: '#4A90E2'
    },
    {
      id: 2,
      courseName: 'Math Olympiad Basic',
      progress: 45,
      lessonsCompleted: 9,
      totalLessons: 20,
      color: '#9B59B6'
    },
    {
      id: 3,
      courseName: 'IKMC Preparation',
      progress: 82,
      lessonsCompleted: 18,
      totalLessons: 22,
      color: '#FF9F40'
    }
  ],

  // ==================== ACHIEVEMENTS ====================
  achievements: [
    {
      id: 1,
      name: 'First Steps',
      description: 'Hoàn thành bài thi đầu tiên',
      icon: '🎯',
      unlocked: true,
      unlockedDate: '2025-09-15'
    },
    {
      id: 2,
      name: 'Perfect Score',
      description: 'Đạt 100 điểm trong một bài thi',
      icon: '💯',
      unlocked: true,
      unlockedDate: '2025-10-10'
    },
    {
      id: 3,
      name: '7 Day Streak',
      description: 'Học liên tục 7 ngày',
      icon: '🔥',
      unlocked: true,
      unlockedDate: '2025-10-28'
    },
    {
      id: 4,
      name: 'Speed Demon',
      description: 'Hoàn thành bài thi trong 30 phút',
      icon: '⚡',
      unlocked: false
    }
  ],

  // ==================== COURSES ====================
  courses: [
    {
      id: 1,
      name: 'Singapore Math - Grade 5',
      description: 'Chương trình toán Singapore lớp 5 - Toàn diện và có hệ thống',
      level: 'Cơ Bản',
      lessons: 22,
      duration: '6 tháng',
      students: 1250,
      rating: 4.8,
      price: 'Miễn phí',
      thumbnail: '',
      topics: ['Phân số', 'Số thập phân', 'Tỉ lệ', 'Phần trăm', 'Diện tích']
    },
    {
      id: 2,
      name: 'Math Olympiad Foundation',
      description: 'Khóa học nền tảng cho học sinh muốn thi Olympic Toán',
      level: 'Chuyên Sâu',
      lessons: 20,
      duration: '4 tháng',
      students: 580,
      rating: 4.9,
      price: '599,000đ',
      thumbnail: '',
      topics: ['Số học nâng cao', 'Tổ hợp', 'Hình học', 'Logic']
    },
    {
      id: 3,
      name: 'IKMC Preparation Course',
      description: 'Khóa học luyện thi IKMC từ cơ bản đến nâng cao',
      level: 'Nâng Cao',
      lessons: 18,
      duration: '3 tháng',
      students: 920,
      rating: 4.7,
      price: '499,000đ',
      thumbnail: '',
      topics: ['IKMC Pattern', 'Problem Solving', 'Logic Puzzles']
    },
    {
      id: 4,
      name: 'Singapore Math - Grade 4',
      description: 'Chương trình toán Singapore lớp 4',
      level: 'Cơ Bản',
      lessons: 20,
      duration: '6 tháng',
      students: 1450,
      rating: 4.8,
      price: 'Miễn phí',
      thumbnail: '',
      topics: ['Nhân chia', 'Phân số cơ bản', 'Đo lường']
    }
  ],

  // ==================== MY COURSES ====================
  myCourses: [
    {
      id: 1,
      name: 'Singapore Math - Grade 5',
      progress: 68,
      lessonsCompleted: 15,
      totalLessons: 22,
      nextLesson: 'Chương 6: Tỉ lệ và Phần trăm',
      lastAccessed: '2025-10-30',
      instructor: 'Thầy Minh',
      chapters: [
        {
          id: 1,
          name: 'Chương 1: Phân số',
          lessons: [
            { id: 1, name: 'Bài 1: Giới thiệu phân số', completed: true, duration: '15 phút' },
            { id: 2, name: 'Bài 2: So sánh phân số', completed: true, duration: '20 phút' },
            { id: 3, name: 'Bài 3: Cộng trừ phân số', completed: true, duration: '25 phút' }
          ]
        },
        {
          id: 2,
          name: 'Chương 2: Số thập phân',
          lessons: [
            { id: 4, name: 'Bài 1: Số thập phân là gì', completed: true, duration: '15 phút' },
            { id: 5, name: 'Bài 2: Nhân chia số thập phân', completed: false, duration: '20 phút' }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Math Olympiad Basic',
      progress: 45,
      lessonsCompleted: 9,
      totalLessons: 20,
      nextLesson: 'Bài 10: Bài toán tổ hợp',
      lastAccessed: '2025-10-28',
      instructor: 'Cô Hương'
    },
    {
      id: 3,
      name: 'IKMC Preparation',
      progress: 82,
      lessonsCompleted: 18,
      totalLessons: 22,
      nextLesson: 'Bài 19: Đề thi thử cuối khóa',
      lastAccessed: '2025-10-29',
      instructor: 'Thầy Nam'
    }
  ],

  // ==================== GAMES ====================
  games: [
    {
      id: 1,
      name: 'Math Race',
      description: 'Đua xe bằng cách giải toán nhanh',
      icon: '🏎️',
      difficulty: 'Easy',
      plays: 1250,
      rating: 4.5,
      color: '#FF9F40'
    },
    {
      id: 2,
      name: 'Number Ninja',
      description: 'Chém trái cây có đáp án đúng',
      icon: '🥷',
      difficulty: 'Medium',
      plays: 890,
      rating: 4.7,
      color: '#7BC043'
    },
    {
      id: 3,
      name: 'Math Puzzle',
      description: 'Giải đố toán học thú vị',
      icon: '🧩',
      difficulty: 'Hard',
      plays: 560,
      rating: 4.8,
      color: '#9B59B6'
    },
    {
      id: 4,
      name: 'Times Table Challenge',
      description: 'Thách thức bảng nhân',
      icon: '⚡',
      difficulty: 'Easy',
      plays: 2100,
      rating: 4.6,
      color: '#4A90E2'
    }
  ],

  // ==================== BLOG POSTS ====================
  blogPosts: [
    {
      id: 1,
      title: '5 Mẹo Học Toán Hiệu Quả Cho Học Sinh Tiểu Học',
      excerpt: 'Khám phá những phương pháp học toán thú vị và hiệu quả giúp con yêu thích môn toán hơn...',
      author: 'Thầy Minh',
      date: '2025-10-25',
      category: 'Mẹo Học Tập',
      thumbnail: '',
      readTime: '5 phút'
    },
    {
      id: 2,
      title: 'Giới Thiệu Về Cuộc Thi IKMC 2025',
      excerpt: 'Tất cả thông tin cần biết về cuộc thi Toán Kangaroo quốc tế năm 2025...',
      author: 'Cô Hương',
      date: '2025-10-20',
      category: 'Tin Tức',
      thumbnail: '',
      readTime: '7 phút'
    },
    {
      id: 3,
      title: 'Chương Trình Singapore Math Là Gì?',
      excerpt: 'Tìm hiểu về phương pháp giảng dạy toán nổi tiếng từ Singapore...',
      author: 'Thầy Nam',
      date: '2025-10-18',
      category: 'Kiến Thức',
      thumbnail: '',
      readTime: '6 phút'
    }
  ],

  // ==================== TESTIMONIALS ====================
  testimonials: [
    {
      id: 1,
      name: 'Bảo Ngọc',
      grade: 'Lớp 5',
      avatar: '/img/student-1.jpg',
      rating: 5,
      comment: 'Em rất thích học toán trên SWF Math. Các bài tập thú vị và dễ hiểu. Em đã đạt giải Nhì IKMC nhờ luyện tập ở đây!',
      achievement: 'Giải Nhì IKMC 2024'
    },
    {
      id: 2,
      name: 'Minh Anh',
      grade: 'Lớp 4',
      avatar: '/img/student-2.jpg',
      rating: 5,
      comment: 'Các trò chơi toán học rất vui. Em vừa chơi vừa học, không thấy nhàm chán chút nào!',
      achievement: 'Top 10 Leaderboard'
    },
    {
      id: 3,
      name: 'Phụ huynh - Nguyễn Thị Lan',
      grade: 'Phụ huynh',
      avatar: '/img/parent-1.jpg',
      rating: 5,
      comment: 'Tôi rất hài lòng với nền tảng này. Con tôi tiến bộ rõ rệt và tự giác học tập hơn nhiều.',
      achievement: 'Mẹ của Bảo Ngọc'
    }
  ],

  // ==================== PARENT - CHILDREN ====================
  children: [
    {
      id: 1,
      name: 'Minh Khôi',
      grade: 'Lớp 5',
      avatar: '/img/avatar-student.svg',
      age: 10,
      currentCourses: 3,
      testsCompleted: 24,
      averageScore: 85,
      lastActive: '2025-10-30',
      recentActivity: [
        { date: '2025-10-30', activity: 'Hoàn thành bài thi IKMC Practice', score: 88 },
        { date: '2025-10-29', activity: 'Học bài 15 - Singapore Math', time: '45 phút' }
      ]
    },
    {
      id: 2,
      name: 'Thu Hà',
      grade: 'Lớp 3',
      avatar: '/img/avatar-student.svg',
      age: 8,
      currentCourses: 2,
      testsCompleted: 15,
      averageScore: 92,
      lastActive: '2025-10-30',
      recentActivity: [
        { date: '2025-10-30', activity: 'Chơi game Math Race', score: 95 },
        { date: '2025-10-29', activity: 'Hoàn thành bài tập nhà', score: 100 }
      ]
    }
  ],

  // ==================== TEACHER DATA ====================
  teacherStats: {
    totalStudents: 48,
    totalClasses: 3,
    avgClassScore: 82,
    assignmentsGraded: 156
  },

  classes: [
    {
      id: 1,
      name: 'Lớp 5A - Toán Nâng Cao',
      students: 18,
      avgScore: 84,
      color: '#4A90E2'
    },
    {
      id: 2,
      name: 'Lớp 4B - Singapore Math',
      students: 15,
      avgScore: 88,
      color: '#7BC043'
    },
    {
      id: 3,
      name: 'Olympic Toán - Nhóm 1',
      students: 15,
      avgScore: 76,
      color: '#9B59B6'
    }
  ],

  students: [
    {
      id: 1,
      name: 'Minh Khôi',
      class: 'Lớp 5A',
      avgScore: 85,
      testsCompleted: 24,
      lastActive: '2025-10-30'
    },
    {
      id: 2,
      name: 'Bảo Ngọc',
      class: 'Lớp 5A',
      avgScore: 92,
      testsCompleted: 28,
      lastActive: '2025-10-30'
    },
    {
      id: 3,
      name: 'Thu Hà',
      class: 'Lớp 4B',
      avgScore: 88,
      testsCompleted: 15,
      lastActive: '2025-10-29'
    }
  ],

  assignments: [
    {
      id: 1,
      title: 'Bài tập Phân số - Chương 3',
      class: 'Lớp 5A',
      dueDate: '2025-11-05',
      submitted: 12,
      total: 18,
      status: 'active'
    },
    {
      id: 2,
      title: 'Đề thi thử IKMC',
      class: 'Olympic Toán',
      dueDate: '2025-11-08',
      submitted: 8,
      total: 15,
      status: 'active'
    }
  ]
};

module.exports = mockData;
