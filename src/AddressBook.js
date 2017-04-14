function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;   // for the api call, once a successful call is made, this should be true
}

AddressBook.prototype.getInitialContacts = function(cb) {   // fake api call
    var self = this;

    setTimeout(function() {
        self.initialComplete = true;
        if (cb) { return cb(); }
    }, 3);
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
    this.contacts.splice(index, 1);
}