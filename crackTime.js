function estimateCrackTime(password) {
    const charset = 94;
    const possibilities = Math.pow(charset, password.length);
    const guessesPerSecond = 1e9;
    const seconds = possibilities / guessesPerSecond;
    const years = seconds / (60*60*24*365);

    if (years < 0.01) return "<1 week";
    if (years < 1) return "<1 year";
    return years.toFixed(0) + " years";
}
