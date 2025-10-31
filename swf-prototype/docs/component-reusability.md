# 🎨 Component Reusability Guide

## Mục đích
Tài liệu này hướng dẫn cách tái sử dụng components để đảm bảo giao diện nhất quán trên toàn bộ ứng dụng.

---

## 📦 **Component Library**

### 1. **Item Card Component** (`item-card.css`)

Component đa năng cho Tests, Courses, Games và Progress.

#### **Cấu trúc HTML:**
```html
<div class="items-grid">
    <div class="item-card">
        <!-- Header -->
        <div class="item-header">
            <div class="item-icon-wrapper">
                <span>📝</span>
            </div>
            <div class="item-header-content">
                <h3 class="item-title">Title</h3>
                <div class="item-subtitle">
                    <span class="item-subtitle-icon">🏆</span>
                    <span>Subtitle</span>
                </div>
            </div>
        </div>

        <!-- Description (Optional) -->
        <p class="item-description">Description text...</p>

        <!-- Meta Info (Optional) -->
        <div class="item-meta">
            <span class="meta-item">
                <span class="icon">📊</span>
                Meta text
            </span>
        </div>

        <!-- Tags (Optional) -->
        <div class="item-tags">
            <span class="item-tag">Tag 1</span>
            <span class="item-tag">Tag 2</span>
        </div>

        <!-- Progress (Optional) -->
        <div class="item-progress-section">
            <div class="progress-header">
                <span class="progress-value">85%</span>
                <span class="progress-level">
                    <span class="progress-level-icon">🏆</span>
                    Level 8
                </span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 85%;"></div>
            </div>
        </div>

        <!-- Stats Bar (Optional) -->
        <div class="item-stats-bar">
            <div class="stat-item">
                <span class="stat-label">Label</span>
                <span class="stat-value">Value</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">...</div>
        </div>

        <!-- Actions -->
        <div class="item-actions">
            <a href="#" class="btn btn-primary">Primary</a>
            <a href="#" class="btn btn-outline">Secondary</a>
        </div>
    </div>
</div>
```

#### **Customization Parameters:**

| Element | Purpose | Customize |
|---------|---------|-----------|
| `.item-icon-wrapper` | Icon background | `style="background: color; border-color: color;"` |
| `.item-description` | Description clamp | Add/remove for display |
| `.item-meta` | Metadata display | Show/hide based on data |
| `.item-tags` | Topic/category tags | Show/hide based on data |
| `.item-progress-section` | Progress bar | Show for courses/games only |
| `.item-stats-bar` | Statistics display | Show for tests only |

#### **Usage Examples:**

**Tests Page:**
```html
<div class="item-card">
    <div class="item-header">...</div>
    <p class="item-description">...</p>
    <div class="item-meta">...</div>
    <div class="item-tags">...</div>
    <div class="item-stats-bar">...</div> <!-- Tests specific -->
    <div class="item-actions">...</div>
</div>
```

**Courses Page:**
```html
<div class="item-card">
    <div class="item-header">...</div>
    <p class="item-description">...</p>
    <div class="item-meta">...</div>
    <div class="item-progress-section">...</div> <!-- Courses specific -->
    <div class="item-actions">...</div>
</div>
```

**Games Page:**
```html
<div class="item-card">
    <div class="item-header">...</div>
    <p class="item-description">...</p>
    <div class="item-meta">...</div>
    <div class="item-progress-section">...</div> <!-- Games specific -->
    <div class="item-actions">...</div>
</div>
```

**Progress Page (Test Results):**
```html
<div class="item-card">
    <div class="item-header">...</div>
    <div class="test-score-display">...</div> <!-- Progress specific -->
    <div class="item-meta">...</div>
    <div class="item-actions">...</div>
</div>
```

---

### 2. **Stats Card Component** (Dashboard & Progress)

#### **Cấu trúc HTML:**
```html
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon" style="background: gradient;">
            <span>🎯</span>
        </div>
        <div class="stat-content">
            <h3>1,250</h3>
            <p>Label</p>
            <div class="stat-trend up">
                <span>↗</span> +245 tuần này
            </div>
        </div>
    </div>
</div>
```

#### **Gradient Colors:**
- Purple: `linear-gradient(135deg, #667eea, #764ba2)`
- Green: `linear-gradient(135deg, #43e97b, #38f9d7)`
- Pink-Yellow: `linear-gradient(135deg, #fa709a, #fee140)`
- Pink-Red: `linear-gradient(135deg, #f093fb, #f5576c)`

