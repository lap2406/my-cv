import React from "react";
import profileImg from "assets/images/profile.jpeg"
import { Avatar } from "antd";
import { FacebookFilled, GithubFilled } from "@ant-design/icons";
import moment from "moment";
import { Link } from "react-router-dom";

const Profile = () => {
  const data = {
    content: "Hello! I am a young, passionate and enthusiastic Junior developer. With what I have learned and my sense of responsibility at work, I believe that I am a good fit for the company.",
    avatar: profileImg,
    birthDay: "20000624",
    name: "Vũ Tiến Lập",
    level: "Junior Developer",
    location: "Ward 1, Phu Nhuan District, Ho Chi Minh City",
    email: "lap24062000@gmail.com",
    phoneNumber: "0977750450",
    skills: ["Javascript", "Html", "Scss", "Less", "React.Js", "Next.Js", "Webpack"],
  }

  return (
    <div className="overflow-hidden">
      <div className="intro-x">
        <div className="flex justify-center items-center gap-5 mb-4">
          <div className="">
            <Avatar size={{ xs: 75, sm: 100, md: 120, lg: 150, xl: 150 }} src={data.avatar} />
          </div>
          <div className="">
            <div className="text-xl font-semibold">{data.name}</div>
            <div className="text-base font-normal">{data.level}</div>
          </div>
          <div className=" ml-auto flex gap-3">
            <FacebookFilled className="text-3xl" />
            <GithubFilled className="text-3xl" />
          </div>
        </div>
        <div className="text-sm font-normal mb-3 ">
          - {data.content}
        </div>
        <div className="text-sm font-normal mb-3 ">
          - Skills: {data.skills.map(item => item).join(", ")}
        </div>
        <div className="text-sm font-normal mb-3 ">
          - Birth Day: {moment(data.birthDay).format("MMMM Do YYYY")}
        </div>
        <div className="text-sm font-normal mb-3 ">
          - Location: {data.location}
        </div>
        <div className="text-sm font-normal mb-3 ">
          - Email: <Link
            to='#'
            onClick={(e) => {
              window.location.href = "mailto:" + data.email;
              e.preventDefault();
            }}
          >
            {data.email}
          </Link>
        </div>
        <div className="text-sm font-normal mb-3 ">
          - Phone Number: <Link
            to='#'
            onClick={(e) => {
              window.location.href = "tel:" + data.phoneNumber;
              e.preventDefault();
            }}
          >
            {data.phoneNumber}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Profile;