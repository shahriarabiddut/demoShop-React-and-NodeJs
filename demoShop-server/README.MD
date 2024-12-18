# Generate Secret
type node then enter then : `require('crypto').randomBytes(64).toString('hex')`
## Install 
`npm i jsonwebtoken
npm i cookie-parser`
# Permission 
`app.use(cors({
  origin:['http://localhost:5173/'],
  credentials: true
}));`