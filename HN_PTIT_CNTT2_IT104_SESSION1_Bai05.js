let phoneBooks = [];

let addContact = (name,phoneNumber,email) =>{
    let newContact = {
        name,
        phoneNumber,
        email
    }
    phoneBooks.push(newContact);
}
addContact("hung", "0933283828","hung@gmail.com");
addContact("hue", "0936787878","hue@gmail.com");


let displayContact = (listContact) => {
    listContact.forEach(element => {
        console.log(`${element.name}  ${element.phoneNumber} ${element.email}`);
    });
}
displayContact(phoneBooks);
