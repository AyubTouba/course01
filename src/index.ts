import express, { Request, Response } from "express";
const app = express()

var  books = [        
    {id:1 ,name : "men's search for meaning ", nbrpages : "400"},
    {id:2 ,name : "Sophie's world ", nbrpages : "500"},
    {id:3 ,name : "The Stranger", nbrpages : "80"},
 ]
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Api Books");
})

app.get("/books", (req: Request, res: Response) => {
 
    res.status(200).send(books);
  })
  
app.get("/books/:id", (req: Request, res: Response) => {
   let book =  books.filter(bk => bk.id == +req.params.id) ? books.filter(bk => bk.id == +req.params.id) : null;
    res.status(200).send(book);
  })
app.listen(8000,()=>{
  console.log('Server Started at Port, 8000')
})