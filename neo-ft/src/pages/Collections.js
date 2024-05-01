import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import img13 from "../images/img13.png";
import collection_1 from "../images/collection_1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import AppInp from "../components/AppInp";
import { CgMenu } from "react-icons/cg";
import { CgMenuGridR } from "react-icons/cg";
import art8 from "../images/art8.png";
import art1 from "../images/art1.png";
import art3 from "../images/art3.png";
import art9 from "../images/art9.png";
import art2 from "../images/art2.png";
import art6 from "../images/art6.png";
import onsale1 from "../images/artwork_creation_5.png"
import onsale2 from "../images/artwork_creation_1.png"
import onsale3 from "../images/artwork_creation_2.png"
import onsale4 from "../images/artwork_creation_3.png"
import onsale5 from "../images/artwork_creation_4.png"
import art from "../images/Art.png"
import { useNavigate } from "react-router-dom";

function Collections() {
    const images = [art8, art1, art2, art3, art6, art9];
    const data = [
        {
          event: "sale",
          items: "#304",
          price: "1000 XRP",
          from: "nftinitcom",
          to: "peter.tay",
          date: "25 Minutes ago"
        },
        {
            event: "sale",
            items: "#304",
            price: "1000 XRP",
            from: "nftinitcom",
            to: "peter.tay",
            date: "25 Minutes ago"
          },
          {
            event: "sale",
            items: "#304",
            price: "1000 XRP",
            from: "nftinitcom",
            to: "peter.tay",
            date: "25 Minutes ago"
          },
          {
            event: "sale",
            items: "#304",
            price: "1000 XRP",
            from: "nftinitcom",
            to: "peter.tay",
            date: "25 Minutes ago"
          },
          {
            event: "sale",
            items: "#304",
            price: "1000 XRP",
            from: "nftinitcom",
            to: "peter.tay",
            date: "25 Minutes ago"
          },
      ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState("nfts");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="collection_section">
        <div className="section_1"></div>

        <div className="section_2">
          <div
            className="container mt-12 mb-10 p-2 md:p-2 lg:px-12"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="flex">
              <div>
                <div className="border-4 rounded-xl shadow-lg shadow-gray-500">
                  <img src={img13} className="rounded-xl" />
                </div>
                <div className="flex items-center justify-center p-5">
                  <div className="bg-[#7A52F4] p-2 text-white rounded-xl mx-1 text-xl">
                    <FaTwitter />
                  </div>
                  <div className="bg-[#7A52F4] p-2 text-white rounded-xl mx-1 text-xl">
                    <FaDiscord />
                  </div>
                  <div className="bg-[#7A52F4] p-2 text-white rounded-xl mx-1 text-xl">
                    <TbWorld />
                  </div>
                </div>
              </div>
              <div className="p-12">
                <h1 className="text-3xl font-bold">Celestial Spirits</h1>
                <p className="text-[#7A52F4] font-bold">@MoonWorld</p>
                <div className="flex justify-center items-center my-5">
                  <div className="p-5 border rounded-l-xl">
                    <p className="font-bold text-3xl">8.9K</p>
                    <p>Items</p>
                  </div>
                  <div className="p-5 border">
                    <p className="font-bold text-3xl">12.8k</p>
                    <p>Owners</p>
                  </div>
                  <div className="p-5 border">
                    <p className="font-bold text-3xl">0.209</p>
                    <p>Floor price</p>
                  </div>
                  <div className="p-5 border rounded-r-xl">
                    <p className="font-bold text-3xl">4.8K</p>
                    <p>Items</p>
                  </div>
                </div>
                <p className="text-center text-gray-500">
                  8,888 NFTs of beautiful, Asian women painstakingly-crafted
                  where even the most intricate details are steeped in
                  historical significance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section_3">
          <div className="container mt-12 mb-10 p-2 md:p-2 lg:px-12" >
            <div className="flex items-center justify-center space-x-8 font-bold p-3">
              <p onClick={() => handleSectionClick("nfts")}>NFTs</p>
              <p onClick={() => handleSectionClick("activity")}>Activity</p>
            </div>
            <hr />
            {activeSection === "nfts" && (
              <div className="nfts p-10">
                <div className="flex justify-between items-center">
                  <div>
                    <AppBtn label="Apply Filter" />
                  </div>
                  <div>
                    <AppInp label="Search Items" />
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <div className="text-2xl font-bold text-[#7A52F4]">
                      <CgMenu />
                    </div>
                    <div className="text-2xl font-bold text-[#7A52F4]">
                      <CgMenuGridR onClick={() => handleSectionClick("category")}/>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto my-10" data-aos="zoom-in"
            data-aos-duration="3000">
                  <table className="table-auto w-full shadow-lg shadow-gray-500">
                    <thead className="my-5">
                      <tr className="">
                        <th className="px-4 py-2">Items</th>
                        <th className="px-4 py-2">Rarity</th>
                        <th className="px-4 py-2">Buy Now</th>
                        <th className="px-4 py-2">Last Sale</th>
                        <th className="px-4 py-2">Top Offer</th>
                        <th className="px-4 py-2">Owner</th>
                        <th className="px-4 py-2">Items Held</th>
                        <th className="px-4 py-2">Listed</th>
                      </tr>
                    </thead>
                    <tbody className="text-center my-5">
                      {[...Array(15)].map((index) => (
                        <tr key={index} className="p-2 border my-2 rounded-xl">
                          <td className="flex items-center p-2 ">
                            <img src={collection_1} alt="Collection" />
                            <p className="font-bold">#304</p>
                          </td>
                          <td>2013</td>
                          <td>
                            <AppBtn label="1000" />
                          </td>
                          <td>333</td>
                          <td>700</td>
                          <td className="font-bold">rPpy1232...</td>
                          <td>54</td>
                          <td>5 Hours ago</td>
                          <td><AppBtn label="Buy Now" onClick={() => navigate("/singleprofile")}/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeSection === "activity" && (
                <div>
                    <table
                    className="rounded-3xl shadow-lg shadow-gray-500 p-5 w-[100%] my-10"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    <thead className="border-b">
                      <h1 className="p-5 text-2xl font-bold">Items Activity</h1>
                      <tr className="text-gray-500 font-light text-center">
                        {/* <th className="py-2">Event</th> */}
                        <th className="py-2">Items</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">From</th>
                        <th className="py-2">To</th>
                        <th className="py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody className="my-5 text-center">
                      {data.map((item, index) => (
                        <tr key={index}>
                            {/* <td className="py-2 font-bold">{item.event}</td> */}
                          <td className="flex items-center space-x-4 p-2">
                            <img src={images[index]} alt={`Art ${index + 1}`} />
                            <p className="font-bold">{item.items}</p>
                          </td>
                          <td className="py-2 font-bold">{item.price}</td>
                          <td className="py-2">{item.from}</td>
                          <td className="py-2 font-bold">{item.to}</td>
                          <td className="py-2 font-bold">{item.date}</td>
                            
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            )}

            {activeSection === "category" && (
                <div className="p-10">
                   <div className="flex justify-between items-center">
                  <div>
                    <AppBtn label="Apply Filter" />
                  </div>
                  <div>
                    <AppInp label="Search Items" />
                  </div>
                  <div className="flex justify-center items-center space-x-4">
                    <div className="text-2xl font-bold text-[#7A52F4]">
                      <CgMenu onClick={() => handleSectionClick("nfts")}/>
                    </div>
                    <div className="text-2xl font-bold text-[#7A52F4]">
                      <CgMenuGridR onClick={() => handleSectionClick("category")}/>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10" data-aos="zoom-in" data-aos-duration="3000">
  {[...Array(15)].map((_, index) => (
    <div key={index} className="shadow-lg shadow-gray-500 rounded-xl">
      <div>
        <img src={art} alt={`Art ${index}`} className="rounded-t-xl" />
      </div>
      <div className="p-2">
        <h1 className="font-bold text-lg">#{index + 1}</h1>
        <p>Rank {2013 + index}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-xl font-bold">1000 XRP</h1>
        <div>
          <AppBtn label="Buy Now" onClick={() => navigate("/singleprofile")}/>
        </div>
      </div>
    </div>
  ))}
</div>


                </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
