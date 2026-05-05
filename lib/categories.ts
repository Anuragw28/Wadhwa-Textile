export type Product = {
  name: string;
  variant: string;
  fabric: string;
  sizes: string;
  moq: number;
  image: string;
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  moq: number;
  image: string;
  subcategories: string[];
  products: Product[];
};

const STITCH_IMAGES = {
  tshirt:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEDOb0FwNkWV1hLNxQkzW_YH64RLEonwLr0nfMzHa9yuy7lp8TUjWDA3UJQvpik_1Xxaru3wLpPJV_N57a7U51ks6v0tdmTa7jP-2-aaqx31vP0oMcJXAeIXJisBo7QDQHSJYfPpfP2YlPJ-6gYSJM-LCvytKb5pvLiY8e970IYwJZ8hIUFiVhxUC_e_HwbuNtpwuDcSS2fyHgAuPXUL8NfsAuItXqiblmMo4W8nNJSkIp5sJ_3SqXgkVDeYg_yF7iliaesEenlOLb",
  lowers:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDPXrMU8C2ZnpGhQ5VFLb74N_hIqtxWOwc4i93eBB6mnbTcO60ud9A_IZRWXs2g0m6wXMGJj1wIhtPmz9wlT8hfYtymwoYsv3EyhsY4f4UE2atgYs7iCXKd5HmAr6CdSEoE1exgyDjUijKz8NYp3AHHD74L7LXjSeTZrr7Ot7JGAbL7XwlC6qvqHRm3Dcvxj85XbCzw1Da8sr2vZCDaDLM-CUFfinmN7yqhBVhiGKV1SFP7SBe5uW4uCYI_eUvxjAT37o-NKQbPcZEL",
  jackets:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBELDcJtele-G6ZL3PA8kCta5NYb84KXF_Z19jBwq6_0_YzwX-UEpKY0a8Ps8GOOQuCIUqSv-k7COeC1BrcIxvCNojLq2XL6FnDw10OkEDzv7av7Ef2N_751AXFokOz1Q-I1s82EPy9wOcQSIVP6CRw3qf8zJgRObWr8okOTeftSCHzN7n8_Jr8u4AzlmLiAODM3oPscqI_K2__RCFF38FcK6jY6bjrLo5KmHMreDmgOtzRps2Qxe0okkqBvG0rlGu5s-koRQMqOF0G",
  kids:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrma3PRXGj1xC70Xl74RqEe_ZZmOywsvVBn-7HPXHv4-cxJ6s0FOt8dfIB4EYCUx8C3aqmTyxg4oifk9jOpwMDWJVbDcWMOMR2m4HRECjdZASmb3_TNJ6VWEWf2ylGn7Mrn1xsi7R6dEy9MSbIhwQCofTuWIi2BME5pqwmb0mddoVCrMc22djINxqZOWBbKGLjDMw6HsC62wnl2UH5jREV6MsXBaepNz4p9-f9ivd6-IhT224rTWK71Pk4ucv7BvATX244ZhtmYeTj",
  accessories:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYcHtVa5yf8_TOQwGYmfEMINJU_Q4oby3ydw6Bp8eGFdj8x9NvJhMSruq2OAxBbnHGYwGl-VLdpnTegNf7Y_IPly3Ct7jsTa1jbtWhUi_Lkp9_A_I51GUTL86JeEOQ1RLR20IGRbdpwrGrYAG-P6vTVf993s2OTW_5qEs8UibcG1fxUeMvjRFppqrseQjq2mAItgtMSPYpA_-OsIFK5ArLDaP38TTsmbEUYDumWSn4HUcH3GaJKln1ZY7GRBt6ZrHnqQmR7EdlDvQ6",
  tshirtA:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDBCZDA9v29CayPcp_vG4z03b4XddL7abvAwKOMMOpFe73riutlR8lSjh6JJG0FfZUQhmmBkNAsTei4VZO-wJqNKOx92aHWNdX-xTNtJtsWz8UgpD21upajWNXFVitG2EhZUAt2kF0V97L9VuWYW7gtNqXGkf3ej1IJKARVtuUjwAqn8I_eTQgAXWSXiHA2ww-IHwjDvduLUCewkf5XJEt1Q27Asi-VQZOddwtzp-d8jSHr3fibyDdz6mIgh78JZ7naIQm4hl8b3onN",
  tshirtB:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3odaDkC2Weto02z9usy6rZYPFZq14cMOQHrx7ahJIji4D8pNh70nLUX25WE-t5Y36qUI5O0KkFUCbaOQR5XX25hSbMzeDI8leBaFSYp0SUt3g8E6plqJZigWfibcLG2neUTYDbrhVyzUWPy0yLYv0sCVAc9os0ucsUiXmhpNUUG2-iLB2whiFRTDqHMNF9STqbgjiaNKVm29GDr6lmE98eBY_yejwW40x7DR4Qvy0QgvpNhziovzWYIjVAQbYQbBTjyj5zwL6FVl",
  tshirtC:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmIkcebUklQJkmPBXklBIxsPDwD99H3heYzybk-SFJohPEeM3GZKr8y20ouU2yPjcxeC7hKeXa3xCwXYVt-m2lhUDWH7oIiQkM816D6sZ58XAZSmrdtenDUUn98JhhD5Z0CRz9AYoG-ZtQPA_ta43Bu2mjA0eZCGz1nmRpfPALJ8fkDobxgm4KhC6piQTAFNWhemGZM728-16MNx1mpA3z90Ojk6YISIVm8VHGvwczvXRz62gRhYytz8uOvU7yjd6cQsQic_L1WHqY",
};

