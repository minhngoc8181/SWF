# 🏗️ Architecture Recommendations

## 📊 Current State Analysis

### Existing Routes Structure:
```
/student/*
  ├─ /student/dashboard
  ├─ /student/tests
  ├─ /student/courses
  ├─ /student/games
  ├─ /student/progress
  └─ /student/profile  ← Uses profile.ejs layout

/parent/*
  ├─ /parent/dashboard
  ├─ /parent/child/:id
  ├─ /parent/reports   ← MISSING VIEW
  └─ /parent/settings  ← MISSING VIEW

/teacher/*
  ├─ /teacher/dashboard ← EXISTS but may have issues
  ├─ /teacher/class/:id
  ├─ /teacher/assignments
  └─ /teacher/students
```

### Existing Layouts:
```
layouts/
  ├─ student.ejs   (sidebar + header with user dropdown)
  ├─ parent.ejs    (needs review)
  ├─ teacher.ejs   (needs review)
  ├─ profile.ejs   (landing-style for profile page)
  ├─ public.ejs    (landing pages)
  ├─ auth.ejs      (login/register)
  └─ test-taking.ejs (fullscreen test)
```

---

## ✅ Recommendations

### 1. **Profile & Settings Routes - RECOMMENDED CHANGES**

#### ❌ Current (Inconsistent):
```
/student/profile  → uses profile.ejs layout
/parent/* → no profile route
/teacher/* → no profile route
```

#### ✅ Recommended (Unified):
```
/profile          → Unified for all roles (student/parent/teacher)
/settings         → Unified for all roles
```

**Rationale:**
- Profile is **user-centric**, not role-centric
- Same user might have multiple roles (parent + teacher)
- Easier to maintain one profile page
- Consistent with modern web apps (GitHub, Gmail, etc.)

**Implementation:**
```javascript
// Unified routes
app.get('/profile', (req, res) => {
  const user = getCurrentUser(req); // Get from session
  res.render('shared/profile', {
    layout: 'layouts/profile',
    title: 'Hồ Sơ - SWF Math',
    user: user,
    role: user.role, // 'student', 'parent', 'teacher'
    stats: getStatsForRole(user.role),
    achievements: user.role === 'student' ? mockData.achievements : null
  });
});

app.get('/settings', (req, res) => {
  const user = getCurrentUser(req);
  res.render('shared/settings', {
    layout: 'layouts/profile', // or create settings.ejs layout
    title: 'Cài Đặt - SWF Math',
    user: user,
    role: user.role
  });
});
```

**Migration Path:**
1. Move `views/student/profile-new.ejs` → `views/shared/profile.ejs`
2. Add role-based conditional rendering in view
3. Update all user dropdown links to point to `/profile` and `/settings`
4. Remove role-specific profile routes

---

### 2. **Layout Consistency - USER DROPDOWN**

#### Current State:
- ✅ `layouts/student.ejs` - Has user dropdown
- ❓ `layouts/parent.ejs` - Need to check
- ❓ `layouts/teacher.ejs` - Need to check

#### ✅ Recommendation:
**Create a shared partial for user dropdown:**

```
views/partials/user-dropdown.ejs
```

**Benefits:**
- Single source of truth
- Consistent behavior across roles
- Easier to maintain
- Add notifications, messages, etc. in one place

**Implementation:**
```html
<!-- views/partials/user-dropdown.ejs -->
<div class="user-dropdown">
    <button class="user-btn" onclick="toggleUserMenu()">
        <img src="<%= user.avatar %>" alt="<%= user.name %>">
        <span class="user-name"><%= user.name %></span>
        <span class="dropdown-icon">▼</span>
    </button>
    
    <div class="user-dropdown-menu" id="userMenu">
        <div class="dropdown-header-mini">
            <img src="<%= user.avatar %>" alt="<%= user.name %>">
            <div class="dropdown-user-info">
                <strong><%= user.name %></strong>
                <span><%= user.email %></span>
            </div>
        </div>
        
        <div class="dropdown-divider"></div>
        
        <a href="/profile" class="dropdown-item-mini">
            <span class="item-icon">👤</span>
            Hồ Sơ
        </a>
        
        <a href="/settings" class="dropdown-item-mini">
            <span class="item-icon">⚙️</span>
            Cài Đặt
        </a>
        
        <% if (user.role === 'student') { %>
        <a href="/student/progress" class="dropdown-item-mini">
            <span class="item-icon">🏆</span>
            Thành Tích
        </a>
        <% } %>
        
        <div class="dropdown-divider"></div>
        
        <a href="/logout" class="dropdown-item-mini logout-item">
            <span class="item-icon">🚪</span>
            Đăng Xuất
        </a>
    </div>
</div>
```

