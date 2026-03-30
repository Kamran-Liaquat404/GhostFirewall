function analyzePassword(password) {
    let score = 0;
    if (!password) return "Enter a password";

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 16) score += 1;

    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 3) return "Weak password 🔴";
    if (score <= 5) return "Moderate password 🟠";
    return "Strong password 🟢";
}
