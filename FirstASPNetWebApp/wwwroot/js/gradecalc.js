var finalGrade = 0;

//Form calculation
$("#btnCalc").click(function () {
    finalGrade =
        (parseInt($("#assignments").val()) * .55) +
        (parseInt($("#groupprojects").val()) * .05) +
        (parseInt($("#quizzes").val()) * .1) +
        (parseInt($("#exams").val()) * .2) +
        (parseInt($("#intex").val()) * .1);

    alert("Your final grade is " + String(finalGrade));
})