import React from "react";
import { InfiniteCarousel } from "@/components";
import { useDeviceSize } from "@/utils";
import styled from "styled-components";

import Avatar from "./avatar";
import { ORGANIZERS, Organizer, Train } from "./constants";
import Ion from "./ion";

interface OrganizerCarouselRowProps {
  selectedOrganizer: Organizer | null;
  handleOnHover: (organizer: Organizer) => void;
  handleOnLeave: () => void;
}

const OrganizerCarousel: React.FC<OrganizerCarouselRowProps> = ({
  selectedOrganizer,
  handleOnHover,
  handleOnLeave,
}) => {
  const isMediumOrSmaller = useDeviceSize("medium");

  return (
    <div>
      <StyledInfiniteCarousel
        name="organizers-carousel"
        stopOnHover={!isMediumOrSmaller}
        direction="left"
        aria-label="Organizers Carousel"
        paused={!!selectedOrganizer}
        speed={50}
      >
        {Object.keys(ORGANIZERS).map((train) => {
          const t = train as Train;
          return (
            <Ion key={train} train={t}>
              {ORGANIZERS[t].map((organizer) => (
                <Avatar
                  key={organizer.name}
                  src={organizer.img}
                  name={organizer.name}
                  selectedOrganizer={selectedOrganizer}
                  handleOnHover={() => handleOnHover(organizer)}
                  handleOnLeave={handleOnLeave}
                  isMediumOrSmaller={isMediumOrSmaller}
                />
              ))}
            </Ion>
          );
        })}
      </StyledInfiniteCarousel>
    </div>
  );
};

const StyledInfiniteCarousel = styled(InfiniteCarousel)`
  width: 100%;
  margin-top: 48px;
`;

export default OrganizerCarousel;

