// Student-looking placeholder avatars - 1 boy, 2 girls
const boyAvatar = "https://api.dicebear.com/7.x/notionists-neutral/svg?seed=rahul&backgroundColor=b6e3f4";
const girlAvatar1 = "https://api.dicebear.com/7.x/notionists-neutral/svg?seed=priya&backgroundColor=ffd5dc";
const girlAvatar2 = "https://api.dicebear.com/7.x/notionists-neutral/svg?seed=ananya&backgroundColor=d1d4f9";

export type HackerTestimonialsData = {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  logo: string;
};

const hackerTestimonialsData: HackerTestimonialsData[] = [
  {
    id: 0,
    name: "Aspire Finance",
    tagline: "Fintech",
    description:
      "Aspire Finance is an RBI-registered NBFC committed to boosting financial inclusion for MSMEs in India by providing accessible, fully digital working capital loans with zero paperwork.",
    image: boyAvatar,
    logo: "/images/testimonials/hackers/Aspire-finance.png",
  },
  {
    id: 1,
    name: "Hampi Labs",
    tagline: "Tourism & Hospitality",
    description:
      "Hampi Labs is a forward-thinking company dedicated to solving real-world challenges in tourism and hospitality. We blend technology, research, and on-ground insights to create smarter, more efficient travel experiences for everyone.",
    image: girlAvatar2,
    logo: "/images/testimonials/hackers/Hampi-labs.png",
  },

];

export default hackerTestimonialsData;
