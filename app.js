const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
const prot = 8080

// 注册跨域中间件
app.use(cors())

// 解析json格式数据
app.use(express.json())
// 解析表单数据中间件
app.use(express.urlencoded({ extended: false }))

// 暴露静态资源
app.use(express.static('./public'))

app.use('/test', require('./router/TestRouter'))

app.listen(prot, () => {
  console.log(`服务器启动成功: http://localhost:${prot}`)
})
