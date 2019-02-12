// Loodud uus testimise fail

//lisan uue kirje
describe('Address Book', function() {
    //kirjele lisan, mis funktsiooni ta täidab
    it('should be able to add contact', function() {
        //lisan uue AadressBook objekti oma spekki
        var addressBook = new AddressBook(),
            //see on uus objekt, mis antakse edasi
            thisContact = new Contact();

        //kontakti lisamiseks on tarvis uut objekt
        addressBook.addContact(thisContact);

        //kontrollin, kas kontakt antakse edasi
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    //kirjele lisan, mis funktsiooni ta täidab
    it('should be able to deleta a contact', function() {
        //lisan uue AadressBook objekti oma spekki
        var addressBook = new AddressBook(),
            //see on uus objekt, mis antakse edasi
            thisContact = new Contact();

        //kontakti lisamiseks on tarvis uut objekt
        addressBook.addContact(thisContact);

        //seejärel saab selle kustutada
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).toBeDefined();
    });

});