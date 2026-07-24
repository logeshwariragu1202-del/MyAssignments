let browsName
browsName="fireFox"
function browserLaunch(){
if (browsName==="fireFox"){
    console.log("The browser is: "+browsName)
}else
    console.log("It is not a fireFox browser")

}
browserLaunch()

//Switch

let testType="regression"

function runTest(){
    switch (testType) {
        case "smoke":
            console.log("Running Smoke tests");
            break;

        case "sanity":
            console.log("Running Sanity tests");
            break;

        case "regression":
            console.log("Running Regression tests");
            break;

        default:
            console.log("Running Smoke tests");
            break;
}
}
runTest()



