import PropTypes from "prop-types";

const User=({isloggedIn,name,surname,friends,adress})=>{
    if(isloggedIn){        
        return <div>Not Logged In</div>
    }
    return( 
        <div>
            <h1>{name} {surname}</h1>
            <ul>
                { 
                    friends.map((friend,index)=>{                 
                        return <li key={index}>{friend}</li>
                    })
                    
                }  
            </ul>
            {adress.title} {adress.zip}
       </div>)
}
User.propTypes={
    isloggedIn:PropTypes.bool.isRequired,
    name:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    surname:PropTypes.string.isRequired,
    friends:PropTypes.array.isRequired,
    adress:PropTypes.shape({
        title:PropTypes.string.isRequired,
        zip:PropTypes.number.isRequired
    })
}
User.defaultProps={ 
    isloggedIn:false,
}
export default User;