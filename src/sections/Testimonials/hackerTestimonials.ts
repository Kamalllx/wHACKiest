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
};

const hackerTestimonialsData: HackerTestimonialsData[] = [
  {
    id: 0,
    name: "Rahul Sharma",
    tagline: "First Time Hacker",
    description:
      "wHACKiest was my first hackathon experience and it completely changed my perspective on what's possible in 24 hours. The mentorship, the energy, and the collaborative spirit made it unforgettable. I came in knowing basic coding and left with a working prototype and amazing friends. Can't wait for next year!",
    image: boyAvatar,
  },
  {
    id: 1,
    name: "Priya Patel",
    tagline: "Experienced Hacker, CSE Student",
    description:
      "Being part of wHACKiest was incredible! The problem statements were challenging yet achievable, and the mentors were super helpful. As a female coder, I especially appreciated the inclusive environment and the special track for women in tech. We stayed up all night coding, fueled by chai and snacks, and built something we're truly proud of.",
    image: girlAvatar1,
  },
  {
    id: 2,
    name: "Ananya Krishnan",
    tagline: "Design & Frontend Enthusiast",
    description:
      "What made wHACKiest special wasn't just the coding - it was the community. From ideation to final presentation, everyone supported each other. The workshops were super helpful, especially for someone like me who's more into design than backend. The 50,000 prize pool was exciting, but honestly, the connections I made and skills I learned were the real prizes!",
    image: girlAvatar2,
  },
];

export default hackerTestimonialsData;
