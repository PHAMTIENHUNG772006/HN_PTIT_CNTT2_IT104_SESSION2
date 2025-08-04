
let greetingWithWearther = (name , weather )  => {
    let weatherStruct = {
    name : name,
    sky : weather || "Khong xac dinh"
}

if (weather === "sunny") {
    console.log(`Chao ${name}, Hôm nay trời nắng`);
}else if(weather === "rainy"){
     console.log(`Chao ${name}, Hôm nay trời mưa`);
}else if(weather === "cloudy" || " "){
     console.log(`Chao ${name}, Hôm nay thời tiết khong xac dinh`);
}
}


greetingWithWearther("Hung","");
