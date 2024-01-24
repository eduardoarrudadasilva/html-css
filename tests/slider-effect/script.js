document.getElementById("radio1").checked = true

let count = 1
setInterval(()=>{
    count++
    if (count > 4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
},4000)