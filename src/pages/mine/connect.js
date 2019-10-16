import {connect} from "react-redux";
import {USERPIC_ACTION_ASYNC} from "@actions/user"
const mapStateToProps = (state)=>({
    username:state.user.username,
    userPic:state.user.userPic
})


const mapDisPatchToProps = (dispatch)=>({
    handleModifyUserPic(){
        let file =  this.refs.userPic.files[0];
       
        let formData = new FormData();
        formData.append("userId","alley");
        formData.append("userPic",file);
  
        dispatch(USERPIC_ACTION_ASYNC(formData))
      }
})


export default connect(mapStateToProps,mapDisPatchToProps)