import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { db } from './database/knex'

// import { userRouter } from './router/userRouter'
// import { playlistRouter } from './router/playlistRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT)}`)
})


// app.use("/games)
app.get('/gamers', async (req: Request, res: Response) => {
    try {

        const getGamers = req.query.q as string | undefined

        if (getGamers === undefined) {
            const result = await db.raw(`SELECT * FROM gamers`)
            res.status(200).send(result)
        }


    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        }}})