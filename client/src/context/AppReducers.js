export default (state,action) => {
    if(action.type ==="FETCH"){
        return action.payload
        //console.log("fromstate",action.payload)
    }
    if(action.type ==="DELETE"){
        return action.payload
    }
    if(action.type ==="UPDATE"){
        return{
            ...state,
            name:action.payload
        } 
    }
   return state;
}

