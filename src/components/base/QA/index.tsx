import React from "react";
import { IS_PRODUCTION } from "@/utils/env";

import OrganizerTools from "./OrganizerTools";

const QA: React.FC = () => {
  return (
    <span>
      <OrganizerTools
        bugnub={{
          repoName: "whackiest",
          token: "9RQYZyziWGRIfGFZEkLNhlpskAt9T24D",
        }}
      />
    </span>
  );
};

export default QA;


