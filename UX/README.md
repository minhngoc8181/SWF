# SWF Math - UI/UX Prototype

> **HTML/CSS/JS Prototype** cho Website Giáo Dục Toán Học

**Status**: ✅ Complete and ready for review  
**Created**: October 31, 2025  
**Purpose**: Visual design validation before production implementation

---

## 🚀 Quick Start - Xem Prototype Ngay

### Cách 1: Mở Trực Tiếp (Đơn Giản Nhất)

```
1. Mở File Explorer
2. Navigate to: d:\EIU\SWF\UX\
3. Nhấp đúp vào index.html
4. Trình duyệt sẽ tự động mở
```

### Cách 2: VS Code Live Server (Khuyến Nghị)

```
1. Mở folder trong VS Code: d:\EIU\SWF\UX
2. Install extension "Live Server" (nếu chưa có)
3. Right-click index.html
4. Chọn "Open with Live Server"
5. Browser tự động mở tại http://localhost:5500
```

### Cách 3: Python HTTP Server

```powershell
cd d:\EIU\SWF\UX
python -m http.server 8000
# Mở browser: http://localhost:8000
```

### 🎯 Navigation Flow

```
Landing Page (index.html)
    ↓ Click "Đăng Nhập"
Login Page (login.html)
    ↓ Enter any email + password (min 6 chars) → Click "Đăng Nhập"
Student Dashboard (student-dashboard.html)
    ↓ Explore dashboard features
```

---

## 📋 Tổng Quan

Đây là prototype HTML/CSS/JS thuần để review thiết kế UI/UX trước khi quyết định technology stack chính thức.

### Mục Đích
- ✅ Review và đánh giá thiết kế giao diện
- ✅ Test trải nghiệm người dùng (UX)
- ✅ Kiểm tra responsive design
- ✅ Thu thập feedback từ stakeholders
- ✅ Điều chỉnh design system trước khi phát triển chính thức

## 📁 Cấu Trúc File

```
UX/
├── index.html                 # Landing page (trang chủ)
├── login.html                 # Trang đăng nhập
├── student-dashboard.html     # Dashboard học sinh
├── css/
│   ├── styles.css            # Base styles & design system
│   ├── landing.css           # Landing page styles
│   ├── auth.css              # Authentication pages
│   └── dashboard.css         # Dashboard styles
├── js/
│   ├── main.js               # Utilities & helpers
│   ├── auth.js               # Authentication logic
│   └── dashboard.js          # Dashboard functionality
└── img/                      # Images (placeholder)
```

## 🎨 Design System

### Color Palette

**Primary Colors:**
- Blue: `#4A90E2` - Trust, calm
- Green: `#7BC043` - Growth, success
- Orange: `#FF9F40` - Energy, creativity
- Purple: `#9B59B6` - Imagination, wisdom

**Secondary Colors:**
- Yellow: `#FFE66D` - Happiness
- Pink: `#FF6B9D` - Playful
- Sky Blue: `#AED9E0` - Light
- Mint: `#B8E6B8` - Fresh

**Semantic Colors:**
- Success: `#27AE60`
- Warning: `#F39C12`
- Error: `#E74C3C`
- Info: `#3498DB`

### Typography

- **Body**: Inter, Segoe UI, sans-serif
- **Headings**: Poppins, Quicksand, sans-serif
- **Code**: JetBrains Mono, monospace

### Spacing Scale

```
--spacing-xs:  0.25rem  (4px)
--spacing-sm:  0.5rem   (8px)
--spacing-md:  1rem     (16px)
--spacing-lg:  1.5rem   (24px)
--spacing-xl:  2rem     (32px)
--spacing-2xl: 3rem     (48px)
--spacing-3xl: 4rem     (64px)
```

## 📄 Pages Overview

### 1. Landing Page (`index.html`)

**Sections:**
- ✅ Header với navigation
- ✅ Hero section với CTA
- ✅ Features showcase (6 tính năng chính)
- ✅ Competitions showcase (IKMC, AMC, IMC, TIMO)
- ✅ Testimonials (phản hồi người dùng)
- ✅ CTA section
- ✅ Footer

**Key Features:**
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Animated elements on scroll
- SEO-optimized structure

