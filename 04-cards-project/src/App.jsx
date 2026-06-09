import React from "react";
import { Bookmark } from "lucide-react";
import Card from "./components/Card";
import User from "./components/User";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/apple-company-logo-vector-printable-mobile-laptop-stickers-cups-mugs-182823911.jpg",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://images.icon-icons.com/2429/PNG/512/amazon_logo_icon_147320.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG20zHjiZTp54nUhQC_A_RPkRGylGz65LhA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG20zHjiZTp54nUhQC_A_RPkRGylGz65LhA&s",
      companyName: "Microsoft",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/960px-Adobe_Acrobat_DC_logo_2020.svg.png",
      companyName: "Adobe",
      datePosted: "10 weeks ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Ahmedabad, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/lzny33ho1g45/salesforce-tutorial-p-img/27e1150e679de78f6ac7a6b4cbdb2033/file.png?fm=jpg&q=31&fit=thumb&w=1520&h=760",
      companyName: "Salesforce",
      datePosted: "2 days ago",
      post: "DevOps Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6jm8ppO_0i6_E4vkdcWv8Lw1W56RyS8mag&s",
      companyName: "OpenAI",
      datePosted: "3 weeks ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Remote",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
