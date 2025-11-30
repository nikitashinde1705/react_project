import { useState } from "react";

const LikeSymbol = () => {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        
        if(liked){
            setLiked(false);
            setLikes(likes-1);
        }
        else{
            setLiked(true);
            setLikes(likes + 1);
        }
    };

    return (
        <>

        <div className="container d-flex align-items-center gap-2 m-5" style={{cursor:"pointer"}}>
            <h2>Like Button</h2>
            <div className="likeButton" onClick={handleLike}>
                <i className={`bi bi-heart${liked ? "-fill text-danger" : ""}`}
     
                ></i>
                <span style={{ fontSize: "20px" }}>{likes}</span>
            </div>
        </div>
        </>
    );
};
export default LikeSymbol;