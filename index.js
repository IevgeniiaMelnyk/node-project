const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.getAllContacts();
      return console.log(allContacts);
    case "readById":
      const contact = await contacts.getContactById(contactId);
      return console.log(contact);
    case "deleteById":
      const deleteContact = await contacts.removeContact(contactId);
      return console.log(deleteContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "updateById":
      const updateContact = await contacts.updateById(contactId, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);
  }
};

program
  .option("-a, --action <type>")
  .option("-id, --contactId <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