### 2. Login Page (`login.html`)

**Features:**
- Email/password login form
- Form validation
- Social login buttons (Google, Facebook)
- "Remember me" option
- Forgot password link
- Link to registration
- Split layout với illustration

### 3. Student Dashboard (`student-dashboard.html`)

**Components:**
- Fixed header với search, notifications, user menu
- Collapsible sidebar navigation
- Welcome banner
- Stats cards (4 metrics)
- Recent tests list
- Upcoming events
- Progress tracking
- Achievements showcase

**Features:**
- Fully responsive
- Interactive elements
- Mock data loaded via JavaScript
- Protected route (requires login)

## 🚀 Cách Sử Dụng

### 1. Xem Prototype

**Option A: Mở trực tiếp trong browser**
```
Nhấp đúp vào index.html để mở trong trình duyệt
```

**Option B: Sử dụng VS Code Live Server**
```
1. Cài đặt extension "Live Server" trong VS Code
2. Right-click vào index.html
3. Chọn "Open with Live Server"
```

**Option C: Sử dụng Python HTTP Server**
```bash
# Di chuyển vào folder UX
cd d:\EIU\SWF\UX

# Python 3
python -m http.server 8000

# Hoặc Python 2
python -m SimpleHTTPServer 8000

# Mở browser: http://localhost:8000
```

### 2. Navigation Flow

```
index.html (Landing)
    ↓ Click "Đăng Nhập"
login.html (Login Page)
    ↓ Submit form (mock login)
student-dashboard.html (Dashboard)
```

### 3. Test Responsive Design

**Browser DevTools:**
1. Mở Chrome DevTools (F12)
2. Click icon "Toggle device toolbar" (Ctrl+Shift+M)
3. Test các breakpoints:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

## 🎯 Key Features Implemented

### Interactive Features

✅ **Mobile Navigation**
- Hamburger menu
- Smooth transitions
- Close on outside click

✅ **Form Validation**
- Email validation
- Password strength indicator
- Real-time error messages
- Success/error toasts

✅ **Scroll Animations**
- Fade in on scroll
- Intersection Observer API
- Smooth scroll to anchors

✅ **Dashboard Interactivity**
- Sidebar toggle
- Search box
- Notification badge
- User menu dropdown (prepared)

### Mock Functionality

⚠️ **Note:** Prototype sử dụng mock data, không kết nối API thật

```javascript
// Mock login
Email: any@email.com
Password: any (min 6 chars)

// Data được load từ mock functions
mockFetchStats()
mockFetchRecentTests()
mockFetchUpcomingEvents()
mockFetchProgress()
```

## 📱 Responsive Breakpoints

```css
/* Desktop First */
Default: Desktop (1200px+)

@media (max-width: 1200px) { /* Large Tablet */ }
@media (max-width: 992px)  { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile Landscape */ }
@media (max-width: 480px)  { /* Mobile Portrait */ }
```

## 🎨 Customization Guide

### Thay Đổi Màu Sắc

Edit `css/styles.css`:

```css
:root {
    --primary-blue: #YourColor;
    --primary-green: #YourColor;
    /* ... */
}
```

### Thay Đổi Font

Edit `css/styles.css`:

```css
:root {
    --font-body: 'YourFont', sans-serif;
    --font-heading: 'YourFont', sans-serif;
}
```

