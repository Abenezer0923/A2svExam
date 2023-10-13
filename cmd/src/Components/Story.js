import React from "react";

function Story({ story, onLike, img }) {
  return (
    <div className="w-full p-4">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex">
          <div className="pr-4 w-5/12 rounded">
            <img src={img} alt="Image" className="w-4/5 p-3 rounded" />
          </div>
          <div className="w-1/2">
            <h3 className="text-xl mb-2 font-bold">{story.title}</h3>
            <p className="text-sm">{story.Dicription}</p>
            <p className="text-xl mb-2 font-bold">{story.title2}</p>
            <p className="text-sm">{story.Dicription2}</p>
            <p className="text-xl mb-2 font-bold">{story.title3}</p>
            <p className="text-sm">{story.Dicription3}</p>
            <p className="text-gray-700">Likes: {story.likes}</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={onLike}
            >
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
