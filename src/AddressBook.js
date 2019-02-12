// Loodud uus JS fail

//Loon konstruktorfunktsiooni, et varasemalt tekkinud errorit parandada
function AddressBook(){
    //lisan uue property, mis massiv oma funktsiooni
    this.contacts = [];
}

//Funktsioon addContact defineeritakse, see lubab contacti uue parameetrina massiivi
AddressBook.prototpe.addContact = function(contact) {
    //siit läheb contact AddressBooki
    this.contacts.push(contact);
}
//Defineerin getContacti, mis lubab indexit ja tagastab masiivi indexiga
AddressBook.prototpe.getContact = function(index) {
    //siit läheb contact AddressBooki
    return this.contacts[index];
}
//splice meetod aitab eemaldada elementi masiivist
AddressBook.prototpe.deleteContact = function(index) {
    //siit läheb contact AddressBooki
    return this.splice(index, 1);
}