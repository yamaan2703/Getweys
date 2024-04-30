import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbNumber1 } from "react-icons/tb";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";

function AppTimeline() {
  return (
    <>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: "20px",
              color: "white",
              boxShadow: "10px rgba(107 114 128 0.6)",
              backgroundColor: "#7A52F4"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7A52F4" }}
            iconStyle={{ background: "#7A52F4", color: "#fff"}}
            icon={<TbNumber1 />}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-lg lg:text-2xl font-bold text-left">
              XRPL Collection Launch
            </h3>
            <p className="text-left ">
              Launch the Celestial Spirit Collection on the XRP Ledger (XRPL),
              generating anticipation through social media engagement and
              ensuring seamless integration with XRPL platforms and wallets.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: "20px",
              color: "white",
              boxShadow: "10px rgba(107 114 128 0.6)",
              backgroundColor: "#7A52F4"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7A52F4" }}
            iconStyle={{ background: "#7A52F4", color: "#fff", boxSizing: "border-box" }}
            icon={<RiNumber2 />}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-lg lg:text-2xl font-bold text-left">
            Profit-Driven Product Creation
            </h3>
            <p className="text-left ">
            Develop a variety of unique products within the MoonStudios ecosystem, exploring revenue streams to maximize profitability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: "20px",
              color: "white",
              boxShadow: "10px rgba(107 114 128 0.6)",
              backgroundColor: "#7A52F4"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7A52F4" }}
            iconStyle={{ background: "#7A52F4", color: "#fff", boxSizing: "border-box" }}
            icon={<RiNumber3 />}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-lg lg:text-2xl font-bold text-left">
            Community Sales Team Formation
            </h3>
            <p className="text-left ">
            Form a dedicated sales team from within the community, implementing a structured recruitment process and fostering a collaborative environment for achieving sales targets.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: "20px",
              color: "white",
              boxShadow: "10px rgba(107 114 128 0.6)",
              backgroundColor: "#7A52F4"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7A52F4" }}
            iconStyle={{ background: "#7A52F4", color: "#fff", boxSizing: "border-box" }}
            icon={<RiNumber4 />}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-lg lg:text-2xl font-bold text-left">
            Comprehensive Sales Support
            </h3>
            <p className="text-left ">
            Offer ongoing coaching, accessible tools, and a feedback-driven environment to empower the sales team for immediate and sustained success.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderRadius: "20px",
              color: "white",
              boxShadow: "10px rgba(107 114 128 0.6)",
              backgroundColor: "#7A52F4"
            }}
            contentArrowStyle={{ borderRight: "7px solid #7A52F4" }}
            iconStyle={{ background: "#7A52F4", color: "#fff", boxSizing: "border-box" }}
            icon={<RiNumber5 />}
          >
            <h3 className="vertical-timeline-element-title text-lg md:text-lg lg:text-2xl font-bold text-left">
            Third Utility Reveal
            </h3>
            <p className="text-left ">
            Strategically reveal the third utility of the Celestial Spirit Collection, communicating its benefits clearly and engaging with media and community for maximum exposure and understanding.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
}

export default AppTimeline;
