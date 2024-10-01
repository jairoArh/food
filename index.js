const express = require('express')

const app = express()

//Connect DB
require('./drivers/connect-db')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

app.set('PORT',process.env.PORT || 3000 )

app.use(express.json())
app.use('/docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))

//middleware
app.use('/restaurants',require('./routes/restaurant'))
app.use('/dishes',require('./routes/dishes'))

app.listen(app.get('PORT'),()=>console.log(`Server Ready at port ${app.get('PORT')}`))