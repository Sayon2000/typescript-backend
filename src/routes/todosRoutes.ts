import { Router } from "express";

import { todo } from "../model/todos";

const router = Router()

const todos : todo[]= []

type RequestParams = {id : string}
type RequestBody = {text : string}

router.get('/' , (req,res)=>{
    res.json({success : true , todos})
})

router.post('/todo' , (req,res)=>{
    const id = todos.length === 0 ? 0 : +todos[todos.length -1].id+1
const body = req.body as RequestBody;
    const newTodo : todo = {

        id : id,
        text : body.text
    }

    todos.push(newTodo)
    return res.json({success : true ,  todo : newTodo})
})

router.post('/deleteTodo/:id' , (req,res)=>{
    const params = req.params as RequestParams
    const id = +params.id
    const index = todos.findIndex(item => item.id === id)
    if(index < 0){
        return res.status(404).json({success : false , msg :"item does not exist "})
    }
    todos.splice(id ,1)
    return res.json({success : true , msg :"item deleted"})
})




export default router;