export const mockData = [
  {
    id: 1,
    author: 'jacob',
    title: 'Fishing vocabulary',
    description: 'A collection of fishing vocabulary',
    cards: [
      {
        id: 1,
        front: {
          title: 'Fishing',
          example: 'I went fishing last weekend.',
          definition: 'The act of catching fish.',
        },
        back: {
          title: 'Łowienie ryb',
          example: 'Poszedłem na łowienie ryb w ubiegłym tygodniu.',
          definition: 'Działanie mające na celu złapanie ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        front: {
          title: 'Fishing rod',
          example: 'He bought a new fishing rod.',
          definition: 'A long, thin pole used to catch fish.',
        },
        back: {
          title: 'Wędka',
          example: 'Kupił nową wędkę.',
          definition: 'Długi, cienki kij używany do łowienia ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        front: {
          title: 'Bait',
          example: 'Worms are often used as bait.',
          definition: 'Food or lure used to attract fish.',
        },
        back: {
          title: 'Przynęta',
          example: 'Robaki są często używane jako przynęta.',
          definition: 'Pokarm lub wabik używany do przyciągnięcia ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        front: {
          title: 'Hook',
          example: 'Be careful not to get caught on the hook.',
          definition: 'A curved piece of metal for catching fish.',
        },
        back: {
          title: 'Haczyk',
          example: 'Uważaj, żeby nie zaczepić się o haczyk.',
          definition: 'Zakrzywiony kawałek metalu do łapania ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        front: {
          title: 'Line',
          example: 'The fishing line snapped under pressure.',
          definition: 'A thin cord used in fishing.',
        },
        back: {
          title: 'Żyłka',
          example: 'Żyłka wędkarska pękła pod naciskiem.',
          definition: 'Cienki sznurek używany do łowienia ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        front: {
          title: 'Reel',
          example: 'She quickly turned the reel to pull in the fish.',
          definition: 'A device used to wind and unwind the fishing line.',
        },
        back: {
          title: 'Kołowrotek',
          example: 'Szybko obróciła kołowrotek, aby wyciągnąć rybę.',
          definition: 'Urządzenie do nawijania i odwijania żyłki.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        front: {
          title: 'Net',
          example: 'They caught the fish with a large net.',
          definition: 'A mesh device used to catch multiple fish.',
        },
        back: {
          title: 'Sieć',
          example: 'Złapali ryby dużą siecią.',
          definition: 'Siatkowe urządzenie do łapania wielu ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        front: {
          title: 'Lure',
          example: 'He used a shiny lure to attract bass.',
          definition: 'An artificial object used to attract fish.',
        },
        back: {
          title: 'Wobler',
          example: 'Użył błyszczącego woblera, żeby przyciągnąć okonia.',
          definition: 'Sztuczny obiekt używany do przyciągania ryb.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        front: {
          title: 'Catch and release',
          example:
            'They practice catch and release to protect fish populations.',
          definition:
            'A fishing method where fish are caught and then released.',
        },
        back: {
          title: 'Złów i wypuść',
          example: 'Stosują metodę "złów i wypuść", aby chronić populacje ryb.',
          definition: 'Metoda łowienia, w której ryby są łapane i wypuszczane.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        front: {
          title: 'Tackle box',
          example: 'His tackle box was full of hooks and lures.',
          definition: 'A container for fishing equipment.',
        },
        back: {
          title: 'Skrzynka wędkarska',
          example: 'Jego skrzynka wędkarska była pełna haczyków i woblerów.',
          definition: 'Pojemnik na sprzęt wędkarski.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    tags: [
      {
        text: 'Fishing',
        id: '1',
      },
      {
        text: 'Adventure',
        id: '2',
      },
    ],
    visibility: 'public' as const,
    isFavorite: false,

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    author: 'lucias',
    title: 'Camping vocabulary',
    description: 'Useful terms for camping activities and gear.',
    cards: [
      {
        id: 1,
        front: {
          title: 'Tent',
          example: 'We set up our tent near the lake.',
          definition: 'A portable shelter used outdoors.',
        },
        back: {
          title: 'Namiot',
          example: 'Rozstawiliśmy namiot nad jeziorem.',
          definition: 'Przenośne schronienie używane na zewnątrz.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        front: {
          title: 'Campfire',
          example: 'We roasted marshmallows over the campfire.',
          definition: 'A fire built at a campsite.',
        },
        back: {
          title: 'Ognisko',
          example: 'Piekliśmy pianki nad ogniskiem.',
          definition: 'Ogień rozpalony na kempingu.',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    tags: [
      {
        text: 'Fishing',
        id: '1',
      },
      {
        text: 'Adventure',
        id: '2',
      },
    ],
    visibility: 'public' as const,
    isFavorite: false,

    createdAt: new Date(),
    updatedAt: new Date(),
  },
]
