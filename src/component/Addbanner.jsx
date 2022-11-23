import React from "react";
import { useEffect } from "react";

const AddBanner = (props) => {
  const useDfpSlot = ({ path, size, id }) => {
    useEffect(() => {
      const googletag = window.googletag || {};
      googletag.cmd = googletag.cmd || [];
      googletag.cmd.push(function () {
        googletag.defineSlot(path, size, id)
          .addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
      });
      googletag.cmd.push(function () {
        googletag.display(id);
      });
    }, [path, size, id]);
  };
  useDfpSlot({
    path: props.path,
    size: [728, 90],
    id: props.id,
  });

  return (
    <>
      <div
        id={props.id}
        className="m-auto"
        style={{ 'max-width': props.Width + 'px', height: props.Height + 'px' }}
      />

    </>
  )
}

export default AddBanner;