**Usage in layouts:**
```html
<!-- layouts/student.ejs -->
<header class="header">
    ...
    <%- include('../partials/user-dropdown', { user: user }) %>
</header>

<!-- layouts/parent.ejs -->
<header class="header">
    ...
    <%- include('../partials/user-dropdown', { user: user }) %>
</header>

<!-- layouts/teacher.ejs -->
<header class="header">
    ...
    <%- include('../partials/user-dropdown', { user: user }) %>
</header>
```

---

### 3. **Component Reusability Strategy**

#### ✅ Create Shared Components Directory:
```
views/
  ├─ shared/
  │   ├─ profile.ejs       (unified profile page)
  │   └─ settings.ejs      (unified settings page)
  ├─ partials/
  │   ├─ user-dropdown.ejs (user dropdown menu)
  │   ├─ stats-card.ejs    (reusable stats card)
  │   ├─ item-card.ejs     (reusable item card - reference only)
  │   └─ page-header.ejs   (page header component)
```

#### ✅ CSS Components (Already have):
```
public/css/
  ├─ item-card.css         ✅ (unified card component)
  ├─ dashboard.css         ✅ (stats cards, user dropdown)
  ├─ student-pages.css     ✅ (common page styles)
  └─ profile-page.css      ✅ (profile page styles)
```

**Recommendation:** Create role-agnostic CSS files:
```
public/css/
  ├─ components/
  │   ├─ item-card.css     (move here)
  │   ├─ stats-card.css    (extract from dashboard.css)
  │   ├─ user-dropdown.css (extract from dashboard.css)
  │   └─ page-header.css   (new)
  ├─ layouts/
  │   ├─ sidebar.css
  │   └─ header.css
  └─ pages/
      ├─ dashboard.css
      └─ profile.css
```

---

### 4. **Missing Pages - Implementation Plan**

#### Priority 1: Parent Pages
```javascript
// /parent/reports
app.get('/parent/reports', (req, res) => {
  res.render('parent/reports', {
    layout: 'layouts/parent',
    title: 'Báo Cáo Học Tập - SWF Math',
    user: mockData.parentUser,
    children: mockData.children,
    reports: mockData.childrenReports // Need to add to mockData
  });
});
```

**View structure:** Reuse components from student/progress
- Stats cards for each child
- Progress charts (reuse from student dashboard)
- Recent test results (reuse item-card component)

#### Priority 2: Teacher Pages
```javascript
// Review /teacher/dashboard
// Add missing views if needed
```

**View structure:** Similar to student dashboard but with:
- Class statistics instead of personal stats
- Student performance overview
- Upcoming assignments/tests

---

### 5. **Sidebar Navigation - Unified Approach**

#### Current:
- Student sidebar: Home, Tests, Courses, Games, Progress
- Parent sidebar: Need to check
- Teacher sidebar: Need to check

#### ✅ Recommendation:
Create role-based sidebar partial:

