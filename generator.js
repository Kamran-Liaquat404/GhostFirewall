function generatePassword(keyword, year, activity) {
    const symbols = "!@#$%^&*()_-+=<>?";
    const randomChar = () => String.fromCharCode(33 + Math.floor(Math.random() * 94));

    let base = keyword || "User";
    if (year) base += year;
    if (activity) base += activity;

    let password1 = "";
    let password2 = "";

    for (let i = 0; i < 5; i++) {
        password1 += base[i % base.length] + symbols[Math.floor(Math.random() * symbols.length)] + randomChar();
        password2 += randomChar();
    }

    password1 += Math.floor(Math.random() * 10000);
    password2 += base + Math.floor(Math.random() * 1000);

    return [password1, password2];
      }
