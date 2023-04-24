import { Card } from "antd";
import React from "react";

const Projects = () => {
  const data = [
    {
      name: "Sales Reepro (NextJS)",
      description: "Reepro is a site that sells high-tech materials, equipment and machinery written in 2022, my main role in the project is to design the interface to dump data from the returned api.",
      link: "https://reeprosolar.com/"
    },
    {
      name: "DP Plus (ReactJS)",
      description: "Dp plus is a project written in reactjs, making it easier for companies to manage projects, restaurants, offices and apartments.",
      link: ["https://project.dbplus.com.vn/", "pm.dbplus.com.vn"]
    },
    {
      name: "Ludigames Portal (Webpack)",
      description: "Ludigames Portal is a product written in webpack, allowing users to play Html 5 games directly on the website. In addition, this project has an eye-catching new design, so it will attract users in the near future",
      link: "https://play.ludigames.com/"
    },
    {
      name: "Huawei Skybridge (Webpack)",
      description: "Huawei Skybridge is a product written in webpack, allowing users to play Sky bridge game directly on the website. The game is displayed directly on Huawei browser, Huawei users can play and receive attractive prizes.",
      link: "https://play.ludigames.com/huawei/sbt/trunk/dist/"
    },
    {
      name: "VNG Careers (NextJS)",
      description: "VNG Careers is a product written in NextJs to serve the recruitment needs of VNG company",
      link: "https://career.vng.com.vn/"
    },
    
  ];
  const handleViewProject = (link) => {
    window.open(link, '_blank');
  }

  return (
    <div className="pb-3">
      {data.map((item, index) => {
        return (
          <div className="grid grid-cols-1 mb-3 gap-3" key={index}>

            <Card
              className="bg-opacity-40 bg-white"
              title={item.name}
              bordered={true}
            >
              <div className="text-sm text-black-800 mb-2">
                {item.description}
              </div>
              <div className="text-sm ">
                <div className="inline">- Link Project:</div> <div className="text-blue-500 cursor-pointer inline" onClick={() => { handleViewProject(item.link) }}> {item.link}</div>
              </div>
            </Card>
          </div>

        )
      })}
    </div>

  );
}
export default Projects;