const server = require('./src/app.js');
const { conn } = require('./src/db.js');  //importando la instancia de sequelize de db.js

const PORT = 3000;

conn.sync({ alter: true }).then(() => {  //sincroniza o crea la talba definida en el models, si ya existe la suelta, recordar que mientras este true cada vez que se sincronice se reinicia la base datos, en ese sentido nunca nos queda guardado en nada en la base de datos
    server.listen(PORT, () => {
      console.log(`% listening at PORT # ${PORT}`); // eslint-disable-line no-console
      console.log('estoy en el servidor')
    });
});