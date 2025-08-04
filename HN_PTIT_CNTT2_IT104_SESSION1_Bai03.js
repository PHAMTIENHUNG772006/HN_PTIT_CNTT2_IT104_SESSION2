let typeofConsole = (type) =>{
   if (type === "log") {
    console.log(`Đây là type : log`);
}else if(type === "warm"){
    console.log(`Đây là type : warm`);
}else if(type === "error" ){
    console.log(`Đây là type : error`);
}else if(type === " "){
    console.log(`Đây là type : log`);
}
}

typeofConsole(" ");