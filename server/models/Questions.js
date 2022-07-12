import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle: { type: String, required: "Question must have a title"},
    questionBody: { type: String, required: "Question must have a body"},
    questionTags: { type: [String], required: "Question must have a tags"},
    noOfAnswers: { type: Number, default: 0},
    noOfComments: {type: Number, default: 0},
    upVote: { type: [String], default: []},
    downVote: { type: [String], default: []},
    userPosted: { type: String, required: "Question must have an author"},
    userId: { type: String},
    askedOn: { type: Date, default: Date.now},
    answer: [{
        answerBody: String,
        noOfAnswerComments: {type: Number, default: 0},
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now},}],
    comment: [{
        commentBody: String,
        userCommented: String,
        userId: String,
        postedOn:{ type: Date, default: Date.now}}],
    anscomment: [{
        ansId: String,
        anscommentBody: String,
        ansuserCommented: String,
        userId: String,
        postedOn:{ type: Date, default: Date.now}}],
})
export default mongoose.model("Question", QuestionSchema)