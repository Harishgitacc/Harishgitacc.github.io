var namesArray = ['John','Harry','San']



function greet(har){
    for (i=0;i<har.length;i++){
        if(har[i][0]=='J' || har[i][0]=='j'){
            console.log("Goodbye " + har[i])
        }
        else{
            console.log("Hello " +har[i])
        }
    }
}