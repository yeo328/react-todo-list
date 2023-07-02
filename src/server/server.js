const express = require('express');
const db = require('./config/db');

const app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    console.log('되나?')
})
app.get('/hello', (req, res) => {
    console.log('/hello')
    db.query("select * from `YEO`.`postTable`", (err, data) =>{
        if(!err){
            console.log(data)
        }else{
            console.log(err)
        }
    })
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중..');
});