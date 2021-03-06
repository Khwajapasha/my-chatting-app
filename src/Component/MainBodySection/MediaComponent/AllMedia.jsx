import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MediaAlignment } from "./MediaAlignment";
import { MediaASList } from "./MediaASList";
import { MediaBasicExample } from "./MediaBasicExample";
import { MediaNesting } from "./MediaNesting";
import { MediaOrdered } from "./MediaOrdered";
export const AllMedia = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <MediaBasicExample />
          <MediaNesting />
          <MediaAlignment />
          <MediaOrdered />
          <MediaASList />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Media</Button>
      </div>
    </React.Fragment>
  );
};
