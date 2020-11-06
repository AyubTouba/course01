import express, { Request, Response } from "express";
const app = express()


app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Api Books");
})

app.get("/books", (req: Request, res: Response) => {
    let books = [        
        {name : "men's search for meaning ", nbrpages : "400"},
        {name : "Sophie's world ", nbrpages : "500"},
        {name : "The Stranger", nbrpages : "80"},
     ]
    res.status(200).send(books);
  })

app.listen(8000,()=>{
  console.log('Server Started at Port, 8000')
})