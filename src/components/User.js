import PropTypes from "prop-types";

const User=({isloggedIn,name,surname,friends})=>{
    return( 
        <div>
            {isloggedIn ? <h1>{name} {surname}</h1> : <h1>Not Logged In</h1>}
            <ul>
                { 
                    friends.map((friend,index)=>{                 
                        return <li key={index}>{friend}</li>
                    })
                    
                }  
            </ul>
       </div>)
}
User.propTypes={
    isloggedIn:PropTypes.bool.isRequired,
    name:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    surname:PropTypes.string.isRequired,
    friends:PropTypes.array.isRequired
}

export default User;