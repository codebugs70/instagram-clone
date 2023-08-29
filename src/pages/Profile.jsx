import React, { useState } from "react";
import UserAvatar from "../modules/user/UserAvatar";
import Button from "../components/button/Button";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import PostPreviewItem from "../modules/post/PostPreviewItem";
import { useParams } from "react-router-dom";
/* ====================================================== */

const tabOptions = [
  { name: "Posts", icon: <MdOutlinePostAdd /> },
  { name: "Saved", icon: <BsBookmarkPlus /> },
];

const Profile = () => {
  const { slug } = useParams();
  console.log(slug);
  const [selected, setSelected] = useState("Posts");

  return (
    <section className="px-6">
      <div className="flex items-start gap-14">
        <UserAvatar size="lg" avatar={"https://source.unsplash.com/random"} />

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <h1 className="text-lg">Codebugs</h1>
            <Button className="text-sm" size="small" variant="secondary">
              Edit profile
            </Button>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <span>2</span>
              Posts
            </div>
            <div className="flex items-center gap-1">
              <span>12</span>
              Followers
            </div>
            <div className="flex items-center gap-1">
              <span>25</span>
              Posts
            </div>
          </div>

          <p>@Codebugs</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-700 mt-10"></div>

      <ul className="flex items-center gap-5 mt-6">
        {tabOptions.map((item) => {
          return (
            <li
              onClick={() => setSelected(item.name)}
              className={`${
                selected === item.name
                  ? "dark:bg-white bg-BlueForst hover:bg-ElectricBlue text-white dark:text-black dark:hover:bg-opacity-80  border-transparent"
                  : "border-black dark:border-white border dark:hover:bg-white dark:hover:bg-opacity-20 dark:text-white"
              } flex items-center gap-2 px-6 py-3 font-medium transition-all rounded-lg cursor-pointer border`}
              key={item.name}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </li>
          );
        })}
      </ul>

      <div className="my-10">
        <ul className="grid grid-cols-3 gap-1">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <PostPreviewItem key={index} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
