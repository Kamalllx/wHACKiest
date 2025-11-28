import { Milind, Ali, Simone } from "@/assets/img";

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
    name: "Milind Kumar",
    tagline: "Undergraduate Hacker",
    description:
      "wHACKiest is not just for building projects that will change the world, but for building relationships that will change your world. The friendships I now have because of wHACKiest will last a lifetime, and it was the long nights, poutine chats, and Jenga competitions that were catalysts to make them happen. Thanks wHACKiest for being an event to not only hack, but a place to enjoy a snack, race geese around a track, and meet lifelong friends who will always have your back.",
    image: Milind,
  },
  {
    id: 1,
    name: "Sohaila Ali",
    tagline: "Experienced Hacker, High School Student, STEM Field Hacker",
    description:
      "I was among the luckiest to have the awesome opportunity to hack at wHACKiest in 2023! First of all, I applied randomly. When I saw the acceptance email, I got extremely happy and quickly RSVPed. I couldn’t believe that I would get into such a competitive hackathon. Days before the event, I was debating whether I will be able to make it all the way from Oshawa to Waterloo or not… I took the chance, and here we are! I experienced the best hackathon ever! I must say that the organization was wonderful (schedules, time management, communication with hackers, workshops, transportation for hackers, etc), the food was delicious, the swag was very cool, the sponsors were top-tier, and let’s not forget the unique Apple Wallet and Google Wallet hacker tickets! I met many new people as well as my friends at the hackathon, which made my experience even better. Thriving for more ahead!",
    image: Ali,
  },
  {
    id: 2,
    name: "Simone Beshtoev",
    tagline: "First Time Hacker, High School Student, Non-STEM Field Hacker",
    description:
      "As a first-time, high-school hacker, I was intimidated by the idea of spending a weekend creating a project with complete strangers. But by the end, all of my worries were erased and I was left with some of my favourite memories. Building a super cool project with my awesome teammates was just scratching the surface. One highlight was the learning opportunities, including talks with the founders of wHACKiest, UW professors, experts from leading tech companies, and advice for prospecting startup founders. I could go on and on, talking about the amazing food (they really pulled through with those açai bowls and snacks, I felt like a Google intern), the endless support even for the most novice of hackers (like me), and the way that I got a maximum of 4 hours of sleep, yet was still bouncing off the walls (my teammates can attest to that). But the real magic of wHACKiest is the people. There’s really no better way to fast-track a friendship than to code the night away together. And being surrounded by so many passionate, intelligent individuals made me so proud and grateful to be part of this community. If there’s something you take away from my experience, it’s that there is a place for everyone in tech.",
    image: Simone,
  },
];

export default hackerTestimonialsData;


