const path =require('path')
const express =require('express')
const session =require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash =require('connect-flash')
const config =require('config-lite')(_dirname)
const routes =require('./routes')
const pkg = require('./package')

const app =express()

//设置模板目录

app.set('views',path.join(_dirname,'views'))

//设置模板引擎为ejs
app.set('view engine','ejs')

//设置静态文件目录

app.use(express.static(path.join(_dirname,'public')))


//session 中间件
app.use(session({
    name:config.session.key,  //设置cookie中保存session id的字段名称
    secret: config.session.secret //通过设置secret来计算hash值并放在cookie中，
}))


