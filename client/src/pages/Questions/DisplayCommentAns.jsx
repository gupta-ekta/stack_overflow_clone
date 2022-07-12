import React  from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { deleteAnswerComment } from '../../actions/question';


const DisplayCommentAns = ({ ansid, question }) => {
  
  const tempansid= ansid;
  const User = useSelector((state) => (state.currentUserReducer));
  const dispatch = useDispatch();
  const { id } = useParams()
 
  const handleDelete = (anscommentId) =>{
    dispatch(deleteAnswerComment(id, anscommentId))
  }


  return (  
    <div>
        {   
            question.anscomment.filter(question => question.ansId === tempansid).map((coms) => (
              <div className="display-ans" key={coms._id}>                                           
              <p> <Link to={`/Users/${coms.userId}`}  style={{color:'#0086d8', textDecoration: "none"}}> &nbsp; {coms.ansuserCommented}  &nbsp; </Link> {coms.anscommentBody} &nbsp;
              {moment(coms.commentedOn).fromNow()} &nbsp;  
              
              {
                  User?.result?._id === coms?.userId && (
                      <button type='button' onClick={() => handleDelete(coms._id)} style={{
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "5px 0px",
                        paddingLeft: "6px",
                        margin: "0px 10px 0px 0px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#DC143C",
                      }}>Delete</button>
                  )
                  
              }
              {
                  User?.result?._id === coms?.userId && (
                      <button type='button'  style={{
                        backgroundColor: "transparent",
                        border: "none",
                        padding: "5px 0px",
                        paddingLeft: "6px",
                        margin: "0px 10px 0px 0px",
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#DC143C",
                      }}>Edit</button>
                  )
                  
              }
                </p>  
           </div>
            ))
        }
    </div>
  )
}

export default DisplayCommentAns


