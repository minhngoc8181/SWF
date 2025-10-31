# Component System Documentation

## Overview

This document describes the reusable component system implemented across the SWF application. The system uses EJS partials to eliminate code duplication and ensure consistency across all pages and roles (student, parent, teacher).

## Architecture

### Directory Structure
```
views/
  partials/
    user-dropdown.ejs    # User menu dropdown for all layouts
    page-header.ejs      # Page title and description header
    stats-card.ejs       # Statistics display card
    section-header.ejs   # Section title with optional link/badge
  layouts/
    student.ejs          # Uses user-dropdown partial
    parent.ejs           # Uses user-dropdown partial
    teacher.ejs          # Uses user-dropdown partial
  student/
    progress.ejs         # Uses all partials
    tests.ejs           # Uses page-header, section-header
    courses.ejs         # Uses page-header, section-header
    games.ejs           # Uses page-header, section-header
  parent/
    reports.ejs         # Uses all partials
  shared/
    profile.ejs         # Unified profile for all roles
    settings.ejs        # Unified settings for all roles
```

## Partials Reference

### 1. user-dropdown.ejs

**Purpose:** Consistent user menu dropdown across all role layouts

**Parameters:**
- `user` (object, required): User data object
  - `user.avatar` (string): URL to user avatar image
  - `user.name` (string): User's display name
  - `user.email` (string): User's email address
  - `user.role` (string): User role ('student', 'parent', 'teacher')

**Usage:**
```ejs
<%- include('../partials/user-dropdown', { user: user }) %>
```

**Features:**
- Role-based conditional rendering
- Student-specific items (Progress link)
- Unified Profile and Settings links
- Logout functionality
- Consistent styling across all roles

**Dependencies:**
- CSS: `dashboard.css` (.user-dropdown, .user-btn, .user-dropdown-menu)
- JS: `main.js` (toggleUserMenu function)

---

### 2. page-header.ejs

**Purpose:** Consistent page title and description header

**Parameters:**
- `icon` (string, optional): Emoji or icon to display before title
- `title` (string, required): Page title text
- `description` (string, optional): Page description subtitle

**Usage:**
```ejs
<%- include('../partials/page-header', { 
    icon: '📊', 
    title: 'Tiến Độ Học Tập',
    description: 'Theo dõi quá trình học tập và thành tích của bạn'
}) %>

<!-- Without description -->
<%- include('../partials/page-header', { 
    icon: '📝', 
    title: 'Đề Thi'
}) %>

<!-- Without icon -->
<%- include('../partials/page-header', { 
    title: 'Dashboard'
}) %>
```

**Output:**
- Renders `.page-header` div with gradient title
- Optional description paragraph
- Consistent spacing and styling

**Dependencies:**
- CSS: `student-pages.css` (.page-header)

---

### 3. stats-card.ejs

**Purpose:** Display statistics with icon, value, label, and trend

**Parameters:**
- `icon` (string, required): Emoji or icon to display
- `gradient` (string, required): CSS gradient for icon background
- `value` (number|string, required): Stat value (auto-formatted if number)
- `label` (string, required): Description label
- `trend` (object, optional): Trend indicator
  - `trend.icon` (string): Trend emoji/icon
  - `trend.text` (string): Trend description text
  - `trend.direction` (string, optional): 'up' or 'down' for color styling

**Usage:**
```ejs
<!-- With trend -->
<%- include('../partials/stats-card', { 
    icon: '🎯', 
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    value: 1250,
    label: 'Tổng Điểm XP',
    trend: { icon: '↗', text: '+245 tuần này', direction: 'up' }
}) %>

<!-- Without trend -->
<%- include('../partials/stats-card', { 
    icon: '📝', 
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    value: 24,
    label: 'Bài Thi Hoàn Thành'
}) %>

<!-- String value (no auto-formatting) -->
<%- include('../partials/stats-card', { 
    icon: '⭐', 
    gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
    value: '86%',
    label: 'Điểm Trung Bình',
    trend: { icon: '↗', text: '+5%', direction: 'up' }
}) %>
```

