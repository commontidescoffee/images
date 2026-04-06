// ═══════════════════════════════════════════════════════════════════
//  COMMON TIDES COFFEE — MENU DATA
//  Loaded by both the website menu and the printable menu.
//
//  ✏️  TO ADD AN ITEM:
//      Copy any existing item below, paste it in the right section,
//      and change the name / price / detail.
//
//  🗑️  TO REMOVE AN ITEM:
//      Delete the { ... } block for that item (and the comma before it).
//
//  💰  PRICE FORMATS:
//      Single price → price: "$6.75"
//      Multiple sizes → sizes: [ { label: "12 oz", price: "$5.00" },
//                                 { label: "16 oz", price: "$5.50" } ]
//
//  🏷️  BADGE (optional — remove the line to show no badge):
//      badge: "Signature"   or   badge: "New"
// ═══════════════════════════════════════════════════════════════════

const MENU_DATA = {

  // ── ESPRESSO DRINKS ─────────────────────────────────────────────
  espresso: [
    {
      name:   "Espresso",
      detail: "Hot only · Double shot",
      price:  "$3.75"
    },
    {
      name:   "Americano",
      detail: "Hot or Iced",
      sizes:  [
        { label: "12 oz Hot",  price: "$4.25" },
        { label: "16 oz Iced", price: "$4.75" }
      ]
    },
    {
      name:   "Latte",
      detail: "Hot or Iced · 16 oz",
      price:  "$6.00"
    },
    {
      name:   "Cappuccino",
      detail: "Hot only · 12 oz",
      price:  "$5.25"
    },
    {
      name:   "Mocha",
      detail: "Hot or Iced · 16 oz",
      price:  "$6.75"
    }
  ],

  // ── SPECIALTY LATTES ─────────────────────────────────────────────
  specialty: [
    {
      name:   "Salted Caramel Latte",
      badge:  "Signature",
      detail: "Pink Himalayan Sea Salt · Rich & Balanced · Hot or Iced",
      price:  "$6.75"
    },
    {
      name:   "Maple Syrup Latte",
      detail: "Grade A Maple Syrup · Hot or Iced",
      price:  "$6.75"
    },
    {
      name:   "Vanilla Latte",
      detail: "Classic & Smooth · Hot or Iced",
      price:  "$6.75"
    },
    {
      name:   "Vanilla Matcha",
      badge:  "New",
      detail: "Ceremonial Grade Matcha · Vanilla · Milk of Your Choice",
      sizes:  [
        { label: "Hot 12oz",  price: "$5.00" },
        { label: "Iced 16oz", price: "$5.50" }
      ]
    }
  ],

  // ── NON-COFFEE ───────────────────────────────────────────────────
  noncoffee: [
    {
      name:   "The Golden Hour",
      badge:  "Signature",
      detail: "Turmeric · Warming Spices · Hot",
      sizes:  [
        { label: "12 oz", price: "$5.50" },
        { label: "16 oz", price: "$6.00" }
      ]
    },
    {
      name:   "Hot Chocolate",
      detail: "Hot · 12 oz · Oat or Almond Milk available +$1.00",
      price:  "$4.75"
    },
    {
      name:   "London Fog",
      detail: "Earl Grey · Vanilla · Steamed Milk · 12 oz · Alt Milk +$1.00",
      price:  "$4.00"
    },
    {
      name:   "Hot Tea",
      detail: "Earl Grey · Irish Breakfast · English Breakfast · 12 oz",
      price:  "$2.50"
    },
    {
      name:   "Bottled Water",
      price:  "$1.00"
    }
  ],

  // ── ADD-ONS ──────────────────────────────────────────────────────
  addons: {
    extras: [
      { name: "Extra Shot",    price: "+$1.50" },
      { name: "Oat Milk",      price: "+$1.00" },
      { name: "Almond Milk",   price: "+$1.00" },
      { name: "Flavor Syrup",  price: "+$0.75" },
      { name: "Whipped Cream", price: "+$0.50" }
    ],
    milks: [
      { name: "Whole Milk" },
      { name: "Half & Half" },
      { name: "Oat Milk +$1.00",    accent: true },
      { name: "Almond Milk +$1.00", accent: true }
    ],
    syrups: [
      "Caramel",
      "Vanilla",
      "Sugar-Free Vanilla",
      "Maple Syrup"
    ],
    toppings: [
      "Cinnamon",
      { name: "Whipped Cream +$0.50", accent: true }
    ]
  }

};
