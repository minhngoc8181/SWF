// ==========================================
// AUTHENTICATION HANDLERS
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Register Form
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    // Real-time validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !SWF.validateEmail(this.value)) {
                SWF.showError(this, 'Email không hợp lệ');
            } else {
                SWF.clearError(this);
            }
        });
    });
    
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    passwordInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.name === 'password' && this.value.length > 0) {
                const strength = getPasswordStrength(this.value);
                updatePasswordStrength(this, strength);
            }
        });
    });
});

async function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    const remember = form.remember?.checked || false;
    
    // Validation
    if (!SWF.validateEmail(email)) {
        SWF.showError(form.email, 'Email không hợp lệ');
        return;
    }
    
    if (password.length < 6) {
        SWF.showError(form.password, 'Mật khẩu phải có ít nhất 6 ký tự');
        return;
    }
    
    // Show loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang đăng nhập...';
    submitBtn.disabled = true;
    
    try {
        // TODO: Replace with actual API call
        await mockApiCall({
            email,
            password,
            remember
        });
        
        // Store auth token (mock)
        SWF.storage.set('authToken', 'mock-jwt-token-' + Date.now());
        SWF.storage.set('user', {
            email,
            name: 'Minh Khôi',
            role: 'student'
        });
        
        SWF.showToast('Đăng nhập thành công!', 'success');
        
        // Redirect based on role
        setTimeout(() => {
            window.location.href = 'student-dashboard.html';
        }, 1000);
        
    } catch (error) {
        SWF.showToast(error.message || 'Đăng nhập thất bại', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function handleRegister(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name?.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword?.value;
    const role = form.role?.value || 'student';
    
    // Validation
    if (name && name.length < 2) {
        SWF.showError(form.name, 'Tên phải có ít nhất 2 ký tự');
        return;
    }
    
    if (!SWF.validateEmail(email)) {
        SWF.showError(form.email, 'Email không hợp lệ');
        return;
    }
    
    if (!SWF.validatePassword(password)) {
        SWF.showError(form.password, 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số');
        return;
    }
    
    if (confirmPassword && password !== confirmPassword) {
        SWF.showError(form.confirmPassword, 'Mật khẩu không khớp');
        return;
    }
    
    // Show loading
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang đăng ký...';
    submitBtn.disabled = true;
    
    try {
        // TODO: Replace with actual API call
        await mockApiCall({
            name,
            email,
            password,
            role
        });
        
        SWF.showToast('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.', 'success');
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
        
    } catch (error) {
        SWF.showToast(error.message || 'Đăng ký thất bại', 'error');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

function getPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
}

function updatePasswordStrength(input, strength) {
    const formGroup = input.closest('.form-group');
    let indicator = formGroup.querySelector('.password-strength');
    
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'password-strength';
        formGroup.appendChild(indicator);
    }
    
    const colors = {
        weak: '#E74C3C',
        medium: '#F39C12',
        strong: '#27AE60'
    };
    
    const labels = {
        weak: 'Yếu',
        medium: 'Trung bình',
        strong: 'Mạnh'
    };
    
    indicator.style.cssText = `
        margin-top: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
        font-weight: 600;
        color: white;
        background-color: ${colors[strength]};
        display: inline-block;
    `;
    
    indicator.textContent = `Độ mạnh: ${labels[strength]}`;
}

// Mock API call (replace with actual API)
function mockApiCall(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random success/failure
            if (Math.random() > 0.1) {
                resolve({ success: true, data });
            } else {
                reject(new Error('Đã có lỗi xảy ra. Vui lòng thử lại.'));
            }
        }, 1500);
    });
}

// Check if user is logged in
function checkAuth() {
    const token = SWF.storage.get('authToken');
    const user = SWF.storage.get('user');
    
    if (!token || !user) {
        return null;
    }
    
    return user;
}

// Logout function
function logout() {
    SWF.storage.remove('authToken');
    SWF.storage.remove('user');
    SWF.showToast('Đã đăng xuất', 'info');
    window.location.href = 'index.html';
}

// Protect pages that require authentication
function requireAuth() {
    const user = checkAuth();
    if (!user) {
        window.location.href = 'login.html';
    }
    return user;
}

// Export functions
window.SWF = {
    ...window.SWF,
    checkAuth,
    logout,
    requireAuth
};