Thêm Google Fonts vào `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Thêm/Sửa Content

Content nằm trực tiếp trong HTML files. Chỉnh sửa text, images, links trong từng file `.html`.

## 🔍 Review Checklist

Sử dụng checklist này để review prototype:

### Visual Design
- [ ] Color scheme phù hợp với trẻ em (6-15 tuổi)?
- [ ] Typography dễ đọc?
- [ ] Spacing hợp lý?
- [ ] Icons và illustrations thân thiện?
- [ ] Buttons và CTA nổi bật?

### User Experience
- [ ] Navigation rõ ràng, dễ hiểu?
- [ ] Forms đơn giản, không phức tạp?
- [ ] Feedback rõ ràng (errors, success)?
- [ ] Loading states appropriately?
- [ ] Mobile experience tốt?

### Functionality (Mock)
- [ ] Links hoạt động?
- [ ] Forms validate đúng?
- [ ] Responsive trên mọi devices?
- [ ] Animations mượt mà?
- [ ] No console errors?

### Content
- [ ] Copy (text) phù hợp với đối tượng?
- [ ] CTAs hấp dẫn?
- [ ] Information hierarchy đúng?
- [ ] Tiếng Việt grammar chính xác?

## 📝 Feedback & Iterations

### Thu Thập Feedback

1. **Stakeholder Review**
   - Họp review với team
   - Ghi chú feedback trực tiếp trên design
   - Prioritize changes

2. **User Testing** (nếu có)
   - Test với 3-5 học sinh
   - Observe behavior
   - Record issues

3. **Technical Review**
   - Developer xem xét feasibility
   - Estimate effort for real implementation

### Điều Chỉnh

Sau khi có feedback, update files:

1. Design changes → Update CSS
2. Layout changes → Update HTML structure
3. Behavior changes → Update JavaScript
4. Document changes trong commit message

## 🚧 Limitations (Prototype)

⚠️ **Prototype này KHÔNG bao gồm:**

- ❌ Real backend API integration
- ❌ Database connections
- ❌ User authentication (chỉ mock)
- ❌ Real test-taking functionality
- ❌ Video player
- ❌ Math equation rendering (KaTeX/MathJax)
- ❌ Chart/graph libraries
- ❌ File upload
- ❌ Payment integration
- ❌ Real-time features (chat, notifications)
- ❌ i18n (multi-language)

✅ **Prototype này BAO GỒM:**

- ✅ Complete visual design
- ✅ Responsive layouts
- ✅ Interactive UI components
- ✅ Form validation
- ✅ Mock data & navigation flow
- ✅ Animation & transitions
- ✅ Accessibility basics

## 🎯 Next Steps

Sau khi review và approve prototype:

### 1. Finalize Design
- [ ] Incorporate tất cả feedback
- [ ] Freeze design system
- [ ] Export design tokens

### 2. Prepare Assets
- [ ] Optimize images
- [ ] Export icons as SVG
- [ ] Prepare logo files
- [ ] Collect stock photos/illustrations

### 3. Document Decisions
- [ ] Document design decisions
- [ ] Create component library documentation
- [ ] Note any technical constraints

### 4. Plan Implementation
- [ ] Choose tech stack (React, Vue, etc.)
- [ ] Setup development environment
- [ ] Create project structure
- [ ] Start Phase 0 implementation (see `docs/frontend-guide.md`)

---

## 🔍 Review Checklist

### ☑️ Visual Design
- [ ] Colors phù hợp với trẻ em?
- [ ] Typography dễ đọc?
- [ ] Spacing hợp lý?
- [ ] Icons thân thiện?
- [ ] Buttons rõ ràng?

### ☑️ User Experience
- [ ] Navigation dễ hiểu?
- [ ] Forms đơn giản?
- [ ] Feedback rõ ràng?
- [ ] Mobile experience tốt?
- [ ] Animations mượt?

### ☑️ Technical
- [ ] Responsive trên mọi devices?
- [ ] No console errors?
- [ ] Links work correctly?
- [ ] Forms validate properly?

---

## 📝 Feedback Template

Sau khi review, ghi chú feedback theo mẫu:

```markdown
## Landing Page
- ✅ Like: Hero section, màu sắc sống động
- ⚠️  Change: CTA buttons có thể to hơn
- ❌ Dislike: Footer links quá nhiều

## Login Page
- ✅ Like: Simple, clean design
- ⚠️  Change: Add "show password" icon
- ❌ Dislike: N/A

## Dashboard
- ✅ Like: Stats cards, progress bars
- ⚠️  Change: Sidebar icons to hơn
- ❌ Dislike: N/A

