import {
  AgamjotImg,
  CatherineImg,
  FengImg,
  KevinImg,
  RickImg,
  AlexImg,
  CharleneImg,
  GinnyImg,
  LeoImg,
  RoselynImg,
  AndrewImg,
  ColetteImg,
  HargunImg,
  LevinaImg,
  SerenaImg,
  AnnetteImg,
  DanielChenImg,
  IanImg,
  LisaImg,
  TongImg,
  AnurajImg,
  DanielYuImg,
  IshaanImg,
  MaggieImg,
  WeinnaImg,
  ArpitaImg,
  DorianImg,
  IvanImg,
  MeganImg,
  YassineImg,
  AryaImg,
  EmilyImg,
  JasmineImg,
  NimaImg,
  ZhilingImg,
  BradleyImg,
  EmmaImg,
  JeffImg,
  OliviaImg,
  CaitlinImg,
  EricImg,
  JosephImg,
  OriImg,
  CarolineImg,
  EugeneImg,
  KateImg,
  PhuongImg,
  BackendIon,
  FinanceIon,
  LeadershipIon,
  MarketingIon,
  DesignIon,
  FrontendIon,
  LogisticsIon,
  SponsorshipIon,
} from "@/assets/img";

export type Team =
  | "Backend"
  | "Co-Director"
  | "Design"
  | "Finance"
  | "Frontend"
  | "Internal Operations"
  | "Logistics"
  | "Marketing"
  | "Product Manager"
  | "Sponsorship";

export type Train =
  | "Leadership"
  | "Finance"
  | "Sponsorship"
  | "Logistics"
  | "Marketing"
  | "Design"
  | "Frontend"
  | "Backend";

export interface Organizer {
  name: string;
  team: Team;
  emoji: string;
  img: string;
}

export const IONS: Record<Train, string> = {
  Leadership: LeadershipIon,
  Finance: FinanceIon,
  Sponsorship: SponsorshipIon,
  Logistics: LogisticsIon,
  Marketing: MarketingIon,
  Design: DesignIon,
  Frontend: FrontendIon,
  Backend: BackendIon,
};

