

var sub = document.getElementById("s1");


sub.addEventListener("click", fullName);

function fullName() {
    let lname = document.getElementById("t3").value;
    let mname = document.getElementById("t2").value;
    let fname = document.getElementById("t1").value;
    console.log(fname);
    console.log(mname);
    console.log(lname);

    console.log("clicked...");
    

    document.getElementById('t4').innerHTML=fname+' '+mname+' '+lname;
    console.log(document.getElementById('t4').value);

    

}
