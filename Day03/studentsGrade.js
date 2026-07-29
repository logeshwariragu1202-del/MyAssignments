let mark=54

function stdGrade(){

    switch(true){
        case (mark<=100 && mark>=90):
            console.log("The student received Grade A")
            break 
        case (mark<90 && mark >=60):
            console.log("The student received Grade B")
            break
        case (mark<60 && mark >=35):
             console.log("The student received Grade C")
             break
        default :
            console.log("Student is failed")
              break

    }

}
stdGrade()


