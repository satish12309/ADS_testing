import React, { memo } from "react";
import dynamic from "next/dynamic";
const Popup = dynamic(() => import("../popup/Popup"));
const Form = dynamic(() => import("../form/Form"));

const PopupContent = ({
  popups,
  setPopups,
  heading,
  downloadBrochure,
  brochureLink,
  brochurePdf,
  isDSA
}) => {
  return (
    <Popup
      trigger={popups}
      setTrigger={setPopups}
      className="popupModal"
      popup={true}
    >
      <div className="RightPopup">
        <h5>{heading}</h5>
        <Form
          downloadBrochure={downloadBrochure}
          brochureLink={brochureLink}
          brochurePdf={brochurePdf}
          DSAdownloadBrochure={isDSA}
        />
      </div>
    </Popup>
  );
};
export default memo(PopupContent);
