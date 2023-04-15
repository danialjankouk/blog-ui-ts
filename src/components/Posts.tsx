import postImage from "../assets/post.jpg";
import { useState, useEffect } from "react";
import { IBlog } from "../types/blog.type";
const Posts = () => {
  const [blog, setBlog] = useState<IBlog[]>([]);
  useEffect(() => {
    setBlog([
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
      {
        title: "stars under stars",
        image: postImage,
        text: "thissanfdkdzdvnslsldjfsf",
      },
    ]);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-3 mx-3 border-spacing-4">
      {blog.map((data, id) => (
        <div key={id} className="flex border-2 border-blue-300 flex-col">
          <img src={data.image} alt="image" />
          <h1 className="font-bold text-blue-900">{data.title}</h1>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
