import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Routes
import authRoutes      from './routes/auth.js'
import postRoutes      from './routes/posts.js'
import helpRoutes      from './routes/help.js'
import connectionRoutes from './routes/connections.js'
import chatRoutes      from './routes/chat.js'
import eventRoutes     from './routes/events.js'
import shelfRoutes     from './routes/shelf.js'
import communityRoutes from './routes/communities.js'
import lostfoundRoutes from './routes/lostfound.js'
import userRoutes      from './routes/users.js'

// Socket handler
import { registerSocketHandlers } from './socket/socketHandler.js'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }
})

// — Middleware —
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Attach io to req for use in routes
app.use((req, _res, next) => { req.io = io; next() })

// — API Routes —
app.use('/api/auth',        authRoutes)
app.use('/api/posts',       postRoutes)
app.use('/api/help',        helpRoutes)
app.use('/api/connections', connectionRoutes)
app.use('/api/chat',        chatRoutes)
app.use('/api/events',      eventRoutes)
app.use('/api/shelf',       shelfRoutes)
app.use('/api/communities', communityRoutes)
app.use('/api/lostfound',   lostfoundRoutes)
app.use('/api/users',       userRoutes)

// Health check
app.get('/api/health', (_req, res) => res.json({ status: 'ok', time: new Date().toISOString() }))

// — Socket.IO —
registerSocketHandlers(io)

// — DB + Server start —
const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/unihive'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅  MongoDB connected')
    httpServer.listen(PORT, () => console.log(`🚀  UniHive API running on http://localhost:${PORT}`))
  })
  .catch(err => {
    console.error('❌  MongoDB connection error:', err.message)
    process.exit(1)
  })

export { io }
