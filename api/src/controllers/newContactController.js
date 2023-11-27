const { Contact } = require('../db')

const newContactController =  async (names, lastName, company, email, phone, message) =>{
    const contactNew = await Contact.create({ names, lastName, company, email, phone, message })
}

module.exports = newContactController