## Overall
- Priority changes: ...
- Nice to have: ...
- Technical concerns: ...
```

---

## 🚧 Known Limitations

**Prototype này chỉ cho review design, KHÔNG có:**
- ❌ Real API integration
- ❌ Database
- ❌ Real authentication
- ❌ Math equation rendering
- ❌ Video players
- ❌ Charts libraries
- ❌ File uploads

**Có sẵn để review:**
- ✅ Complete visual design
- ✅ All layouts & spacing
- ✅ Interactive components
- ✅ Responsive design
- ✅ Basic animations
- ✅ Form validation

---

## 📐 Test Responsive Design

**Trong Chrome DevTools:**
```
1. Press F12
2. Press Ctrl+Shift+M (Toggle device toolbar)
3. Test các devices:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
```

**Responsive Breakpoints:**
```
Mobile:  < 480px
Tablet:  480px - 768px
Desktop: 768px - 1200px
Wide:    > 1200px
```

---

## ✨ Interactive Features

### Landing Page
- ✅ Responsive mobile menu
- ✅ Smooth scroll to sections
- ✅ Animated cards on scroll
- ✅ Hover effects on buttons/cards

### Login Page
- ✅ Email validation (real-time)
- ✅ Form validation
- ✅ Toast notifications
- ✅ Mock authentication
- ✅ Split layout design

### Student Dashboard
- ✅ Sidebar toggle (mobile)
- ✅ Search box with expand animation
- ✅ Notification badge
- ✅ Stats cards
- ✅ Progress bars
- ✅ Achievement cards
- ✅ Upcoming events timeline

---

## 📅 Next Steps Timeline

### Week 1-2: Feedback Collection
1. **Review** với stakeholders
2. **Test** với users (nếu có)
3. **Document** tất cả feedback

### Week 3: Iteration
1. **Update** prototype based on feedback
2. **Finalize** color palette
3. **Lock** design system

### Week 4-5: Preparation
1. **Export** design tokens
2. **Prepare** image assets (optimize, WebP)
3. **Document** component specs
4. **Choose** technology stack

### Week 6+: Implementation
1. **Setup** dev environment (see `docs/frontend-guide.md`)
2. **Initialize** project (React/Vue)
3. **Build** component library
4. **Integrate** with backend API
5. **Start** Phase 0 from roadmap

---

## 📚 Resources

### Design References
- **Color Palette Tool**: https://coolors.co/
- **Icon Libraries**: https://lucide.dev/, https://iconmonstr.com/
- **Illustrations**: https://undraw.co/, https://storyset.com/
- **Fonts**: https://fonts.google.com/

### Development
- **Frontend Guide**: `docs/frontend-guide.md` (Complete implementation guide)
- **Roadmap**: `docs/roadmap.md` (Project timeline)
- **Architecture**: `docs/architecture.md` (Backend architecture)

### Learning
- **HTML/CSS Guide**: https://web.dev/learn/html/
- **JavaScript Best Practices**: https://javascript.info/
- **Responsive Design**: https://web.dev/responsive-web-design-basics/

---

## 💡 Tips for Review

### Tốt Nhất Review Trên:
- Desktop browser (Chrome/Edge)
- Real mobile device (iOS/Android)
- Tablet device (iPad)

### Chú Ý Đến:
- First impression
- Ease of navigation
- Color harmony
- Readability
- Touch targets (mobile - min 44x44px)
- Loading times
- Intuitive flows

### Questions to Ask:
- Có phù hợp với học sinh cấp 1-2 không?
- Phụ huynh có thích design này không?
- Giáo viên có dễ sử dụng không?
- Có gì confusing hoặc unclear?
- Missing features nào quan trọng?

---

## 🎯 Success Criteria

Prototype được coi là "ready" khi:
- ✅ Stakeholders approve overall design
- ✅ No major usability issues found
- ✅ Responsive works on all devices
- ✅ Design system is consistent
- ✅ Ready to start development

---

## 🤝 Contribution

Để đóng góp vào prototype:

1. Review files hiện tại
2. Tạo branch mới cho changes
3. Update HTML/CSS/JS
4. Test thoroughly
5. Commit với clear message
6. Request review

---

## 📞 Contact

Có câu hỏi về prototype? 
- Check console for errors (F12)
- Review JavaScript for mock data logic
- See `docs/frontend-guide.md` for implementation details

---

**Version**: 1.0.0 (Prototype)  
**Last Updated**: October 31, 2025  
**Status**: ✅ Ready for Review  

**Start Here**: Open `index.html` in browser! 🚀
