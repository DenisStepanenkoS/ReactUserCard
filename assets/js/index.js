const { useState, useEffect } = React;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);



function App(){
    
    const user = [{
        imgScr: 'https://img.freepik.com/free-photo/portrait-of-an-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-at-studio-closeup-attractive-female-face_186202-4439.jpg',
        name: 'Vika Watson',
        link: '@Vika127',
        gender: 'female',
        tweets: 1234,
        followers: 1233,
        following: 1231
    },{
        imgScr: 'data:image/jpeg;base64,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',
        name: 'Victor Greiwood',
        link: '@Viktor',
        gender: 'male',
        tweets: 245,
        followers: 3212,
        following: 1111
    }]
    
    return(
        <div className="usersField">
            <UserCard user={user[0]}/>
            <UserCard user={user[1]}/>
        </div>
    );
}


function UserCard(props){
    const [isFollowing, setIsFollowing] = useState(false);
    
    const femaleStyle = {background: 'linear-gradient(rgb(255, 135, 135),rgb(241, 61, 61) ,rgb(153, 11, 11))'};
    const maleStyle = {background: 'linear-gradient(rgb(143, 135, 255),rgb(73, 61, 241) ,rgb(32, 11, 153))'};
    const {user} = props;
    const backgroundStyle = {
        backgroundImage: `url(${user.imgScr})`
    }
    return(
        <article className = 'userCard'>
            <div style = {backgroundStyle} className = 'userBackground'>
                <p className="text">{user.name}</p>
                <p className="userLink text">{user.link}</p>
                <button style={user.gender === 'female' ? femaleStyle : maleStyle} onClick = {() => {setIsFollowing(!isFollowing)}}className='followingButton'>{isFollowing ? '-' : '+'}</button>
                
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