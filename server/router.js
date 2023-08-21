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
    }, secret.key)
    res.send({
        success: true,
        token: token,
        user
    })
})


module.exports = router

