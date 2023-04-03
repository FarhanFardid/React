// function addToDB(id, name){
   
//     const valid = localStorage.getItem(id);
//     if(valid){
//         alert("Already in the team");
//     }
//     else{
        
//         localStorage.setItem(id,name);
//     }
// }

// function  rmvFromDB(id){
//     localStorage.removeItem(id);

// }
function addToDB(id, name){
     let team ={};

    const storedteam = localStorage.getItem("Team");
    if(storedteam){
        team = JSON.parse(storedteam);
    }

    else{
        team = {};
    }

   const valid = team[id];

     if(valid){
            alert("Already in the Team");
     }
     else{
        team[id] = name;
     }

     localStorage.setItem("Team",JSON.stringify(team))

  
}

function  rmvFromDB(id){
   
    const storedTeam = JSON.parse(localStorage.getItem("Team"));
    if(storedTeam){
        if (id in storedTeam){
            delete storedTeam[id];
            localStorage.setItem("Team",JSON.stringify(storedTeam));
        }
        else{
            alert("Not in the Team");
        }

    }


}
function deleteTeam(){
    localStorage.removeItem("Team");
}
export {addToDB,rmvFromDB,deleteTeam};