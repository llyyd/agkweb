const  express = require('express')
const router = express.Router()

const db = require('../db/index')

router.post('/insert', async (req, res) => {
    const infoList = req.body
    console.log(infoList)
    try {
        if (infoList.name === '' || infoList.name === undefined) {
            throw '请输入昵称'
        }
        const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (!emailReg.test(infoList.email)) {
            throw '请正确输入邮箱'
        }
        // sql
        const insertSql = "INSERT INTO `u_info` (`name`, `email`, `info`) VALUE (?, ?, ?)"
        await db.async.query(insertSql, [infoList.name, infoList.email, infoList.info])
        res.send({
            code: 200,
            msg: '录入成功'
        })
    } catch (e) {
        console.log("e", e)
        res.send({
            code: 500,
            msg: e
        })
    }
})

module.exports = router