export const CATEGORIES: Category[] = [
  {
    slug: "t-shirts",
    name: "T-Shirts",
    short: "Plain, Printed & Polo",
    description:
      "High-GSM combed cotton blends for retail, corporate and bulk requirements. Plain, printed and polo styles in standard size sets.",
    moq: 50,
    image: STITCH_IMAGES.tshirt,
    subcategories: ["Plain Crew Neck", "Printed", "Polo Pique"],
    products: [
      {
        name: "Classic Crew Neck",
        variant: "220 GSM",
        fabric: "100% Combed Cotton",
        sizes: "S – XXL",
        moq: 100,
        image: STITCH_IMAGES.tshirtA,
      },
      {
        name: "Executive Polo",
        variant: "Pique Blend",
        fabric: "Poly-Cotton Blend",
        sizes: "M – 3XL",
        moq: 50,
        image: STITCH_IMAGES.tshirtB,
      },
      {
        name: "V-Neck Premium",
        variant: "Stretch Fit",
        fabric: "Cotton-Spandex",
        sizes: "S – XXL",
        moq: 100,
        image: STITCH_IMAGES.tshirtC,
      },
    ],
  },
  {
    slug: "lowers",
    name: "Lowers & Tracks",
    short: "Men's, Women's, Kids",
    description:
      "Athletic joggers, track pants and lowers in cotton and poly-cotton. Comfortable cuts engineered for daily wear and athleisure retail.",
    moq: 30,
    image: STITCH_IMAGES.lowers,
    subcategories: ["Men's Joggers", "Women's Track Pants", "Kids Lowers"],
    products: [
      {
        name: "Slim-Fit Jogger",
        variant: "Tapered",
        fabric: "Cotton-Poly Fleece",
        sizes: "S – XXL",
        moq: 50,
        image: STITCH_IMAGES.lowers,
      },
      {
        name: "Classic Track Pant",
        variant: "Straight Cut",
        fabric: "Polyester",
        sizes: "M – 3XL",
        moq: 30,
        image: STITCH_IMAGES.lowers,
      },
      {
        name: "Kids Lower",
        variant: "Elastic Waist",
        fabric: "Cotton",
        sizes: "2Y – 14Y",
        moq: 100,
        image: STITCH_IMAGES.lowers,
      },
    ],
  },
  {
    slug: "jackets",
    name: "Jackets & Hoodies",
    short: "Seasonal Collection",
    description:
      "Winter-ready jackets, hoodies and sweatshirts. Heavy GSM fleece and poly-fill options for retail seasonal stocking.",
    moq: 20,
    image: STITCH_IMAGES.jackets,
    subcategories: ["Pullover Hoodie", "Zipper Jacket", "Bomber"],
    products: [
      {
        name: "Pullover Hoodie",
        variant: "320 GSM",
        fabric: "Brushed Fleece",
        sizes: "S – XXL",
        moq: 30,
        image: STITCH_IMAGES.jackets,
      },
      {
        name: "Zipper Jacket",
        variant: "Full-Zip",
        fabric: "Poly-Cotton",
        sizes: "M – 3XL",
        moq: 20,
        image: STITCH_IMAGES.jackets,
      },
      {
        name: "Quilted Bomber",
        variant: "Insulated",
        fabric: "Nylon Shell",
        sizes: "S – XL",
        moq: 25,
        image: STITCH_IMAGES.jackets,
      },
    ],
  },
  {
    slug: "kids",
    name: "Baby & Kids",
    short: "Newborn to 12 yrs",
    description:
      "Soft cotton baby sets, toddler tees and kids essentials. Skin-safe dyes and reinforced stitching for retail children's segments.",
    moq: 100,
    image: STITCH_IMAGES.kids,
    subcategories: ["Newborn Sets", "Toddler Tees", "Kids 8–12"],
    products: [
      {
        name: "Newborn Set",
        variant: "3-Piece",
        fabric: "100% Cotton",
        sizes: "0–12M",
        moq: 100,
        image: STITCH_IMAGES.kids,
      },
      {
        name: "Toddler Tee",
        variant: "Crew Neck",
        fabric: "Combed Cotton",
        sizes: "1Y – 6Y",
        moq: 100,
        image: STITCH_IMAGES.kids,
      },
      {
        name: "Kids Polo",
        variant: "School-ready",
        fabric: "Pique Cotton",
        sizes: "6Y – 14Y",
        moq: 100,
        image: STITCH_IMAGES.kids,
      },
    ],
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Caps, Ties, Socks",
    description:
      "B2B accessories for retail and uniform programmes — caps, ties, socks, bandanas and more in bulk packs.",
    moq: 100,
    image: STITCH_IMAGES.accessories,
    subcategories: ["Caps", "Ties", "Socks"],
    products: [
      {
        name: "6-Panel Cap",
        variant: "Adjustable",
        fabric: "Cotton Twill",
        sizes: "Free Size",
        moq: 100,
        image: STITCH_IMAGES.accessories,
      },
      {
        name: "Formal Tie",
        variant: "Slim",
        fabric: "Polyester",
        sizes: "Standard",
        moq: 100,
        image: STITCH_IMAGES.accessories,
      },
      {
        name: "Crew Socks",
        variant: "Cotton Blend",
        fabric: "Cotton-Lycra",
        sizes: "Free Size",
        moq: 200,
        image: STITCH_IMAGES.accessories,
      },
    ],
  },
  {
    slug: "handkerchiefs",
    name: "Handkerchiefs",
    short: "Bulk Packs",
    description:
      "Cotton handkerchiefs in printed and plain bulk packs — a long-running staple of the Wadhwa Textiles range.",
    moq: 200,
    image: STITCH_IMAGES.accessories,
    subcategories: ["Plain", "Printed", "Premium"],
    products: [
      {
        name: "Plain Cotton Hanky",
        variant: "Pack of 12",
        fabric: "100% Cotton",
        sizes: "Standard",
        moq: 200,
        image: STITCH_IMAGES.accessories,
      },
      {
        name: "Printed Hanky",
        variant: "Pack of 12",
        fabric: "Cotton",
        sizes: "Standard",
        moq: 200,
        image: STITCH_IMAGES.accessories,
      },
      {
        name: "Premium Hanky",
        variant: "Hemmed",
        fabric: "Combed Cotton",
        sizes: "Standard",
        moq: 100,
        image: STITCH_IMAGES.accessories,
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
