const express = require('express')
const app = express()
// 这行代码是在 Express.js 应用中使用中间件来解析 URL 编码的请求体。
// 它告诉 Express 解析传入的请求体，并将解析后的数据放入 req.body 中，
// 以便你在处理请求时可以访问这些数据。
// 这个中间件在你的 Express 应用中使用了 app.use() 来将其注册。
// 这意味着它会在每个请求被处理之前运行。
app.use(express.urlencoded({ extended: false }))
const router = require('./router')


app.use('/',router)


app.listen(3434, () => {
    console.log('server is running')
})