**Features:**
- Automatic number formatting (1250 → "1,250")
- Gradient icon background
- Colored trend indicators (green for 'up', red for 'down')
- Hover effects
- Responsive design

**Dependencies:**
- CSS: `student-pages.css` (.stat-card, .stat-icon, .stat-content, .stat-trend)

---

### 4. section-header.ejs

**Purpose:** Section title with optional "View All" link or badge

**Parameters:**
- `icon` (string, optional): Emoji or icon before title
- `title` (string, required): Section title text
- `link` (object, optional): View All link configuration
  - `link.url` (string): Link destination URL
  - `link.text` (string): Link text (default: "View All")
- `badge` (string, optional): Badge text to display (mutually exclusive with link)

**Usage:**
```ejs
<!-- With link -->
<%- include('../partials/section-header', { 
    icon: '📚', 
    title: 'Tiến Độ Khóa Học',
    link: { url: '/student/courses', text: 'Xem Tất Cả' }
}) %>

<!-- With badge -->
<%- include('../partials/section-header', { 
    icon: '🏆', 
    title: 'Thành Tích & Huy Hiệu',
    badge: '12/24 đã mở khóa'
}) %>

<!-- Simple title only -->
<%- include('../partials/section-header', { 
    title: 'Recent Activity'
}) %>
```

**Features:**
- Decorative gradient line above section
- Optional icon before title
- Optional link or badge on the right
- Consistent spacing and dividers
- First section header removes top border/margin

**Dependencies:**
- CSS: `student-pages.css` (.section-header, .section-link, .section-badge)

---

## Design System

### Color Palette
```css
/* Primary Gradients */
--gradient-primary: linear-gradient(135deg, #667eea, #764ba2);
--gradient-success: linear-gradient(135deg, #43e97b, #38f9d7);
--gradient-warning: linear-gradient(135deg, #fa709a, #fee140);
--gradient-danger: linear-gradient(135deg, #f093fb, #f5576c);

/* Solid Colors */
--primary: #667eea;
--success: #43e97b;
--warning: #fa709a;
--danger: #ff6b6b;
--text-dark: #2d3748;
--text-light: #718096;
```

### Typography
```css
/* Headers */
h1: 2rem, font-weight: 700, gradient text
h2: 1.5rem, font-weight: 700
h3: 1.05rem, font-weight: 700

/* Body */
p: 1rem, color: var(--text-light)
small: 0.85rem
```

### Spacing
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
```

### Component Patterns
- **Cards**: White background, 16px border-radius, subtle shadow, hover lift effect
- **Icons**: 60px circles with gradient backgrounds
- **Badges**: 20px border-radius, gradient backgrounds, bold text
- **Grids**: `auto-fill` with `minmax()` for responsive layouts

## Unified Routes

### Profile & Settings
```javascript
// Unified routes work for all roles
GET /profile    → views/shared/profile.ejs
GET /settings   → views/shared/settings.ejs

// Old role-specific routes (deprecated)
GET /student/profile   → Redirect to /profile
GET /parent/settings   → Redirect to /settings
```

**Benefits:**
- Single source of truth for universal features
- Easier maintenance
- Consistent experience across roles
- Multi-role user support

## Migration Guide

### Converting Existing Pages

#### Before (Inline HTML):
```ejs
<div class="page-header">
    <h1>📊 Page Title</h1>
    <p>Description text</p>
</div>

<div class="section-header">
    <h2>📚 Section Title</h2>
    <a href="/link" class="section-link">View All →</a>
</div>

<div class="stat-card">
    <div class="stat-icon" style="background: linear-gradient(135deg, #667eea, #764ba2);">
        <span>🎯</span>
    </div>
    <div class="stat-content">
        <h3>1,250</h3>
        <p>Total XP</p>
        <div class="stat-trend up">
            <span>↗</span> +245
        </div>
    </div>
</div>
```

#### After (Using Partials):
```ejs
<%- include('../partials/page-header', { 
    icon: '📊', 
    title: 'Page Title',
    description: 'Description text'
}) %>

