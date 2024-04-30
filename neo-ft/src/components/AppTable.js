import React from "react";
import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import art3 from "../images/art3.png";
import art4 from "../images/art4.png";
import art5 from "../images/art5.png";
import art6 from "../images/art6.png";
import art7 from "../images/art7.png";
// import art8 from "../images/art8.png";
// import art9 from "../images/art9.png";
// import art10 from "../images/art10.png";
// Import other images as needed

const images = [art1, art2, art3, art4, art5, art6, art7]; // Add other image imports to this array

const data = [
  {
    collection: "Celestial Spirits",
    volume: "10,450.00",
    "24h%": "-10,00%",
    "7d%": "+18,16%",
    floorPrice: "4,915",
    owners: "6.3k",
    items: "2222",
  },
  {
    collection: "MoonWorld: Humans",
    volume: "5344.13",
    "24h%": "-8,30%",
    "7d%": "+24,50%",
    floorPrice: "99.1",
    owners: "6.3k",
    items: "1111",
  },
  {
    collection: "Bored Apes XRP Club",
    volume: "5344.13",
    "24h%": "-8,30%",
    "7d%": "+24,50%",
    floorPrice: "99.1",
    owners: "6.3k",
    items: "1111",
  },
  {
    collection: "xPepe",
    volume: "33457.59 ",
    "24h%": "-14,90%",
    "7d%": "+13,00%",
    floorPrice: "4,310",
    owners: "6.3k",
    items: "10.0k",
  },
  {
    collection: "xShrooms",
    volume: "19,320.00 ",
    "24h%": "-18,40%",
    "7d%": "+19,30%",
    floorPrice: "3,905",
    owners: "6.3k",
    items: "1111",
  },
  {
    collection: "Top G Apes",
    volume: "4579.40",
    "24h%": "-15,60%",
    "7d%": "+29,00%",
    floorPrice: "3,570",
    owners: "6.3k",
    items: "10.0k",
  },
  {
    collection: "Worldwide Webb Land",
    volume: "5344.13",
    "24h%": "-5,90%",
    "7d%": "+17,30%",
    floorPrice: "54.3",
    owners: "6.3k",
    items: "1111",
  },
];

const AppTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="">
            <th className="px-4 py-2">Collections</th>
            <th className="px-4 py-2">Volume</th>
            <th className="px-4 py-2">24h %</th>
            <th className="px-4 py-2">7d %</th>
            <th className="px-4 py-2">Floor Price</th>
            <th className="px-4 py-2">Owners</th>
            <th className="px-4 py-2">Items</th>
          </tr>
        </thead>
        <tbody className="my-5">
          {data.map((item, index) => (
            <tr key={index} className="border rounded-xl text-center">
              <td className="flex items-center space-x-4 px-3 py-2">
                <img src={images[index]} alt={`Art ${index + 1}`} />
                <p className="font-bold">{item.collection}</p>
              </td> 
              <td>{item.volume}</td>
              <td className="text-red-500 font-bold">{item["24h%"]}</td>
              <td className="text-green-500 font-bold">{item["7d%"]}</td>
              <td>{item.floorPrice}</td>
              <td>{item.owners}</td>
              <td>{item.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;



// const images = [art1, art2, art3, art4, art5, art6, art7]; // Add other image imports to this array

// const data = [
//   {
//     collection: "Celestial Spirits",
//     volume: "10,450.00",
//     "24h%": "-10,00%",
//     "7d%": "+18,16%",
//     floorPrice: "4,915",
//     owners: "6.3k",
//     items: "2222",
//   },
//   {
//     collection: "MoonWorld: Humans",
//     volume: "5344.13",
//     "24h%": "-8,30%",
//     "7d%": "+24,50%",
//     floorPrice: "99.1",
//     owners: "6.3k",
//     items: "1111",
//   },
//   {
//     collection: "Bored Apes XRP Club",
//     volume: "5344.13",
//     "24h%": "-8,30%",
//     "7d%": "+24,50%",
//     floorPrice: "99.1",
//     owners: "6.3k",
//     items: "1111",
//   },
//   {
//     collection: "xPepe",
//     volume: "33457.59 ",
//     "24h%": "-14,90%",
//     "7d%": "+13,00%",
//     floorPrice: "4,310",
//     owners: "6.3k",
//     items: "10.0k",
//   },
//   {
//     collection: "xShrooms",
//     volume: "19,320.00 ",
//     "24h%": "-18,40%",
//     "7d%": "+19,30%",
//     floorPrice: "3,905",
//     owners: "6.3k",
//     items: "1111",
//   },
//   {
//     collection: "Top G Apes",
//     volume: "4579.40",
//     "24h%": "-15,60%",
//     "7d%": "+29,00%",
//     floorPrice: "3,570",
//     owners: "6.3k",
//     items: "10.0k",
//   },
//   {
//     collection: "Worldwide Webb Land",
//     volume: "5344.13",
//     "24h%": "-5,90%",
//     "7d%": "+17,30%",
//     floorPrice: "54.3",
//     owners: "6.3k",
//     items: "1111",
//   },
// ];
