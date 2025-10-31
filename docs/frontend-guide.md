# Frontend Development Guide

> Complete guide for building the SWF Math Platform frontend

**Last Updated**: October 31, 2025

---

## 📖 Table of Contents

- [Part 1: Quick Reference](#part-1-quick-reference)
- [Part 2: Technology Stack & Setup](#part-2-technology-stack--setup)
- [Part 3: Feature Analysis](#part-3-feature-analysis)
- [Part 4: Implementation Roadmap](#part-4-implementation-roadmap)
- [Part 5: Development Workflow](#part-5-development-workflow)

---

## Part 1: Quick Reference

### 📊 Project Overview

**Website giáo dục toán học** cho học sinh cấp 1 và cấp 2 (6-15 tuổi)

#### Tính Năng Chính
1. ✅ Thi thử các cuộc thi toán học quốc tế (IKMC, AMC, IMC, TIMO, v.v.)
2. ✅ Khóa học online theo chương trình Singapore
3. ✅ Trò chơi toán học tương tác
4. ✅ Theo dõi tiến độ học tập
5. ✅ Dashboard cho học sinh, phụ huynh và giáo viên

#### Timeline
**20-24 tuần** (5-6 tháng) cho full implementation

---

### 🎨 Design System

#### Color Palette
```
Primary Colors:
- Blue:    #4A90E2  (Trustworthy, calm)
- Green:   #7BC043  (Growth, success)
- Orange:  #FF9F40  (Energy, creativity)
- Purple:  #9B59B6  (Imagination, wisdom)

Secondary Colors:
- Yellow:  #FFE66D  (Happiness)
- Pink:    #FF6B9D  (Playful)
- Sky:     #AED9E0  (Light)
- Mint:    #B8E6B8  (Fresh)

Semantic Colors:
- Success: #27AE60
- Warning: #F39C12
- Error:   #E74C3C
- Info:    #3498DB

Neutral:
- Dark:    #2C3E50
- Gray:    #BDC3C7
- Light:   #F7F9FC
- White:   #FFFFFF
```

#### Typography
```
Body Text:    Inter, Segoe UI
Headings:     Poppins, Quicksand
Code/Math:    JetBrains Mono
```

#### Font Scale
```
h1: 2.5rem / 2rem (mobile)
h2: 2rem / 1.75rem
h3: 1.5rem / 1.5rem
h4: 1.25rem / 1.25rem
body: 1rem
small: 0.875rem
```

#### Spacing Scale
```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
```

#### Breakpoints
```
mobile:  < 480px
tablet:  480px - 768px
desktop: 768px - 1200px
wide:    > 1200px
```

---

### 🛠️ Technology Stack

| Category | Technology | Reason |
|----------|-----------|--------|
| **Framework** | React 18+ + TypeScript | Component reusability, type safety, ecosystem |
| **Build Tool** | Vite 5+ | Fast HMR, modern, great DX |
| **CSS** | Tailwind CSS 3+ | Utility-first, customizable, responsive |
| **UI Library** | Shadcn/ui | Accessible, customizable, no lock-in |
| **Routing** | React Router v6 | Standard for React SPAs |
| **State** | Zustand + React Query | Simple global + server state |
| **Forms** | React Hook Form + Zod | Performance + validation |
| **HTTP** | Axios | Interceptors, timeout, cancellation |
| **Animation** | Framer Motion | Declarative, smooth |
| **Math** | KaTeX | Fast LaTeX rendering |
| **Charts** | Recharts | React-native, composable |
| **i18n** | react-i18next | Multi-language |
| **Testing** | Vitest + React Testing Library + Playwright | Unit + Integration + E2E |

---

### 🗺️ Sitemap Overview

```
Public Pages
├── Landing (/)
├── About, Courses, Competitions, Blog
├── Support, Login, Register

Student Portal (/student)
├── Dashboard, Profile, Progress
├── Tests (Browse, Take, Results)
├── Courses (My Courses, Lessons)
└── Games, Achievements, Settings

Parent Portal (/parent)
├── Dashboard, Children
├── Reports, Billing, Settings

Teacher Portal (/teacher)
├── Dashboard, Classes, Students
├── Assignments, Reports, Resources
└── Settings
```

---

## Part 2: Technology Stack & Setup

### 📦 Installation Steps

#### Step 1: Create Project

```powershell
# Create Vite + React + TypeScript project
npm create vite@latest swf-frontend -- --template react-ts

# Navigate to project
cd swf-frontend

# Install dependencies
npm install
```

#### Step 2: Install UI Dependencies

```powershell
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Shadcn/ui
npx shadcn-ui@latest init

# Icons & Animations
npm install lucide-react framer-motion
```

#### Step 3: Install Core Dependencies

```powershell
# Routing & State
npm install react-router-dom zustand @tanstack/react-query

# HTTP & Forms
npm install axios react-hook-form zod @hookform/resolvers

# Utilities
npm install clsx date-fns nanoid
```

#### Step 4: Install Development Tools

```powershell
# Linting & Formatting
npm install -D eslint prettier eslint-config-prettier
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event jsdom

# E2E Testing
npm init playwright@latest
```

---

### ⚙️ Configuration Files

#### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          blue: '#4A90E2',
          green: '#7BC043',
          orange: '#FF9F40',
          purple: '#9B59B6',
        },
        secondary: {
          yellow: '#FFE66D',
          pink: '#FF6B9D',
          sky: '#AED9E0',
          mint: '#B8E6B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Quicksand', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

#### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### `vite.config.ts`

```typescript
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://localhost:7158',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
```

#### `.env.development`

```bash
VITE_API_URL=https://localhost:7158/api
VITE_APP_NAME=SWF Math Platform
VITE_ENABLE_ANALYTICS=false
```

#### `.env.production`

```bash
VITE_API_URL=https://api.swfmath.com/api
VITE_APP_NAME=SWF Math Platform
VITE_ENABLE_ANALYTICS=true
VITE_SENTRY_DSN=your-sentry-dsn
VITE_GA_TRACKING_ID=your-ga-id
```

---

### 📁 Folder Structure

```
swf-frontend/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── images/
├── src/
│   ├── assets/               # Static assets
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/           # Reusable components
│   │   ├── ui/              # Base UI (Button, Input, Card)
│   │   ├── layout/          # Layout (Header, Footer, Sidebar)
│   │   ├── forms/           # Form components
│   │   └── domain/          # Domain-specific
│   │       ├── test/
│   │       ├── course/
│   │       └── game/
│   │
│   ├── pages/               # Route pages
│   │   ├── public/          # Public pages
│   │   ├── auth/            # Auth pages
│   │   ├── student/         # Student portal
│   │   ├── parent/          # Parent portal
│   │   └── teacher/         # Teacher portal
│   │
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services
│   ├── store/               # Global state (Zustand)
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   ├── styles/              # Global styles
│   ├── locales/             # i18n translations
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── router.tsx
│   └── vite-env.d.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.development
├── .env.production
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

### 🔗 Backend Integration

#### API Client Setup

```typescript
// src/services/api/client.ts
import axios from 'axios';
import { authStore } from '@/store/authStore';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = authStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle token refresh or logout
      authStore.getState().logout();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export { apiClient };
```

#### Example Service

```typescript
// src/services/api/testService.ts
import { apiClient } from './client';
import { Test, TestSubmission, TestResult } from '@/types/test';

export const testService = {
  getTests: async () => {
    const response = await apiClient.get<Test[]>('/tests');
    return response.data;
  },

  getTestById: async (id: string) => {
    const response = await apiClient.get<Test>(`/tests/${id}`);
    return response.data;
  },

  submitTest: async (submission: TestSubmission) => {
    const response = await apiClient.post<TestResult>('/tests/submit', submission);
    return response.data;
  },
};
```

#### React Query Integration

```typescript
// src/hooks/useTests.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { testService } from '@/services/api/testService';

export const useTests = () => {
  return useQuery({
    queryKey: ['tests'],
    queryFn: testService.getTests,
  });
};

export const useTest = (id: string) => {
  return useQuery({
    queryKey: ['tests', id],
    queryFn: () => testService.getTestById(id),
  });
};

export const useSubmitTest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: testService.submitTest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tests'] });
    },
  });
};
```

---

### 🚀 Development Commands

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx,css,md}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:e2e": "playwright test"
  }
}
```

---

## Part 3: Feature Analysis

### 🎯 User Roles & Features

#### A. Học Sinh (14 Features)

| STT | Feature | Description | Priority |
|-----|---------|-------------|----------|
| 1 | Authentication | Login, register, social auth, email verification | 🔴 High |
| 2 | Profile Management | Avatar, personal info, settings | 🔴 High |
| 3 | Student Dashboard | Overview, stats, activities, achievements | 🔴 High |
| 4 | Test Browsing | Browse, filter, search tests by type/difficulty | 🔴 High |
| 5 | Test Taking | Timer, navigation, auto-save, submit | 🔴 High |
| 6 | View Results | Score, correct/wrong answers, statistics | 🔴 High |
| 7 | Result Analysis | Detailed review, explanations, charts | 🟡 Medium |
| 8 | Online Courses | Video lessons, materials, quizzes | 🔴 High |
| 9 | Practice Exercises | Practice sets, adaptive difficulty | 🟡 Medium |
| 10 | Math Games | Gamification, points, badges, leaderboard | 🟡 Medium |
| 11 | Progress Tracking | Progress dashboard, goals, calendar | 🟡 Medium |
| 12 | Learning Tools | Calculator, drawing board, scratch pad | 🟢 Low |
| 13 | Online Support | Chat, FAQ, tutorials | 🟡 Medium |
| 14 | Feedback | Rate courses/tests, submit feedback | 🟢 Low |

#### B. Phụ Huynh (7 Features)

| STT | Feature | Description | Priority |
|-----|---------|-------------|----------|
| 1 | Parent Dashboard | Overview of children, multi-child support | 🔴 High |
| 2 | Progress Reports | Weekly/monthly reports, trends | 🔴 High |
| 3 | View Test Results | Detailed scores, comparisons | 🔴 High |
| 4 | Schedule Management | Calendar, reminders, notifications | 🟡 Medium |
| 5 | Teacher Communication | Messaging, notes, meetings | 🟡 Medium |
| 6 | Billing | Subscription, course purchase, invoices | 🔴 High |
| 7 | Learning Settings | Goals, restrictions, time limits | 🟢 Low |

#### C. Giáo Viên (8 Features)

| STT | Feature | Description | Priority |
|-----|---------|-------------|----------|
| 1 | Teacher Dashboard | Class overview, student list, stats | 🔴 High |
| 2 | Class Management | Create, edit classes, assign students | 🔴 High |
| 3 | Assignments | Assign tests/courses, set deadlines | 🔴 High |
| 4 | Class Reports | Class performance, individual reports | 🔴 High |
| 5 | Custom Tests | Question bank, create custom tests | 🟡 Medium |
| 6 | Manual Grading | Grade subjective questions, feedback | 🟡 Medium |
| 7 | Parent Communication | Messages, announcements | 🟡 Medium |
| 8 | Teaching Resources | Upload materials, resources | 🟡 Medium |

#### D. Common Features

| STT | Feature | Description | Priority |
|-----|---------|-------------|----------|
| 1 | Blog/News | Articles, competition news, tips | 🟡 Medium |
| 2 | Multi-language | EN, VN, CN (i18n) | 🟢 Low |
| 3 | Live Competitions | Real-time competitions, rankings | 🟢 Low |
| 4 | AI Personalization | Adaptive learning paths | 🟢 Low |
| 5 | Free Resources | Resources for underprivileged students | 🟢 Low |

---

### 📐 UX Principles for Kids (Age 6-15)

1. **Visual Clarity**: Large fonts (min 16px), high contrast, clear hierarchy
2. **Engaging Design**: Colorful, friendly illustrations, smooth animations
3. **Simple Navigation**: Max 2-level depth, clear breadcrumbs, back buttons
4. **Error Prevention**: Auto-save, confirmations, helpful error messages
5. **Accessibility**: Keyboard navigation, screen reader support, ARIA labels
6. **Mobile-First**: Touch-friendly (min 44x44px), swipe gestures, responsive

---

## Part 4: Implementation Roadmap

### 📅 9-Phase Development Plan

#### Phase 0: Foundation & Setup (2 weeks)

**Objectives:**
- Setup development environment
- Create design system
- Integrate with backend

**Tasks:**
1. Project setup (3 days)
   - Initialize React + TypeScript + Vite
   - Install all dependencies
   - Configure Tailwind CSS, ESLint, Prettier
   - Setup environment variables

2. Design system (4 days)
   - Define color palette, typography in Tailwind config
   - Create base components (Button, Input, Card, Modal, Toast, Spinner)
   - Create layout components (Container, Grid, Flex)
   - Setup Storybook (optional)

3. Backend integration (4 days)
   - Setup API client (Axios)
   - Configure interceptors (auth, error handling)
   - Setup React Query provider
   - Test connectivity with .NET backend

4. Documentation (3 days)
   - Component documentation
   - API integration guide
   - Development workflow guide

---

#### Phase 1: Authentication & Core Layout (2 weeks)

**Objectives:**
- Complete user authentication
- Build public layout
- Create landing page

**Tasks:**
1. Authentication (5 days)
   - Login page (email/password, social login)
   - Register page with validation
   - Forgot/reset password pages
   - Email verification page
   - Session management, token refresh

2. Public layout (3 days)
   - Responsive header/navigation
   - Footer component
   - Mobile hamburger menu
   - CTA components

3. Landing page (4 days)
   - Hero section with animations
   - Features showcase (6 features)
   - Competition highlights (IKMC, AMC, IMC, TIMO)
   - Testimonials section
   - FAQ accordion
   - Final CTA section
   - SEO optimization

4. Testing (2 days)
   - Unit tests for auth components
   - Integration tests
   - Responsive testing

---

#### Phase 2: Student Portal - Core (3 weeks)

**Objectives:**
- Student dashboard
- Test management
- View results

**Tasks:**
1. Student dashboard (4 days)
   - Dashboard layout (sidebar, topbar)
   - Welcome banner
   - Stats cards (tests taken, courses, points)
   - Recent activity feed
   - Quick actions menu

2. Test management (7 days)
   - Test browsing page (grid/list view)
   - Filter by competition type, difficulty
   - Search functionality
   - Test detail page
   - Test-taking interface:
     - Question display with math rendering (KaTeX)
     - Answer inputs (MCQ, text, number)
     - Navigation sidebar
     - Timer countdown
     - Auto-save functionality
   - Submit confirmation dialog

3. Results & analytics (5 days)
   - Results overview (score, time, accuracy)
   - Score visualization (charts with Recharts)
   - Question-by-question review
   - Answer explanations
   - Performance comparison
   - Download/print results

4. Profile management (3 days)
   - View/edit profile
   - Avatar upload
   - Change password
   - Notification preferences

---

#### Phase 3: Learning Features (3 weeks)

**Objectives:**
- Online courses
- Practice exercises
- Progress tracking

**Tasks:**
1. Course catalog (4 days)
   - Course listing page (grid/list)
   - Category filters
   - Search courses
   - Course detail page
   - Enroll button

2. Course learning interface (7 days)
   - Lesson viewer:
     - Video player (custom controls)
     - PDF viewer
     - Interactive content
   - Lesson navigation (next/prev)
   - Note-taking editor
   - Bookmark lessons
   - Quiz integration
   - Mark as complete
   - Certificate generation

3. Practice exercises (4 days)
   - Exercise library page
   - Practice mode interface
   - Instant feedback
   - Hints system
   - Solution explanations

4. Progress tracking (6 days)
   - Progress dashboard
   - Calendar view
   - Goal setting
   - Achievement badges
   - Statistics charts
   - Study streak counter

---

#### Phase 4: Gamification (2 weeks)

**Objectives:**
- Math games
- Achievements
- Social features

**Tasks:**
1. Games (5 days)
   - Game selection hub
   - Speed math challenge
   - Pattern recognition game
   - Logic puzzle game
   - Point/reward system
   - Level progression

2. Achievements (3 days)
   - Badge showcase page
   - Achievement unlock animations
   - Progress towards achievements
   - Daily login streak

3. Social features (4 days)
   - Global leaderboard
   - Class leaderboard
   - Competition rankings
   - Notification center
   - Push notifications

---

#### Phase 5: Parent Portal (2 weeks)

**Objectives:**
- Parent dashboard
- Reports
- Billing

**Tasks:**
1. Parent dashboard (4 days)
   - Parent-specific layout
   - Dashboard overview
   - Multi-child selector
   - Children overview cards
   - Alerts & notifications

2. Child management (3 days)
   - Add child form
   - Edit child info
   - View child profile
   - Switch between children

3. Reports (4 days)
   - Progress reports page
   - Test results history
   - Time spent analysis
   - Strength/weakness charts
   - Export to PDF

4. Billing (3 days)
   - Subscription management
   - Payment history
   - Invoice downloads
   - Payment method management

---

#### Phase 6: Teacher Portal (3 weeks)

**Objectives:**
- Class management
- Assignments
- Reports

**Tasks:**
1. Teacher dashboard (3 days)
   - Class overview
   - Student count & stats
   - Recent submissions
   - Upcoming deadlines

2. Class management (4 days)
   - Create class form
   - Edit class details
   - Class list view
   - Add/remove students
   - Class roster

3. Student management (3 days)
   - Student list (all classes)
   - Student detail view
   - Performance overview

4. Assignments (5 days)
   - Create assignment form
   - Assign test to class
   - Set deadlines
   - Assignment list
   - Submission tracking

5. Grading (3 days)
   - View submissions
   - Manual grading interface
   - Provide feedback
   - Grade history

6. Teacher reports (3 days)
   - Class performance dashboard
   - Individual student reports
   - Comparative analysis
   - Export functionality

---

#### Phase 7: Content & Support (2 weeks)

**Objectives:**
- Blog system
- Help center
- Learning tools

**Tasks:**
1. Blog (4 days)
   - Blog listing page
   - Blog post detail
   - Categories & tags
   - Search posts
   - Related posts

2. Help center (3 days)
   - FAQ page (categorized)
   - Tutorial videos
   - User guides

3. Support (3 days)
   - Contact form
   - Live chat integration
   - Ticket system (optional)

4. Learning tools (4 days)
   - Online calculator component
   - Drawing board component
   - Scratch pad
   - Math symbol keyboard

---

#### Phase 8: Advanced Features (3 weeks)

**Objectives:**
- Internationalization
- AI features
- Optimization

**Tasks:**
1. i18n (5 days)
   - Install react-i18next
   - Setup translation files
   - Extract all strings
   - Language switcher
   - Persist preference

2. AI & personalization (5 days)
   - Adaptive learning algorithm
   - Course recommendations
   - Smart hints system
   - Auto-difficulty adjustment

3. Analytics (2 days)
   - Google Analytics 4 setup
   - Custom event tracking
   - User behavior tracking

4. Optimization (9 days)
   - Code splitting (React.lazy)
   - Route-based lazy loading
   - Image optimization
   - Bundle size analysis
   - Service worker setup
   - Caching strategies
   - SEO optimization
   - Error tracking (Sentry)
   - Performance monitoring

---

#### Phase 9: Testing & Launch (2 weeks)

**Tasks:**
1. E2E testing (5 days)
   - Write Playwright tests
   - Test critical user flows
   - Cross-browser testing

2. Accessibility audit (2 days)
   - WCAG compliance check
   - Screen reader testing
   - Keyboard navigation

3. Performance testing (2 days)
   - Lighthouse audits
   - Load testing
   - Optimization fixes

4. Launch preparation (5 days)
   - Production build setup
   - Deployment configuration
   - Monitoring setup
   - User documentation
   - Go-live checklist

---

### 🎯 MVP Priority (Phase 0-2)

**Core MVP = 7 weeks**

Sufficient for beta launch with:
- ✅ Authentication
- ✅ Landing page
- ✅ Student dashboard
- ✅ Take tests & view results
- ✅ Basic course viewing

**Must-Have Components (Phase 0-1):**
- Layout: Header, Footer, Sidebar, Container
- Forms: Input, Select, Checkbox, Button
- Display: Card, Modal, Toast, Spinner, Badge

**Can Defer (Phase 7-8):**
- Blog system
- Advanced AI features
- Multi-language (can add later)
- Social features

---

## Part 5: Development Workflow

### 🔄 Git Workflow

```powershell
# Feature branch workflow
git checkout -b feature/student-dashboard
git add .
git commit -m "feat: add student dashboard layout"
git push origin feature/student-dashboard

# Create PR in GitHub
# After review and merge, delete branch
```

### 📊 Success Metrics

| Metric | Target |
|--------|--------|
| Page Load Time | < 2s |
| Time to Interactive | < 3s |
| Lighthouse Score | > 90 |
| Bundle Size | < 500KB (gzipped) |
| Error Rate | < 0.1% |
| User Retention (30d) | > 40% |
| Course Completion | > 60% |

---

### 🧪 Testing Strategy

**Unit Tests** (Vitest + React Testing Library)
- Test components in isolation
- Test custom hooks
- Test utility functions

**Integration Tests**
- Test component interactions
- Test API integration
- Test form workflows

**E2E Tests** (Playwright)
- Test critical user flows
- Test authentication flow
- Test test-taking flow
- Test course enrollment

---

### 📚 Resources

**Documentation:**
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Vite: https://vitejs.dev/
- Tailwind CSS: https://tailwindcss.com/
- Shadcn/ui: https://ui.shadcn.com/
- React Query: https://tanstack.com/query/latest
- React Router: https://reactrouter.com/

**Learning:**
- Frontend Masters courses
- React patterns: https://www.patterns.dev/
- TypeScript patterns

**Tools:**
- Figma for design
- Storybook for components
- Chrome DevTools for debugging
- React DevTools

---

### ✅ Quick Start Checklist

**Week 1:**
- [ ] Install Node.js, VS Code
- [ ] Create Vite project
- [ ] Install Tailwind CSS
- [ ] Install Shadcn/ui
- [ ] Setup folder structure
- [ ] Configure ESLint + Prettier

**Week 2:**
- [ ] Define Tailwind config
- [ ] Create base components
- [ ] Setup API client
- [ ] Test backend connection
- [ ] Setup React Query

**Week 3-4:**
- [ ] Build login/register
- [ ] Implement auth logic
- [ ] Create Header/Footer
- [ ] Build landing page
- [ ] Setup responsive design

---

### 💡 Development Tips

1. **Incremental Development**: Build in phases, test frequently, deploy early
2. **Component-First**: Build design system before pages
3. **Mobile-First**: Design responsive from the start
4. **User Feedback**: Launch beta early for feedback
5. **Documentation**: Document code and decisions
6. **Testing**: Write tests alongside features
7. **Performance**: Monitor bundle size, lazy load routes
8. **Accessibility**: Test with keyboard, screen readers

---

## 🚀 Ready to Build!

Follow this guide step-by-step to build a complete, production-ready frontend for the SWF Math Platform.

**Next Steps:**
1. Review this guide with team
2. Create Figma mockups
3. Setup development environment
4. Start Phase 0: Foundation

For questions or clarifications, refer to specific sections above or contact the development team.

---

**Last Updated**: October 31, 2025
