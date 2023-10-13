import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeStory } from "../Redux/storiesSlice";
import Story from "./Story";

function Stories() {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();
  console.log("bro",stories.img)

  return (
    <div className="flex flex-wrap">
      
      {stories.map((story) => (
        <Story key={story.id} img={story.img} story={story} onLike={() => dispatch(likeStory(story.id))} />
      ))}
    </div>
  );
}

export default Stories; 
