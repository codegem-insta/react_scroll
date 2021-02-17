import react from 'react';
import style from './UserPosts.module.css';

function allPosts() {
    return [
        { id: 0, name: "Michael Scott", content: "\"You miss 100% of the\n shots you don't take – Wayne Gretzky\" – Michael Scott" },
        { id: 1, name: "Neil deGrasse Tyson", content: "We are part of this universe; we are in this universe, but perhaps more important than both of those facts, is that the universe is in us." },
        { id: 2, name: "Walter White", content: "I am the one who knocks" },
    ];
}

function Post(props) {
    const post = props.post;

    return (
        <div>
            <div>
                <div></div>
                {post.name}
            </div>
            <div>
                {post.content}
            </div>
        </div>
    );
}

function UserPosts() {
    const content = allPosts();

    return (
        <div>
            { content.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}

export default UserPosts;