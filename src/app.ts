import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

export default app
