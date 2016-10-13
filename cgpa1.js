function gpacalc() {
    
    var gr = new Array(5);
    var cr = new Array(5);
    var ingr = new Array(3);
    var grcount = 5;
    gr[0] = "A";
    cr[0] = 4;
    gr[1] = "B";
    cr[1] = 3;
    gr[2] = "C";
    cr[2] = 2;
    gr[3] = "D";
    cr[3] = 1;
    gr[4] = "F";
    cr[4] = 0;

    ingr[0] = document.GPACalcForm.GR1.value;
    ingr[1] = document.GPACalcForm.GR2.value;
    ingr[2] = document.GPACalcForm.GR3.value;
    ingr[3] = document.GPACalcForm.GR4.value;

    var allgr = 0;
    var gpa = 0;


    for (var x = 0; x < 4; x++) {
        if (ingr[x] == "") break; 
        var validgrcheck = 0;
        for (var xx = 0; xx < grcount; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseInt(ingr[x], 10));

                validgrcheck = 1;
                break;
            }
        }
        if (validgrcheck == 0) {
            alert("Error- Please use standard college grades in the form of A B C D F.");
            return 0;
        }
    }

    gpa = allgr;

    if (eval(gpa) >= 3.50) {

        alert("CONGRATULATION! your GPA =  " + eval(gpa));

        return 0;
    } else {
        alert("Thanks for try your GPA =  " + eval(gpa));
        return 0;
    }
}