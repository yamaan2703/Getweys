import React, { useState } from "react";
import AppCheckbox from "../components/AppCheckbox";
import AppBtn from "../components/AppBtn"

function Notification() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, isChecked: false },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
    { id: 4, isChecked: false },
    { id: 5, isChecked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, isChecked: !checkbox.isChecked }
          : checkbox
      )
    );
  };

  const firstCheckbox = checkboxes[0];

  return (
    <>
      <div className="notification_section">
        <div className="section_1">
          <div className="container p-5 md:p-5 lg:p-10">
            <div>
              <h1 className="font-bold text-xl md:text-xl lg:text-3xl">
                Notification Setting
              </h1>

              <div className="bg-gray-200 p-5 my-2 rounded-xl">
                <div className="my-3">
                  <p className="text-black font-bold text-sm">Sold Item</p>
                  <div className="flex space-x-3 items-center">
                    <AppCheckbox
                      label={firstCheckbox.label}
                      isChecked={firstCheckbox.isChecked}
                      onChange={() => handleCheckboxChange(firstCheckbox.id)}
                    />
                    <p className="text-gray-500 text-lg py-1">
                      When one of your items is purchased
                    </p>
                  </div>
                  <hr className="h-1 bg-white" />
                </div>

                <div className="my-3">
                  <p className="text-black font-bold text-sm">
                    Bidding Activity
                  </p>
                  <div className="flex space-x-3 items-center">
                  <AppCheckbox
                      label={firstCheckbox.label}
                      isChecked={firstCheckbox.isChecked}
                      onChange={() => handleCheckboxChange(firstCheckbox.id)}
                    />
                    <p className="text-gray-500 text-lg py-1">
                      When someone bids on one of your items
                    </p>
                  </div>
                  <hr className="h-1 bg-white" />
                </div>

                <div className="my-3">
                  <p className="text-black font-bold text-sm">Price Change</p>
                  <div className="flex space-x-3 items-center">
                  <AppCheckbox
                      label={firstCheckbox.label}
                      isChecked={firstCheckbox.isChecked}
                      onChange={() => handleCheckboxChange(firstCheckbox.id)}
                    />
                    <p className="text-gray-500 text-lg py-1">
                      When an item you made an offer on changes in price
                    </p>
                  </div>
                  <hr className="h-1 bg-white" />
                </div>

                <div className="my-3">
                  <p className="text-black font-bold text-sm">Outbid</p>
                  <div className="flex space-x-3 items-center">
                  <AppCheckbox
                      label={firstCheckbox.label}
                      isChecked={firstCheckbox.isChecked}
                      onChange={() => handleCheckboxChange(firstCheckbox.id)}
                    />
                    <p className="text-gray-500 text-lg py-1">
                      When another user placed a higher bid on an item you bid
                      on
                    </p>
                  </div>
                  <hr className="h-1 bg-white" />
                </div>

                <div className="my-3">
                  <p className="text-black font-bold text-sm">Item Bought</p>
                  <div className="flex space-x-3 items-center">
                  <AppCheckbox
                      label={firstCheckbox.label}
                      isChecked={firstCheckbox.isChecked}
                      onChange={() => handleCheckboxChange(firstCheckbox.id)}
                    />
                    <p className="text-gray-500 text-lg py-1">
                      When you purchased an item
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center my-5">
                <div>
                  <AppBtn label="Update Settings"/>
                </div>
                <div>
                  <AppBtn label="Cancel"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
