const app = require('./app');
const db = require('./db');

app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));