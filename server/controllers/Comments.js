import mongoose from 'mongoose'
import Questions from '../models/Questions.js'

export const postComment = async(req, res) => {
    const { id: _id } = req.params;
    const {  commentBody, userCommented } = req.body;
    const userId = req.userId;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }
    try {
        const updatedQuestion = await Questions.findByIdAndUpdate( _id, { $addToSet: {'comment': [{commentBody, userCommented, userId }]}})
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json('error in updating')
    }
}

export const deleteComment = async ( req, res ) => {
    const { id:_id } = req.params;
    const { commentId } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable...');
    }
    if(!mongoose.Types.ObjectId.isValid(commentId)){
        return res.status(404).send('Comment unavailable...');
    }
    try{
        await Questions.updateOne(
            { _id }, 
            { $pull: { 'comment': { _id: commentId } } }
        )
        res.status(200).json({ message: "Successfully deleted..."})
    }catch(error){
        res.status(405).json(error)
    }
}


export const postAnswerComment = async(req, res) => {
    const { id: _id } = req.params;
    const { ansId, anscommentBody, ansuserCommented } = req.body;
    const userId = req.userId;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('answer unavailable...');
    }
    try {
        const updatedAnswercom = await Questions.findByIdAndUpdate( _id, { $addToSet: {'anscomment': [{ ansId, anscommentBody, ansuserCommented, userId}]}})
        res.status(200).json(updatedAnswercom)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteAnswerComment = async ( req, res ) => {
    const { id:_id } = req.params;
    const { anscommentId } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Answer unavailable...');
    }
    if(!mongoose.Types.ObjectId.isValid(anscommentId)){
        return res.status(404).send('Comment unavailable...');
    }
    try{
        await Questions.updateOne(
            { _id }, 
            { $pull: { 'anscomment': { _id: anscommentId } } }
        )
        res.status(200).json({ message: "Successfully deleted..."})
    }catch(error){
        res.status(405).json(error)
    }
}
    




    
    
    
    



