import * as api from '../api'

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: "POST_QUESTION", payload: data})
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        const { data } = await api.getAllQuestions()
        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const voteQuestion = (id, value) => async (dispatch) => {
    try {
        await api.voteQuestion(id, value)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData;
        const { data } = await api.postAnswer( id, noOfAnswers, answerBody, userAnswered, userId )
        dispatch({ type: 'POST_ANSWER', payload: data})
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
    try {
        await api.deleteAnswer(id, answerId, noOfAnswers)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
} 
export const postComment = (commentData) => async (dispatch) => {
    try {
        const { id, noOfComments, commentBody, userCommented } = commentData;
        const { data } = await api.postComment( id, noOfComments, commentBody, userCommented)
        dispatch({ type: 'POST_COMMENT', payload: data})
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}

export const deleteComment = (id, commentId, noOfComments) => async (dispatch) => {
    try {
        await api.deleteComment(id, commentId, noOfComments)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
// export const updateComment = (id, commentId, updateData1) => async (dispatch) => {
//     try{
//         await api.updateComment(id, commentId, updateData1)
//         dispatch({ type: "UPDATE_QUESTION_COMMENT" , payload: data})
//         dispatch(fetchAllQuestions())
//     }catch(error){
//         console.log
//     }
// }


export const postAnswerComment = (acommentData) => async (dispatch) => {
    try{
        const { id, ansId, anscommentBody, ansuserCommented, userId } = acommentData;
        const { data} = await api.postAnswerComment(id, ansId,  anscommentBody, ansuserCommented, userId)
        dispatch({ type : 'POST_ANSWERCOMMENT', payload: data})
        dispatch(fetchAllQuestions())
    }catch(error){
        console.log(error)
    }
}

export const deleteAnswerComment = (id, anscommentId, noOfAnswerComments) => async(dispatch) => {
    try {
        await api.deleteAnswerComment(id, anscommentId, noOfAnswerComments)
        dispatch(fetchAllQuestions())
    } catch (error) {
        console.log(error)
    }
}
// export const updateAnswerComment = (id, anscommentId, updateData2) => async (dispatch)=> {
//     try{
//         await api.updateAnswerComment(id, anscommentId, updateData2)
//         dispatch({ type : "UPDATE_ANSWER_COMMENT" , payload: data})
//         dispatch(fetchAllQuestions())
//     }catch(error){
//         console.log(error)
//     }
// }