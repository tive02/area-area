import React from "react";
import Link from "next/link";
const CardSecundary = ({ post }) => {
  const lastPost = Object.fromEntries(post);
  const { id, title, urlImg, votes, comments, created, creator, tags } =
    lastPost;
  return (
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <div className="hidden md:block w-full md:w-1/3 relative rounded">
        <div className="absolute left-0 top-0 w-full h-full z-10"></div>
        <img
          src={urlImg}
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
            {tags}
          </span>
          <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
            {title}
          </h2>
          <div className="flex mt-3">
            {/* imagen de perfil 
          <img
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
            className="h-10 w-10 rounded-full mr-2 object-cover"
          /> */}
            <div>
              <p className="font-semibold text-gray-200 text-sm">
                {creator.name}
              </p>
              <p className="font-semibold text-gray-400 text-xs">
                {" "}
                Publicado hace
                {formatDistanceToNow(new Date(created), { locale: es })}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardSecundary;
