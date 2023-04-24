import React from "react";

const Orther = () => {
  const data = {
    interest: ["Football", "Badminton"],
    avtivitive: ["Join the financial market", "Have a passion for music" ]
  }

  return (
    <div className="">
      <div className="text-sm font-normal mb-3">
        - Interest: {data.interest.map(item => item).join(", ")}
      </div>
      <div className="text-sm font-normal mb-3">
        - Avtivitive: {data.avtivitive.map(item => item).join(", ")}
      </div>
      
    </div>
  );
}
export default Orther;