```html
<!-- partials/sidebar.ejs -->
<% 
const sidebarItems = {
  student: [
    { icon: '🏠', label: 'Trang Chủ', path: '/student/dashboard' },
    { icon: '📝', label: 'Bài Thi', path: '/student/tests' },
    { icon: '📚', label: 'Khóa Học', path: '/student/courses' },
    { icon: '🎮', label: 'Trò Chơi', path: '/student/games' },
    { icon: '📊', label: 'Tiến Độ', path: '/student/progress' }
  ],
  parent: [
    { icon: '🏠', label: 'Trang Chủ', path: '/parent/dashboard' },
    { icon: '👶', label: 'Con Của Tôi', path: '/parent/children' },
    { icon: '📊', label: 'Báo Cáo', path: '/parent/reports' },
    { icon: '💬', label: 'Tin Nhắn', path: '/parent/messages' }
  ],
  teacher: [
    { icon: '🏠', label: 'Trang Chủ', path: '/teacher/dashboard' },
    { icon: '👥', label: 'Lớp Học', path: '/teacher/classes' },
    { icon: '📝', label: 'Bài Tập', path: '/teacher/assignments' },
    { icon: '🎓', label: 'Học Sinh', path: '/teacher/students' }
  ]
};
%>

<nav class="sidebar">
  <% sidebarItems[role].forEach(item => { %>
    <a href="<%= item.path %>" class="nav-item <%= currentPath.startsWith(item.path) ? 'active' : '' %>">
      <span class="nav-icon"><%= item.icon %></span>
      <span class="nav-label"><%= item.label %></span>
    </a>
  <% }); %>
</nav>
```

---

## 📋 Implementation Checklist

### Phase 1: Immediate Fixes (High Priority)
- [ ] Create `/parent/reports.ejs` view
- [ ] Create `/parent/settings.ejs` view (or redirect to unified `/settings`)
- [ ] Check and fix `/teacher/dashboard.ejs`
- [ ] Update all layouts to use consistent user dropdown

### Phase 2: Unification (Medium Priority)
- [ ] Create `views/shared/profile.ejs`
- [ ] Create `views/shared/settings.ejs`
- [ ] Create `views/partials/user-dropdown.ejs`
- [ ] Update routes to use `/profile` and `/settings`
- [ ] Update all user dropdown links

### Phase 3: Component Extraction (Low Priority)
- [ ] Extract reusable components to partials
- [ ] Reorganize CSS into components/layouts/pages
- [ ] Create shared sidebar partial
- [ ] Create shared page-header partial

### Phase 4: Enhancement
- [ ] Add role switching for users with multiple roles
- [ ] Add notifications to user dropdown
- [ ] Add breadcrumbs component
- [ ] Add search functionality

---

## 🎯 Recommended Final Structure

```
Routes:
├─ Public Routes
│  ├─ / (landing)
│  ├─ /login
│  ├─ /register
│  ├─ /courses
│  └─ /competitions
│
├─ Unified Routes (All Roles)
│  ├─ /profile          ← NEW: Unified profile
│  ├─ /settings         ← NEW: Unified settings
│  └─ /notifications    ← FUTURE: Unified notifications
│
├─ Student Routes
│  ├─ /student/dashboard
│  ├─ /student/tests
│  ├─ /student/courses
│  ├─ /student/games
│  └─ /student/progress
│
├─ Parent Routes
│  ├─ /parent/dashboard
│  ├─ /parent/children
│  ├─ /parent/reports   ← FIX NEEDED
│  └─ /parent/messages
│
└─ Teacher Routes
   ├─ /teacher/dashboard ← CHECK NEEDED
   ├─ /teacher/classes
   ├─ /teacher/assignments
   └─ /teacher/students
```

---

## 💡 Key Benefits

1. **Consistency**: All roles share same components
2. **Maintainability**: Change once, apply everywhere
3. **User Experience**: Familiar interface across roles
4. **Code Reuse**: Less duplication, faster development
5. **Scalability**: Easy to add new roles (e.g., admin)

---

## ⚠️ Breaking Changes

**If implementing unified `/profile` and `/settings`:**

1. Update user dropdown links in all layouts
2. Update any direct links to `/student/profile`
3. Remove `/student/profile`, `/parent/settings` routes
4. Update navigation/sidebar items
5. Test all role transitions

**Migration Strategy:**
- Keep old routes as redirects temporarily
- Add deprecation warnings
- Remove after testing period

---

## 📌 Next Steps

**Immediate Action:**
1. Review current teacher/parent layouts
2. Create missing views
3. Standardize user dropdown
4. Test all routes

**Strategic Action:**
1. Implement unified profile/settings
2. Extract reusable components
3. Reorganize CSS structure
4. Update documentation