export const ORGANIZERS: Record<Train, Organizer[]> = {
  Leadership: [
    {
      name: "Joseph Wang",
      team: "Co-Director",
      emoji: "🤩",
      img: JosephImg,
    },
    {
      name: "Jasmine Jiang",
      team: "Co-Director",
      emoji: "😆",
      img: JasmineImg,
    },
    {
      name: "Caitlin Wong",
      team: "Internal Operations",
      emoji: "🩷",
      img: CaitlinImg,
    },
    {
      name: "Bradley Herrera Contreras",
      team: "Product Manager",
      emoji: "😳",
      img: BradleyImg,
    },
  ],
  Finance: [
    {
      name: "Jeff Zhu",
      team: "Finance",
      emoji: "🔥",
      img: JeffImg,
    },
    {
      name: "Ori Erlich",
      team: "Finance",
      emoji: "🏎️",
      img: OriImg,
    },
  ],
  Sponsorship: [
    {
      name: "Hargun Sibal",
      team: "Sponsorship",
      emoji: "🙀",
      img: HargunImg,
    },
    {
      name: "Anuraj Shah",
      team: "Sponsorship",
      emoji: "👑",
      img: AnurajImg,
    },
    {
      name: "Lisa Zhao",
      team: "Sponsorship",
      emoji: "🤗",
      img: LisaImg,
    },
    {
      name: "Leo Huang",
      team: "Sponsorship",
      emoji: "🗿",
      img: LeoImg,
    },
    {
      name: "Zhi Ling Jiang",
      team: "Sponsorship",
      emoji: "🤩",
      img: ZhilingImg,
    },
    {
      name: "Arya Patel",
      team: "Sponsorship",
      emoji: "🦦",
      img: AryaImg,
    },
    {
      name: "Maggie Lu",
      team: "Sponsorship",
      emoji: "👺",
      img: MaggieImg,
    },
  ],
  Logistics: [
    {
      name: "Nima Sheth",
      team: "Logistics",
      emoji: "🦙",
      img: NimaImg,
    },
    {
      name: "Yassine Elhedhli",
      team: "Logistics",
      emoji: "💪",
      img: YassineImg,
    },
    {
      name: "Emily Dai",
      team: "Logistics",
      emoji: "🧍‍♀️",
      img: EmilyImg,
    },
    {
      name: "Kevin Guo",
      team: "Logistics",
      emoji: "🆒",
      img: KevinImg,
    },
    {
      name: "Colette Jiang",
      team: "Logistics",
      emoji: "🥰",
      img: ColetteImg,
    },
    {
      name: "Charlene Shao",
      team: "Logistics",
      emoji: "👹",
      img: CharleneImg,
    },
    {
      name: "Caroline Huang",
      team: "Logistics",
      emoji: "🧐",
      img: CarolineImg,
    },
    {
      name: "Ian Korovinsky",
      team: "Logistics",
      emoji: "🙈",
      img: IanImg,
    },
    {
      name: "Tong Liu",
      team: "Logistics",
      emoji: "😶‍🌫️",
      img: TongImg,
    },
    {
      name: "Olivia Wang",
      team: "Logistics",
      emoji: "🦦",
      img: OliviaImg,
    },
    {
      name: "Rick Liu",
      team: "Logistics",
      emoji: "🤠",
      img: RickImg,
    },
  ],
  Design: [
    {
      name: "Kate Lee",
      team: "Design",
      emoji: "🥰",
      img: KateImg,
    },
    {
      name: "Phuong Tu",
      team: "Design",
      emoji: "🐙",
      img: PhuongImg,
    },
    {
      name: "Serena Li",
      team: "Design",
      emoji: "😱",
      img: SerenaImg,
    },
    {
      name: "Weinna Zheng",
      team: "Design",
      emoji: "🦫",
      img: WeinnaImg,
    },
    {
      name: "Ginny Wang",
      team: "Design",
      emoji: "😼",
      img: GinnyImg,
    },
    {
      name: "Levina Indrawan",
      team: "Design",
      emoji: "💙",
      img: LevinaImg,
    },
  ],
  Marketing: [
    {
      name: "Catherine Ye",
      team: "Marketing",
      emoji: "🌸",
      img: CatherineImg,
    },
    {
      name: "Annette Uyen Ny Le",
      team: "Marketing",
      emoji: "🐻",
      img: AnnetteImg,
    },
    {
      name: "Agamjot Kaur",
      team: "Marketing",
      emoji: "😽",
      img: AgamjotImg,
    },
    {
      name: "Arpita Savaliya",
      team: "Marketing",
      emoji: "🙈",
      img: ArpitaImg,
    },
  ],
  Frontend: [
    {
      name: "Roselyn Huynh",
      team: "Frontend",
      emoji: "🦀",
      img: RoselynImg,
    },
    {
      name: "Eugene Zhang",
      team: "Frontend",
      emoji: "😁",
      img: EugeneImg,
    },
    {
      name: "Dorian Chen",
      team: "Frontend",
      emoji: "🐶",
      img: DorianImg,
    },
    {
      name: "Eric Xie",
      team: "Frontend",
      emoji: "😊",
      img: EricImg,
    },
    {
      name: "Feng Zhang",
      team: "Frontend",
      emoji: "💀",
      img: FengImg,
    },
    {
      name: "Ishaan Dey",
      team: "Frontend",
      emoji: "😵‍💫",
      img: IshaanImg,
    },
    {
      name: "Megan Wu",
      team: "Frontend",
      emoji: "🤠",
      img: MeganImg,
    },
  ],
  Backend: [
    {
      name: "Daniel Yu",
      team: "Backend",
      emoji: "🤤",
      img: DanielYuImg,
    },
    {
      name: "Daniel Chen",
      team: "Backend",
      emoji: "🥚",
      img: DanielChenImg,
    },
    {
      name: "Emma Huang",
      team: "Backend",
      emoji: "😊",
      img: EmmaImg,
    },
    {
      name: "Ivan Yu",
      team: "Backend",
      emoji: "🤫",
      img: IvanImg,
    },
    {
      name: "Alex Aumais",
      team: "Backend",
      emoji: "🎉",
      img: AlexImg,
    },
    {
      name: "Andrew Chen",
      team: "Backend",
      emoji: "🙂",
      img: AndrewImg,
    },
  ],
};

