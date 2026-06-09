import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardData = [
    {
      title: "Coffee Lovers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0C2niR-gb6kBxTM34NLDZOziz1QlVWas0A&s",
      status: "Active",
      rating: 3,
      audienceType: "Coffee Addicts",
      locationCount: 4724,
      members: "2,63,104",
      growth: "1%",
    },
    {
      title: "Travel Enthusiasts",
      image:
        "https://static2.tripoto.com/media/filter/tst/img/255019/TripDocument/1456830281_images_6.jpg",
      status: "Active",
      rating: 4,
      audienceType: "Travel Community",
      locationCount: 3189,
      members: "1,85,762",
      growth: "3%",
    },
    {
      title: "Fitness Freaks",
      image:
        "https://images.stockcake.com/public/3/e/a/3ea56ef5-0783-4da3-aca8-88076fbb2fb1_large/dawn-fitness-silhouette-stockcake.jpg",
      status: "Active",
      rating: 5,
      audienceType: "Health Group",
      locationCount: 5421,
      members: "3,12,890",
      growth: "5%",
    },
    {
      title: "Food Explorers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1t0bKL4Qgk3Ho7-m5rPOPx88kH-kgMcXcg&s",
      status: "Active",
      rating: 4,
      audienceType: "Foodies",
      locationCount: 2678,
      members: "1,45,320",
      growth: "2%",
    },
    {
      title: "Movie Buffs",
      image:
        "https://images.pexels.com/photos/7234393/pexels-photo-7234393.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      status: "Inactive",
      rating: 3,
      audienceType: "Entertainment",
      locationCount: 1967,
      members: "95,782",
      growth: "1%",
    },
    {
      title: "Music Lovers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfqHyOWfFhVcohmcZZsRQZrycOX5T-9aNlKg&s",
      status: "Active",
      rating: 5,
      audienceType: "Music Fans",
      locationCount: 4876,
      members: "2,98,431",
      growth: "4%",
    },
    {
      title: "Book Readers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMDRvuNSaALK67AphYsFzQOHczuL1a3FBbw&s",
      status: "Active",
      rating: 4,
      audienceType: "Reading Club",
      locationCount: 2145,
      members: "1,12,845",
      growth: "2%",
    },
    {
      title: "Gamers Hub",
      image:
        "https://img.magnific.com/free-photo/aesthetic-anime-character-gaming_23-2151560663.jpg?semt=ais_hybrid&w=740&q=80",
      status: "Active",
      rating: 5,
      audienceType: "Gaming Community",
      locationCount: 6532,
      members: "4,25,910",
      growth: "6%",
    },
    {
      title: "Nature Lovers",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIFJyW34H1Om5GlSkgEmGTnbmB50DMI38uA&s",
      status: "Active",
      rating: 4,
      audienceType: "Outdoor Group",
      locationCount: 1789,
      members: "89,456",
      growth: "2%",
    },
    {
      title: "Photography Club",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmys7FynVgnNF8AMyhbReLnOBg4p-NtvpHw&s",
      status: "Active",
      rating: 5,
      audienceType: "Creators",
      locationCount: 3567,
      members: "1,76,324",
      growth: "4%",
    },
    {
      title: "Tech Innovators",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8NIpmNu5OxHKhMSqwudx6qAJ-GppzheHew&s",
      status: "Active",
      rating: 5,
      audienceType: "Developers",
      locationCount: 7210,
      members: "5,12,874",
      growth: "8%",
    },
    {
      title: "Pet Owners",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzzrdVgvWRCOCqGD4IBjXB3JloKYlc_C_8w&s",
      status: "Inactive",
      rating: 3,
      audienceType: "Animal Lovers",
      locationCount: 1423,
      members: "76,542",
      growth: "1%",
    },
    {
      title: "Fashion Trends",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bYNIS1m4e89LxmsYPZq_lJBiK60ciYMqDQ&s",
      status: "Active",
      rating: 4,
      audienceType: "Fashion Community",
      locationCount: 2987,
      members: "1,68,231",
      growth: "3%",
    },
    {
      title: "Startup Founders",
      image:
        "https://img.magnific.com/free-photo/startup-business-progress-strategy-enterprise_53876-127927.jpg?semt=ais_hybrid&w=740&q=80",
      status: "Active",
      rating: 5,
      audienceType: "Entrepreneurs",
      locationCount: 4521,
      members: "2,14,987",
      growth: "7%",
    },
    {
      title: "Art & Design",
      image:
        "https://www.shutterstock.com/image-photo/variety-art-supplies-paintbrushes-palette-600nw-2524885815.jpg",
      status: "Active",
      rating: 4,
      audienceType: "Creative Community",
      locationCount: 2398,
      members: "1,37,654",
      growth: "3%",
    },
  ];
  return (
    <div className="parent">
      {cardData.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              title={elem.title}
              image={elem.image}
              status={elem.status}
              rating={elem.rating}
              audienceType={elem.audienceType}
              locationCount={elem.locationCount}
              members={elem.members}
              growth={elem.growth}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
