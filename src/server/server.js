const express = require('express');
const db = require('./config/db');
const bodyParser = require('body-parser')
const cors = require('cors'); // cors 미들웨어 import


const app = express();
app.set('port', process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(cors()); // 모든 도메인에서의 요청을 허용하도록 설정




app.get('/', (req, res) => {
    res.send('연결 성공')
    console.log('되나?')
})
app.get('/todolist', (req, res) => {
    console.log('연결성공')
    db.query("select * from `YEO`.`todolist`", (err, data) =>{
        if(!err){
            console.log(data)
            res.json(data); // JSON 형식으로 응답
        }else{
            console.log(err)
            res.status(500).json({ error: '데이터 가져오기 실패' }); // 에러 응답

        }
    })
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중..');
});