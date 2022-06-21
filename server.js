let  express = require('express')
let  nunjucks = require('nunjucks')

let  app = express()
let  router = express.Router()
app.use(express.static(public))

nunjucks.configure('views', {
  autoescape:  true,
  express:  app
})

router.get('/:id', (req, res) =>{
  console.log(req.params.id)
  res.send('user id ${req.params.id}')
})