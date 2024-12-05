const currentUserId = 1001;

// List of user ids from `/users.js`, without Current user.
const userIds = [
  1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014,
  1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024,
];

const randomIds = Array.from({ length: 200 }, (_, i) => 4001 + i);

// This generates the list of user ids that likes certain thing.
// We can then reference the user by ID and check who likes what.
// First it takes real users defined in our dataset. Then fills with random ids.
// If amount is odd, we add currentUser.
const generateAmountOfLikes = (amount = 10) =>
  amount % 2 === 0
    ? [...userIds, ...randomIds].slice(0, amount)
    : [currentUserId, ...userIds, ...randomIds].slice(0, amount);

export const posts = [
  {
    id: 1,
    userId: 1002,
    date: "2024-10-24T08:30:00",
    content: "Dziś rano odbyłam wspaniały spacer po parku! Piękna pogoda!",
    likes: generateAmountOfLikes(120),
    shares: 10,
    comments: [
      {
        id: 1,
        userId: 1003,
        date: "2024-10-24T09:00:00",
        content: "Brzmi super! Gdzie dokładnie spacerowałaś?",
        likes: generateAmountOfLikes(8),
      },
      {
        id: 2,
        userId: 1004,
        date: "2024-10-24T09:15:00",
        content: "Też tam byłam wczoraj! Świetne miejsce.",
        likes: generateAmountOfLikes(12),
      },
    ],
  },
  {
    id: 2,
    userId: 1005,
    date: "2024-10-23T16:45:00",
    content:
      "Zastanawiam się nad zakupem nowego roweru. Macie jakieś rekomendacje?",
    likes: generateAmountOfLikes(90),
    shares: 2,
    comments: [
      {
        id: 1,
        userId: 1006,
        date: "2024-10-23T17:00:00",
        content: "Sprawdź rowery górskie firmy XYZ. Mam jeden i jest super!",
        likes: generateAmountOfLikes(10),
      },
      {
        id: 2,
        userId: 1007,
        date: "2024-10-23T17:30:00",
        content: "Polecam rowery miejskie, są wygodne do codziennych dojazdów.",
        likes: generateAmountOfLikes(7),
      },
    ],
  },
  {
    id: 3,
    userId: 1008,
    date: "2024-10-22T14:22:00",
    content:
      "Oglądałam wczoraj świetny film dokumentalny o przyrodzie! Polecam wszystkim.",
    likes: generateAmountOfLikes(200),
    shares: 25,
    comments: [
      {
        id: 1,
        userId: 1009,
        date: "2024-10-22T15:00:00",
        content: "O jakim filmie mówisz? Szukam czegoś nowego do obejrzenia.",
        likes: generateAmountOfLikes(30),
      },
      {
        id: 2,
        userId: 1010,
        date: "2024-10-22T15:30:00",
        content: "Uwielbiam dokumenty przyrodnicze! Dzięki za rekomendację.",
        likes: generateAmountOfLikes(22),
      },
      {
        id: 3,
        userId: 1011,
        date: "2024-10-22T16:00:00",
        content: "Widziałam ten film. Naprawdę niesamowity!",
        likes: generateAmountOfLikes(18),
      },
    ],
  },
  {
    id: 4,
    userId: 1001,
    date: "2024-10-24T10:00:00",
    content: "Zaraz wychodzę na kawę z przyjaciółmi. Cieszę się!",
    likes: generateAmountOfLikes(45),
    shares: 5,
    comments: [],
  },
  {
    id: 5,
    userId: 1012,
    date: "2024-10-23T18:30:00",
    content:
      "Przygotowuję się do mojego pierwszego maratonu! Jestem podekscytowany!",
    likes: generateAmountOfLikes(100),
    shares: 8,
    comments: [
      {
        id: 1,
        userId: 1006,
        date: "2024-10-23T19:00:00",
        content: "Powodzenia! Trzymam kciuki!",
        likes: generateAmountOfLikes(12),
      },
      {
        id: 2,
        userId: 1007,
        date: "2024-10-23T19:15:00",
        content: "Zrób dobrze! Daj znać, jak poszło.",
        likes: generateAmountOfLikes(10),
      },
    ],
  },
  {
    id: 6,
    userId: 1003,
    date: "2024-10-22T12:15:00",
    content:
      "Ostatnio zaczęłam biegać i czuję się fantastycznie! Jakie są wasze ulubione trasy?",
    likes: generateAmountOfLikes(85),
    shares: 1,
    comments: [
      {
        id: 1,
        userId: 1010,
        date: "2024-10-22T12:30:00",
        content: "Polecam trasę w lesie, super widoki!",
        likes: generateAmountOfLikes(15),
      },
      {
        id: 2,
        userId: 1009,
        date: "2024-10-22T12:45:00",
        content: "Lubię biegać nad rzeką. Jest bardzo relaksująco.",
        likes: generateAmountOfLikes(18),
      },
    ],
  },
  {
    id: 7,
    userId: 1005,
    date: "2024-10-21T14:00:00",
    content:
      "Zamierzam spróbować nowego przepisu na ciasto. Ktoś ma doświadczenie?",
    likes: generateAmountOfLikes(75),
    shares: 3,
    comments: [
      {
        id: 1,
        userId: 1011,
        date: "2024-10-21T14:30:00",
        content: "Tak, to ciasto czekoladowe jest pyszne! Polecam!",
        likes: generateAmountOfLikes(20),
      },
      {
        id: 2,
        userId: 1006,
        date: "2024-10-21T14:45:00",
        content: "Zawsze wychodzi mi zakalec! Uważaj na temperaturę pieczenia.",
        likes: generateAmountOfLikes(8),
      },
    ],
  },
  {
    id: 8,
    userId: 1013,
    date: "2024-10-20T16:30:00",
    content:
      "Czy są tu fani podróży? Planuję wakacje za granicą. Jakie miejsca polecacie?",
    likes: generateAmountOfLikes(110),
    shares: 20,
    comments: [
      {
        id: 1,
        userId: 1007,
        date: "2024-10-20T17:00:00",
        content: "Gorąco polecam Włochy! Piękne miejsca do odwiedzenia.",
        likes: generateAmountOfLikes(30),
      },
      {
        id: 2,
        userId: 1014,
        date: "2024-10-20T17:30:00",
        content: "Kocham Hiszpanię! Świetne jedzenie i piękne plaże.",
        likes: generateAmountOfLikes(22),
      },
    ],
  },
  {
    id: 9,
    userId: 1015,
    date: "2024-10-19T09:15:00",
    content: "Mam zamiar spróbować jogi. Ktoś praktykuje?",
    likes: generateAmountOfLikes(60),
    shares: 2,
    comments: [
      {
        id: 1,
        userId: 1016,
        date: "2024-10-19T09:30:00",
        content: "Tak, to świetny sposób na relaks! Polecam.",
        likes: generateAmountOfLikes(18),
      },
      {
        id: 2,
        userId: 1008,
        date: "2024-10-19T09:45:00",
        content: "Zgadzam się! Joga to świetne ćwiczenie.",
        likes: generateAmountOfLikes(10),
      },
    ],
  },
  {
    id: 10,
    userId: 1018,
    date: "2024-10-18T15:30:00",
    content:
      "Czy są tutaj miłośnicy gier planszowych? Jakie są wasze ulubione?",
    likes: generateAmountOfLikes(95),
    shares: 5,
    comments: [
      {
        id: 1,
        userId: 1019,
        date: "2024-10-18T16:00:00",
        content: "Lubię Catan! Zawsze grałem z rodziną.",
        likes: generateAmountOfLikes(25),
      },
      {
        id: 2,
        userId: 1004,
        date: "2024-10-18T16:30:00",
        content: "Wielki fan Carcassonne! Świetna gra na wieczory.",
        likes: generateAmountOfLikes(15),
      },
    ],
  },
];