---

### 3. **Course Progress Card** (Progress Page)

#### **Cấu trúc HTML:**
```html
<div class="progress-course-card">
    <div class="course-card-header">
        <div class="course-icon-circle" style="background: color; border-color: color;">
            <span>📖</span>
        </div>
        <div class="course-header-info">
            <h3>Course Name</h3>
            <p>Progress text</p>
        </div>
        <div class="course-percentage" style="color: color;">
            85%
        </div>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 85%; background: color;"></div>
    </div>
    <div class="course-card-footer">
        <div class="course-stat-mini">...</div>
    </div>
</div>
```

---

### 4. **Achievement Card** (Progress & Profile)

#### **Cấu trúc HTML:**
```html
<div class="achievements-grid">
    <div class="achievement-card unlocked"> <!-- or 'locked' -->
        <div class="achievement-glow"></div>
        <div class="achievement-icon-big">🏆</div>
        <h4>Achievement Name</h4>
        <p>Description</p>
        
        <!-- If unlocked -->
        <div class="achievement-unlock-info">
            <span class="unlock-badge">
                <span class="badge-icon">✓</span>
                Đã Đạt Được
            </span>
            <span class="unlock-date">Date</span>
        </div>
        
        <!-- If locked -->
        <div class="achievement-locked-info">
            <span class="lock-icon">🔒</span>
            <span class="lock-text">Chưa Mở Khóa</span>
        </div>
    </div>
</div>
```

---

## 🎯 **Best Practices**

### 1. **Component Reuse Checklist**
- ✅ Use `.item-card` for all list items (tests, courses, games)
- ✅ Use `.stat-card` for statistics display
- ✅ Use `.achievement-card` for achievements
- ✅ Customize via inline styles for colors
- ✅ Show/hide sections based on data availability

### 2. **Color Consistency**
```javascript
// Difficulty/Score based colors
if (score >= 80) color = '#43e97b'; // Green - Good
else if (score >= 60) color = '#fa709a'; // Pink - Medium
else color = '#ff6b6b'; // Red - Bad

// Primary gradient
color = 'linear-gradient(135deg, #667eea, #764ba2)';
```

### 3. **Grid Layouts**
```css
/* Default items grid */
.items-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

/* Smaller items (achievements, test results) */
.items-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

/* Stats grid */
.stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

### 4. **Responsive Design**
All components automatically responsive via `auto-fill` / `auto-fit`:
- Desktop: Multiple columns
- Tablet: 2 columns
- Mobile: 1 column

---

## 📋 **Migration Guide**

### Converting Old Design to New Component:

**Before:**
```html
<div class="old-custom-card">
    <div class="custom-header">...</div>
    <div class="custom-content">...</div>
</div>
```

**After:**
```html
<div class="item-card">
    <div class="item-header">...</div>
    <p class="item-description">...</p>
    <div class="item-actions">...</div>
</div>
```

### Steps:
1. Replace outer container with `.item-card`
2. Use `.item-header` for icon + title
3. Use `.item-description` for text
4. Add appropriate optional sections
5. Use `.item-actions` for buttons
6. Test responsive behavior

---

## 🚀 **Implementation Examples**

### Progress Page - Test Results Section:
```html
<!-- Reuse item-card from Tests -->
<div class="items-grid">
    <div class="item-card">
        <div class="item-header">...</div>
        <div class="test-score-display">
            <!-- Custom progress-specific display -->
        </div>
        <div class="item-meta">...</div>
        <div class="item-actions">...</div>
    </div>
</div>
```

**Benefits:**
- ✅ Consistent design
- ✅ Less CSS duplication
- ✅ Easier maintenance
- ✅ Faster development

---

## 📝 **Summary**

### Core Components:
1. **`.item-card`** - Main content card (Tests, Courses, Games, Progress)
2. **`.stat-card`** - Statistics card (Dashboard, Progress)
3. **`.progress-course-card`** - Course progress (Progress page)
4. **`.achievement-card`** - Achievements (Progress, Profile)

### Files:
- `public/css/item-card.css` - Item card component
- `public/css/dashboard.css` - Stats cards
- `views/student/progress.ejs` - Additional progress components

### Key Principle:
**"Write once, customize with parameters, reuse everywhere"**
