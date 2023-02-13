function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (typeof(score)!=="number" || score < 0 || score >100) return "INVALID SCORE";
    if (score >= 98 ) return "A+";
    if (score >= 93 ) return "A";
    if (score >= 90 ) return "A-";
    if (score >= 88 ) return "B+";
    if (score >= 83 ) return "B";
    if (score >= 80 ) return "B-";
    if (score >= 78 ) return "C+";
    if (score >= 73 ) return "C";
    if (score >= 70 ) return "C-";
    if (score >= 68 ) return "D+";
    if (score >= 63 ) return "D";
    if (score >= 60 ) return "D-";
    return "F";
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'