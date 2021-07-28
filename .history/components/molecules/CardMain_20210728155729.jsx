import React from "react";
const CardMain = ({ post }) => {
  const lastPost = Object.fromEntries(post);
  console.log(lastPost);
  return (
    <a
      className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-screen"
      href="#"
    >
      <img
        src={post[1]}
        className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
      />
      <div className="p-4 absolute bottom-0 left-0 z-20">
        <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
          {post[10]}
        </span>
        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
          {post[8]}
        </h2>
        <div className="flex mt-3">
          {/* imagen de perfil 
          <img
            src="https://randomuser.me/api/portraits/men/97.jpg"
            className="h-10 w-10 rounded-full mr-2 object-cover"
          /> */}
          <div>
            <p className="font-semibold text-gray-200 text-sm">
              {post[9].name}
            </p>
            <p className="font-semibold text-gray-400 text-xs"> {post[7]} </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardMain;
