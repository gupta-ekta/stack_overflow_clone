import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestion = (id, value ) => API.patch(`/questions/vote/${id}`, { value })

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answers/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`, { answerId, noOfAnswers})

export const postComment = (id, noOfComments, commentBody, userCommented ) => API.patch(`/comments/post/${id}`, {  noOfComments, commentBody, userCommented})
export const deleteComment = (id, commentId, noOfComments) => API.patch(`/comments/delete/${id}`, { commentId, noOfComments})
//export const updateComment = (id, commentId, updateData1) => API.patch(`/comments/update/${id}`, {commentId, updateData1})

export const postAnswerComment = (id, ansId, anscommentBody, ansuserCommented, userId ) =>API.patch(`/comments/postAnswerComment/${id}`, { ansId, anscommentBody, ansuserCommented, userId})
export const deleteAnswerComment = (id, anscommentId, noOfAnswerComments) =>API.patch(`/comments/deleteAnswerComment/${id}`, { anscommentId, noOfAnswerComments})
//export const updateAnswerComment = (id, anscommentId, updateData2) => API.patch(`/comments/updateAnswerComment/${id}`,{id, anscommentId, updateData2})

export const getAllUsers = () => API.get('/user/getAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)