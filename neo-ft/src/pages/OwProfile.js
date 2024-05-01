import React, { useEffect, useState } from "react";
import profile from "../images/profile.png";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import img14 from "../images/img14.png";
import img15 from "../images/img15.png";
import img16 from "../images/img16.png";
import img17 from "../images/img17.png";
import AppBtn from "../components/AppBtn";
import art8 from "../images/art8.png";
import art1 from "../images/art1.png";
import art3 from "../images/art3.png";
import art9 from "../images/art9.png";
import art2 from "../images/art2.png";
import art6 from "../images/art6.png";
import onsale1 from "../images/artwork_creation_1.png";
import onsale2 from "../images/artwork_creation_5.png";
import onsale3 from "../images/artwork_creation_6.png";
import onsale4 from "../images/artwork_creation_7.png";
import onsale5 from "../images/onsale.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function OwProfile() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate()

  const [activeSection, setActiveSection] = useState("collections");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const images = [art8, art1, art2, art3, art6, art9];
  const data = [
    {
      items: "#304",
      price: "1000 XRP",
      expiration: "7 min",
      from: "nftinitcom",
    },
    {
      items: "#304",
      price: "1000 XRP",
      expiration: "7 min",
      from: "nftinitcom",
    },
    {
      items: "#304",
      price: "1000 XRP",
      expiration: "7 min",
      from: "nftinitcom",
    },
    {
      items: "#304",
      price: "1000 XRP",
      expiration: "7 min",
      from: "nftinitcom",
    },
    {
      items: "#304",
      price: "1000 XRP",
      expiration: "7 min",
      from: "nftinitcom",
    },
  ];
  return (
    <>
      <div className="ownProfile_section">
        <div className="section_1"></div>
        <div className="section_2">
          <div className="container p-2 md:p-2 lg:p-10">
            <div className="flex justify-center">
              <div
                className="shadow-lg shadow-gray-500 rounded-xl p-5 flex items-center space-x-6 w-[50%]"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <div>
                  <img src={profile} />
                </div>
                <div>
                  <h1 className="font-bold text-xl">Francisco Maia</h1>
                  <p className="text-sm font-bold text-gray-700">
                    0x59485…82590
                  </p>
                  <br />
                  <p className="text-md text-gray-500">
                    8,888 NFTs of beautiful, Asian women painstakingly-crafted
                    where even the most intricate
                  </p>
                  <div className="flex items-center">
                    <div className="p-2 bg-[#7A52F4] rounded-lg text-white m-1">
                      <FaTwitter />
                    </div>
                    <div className="p-2 bg-[#7A52F4] rounded-lg text-white m-1">
                      <FaDiscord />
                    </div>
                    <div className="p-2 bg-[#7A52F4] rounded-lg text-white m-1">
                      <TbWorld />
                    </div>
                    <div>
                      <AppBtn label="Collections"
                      onClick={() => navigate("/collections")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="m-20">
              <div className="flex items-center justify-center space-x-8 font-bold p-3">
                <p onClick={() => handleSectionClick("collections")}>
                  Collections
                </p>
                <p onClick={() => handleSectionClick("onSale")}>On Sale</p>
                <p>Owned</p>
                <p onClick={() => handleSectionClick("offers")}>Offers</p>
                <p>Activity</p>
                <div>
                  <AppBtn label="Profile Setting"
                  onClick={() => navigate("/profile")}
                  />
                </div>
              </div>
              <hr />
              {activeSection === "collections" && (
                <div>
                  <div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    {[
                      {
                        img: img14,
                        title: "xCub3es",
                        desc: "by Svyatoslav taushev",
                        price: "100 XRP",
                        collectionSize: "10 000",
                      },
                      {
                        img: img15,
                        title: "Eye Buddies",
                        desc: "by Angela Longoria",
                        price: "80 XRP",
                        collectionSize: "10 000",
                      },
                      {
                        img: img16,
                        title: "Monsters World",
                        desc: "by Mathijn Agter",
                        price: "87 XRP",
                        collectionSize: "10 000",
                      },
                      {
                        img: img17,
                        title: "Crazy Professor",
                        price: "200 XRP",
                        collectionSize: "10 000",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-500 rounded-2xl"
                      >
                        <div className="w-[100%]">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="rounded-2xl"
                          />
                        </div>
                        <div className="px-3 py-3">
                          <h1 className="font-bold text-lg text-center">
                            {item.title}
                          </h1>
                          <p className="text-center text-gray-500">
                            {item.desc}
                          </p>
                          <div className="mt-5 flex justify-between items-center">
                            <p className="text-sm">
                              Floor Price{" "}
                              <span className="font-bold">{item.price}</span>
                            </p>
                            <p className="text-sm">
                              items{" "}
                              <span className="font-bold">
                                {item.collectionSize}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <AppBtn label="Load More" />
                  </div>
                </div>
              )}
              {activeSection === "onSale" && (
                <div className="onsale">
                  <div
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    <div className="shadow-lg shadow-gray-500 rounded-xl">
                      <div>
                        <img src={onsale1} className="rounded-t-xl" />
                      </div>
                      <div className="p-2">
                        <h1 className="font-bold text-lg">#304</h1>
                        <p>Rank 2013</p>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <h1 className="text-xl font-bold">1000 XRP</h1>
                        <div>
                          <AppBtn label="Buy Now" />
                        </div>
                      </div>
                    </div>

                    <div className="shadow-lg shadow-gray-500 rounded-xl">
                      <div>
                        <img src={onsale2} className="rounded-t-xl" />
                      </div>
                      <div className="p-2">
                        <h1 className="font-bold text-lg">#305</h1>
                        <p>Rank 2015</p>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <h1 className="text-xl font-bold">1000 XRP</h1>
                        <div>
                          <AppBtn label="Buy Now" />
                        </div>
                      </div>
                    </div>

                    <div className="shadow-lg shadow-gray-500 rounded-xl">
                      <div>
                        <img src={onsale3} className="rounded-t-xl" />
                      </div>
                      <div className="p-2">
                        <h1 className="font-bold text-lg">#314</h1>
                        <p>Rank 2013</p>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <h1 className="text-xl font-bold">1000 XRP</h1>
                        <div>
                          <AppBtn label="Buy Now" />
                        </div>
                      </div>
                    </div>

                    <div className="shadow-lg shadow-gray-500 rounded-xl">
                      <div>
                        <img src={onsale4} className="rounded-t-xl" />
                      </div>
                      <div className="p-2">
                        <h1 className="font-bold text-lg">#309</h1>
                        <p>Rank 2013</p>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <h1 className="text-xl font-bold">1000 XRP</h1>
                        <div>
                          <AppBtn label="Buy Now" />
                        </div>
                      </div>
                    </div>

                    <div className="shadow-lg shadow-gray-500 rounded-xl">
                      <div>
                        <img src={onsale5} className="rounded-t-xl" />
                      </div>
                      <div className="p-2">
                        <h1 className="font-bold text-lg">#321</h1>
                        <p>Rank 2013</p>
                      </div>
                      <div className="flex justify-between items-center p-2">
                        <h1 className="text-xl font-bold">1000 XRP</h1>
                        <div>
                          <AppBtn label="Buy Now" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeSection === "owned" && <div></div>}
              {activeSection === "offers" && (
                <div className="offers flex-col justify-center items-center m-5">
                  <table
                    className="rounded-3xl shadow-lg shadow-gray-500 p-5 w-[100%] my-5"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    <thead className="border-b">
                      <h1 className="p-5 text-2xl font-bold">
                        Offers Received
                      </h1>
                      <tr className="text-gray-500 font-light text-center">
                        <th className="py-2">Items</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Expiration</th>
                        <th className="py-2">From</th>
                      </tr>
                    </thead>
                    <tbody className="my-5 text-center">
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="flex items-center space-x-4 p-2">
                            <img src={images[index]} alt={`Art ${index + 1}`} />
                            <p className="font-bold">{item.items}</p>
                          </td>
                          <td className="py-2 font-bold">{item.price}</td>
                          <td className="py-2">{item.expiration}</td>
                          <td className="py-2 font-bold">{item.from}</td>
                          <td className="py-2">
                            <button className="bg-[#F20089] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#ca4490]">
                              Decline
                            </button>
                          </td>
                          <td className="py-2">
                            <button className="bg-[#7A52F4] text-white rounded-full px-6 py-2 font-semibold hover:bg-[#5537ae]">
                              Accept
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <table
                    className="rounded-3xl shadow-lg shadow-gray-500 p-5 w-[100%] my-10"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                  >
                    <thead className="border-b">
                      <h1 className="p-5 text-2xl font-bold">Offers Made</h1>
                      <tr className="text-gray-500 font-light text-center">
                        <th className="py-2">Items</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Expiration</th>
                        <th className="py-2">To</th>
                      </tr>
                    </thead>
                    <tbody className="my-5 text-center">
                      {data.map((item, index) => (
                        <tr key={index}>
                          <td className="flex items-center space-x-4 p-2">
                            <img src={images[index]} alt={`Art ${index + 1}`} />
                            <p className="font-bold">{item.items}</p>
                          </td>
                          <td className="py-2 font-bold">{item.price}</td>
                          <td className="py-2">{item.expiration}</td>
                          <td className="py-2 font-bold">{item.from}</td>
                          <td className="py-2">
                            <button className="bg-gray-500 text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-300">
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {activeSection === "activity" && <div></div>}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwProfile;
