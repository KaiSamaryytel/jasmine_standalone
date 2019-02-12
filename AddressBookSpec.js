// Loodud uus testimise fail

//lisan uue kirje, mille all on defineeritud muutujad, mida saab
// ülejäänud kood kood kasutada
describe('Address Book', function() {
    var addressBook,
        thisContact;

    //funktsioon, mille abil ei pea end kogu aeg kordama vaid
    // defineeritakse siin ümber
    beforeEach(function){
        addressBook = new AddressBook();
        thisContact = new Contact();

});

    //kirjele lisan, mis funktsiooni ta täidab
    it('should be able to add contact', function() {
        //lisan uue AadressBook objekti oma spekki
        addressBook.addContact(thisContact);

        //kontrollin, kas kontakt antakse edasi
        expect(addressBook.getContact(0)).toBe(thisContact);

    });

    //kirjele lisan, mis funktsiooni ta täidab
    it('should be able to deleta a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });

});

//lisame uue testiosa, millele lisame, mis on tema funktsioon
describe('Async Address Book', function() {
    it('should grab initial contacts', function() {
        //muutujat esitatakse veel korra
        var addressBook = new AddressBook();

        //Asünkroon meetod, millele me eeldame, et addressBook =true
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    });
});

