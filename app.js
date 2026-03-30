
document.getElementById("generateBtn").addEventListener("click", () => {
    const keyword = document.getElementById("keyword").value;
    const year = document.getElementById("year").value;
    const activity = document.getElementById("activity").value;

    const passwords = generatePassword(keyword, year, activity);

    document.getElementById("password1").innerText = passwords[0];
    document.getElementById("password2").innerText = passwords[1];
});

// Password strength analyzer
document.getElementById("analyzeBtn").addEventListener("click", () => {
    const pwd = document.getElementById("analyzeInput").value;
    const resultDiv = document.getElementById("analysisResult");
    resultDiv.innerHTML = analyzeStrength(pwd);
});

// Password advice & sample checks
function analyzeStrength(pwd) {
    if (!pwd) return "Please enter a password to analyze.";

    let score = 0;
    let advices = [];

    // Length
    if(pwd.length >= 8) score++; else advices.push("Password should be at least 8 characters.");

    // Uppercase
    if(/[A-Z]/.test(pwd)) score++; else advices.push("Add at least 1 uppercase letter.");

    // Lowercase
    if(/[a-z]/.test(pwd)) score++; else advices.push("Add at least 1 lowercase letter.");

    // Number
    if(/[0-9]/.test(pwd)) score++; else advices.push("Add at least 1 number.");

    // Symbol
    if(/[@#$!%&]/.test(pwd)) score++; else advices.push("Include at least 1 special symbol (@ # $ ! % &).");

    let strength = "";
    switch(score){
        case 5: strength = "Excellent ✅"; break;
        case 4: strength = "Strong 👍"; break;
        case 3: strength = "Medium ⚠️"; break;
        default: strength = "Weak ❌"; break;
    }

    let adviceHTML = advices.length ? "<ul><li>" + advices.join("</li><li>") + "</li></ul>" : "";

    return `<strong>Strength:</strong> ${strength} ${adviceHTML}`;
       }
