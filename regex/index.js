const acc = document.body.getElementsByTagName('input')[0];
const nam = document.body.getElementsByTagName('input')[1];
const lan = document.body.getElementsByTagName('input')[2];
const gen = document.body.getElementsByTagName('input')[3];
const rat = document.body.getElementsByTagName('input')[4];
const dir = document.body.getElementsByTagName('input')[5];
const but= document.getElementById('but')

let db=[];


const save=()=>{

    
    let na= /^[A-Z a-z]+\d{0,1}$/gim                     
    let ra= /1|2|3|4|5/                   
    let i= /^ind\d{2,}\w{2}\d{2}$/       //ind324sd12


    console.log(rat.value);
    if(i.test(acc.value)){
        if(na.test(nam.value)){
            if(ra.test(rat.value)){
                const userData={
                    name:nam.value,
                    lan:lan.value,
                    gen:gen.value,
                    rat:rat.value,
                    dir:dir.value
                };
                db.push(userData);
                console.log("Saved to db");
            }
            else{
                console.log("Rate between 1-5");
            }
        }
        else{
            console.log("Enter name properly");
        }
    }
    else {
        console.log("Enter ID properly");
    }
        
   
    
    // console.log(db);
    clear();
}

const clear=()=>{
    nam.value=""
    lan.value=""
    gen.value=""
    rat.value=""
    dir.value=""
}