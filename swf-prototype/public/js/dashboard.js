// ==========================================
// DASHBOARD FUNCTIONALITY - PROTOTYPE MODE
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // PROTOTYPE: No auth required
    console.log('Dashboard loaded - Prototype mode');
    
    // Initialize dashboard
    initSidebar();
    
    // Data already in HTML from server-side rendering
});

// ==========================================
// SIDEBAR FUNCTIONALITY
// ==========================================

function initSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
}

// ==========================================
// LOAD DASHBOARD DATA - PROTOTYPE MODE
// ==========================================

// PROTOTYPE: Data is server-side rendered, no need to fetch
// Keeping functions for reference only

/*
async function loadDashboardData() {
    // Data already in HTML from EJS templates
    console.log('Using server-rendered data');
}
*/

// ==========================================
// UPDATE USER INFO - PROTOTYPE MODE
// ==========================================

// PROTOTYPE: User info is server-side rendered
// No need to update dynamically

/*
function updateUserInfo(user) {
    // Already rendered by EJS
}
*/

// ==========================================
// MOCK DATA FUNCTIONS
// ==========================================

function mockFetchStats() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                testsCompleted: 24,
                coursesEnrolled: 8,
                averageScore: 85,
                experiencePoints: 1250
            });
        }, 500);
    });
}

function mockFetchRecentTests() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'IKMC 2024 - Lớp 6',
                    completedAt: '2024-10-29',
                    score: 85,
                    maxScore: 100
                },
                {
                    id: 2,
                    name: 'AMC 8 Practice Test #5',
                    completedAt: '2024-10-26',
                    score: 92,
                    maxScore: 100
                },
                {
                    id: 3,
                    name: 'Toán Olympiad Cơ Bản',
                    completedAt: '2024-10-24',
                    score: 78,
                    maxScore: 100
                }
            ]);
        }, 600);
    });
}

function mockFetchUpcomingEvents() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: 'Cuộc Thi TIMO 2025',
                    date: '2024-11-15',
                    description: 'Đăng ký trước 10/11'
                },
                {
                    id: 2,
                    name: 'Bài Kiểm Tra Cuối Tháng',
                    date: '2024-11-20',
                    description: 'Bài thi tổng hợp'
                },
                {
                    id: 3,
                    name: 'Kết Thúc Khóa Algebra',
                    date: '2024-11-25',
                    description: 'Bài thi cuối khóa'
                }
            ]);
        }, 700);
    });
}

function mockFetchProgress() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    courseName: 'Toán Singapore - Lớp 6',
                    completed: 15,
                    total: 22,
                    percentage: 68
                },
                {
                    courseName: 'Math Olympiad Cơ Bản',
                    completed: 9,
                    total: 20,
                    percentage: 45
                },
                {
                    courseName: 'Luyện Thi IKMC',
                    completed: 17,
                    total: 20,
                    percentage: 85
                }
            ]);
        }, 800);
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function navigateTo(page) {
    window.location.href = page;
}

function startTest(testId) {
    SWF.showToast('Đang tải bài thi...', 'info');
    setTimeout(() => {
        window.location.href = `test-taking.html?id=${testId}`;
    }, 1000);
}

function viewCourse(courseId) {
    window.location.href = `course-detail.html?id=${courseId}`;
}

function viewResults(testId) {
    window.location.href = `test-results.html?id=${testId}`;
}

// Export functions
window.Dashboard = {
    navigateTo,
    startTest,
    viewCourse,
    viewResults
};
