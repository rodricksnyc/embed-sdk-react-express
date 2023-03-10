// Embedded dashboards let you build an interactive and highly curated data experience within your application
// This file is used to embed a dashboard using LookerEmbedSDK with EmbedBuilder to initialize your connection and help create the iframe element

import React, { useCallback } from "react";
import styled from "styled-components";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import { Space } from "@looker/components";




const EmbedDashboard1 = () => {
  const [loading, setLoading] = React.useState(true);
  /*
   Step 1 Initialization of the EmbedSDK happens when the user first access the application
   See App.js for reference
  */

  const makeDashboard = useCallback((el) => {
    if (!el) {
      return;
    }
    el.innerHTML = "";
    /*
      Step 2 Create your dashboard (or other piece of embedded content) through a simple set of chained methods
    */
    LookerEmbedSDK.createDashboardWithId(
      "data_block_acs_bigquery::acs_census_overview"
    )
      // adds the iframe to the DOM as a child of a specific element
      .appendTo(el)
      // the .on() method allows us to listen for and respond to events inside the iframe. See here for a list of events: https://docs.looker.com/reference/embedding/embed-javascript-events
      .on("dashboard:loaded", (e) => {
        console.log("LookerEmbedSDK.createDashboardWithId()::Successfully Loaded!");
      })
      // this line performs the call to the auth service to get the iframe's src='' url, places it in the iframe and the client performs the request to Looker
      .build()
      // this establishes event communication between the iframe and parent page
      .connect()
      .then(() => setLoading(false))
      // catch various errors which can occur in the process (note: does not catch 404 on content)
      .catch((error) => {
        console.error("An unexpected error occurred", error);
      });
  }, []);

  return (
    <Space height="calc(100% - 45px)">
      <div className={"embed-dashboard-main"}>

      />
        {/* Step 0) we have a simple container, which performs a callback to our makeDashboard function */}
        <Dashboard ref={makeDashboard}></Dashboard>
      </div>
    </Space>
  );
};

// A little bit of style here for heights and widths.
const Dashboard = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;
export default EmbedDashboard1;