<%- include('../partials/section-header', { 
    icon: '📚', 
    title: 'Section Title',
    link: { url: '/link', text: 'View All' }
}) %>

<%- include('../partials/stats-card', { 
    icon: '🎯', 
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    value: 1250,
    label: 'Total XP',
    trend: { icon: '↗', text: '+245', direction: 'up' }
}) %>
```

**Benefits:**
- ~60% reduction in code
- Single update affects all instances
- Type safety through parameters
- No styling inconsistencies

## Testing Checklist

When adding/modifying partials:

- [ ] Test with all required parameters
- [ ] Test with optional parameters omitted
- [ ] Test across all roles (student, parent, teacher)
- [ ] Test responsive breakpoints (mobile, tablet, desktop)
- [ ] Verify hover states and animations
- [ ] Check browser compatibility
- [ ] Validate accessibility (screen readers, keyboard navigation)
- [ ] Test with long text content (overflow handling)
- [ ] Verify against design system colors/spacing

## Best Practices

### 1. Parameter Validation
Always check for required parameters:
```ejs
<% if (!title) throw new Error('title parameter is required'); %>
```

### 2. Default Values
Provide sensible defaults for optional parameters:
```ejs
<% const linkText = link?.text || 'View All'; %>
```

### 3. Conditional Rendering
Use role-based conditions when needed:
```ejs
<% if (user.role === 'student') { %>
    <a href="/student/progress">Progress</a>
<% } %>
```

### 4. Accessibility
Include proper ARIA attributes:
```ejs
<button aria-label="Toggle user menu" aria-expanded="false">
```

### 5. Performance
Avoid complex logic in partials:
```ejs
<!-- ❌ Bad: Complex calculation in partial -->
<% const average = scores.reduce((a,b) => a+b) / scores.length; %>

<!-- ✅ Good: Pass calculated value -->
<%- include('partial', { average: calculatedAverage }) %>
```

## Future Enhancements

### Planned Partials
- `breadcrumbs.ejs` - Navigation breadcrumbs
- `notification-button.ejs` - Notification bell with badge
- `search-box.ejs` - Global search input
- `achievement-card.ejs` - Achievement display component
- `progress-bar.ejs` - Reusable progress indicator
- `modal.ejs` - Modal dialog wrapper

### Potential Features
- Component variants (sizes: small, medium, large)
- Theme support (light/dark mode)
- Animation presets
- Internationalization (i18n) support
- Component composition (nested partials)

## Troubleshooting

### Common Issues

**Issue:** Partial not found error
```
Error: Failed to lookup view "../partials/component" in views directory
```
**Solution:** Check relative path from calling file. Use `../partials/` from pages, `partials/` from layouts.

---

**Issue:** Parameter undefined
```
TypeError: Cannot read property 'name' of undefined
```
**Solution:** Verify parameter is passed: `<%- include('partial', { user: user }) %>`

---

**Issue:** Inline style lint errors
```
at-rule or selector expected
```
**Solution:** These are expected for EJS inline styles. Can be safely ignored or configure linter to skip EJS files.

---

**Issue:** Layout not updated after partial change
```
Old content still showing after editing partial
```
**Solution:** Restart the Node.js server to clear EJS template cache.

## Contributing

When creating new partials:

1. **Document parameters** - Clear JSDoc-style comments
2. **Provide examples** - Include usage examples
3. **Test thoroughly** - All roles, all states
4. **Update this doc** - Add to reference section
5. **Maintain consistency** - Follow naming conventions

### Naming Conventions
- Partials: `kebab-case.ejs` (e.g., `user-dropdown.ejs`)
- CSS classes: `kebab-case` (e.g., `.stat-card`)
- Parameters: `camelCase` (e.g., `iconColor`)
- Files: `kebab-case` for views, `PascalCase` for components

## Conclusion

The component system dramatically reduces code duplication, ensures consistency across the application, and makes maintenance significantly easier. By following these guidelines and using the provided partials, developers can build new pages faster while maintaining high quality and consistency.

For questions or suggestions, contact the development team.

---

**Last Updated:** January 2025  
**Version:** 1.0  
**Maintained by:** SWF Development Team
