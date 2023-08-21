// 路由走向

const express = require('express')
const router = express.Router()
const secret = require('./secret')
// jsonwebtoken
const jwt = require('jsonwebtoken')
// const token = jwt.sign('对象数据', '密钥', { expiresIn: 200 }) //200毫秒


// 配置路由
// 测试
router.get("/", (req, res) => {
    res.send("Hello World!")
})

// 登录接口
router.post("/login", (req, res) => {
    console.log("req = ",req);
    console.log("req.body = ",req.body);
    let user = req.body.user
    let pwd = req.body.pwd
    // 连接数据库查询语句,看数据是否存在
    // 生成token字段
    let token = jwt.sign({
        id: 123,
        user,
    }, secret.key, { expiresIn: 20*1 })
    res.send({
        success: true,
        token: token,
        user
    })
})

// 测试token接口
// 获取我的个人信息数据--验证token是否有效
router.post('/tokenList', (req, res) => {
    let token = req.headers.authorization;
    console.log("=========================");
    console.log(req.headers);
    console.log("=========================");

    console.log(token.toString());
    console.log("用户带的token = ",token);
    if (token) {
        jwt.verify(token, secret.key, (err, decoded) => {
            if (err) {
                switch (err.name) {
                    case 'TokenExpiredError':
                        res.send({
                            status: 403,
                            success: false,
                            msg: 'token过期'
                        })
                        break;
                    case 'JsonWebTokenError':
                        re.send({
                            status: 403,
                            success: false,
                            msg: 'token无效'
                        })
                        break;
                    default:
                        res.send({
                            status: 403,
                            success: false,
                            msg: 'token无效'
                        })
                        break;
                }
            } else {
                res.send({
                    status: 200,
                    success: true,
                    msg: 'token有效',
                    result: [1,2,3,4]
                })
            }
        })
    } else {
        res.send({
            success: false,
            msg: 'token无效'
        })
    }

})

module.exports = router

