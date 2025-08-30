import React, { useEffect } from "react";

const FORM_ID = "1FAIpQLScmmGDN_28BP1x8R71x97zigdW94Q9FOyUq3R6n1uD4CfSUnA";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;

const Donation = () => {
  useEffect(() => {
    // Replace current history entry so Back doesn’t return to this stub
    window.location.replace(FORM_URL);
  }, []);

  // Optional minimal fallback for users with JS disabled could be a plain link,
  // but React apps generally require JS; render nothing.
  return null;
};

export default Donation;
