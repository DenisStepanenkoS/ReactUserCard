const { useState, useEffect } = React;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);



function App(){
    
    const user = {
        imgScr: 'https://img.freepik.com/free-photo/portrait-of-an-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-at-studio-closeup-attractive-female-face_186202-4439.jpg',
        name: 'Vika Watson',
        link: '@Vika127',
        gender: 'female',
        tweets: 1234,
        followers: 1233,
        following: 1231
    }
    return(
        <div className="usersField">
            <UserCard user={user}/>
            <UserCard user={user}/>
        </div>
    );
}


function UserCard(props){
    const [isFollowing, setIsFollowing] = useState(false);
    
    const {user} = props;
    const backgroundStyle = {
        backgroundImage: `url(${user.imgScr})`
    }
    return(
        <article className = 'userCard'>
            <div style = {backgroundStyle} className = 'userBackground'>
                <p className="text">{user.name}</p>
                <p className="userLink text">{user.link}</p>
                <button onClick = {() => {setIsFollowing(!isFollowing)}}className='followingButton'>{isFollowing ? '-' : '+'}</button>
                
            </div>
            <div className="cardInfo">
                <CardInfo infoName = {"tweets"} amount={user.tweets}/>
                <CardInfo infoName = {"followers"} amount={user.followers}/>
                <CardInfo infoName = {"following"} amount={user.following}/>
                
            </div>
        </article>
    );
}

function CardInfo({infoName, amount}){
    
    return(
        <div className = "infoField">
            <p className="infoName">{infoName}</p>
            <p className="amount">{amount.toLocaleString()}</p>
        </div>
    );
}