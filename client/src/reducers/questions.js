const questionsReducer = (state={data:null},action) => {
    switch (action.type){
        case "POST_QUESTION":
            return {...state}
        case "POST_ANSWER":
            return{...state}
        case "POST_COMMENT":
            return{...state}
        case "POST_ANSWERCOMMENT":
            return{...state}
        // case "UPDATE_QUESTION_COMMENT":
        //     return{...state}
        // case "UPDATE_ANSWER_COMMENT":
        //     return{...state}
        case 'FETCH_ALL_QUESTIONS':
            return {...state, data: action.payload}
        default:
            return state
    }

}
export default questionsReducer