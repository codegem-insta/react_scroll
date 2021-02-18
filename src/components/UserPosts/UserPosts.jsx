import react from 'react';
import style from './UserPosts.module.css';

function allPosts() {
    return [
        { id: 0, name: "Elon Musk", content: "Persistence is very important. You should not\n give up unless you are forced to give up." },
        { id: 1, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"" },
        { id: 2, name: "Nassim Nicholas Taleb", content: "Things always become obvious\n after the fact" },
        { id: 3, name: "Neil deGrasse Tyson", content: "If each dead person became a ghost,\n there’d be more than 100-billion of\nthem haunting us all. Creepy, but cool." },
        { id: 4, name: "Walter White", content: "I am the one who knocks" },
        { id: 5, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"" },
        { id: 6, name: "Neil deGrasse Tyson", content: "If each dead person became a ghost,\n there’d be more than 100-billion of\nthem haunting us all. Creepy, but cool." },
        { id: 7, name: "Walter White", content: "I am the one who knocks" },
        { id: 8, name: "Elon Musk", content: "Persistence is very important. You should not\n give up unless you are forced to give up." },
        { id: 9, name: "Michael Scott", content: "\"You miss 100% of the shots you\n don't take – Wayne Gretzky\"" },
        { id: 10, name: "Nassim Nicholas Taleb", content: "Things always become obvious\n after the fact" }
    ];
}

function Post(props) {
    const post = props.post;
    const content = post.content.split('\n').map((line, index) => <p key={index}>{line}</p>) 

    return (
        <div className={style.Post}>
            <div className={style.Header}>
                <div className={style.Picture}></div>
                <div className={style.Name}>{post.name}</div>
            </div>
            <div className={style.Content}>
                {content}
            </div>
        </div>
    );
}

function UserPosts() {
    const content = allPosts();

    return (
        <div className={style.UserPosts}>
            <div className={style.Instructions}> 
                <p style={{fontSize: "80px", marginBottom: "50px"}}>↑</p>
                React Scroll Progress<br />
                Made easy
            </div>
            { content.map(post => <Post key={post.id} post={post} />)}

            <div className={style.InstructionsBottom}> 
                Swipe →
            </div>
        </div>
    );
}

export default UserPosts;