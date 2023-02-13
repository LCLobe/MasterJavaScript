function convertScoreToGrade(score) {
    // your code here
    if (typeof(score)!=="number" || score < 0 || score >100) return "INVALID SCORE";
    if (score >= 90 ) return "A";
    if (score >= 80 ) return "B";
    if (score >= 70 ) return "C";
    if (score >= 60 ) return "D";
    return "F";
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'