let nameUser = prompt("Nhập Tên : ");

let age = prompt("Nhập tuổi : ");

let city = prompt("Nhập thành phố : ");

let country = prompt("Nhập quốc gia : ");

let email = prompt("Nhập email : ");

let phone = prompt("Nhập số điện thoại : ");

let title = prompt("Nhập chức vụ : ");

let company = prompt("Nhập công ty : ");

let dishplayUserInfo = (nameUser,age,city,country,email,phone,title,company) =>{
const user = {
  name: nameUser,
  age,
  location: {
    city: "Hanoi",
    country: "Vietnam"
  },
  contact: {
    email,
    phone
  },
  job: {
    title,
    company
  }
};


    let safeEmail  = user.contact?.email || "unknown";
    let safePhone = user.contact?.phone || "unknown";

    let safeTitle  = user.job?.title || "unknown";
    let safeCompany  = user.job?.company || "unknown";


    const description = `${nameUser} is ${age} years old, lives in ${city}, ${country}, works as ${safeTitle} at ${safeCompany}, and can be contacted via ${safeEmail} or ${safePhone}.`;

    console.log(description);
}
dishplayUserInfo(age,nameUser,city,country,email,phone,title,company);