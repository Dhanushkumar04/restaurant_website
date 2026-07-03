/* ==========================================================================
   TOPI VAPPA APPLICATION ARCHITECTURE & LOGIC
   ========================================================================== */

const MENU_ITEMS = [
  {
    "id": "cream-of-chicken-soup",
    "name": "Cream of Chicken Soup",
    "price": 116,
    "type": "non-veg",
    "category": "soups",
    "spice": 1,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Creamy and comforting soup with shredded chicken, fresh herbs, and mild black pepper."
  },
  {
    "id": "hot-and-sour-chicken-soup",
    "name": "Hot and Sour Chicken Soup",
    "price": 145,
    "type": "non-veg",
    "category": "soups",
    "spice": 2,
    "servings": "Single",
    "tags": [
      "recommended"
    ],
    "description": "Spicy and tangy chicken soup loaded with fresh vegetables, chicken strips, and vinegar-soy broth."
  },
  {
    "id": "pepper-chicken-soup",
    "name": "Pepper Chicken Soup",
    "price": 145,
    "type": "non-veg",
    "category": "soups",
    "spice": 3,
    "servings": "Single",
    "tags": [],
    "description": "Fiery and aromatic chicken soup infused with freshly crushed black pepper and traditional spices."
  },
  {
    "id": "sweet-corn-chicken-soup",
    "name": "Sweet Corn Chicken Soup",
    "price": 145,
    "type": "non-veg",
    "category": "soups",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Classic sweet corn soup featuring tender chicken shreds, egg drops, and a smooth, sweet corn base."
  },
  {
    "id": "chicken-noodles-soup",
    "name": "Chicken Noodles Soup",
    "price": 145,
    "type": "non-veg",
    "category": "soups",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Warm and soothing chicken broth with soft noodles, shredded chicken, and fresh spring onions."
  },
  {
    "id": "mutton-pepper-soup",
    "name": "Mutton Pepper Soup",
    "price": 174,
    "type": "non-veg",
    "category": "soups",
    "spice": 3,
    "servings": "Single",
    "tags": [
      "specialty"
    ],
    "description": "Robust and spicy mutton bone broth flavored with fresh pepper, coriander, and garlic. Great for cold days."
  },
  {
    "id": "hot-and-sour-mutton",
    "name": "Hot and Sour Mutton",
    "price": 174,
    "type": "non-veg",
    "category": "soups",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Spicy and sour mutton broth cooked with shredded mutton, vinegar, bamboo shoots, and green chillies."
  },
  {
    "id": "sweet-corn-veg-soup",
    "name": "Sweet Corn Veg Soup",
    "price": 116,
    "type": "veg",
    "category": "soups",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Delectable sweet corn soup packed with finely chopped carrots, beans, and fresh sweet corn kernels."
  },
  {
    "id": "sweet-corn-mushroom-soup",
    "name": "Sweet Corn Mushroom Soup",
    "price": 116,
    "type": "veg",
    "category": "soups",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Creamy sweet corn soup infused with button mushrooms, green onions, and white pepper."
  },
  {
    "id": "mushroom-pepper-soup",
    "name": "Mushroom Pepper Soup",
    "price": 116,
    "type": "veg",
    "category": "soups",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Aromatic clear soup featuring fresh button mushrooms, crushed black pepper, and fresh coriander."
  },
  {
    "id": "baby-corn-soup",
    "name": "Baby Corn Soup",
    "price": 116,
    "type": "veg",
    "category": "soups",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Comforting clear soup made with tender baby corn slices, green vegetables, and mild spices."
  },
  {
    "id": "egg-masala",
    "name": "Egg Masala",
    "price": 174,
    "type": "egg",
    "category": "egg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Hard-boiled eggs cooked in a flavorful onion-tomato gravy with aromatic spices and fresh coriander."
  },
  {
    "id": "egg-burgi",
    "name": "Egg Burgi",
    "price": 72.5,
    "type": "egg",
    "category": "egg",
    "spice": 2,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Scrambled eggs tossed with finely chopped onions, green chillies, tomatoes, and traditional Indian spices."
  },
  {
    "id": "boiled-egg",
    "name": "Boiled Egg",
    "price": 14.5,
    "type": "egg",
    "category": "egg",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Freshly boiled farm-fresh egg, served shelled with a pinch of salt and pepper."
  },
  {
    "id": "mushroom-65",
    "name": "Mushroom 65",
    "price": 203,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Crispy button mushrooms marinated in spicy yogurt batter and deep-fried to golden perfection. Served with lemon."
  },
  {
    "id": "paneer-65",
    "name": "Paneer 65",
    "price": 217.5,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Succulent paneer cubes marinated in signature Southern 65 spice mix, deep-fried, and garnished with curry leaves."
  },
  {
    "id": "gobi-65",
    "name": "Gobi 65",
    "price": 145,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy cauliflower florets coated in a seasoned batter, deep-fried, and tossed with green chillies and curry leaves."
  },
  {
    "id": "chilli-paneer-dry",
    "name": "Chilli Paneer Dry",
    "price": 261,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Indo-Chinese classic starter featuring paneer cubes tossed with bell peppers, onions, and spicy chilli sauce."
  },
  {
    "id": "chilli-mushroom-dry",
    "name": "Chilli Mushroom Dry",
    "price": 261,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fresh button mushrooms saut\u00e9ed with capsicum, spring onions, garlic, and hot chilli sauce in dry style."
  },
  {
    "id": "chilli-gobi-dry",
    "name": "Chilli Gobi Dry",
    "price": 174,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy fried gobi florets tossed in a sweet-spicy dark soy and green chilli sauce with spring onions."
  },
  {
    "id": "chilli-baby-corn-dry",
    "name": "Chilli Baby Corn Dry",
    "price": 174,
    "type": "veg",
    "category": "starters-veg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Tender baby corn spears deep-fried and saut\u00e9ed in a fiery Chinese-style chilli sauce with onions and peppers."
  },
  {
    "id": "paneer-manchurian-dry",
    "name": "Paneer Manchurian Dry",
    "price": 261,
    "type": "veg",
    "category": "starters-veg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Deep-fried paneer cubes tossed in a rich, tangy Manchurian sauce with finely minced garlic, ginger, and coriander."
  },
  {
    "id": "gobi-manchurian-dry",
    "name": "Gobi Manchurian Dry",
    "price": 174,
    "type": "veg",
    "category": "starters-veg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "All-time favorite Indo-Chinese appetizer with crispy cauliflower florets in dry savory ginger-garlic Manchurian sauce."
  },
  {
    "id": "mushroom-manchurian-dry",
    "name": "Mushroom Manchurian Dry",
    "price": 174,
    "type": "veg",
    "category": "starters-veg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fried button mushrooms tossed with soy sauce, vinegar, celery, garlic, and spring onions in dry gravy style."
  },
  {
    "id": "golden-fried-baby-corn",
    "name": "Golden Fried Baby Corn",
    "price": 145,
    "type": "veg",
    "category": "starters-veg",
    "spice": 0,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy, batter-fried baby corn spears served with sweet chilli dipping sauce. Mildly sweet and crunchy."
  },
  {
    "id": "chicken-65",
    "name": "Chicken 65 (Boneless)",
    "price": 232,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular",
      "traditional"
    ],
    "description": "Classic Chennai starter with juicy boneless chicken bites marinated in hot spices, deep-fried to crisp perfection."
  },
  {
    "id": "chicken-lollipop",
    "name": "Chicken Lollipop",
    "price": 246.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Frenched chicken wings coated in a red-spiced batter, deep-fried, and served with hot garlic dipping sauce."
  },
  {
    "id": "chilli-chicken-dry",
    "name": "Chilli Chicken Dry",
    "price": 217.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy chicken cubes tossed with diced bell peppers, onions, green chillies, and hot chilli paste."
  },
  {
    "id": "garlic-chicken-dry",
    "name": "Garlic Chicken Dry",
    "price": 217.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Saut\u00e9ed chicken pieces tossed with an abundance of minced golden garlic, spring onions, and a splash of soy."
  },
  {
    "id": "pepper-chicken-dry",
    "name": "Pepper Chicken Dry",
    "price": 232,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Fiery Southern-style stir-fry featuring tender chicken cubes coated in fresh, crushed black pepper, onions, and curry leaves."
  },
  {
    "id": "chicken-manchurian-dry",
    "name": "Chicken Manchurian Dry",
    "price": 217.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Juicy chicken pieces fried and tossed in dry Manchurian glaze with minced ginger, garlic, and green onion rings."
  },
  {
    "id": "dragon-chicken-dry",
    "name": "Dragon Chicken Dry",
    "price": 261,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Crispy chicken strips tossed in a sweet and spicy dark sauce with cashews, bell peppers, and dry red chillies."
  },
  {
    "id": "ginger-chicken-dry",
    "name": "Ginger Chicken Dry",
    "price": 217.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Deep-fried chicken pieces cooked in a hot ginger-infused soy sauce with spring onions."
  },
  {
    "id": "drumstick-chicken",
    "name": "Drumstick Chicken (2 Pcs)",
    "price": 217.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Two pieces of tender chicken drumsticks marinated in rich tandoori spices and deep-fried for a crispy outside and moist inside."
  },
  {
    "id": "cashew-nuts-chicken-dry",
    "name": "Cashew Nuts Chicken Dry",
    "price": 290,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Stir-fried chicken cubes tossed with roasted crunchy cashew nuts, onions, bell peppers, and oyster sauce glaze."
  },
  {
    "id": "fish-manchurian-dry",
    "name": "Fish Manchurian Dry",
    "price": 348,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy fish fillet chunks tossed in a savory ginger-garlic Manchurian sauce in dry style."
  },
  {
    "id": "prawn-65",
    "name": "Prawn 65",
    "price": 362.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fresh, plump prawns marinated in a spicy Southern red batter and deep-fried with curry leaves and green chillies."
  },
  {
    "id": "fish-65",
    "name": "Fish 65",
    "price": 362.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Boneless fish chunks marinated in a spicy tandoor-style red batter, deep-fried to crisp perfection."
  },
  {
    "id": "chilli-prawn-dry",
    "name": "Chilli Prawn Dry",
    "price": 348,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Juicy prawns saut\u00e9ed with capsicum, garlic, spring onions, and green chillies in hot Chinese-style chilli sauce."
  },
  {
    "id": "chilli-fish-dry",
    "name": "Chilli Fish Dry",
    "price": 348,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Stir-fried boneless fish cubes tossed with green peppers, onions, and hot green chilli sauce."
  },
  {
    "id": "prawn-manchurian-dry",
    "name": "Prawn Manchurian Dry",
    "price": 362.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fresh prawns batter-fried and glazed with dry Manchurian sauce containing minced garlic, celery, and soy."
  },
  {
    "id": "fish-finger",
    "name": "Fish Finger",
    "price": 362.5,
    "type": "non-veg",
    "category": "starters-nonveg",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Crispy breaded fish fingers deep-fried till golden, served with creamy mayonnaise dip. Kid-friendly snack."
  },
  {
    "id": "chicken-biriyani",
    "name": "Chicken Biriyani",
    "price": 232,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [
      "popular",
      "traditional"
    ],
    "description": "Topi Vappa's pride: Aromatic basmati rice layered with tender marinated chicken and slow-cooked in a sealed clay pot (dum cooking). Served with raita and brinjal curry."
  },
  {
    "id": "chicken-65-biriyani",
    "name": "Chicken 65 Biriyani",
    "price": 290,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Fragrant dum biryani rice served with a portion of crispy, spicy boneless Chicken 65 on top. Semma combo!"
  },
  {
    "id": "mutton-biriyani",
    "name": "Mutton Biriyani",
    "price": 348,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [
      "recommended",
      "traditional"
    ],
    "description": "Premium long-grain basmati rice and tender chunks of goat meat slow-cooked together with secret spices. Unbeatable dum flavor."
  },
  {
    "id": "chicken-tandoori-biriyani",
    "name": "Chicken Tandoori Biriyani",
    "price": 290,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Signature dum biryani rice paired with juicy, charcoal-grilled tandoori chicken leg piece. Smoked and rich."
  },
  {
    "id": "chicken-tikka-biriyani",
    "name": "Chicken Tikka Biriyani",
    "price": 290,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Aromatic biryani rice served with skewered tandoori chicken tikka pieces, marinated in spiced yogurt."
  },
  {
    "id": "chicken-grill-biriyani",
    "name": "Chicken Grill Biriyani",
    "price": 290,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Fragrant biryani rice served with hot and juicy grilled chicken marinated in Arabian spices."
  },
  {
    "id": "chicken-bbq-biriyani",
    "name": "Chicken BBQ Biriyani",
    "price": 290,
    "type": "non-veg",
    "category": "biriyanis",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Authentic dum biryani rice paired with sweet-spicy glazed BBQ chicken cooked over live charcoal."
  },
  {
    "id": "egg-biriyani",
    "name": "Egg Biriyani",
    "price": 159.5,
    "type": "egg",
    "category": "biriyanis",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Flavorful, spice-infused biryani rice served with two seasoned hard-boiled eggs and raita."
  },
  {
    "id": "khushka-(plain-biriyani)",
    "name": "Khushka (Plain Biriyani)",
    "price": 145,
    "type": "veg",
    "category": "biriyanis",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Highly aromatic long-grain basmati biryani rice cooked without meat. A clean, flavorful rice base served with brinjal curry and raita."
  },
  {
    "id": "chicken-bucket-biriyani",
    "name": "Chicken Bucket Biriyani (5 Nos)",
    "price": 1160,
    "type": "non-veg",
    "category": "bucket-biriyanis",
    "spice": 2,
    "servings": "5 People",
    "tags": [
      "family",
      "popular"
    ],
    "description": "A grand feast for the family! A large bucket of chicken biryani with 5 egg pieces, served with raita, brinjal gravy, and bread halwa."
  },
  {
    "id": "mutton-bucket-biriyani",
    "name": "Mutton Bucket Biriyani (5 Nos)",
    "price": 1740,
    "type": "non-veg",
    "category": "bucket-biriyanis",
    "spice": 2,
    "servings": "5 People",
    "tags": [
      "family",
      "recommended"
    ],
    "description": "Ultimate family pack featuring rich mutton biryani packed in a container with 5 boiled eggs, raita, brinjal gravy, and bread halwa."
  },
  {
    "id": "singapore-veg-fried-rice",
    "name": "Singapore Veg Fried Rice",
    "price": 188.5,
    "type": "veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Aromatic fried rice cooked with mixed vegetables, cashew nuts, and flavored with a hint of curry powder."
  },
  {
    "id": "schezwan-veg-rice",
    "name": "Schezwan Veg Rice",
    "price": 159.5,
    "type": "veg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy Indo-Chinese fried rice stir-fried in a fiery wok with fresh vegetables and hot Schezwan chilli paste."
  },
  {
    "id": "paneer-fried-rice",
    "name": "Paneer Fried Rice",
    "price": 188.5,
    "type": "veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Stir-fried basmati rice tossed with fresh soft paneer cubes, green peas, spring onions, and light soy sauce."
  },
  {
    "id": "schezwan-paneer-fried-rice",
    "name": "Schezwan Paneer Fried Rice",
    "price": 203,
    "type": "veg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fluffy basmati rice stir-fried with paneer cubes in hot wok with spicy Schezwan sauce."
  },
  {
    "id": "chicken-fried-rice",
    "name": "Chicken Fried Rice",
    "price": 188.5,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Wok-tossed long grain rice combined with shredded chicken, scrambled eggs, fresh green peas, and soy sauce."
  },
  {
    "id": "schezwan-chicken-fried-rice",
    "name": "Schezwan Chicken Fried Rice",
    "price": 203,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fiery wok-tossed rice mixed with chicken shreds, scrambled egg, and rich homemade spicy Schezwan red sauce."
  },
  {
    "id": "egg-fried-rice",
    "name": "Egg Fried Rice",
    "price": 159.5,
    "type": "egg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Simple and classic wok-fried rice cooked with scrambled eggs, fresh green onions, carrots, and mild seasonings."
  },
  {
    "id": "schezwan-egg-fried-rice",
    "name": "Schezwan Egg Fried Rice",
    "price": 174,
    "type": "egg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy stir-fried rice cooked with scrambled eggs, cabbage, carrots, and high-heat Schezwan paste."
  },
  {
    "id": "mutton-fried-rice",
    "name": "Mutton Fried Rice",
    "price": 217.5,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Delicious fried rice loaded with cooked tender mutton bits, green onions, egg scraps, and soy sauce."
  },
  {
    "id": "schezwan-mutton-fried-rice",
    "name": "Schezwan Mutton Fried Rice",
    "price": 232,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy stir-fried rice featuring minced mutton chunks tossed with egg, garlic, and hot red Schezwan pepper sauce."
  },
  {
    "id": "mixed-fried-rice",
    "name": "Mixed Fried Rice",
    "price": 217.5,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Rich and loaded fried rice tossed with chicken pieces, mutton chunks, scrambled egg, and fresh garden vegetables."
  },
  {
    "id": "singapore-chicken-fried-rice",
    "name": "Singapore Chicken Fried Rice",
    "price": 261,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Singapore-style yellow-spiced chicken fried rice with spring onions, cashew nuts, and fried onions on top."
  },
  {
    "id": "prawn-fried-rice",
    "name": "Prawn Fried Rice",
    "price": 290,
    "type": "non-veg",
    "category": "chinese-rice",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Flavorful wok-tossed basmati rice packed with saut\u00e9ed fresh prawns, scrambled egg, and light soy sauce."
  },
  {
    "id": "veg-fried-noodles",
    "name": "Veg Fried Noodles",
    "price": 145,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Stir-fried Hakka noodles tossed with cabbage, carrot, bell peppers, spring onions, and light soy sauce."
  },
  {
    "id": "schezwan-veg-noodles",
    "name": "Schezwan Veg Noodles",
    "price": 159.5,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy Hakka noodles stir-fried in a high flame wok with shredded vegetables and hot Schezwan chilli garlic sauce."
  },
  {
    "id": "mushroom-fried-noodles",
    "name": "Mushroom Fried Noodles",
    "price": 174,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Soft stir-fried noodles cooked with sliced button mushrooms, spring onions, and soy sauce."
  },
  {
    "id": "schezwan-mushroom-fried-noodles",
    "name": "Schezwan Mushroom Fried Noodles",
    "price": 188.5,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy stir-fried noodles tossed with mushrooms, green chillies, and hot Schezwan sauce with celery."
  },
  {
    "id": "paneer-fried-noodles",
    "name": "Paneer Fried Noodles",
    "price": 188.5,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Savory stir-fried noodles tossed with cubes of fresh paneer, cabbage, capsicum, and seasoning."
  },
  {
    "id": "schezwan-paneer-fried-noodles",
    "name": "Schezwan Paneer Fried Noodles",
    "price": 203,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fiery Hakka noodles stir-fried with fresh paneer blocks in spicy Schezwan sauce."
  },
  {
    "id": "gobi-fried-noodles",
    "name": "Gobi Fried Noodles",
    "price": 159.5,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Delicious noodles tossed with fried cauliflower bits, spring onions, soy sauce, and white pepper."
  },
  {
    "id": "schezwan-gobi-fried-noodles",
    "name": "Schezwan Gobi Fried Noodles",
    "price": 174,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy fried gobi florets tossed with Hakka noodles, peppers, and spicy Schezwan paste on high heat."
  },
  {
    "id": "chinese-saucy-veg-noodles",
    "name": "Chinese Saucy Veg Noodles",
    "price": 217.5,
    "type": "veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Soft pan-fried noodles served with a thick, loaded vegetable stir-fry gravy poured on top."
  },
  {
    "id": "chicken-fried-noodles",
    "name": "Chicken Fried Noodles",
    "price": 188.5,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Classic stir-fried Hakka noodles tossed with chicken shreds, egg, shredded cabbage, carrots, and dark soy."
  },
  {
    "id": "schezwan-chicken-fried-noodles",
    "name": "Schezwan Chicken Fried Noodles",
    "price": 203,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fiery hot stir-fried noodles packed with egg, shredded chicken, and wok-tossed in robust Schezwan chilli paste."
  },
  {
    "id": "egg-fried-noodles",
    "name": "Egg Fried Noodles",
    "price": 159.5,
    "type": "egg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Savory wok-tossed Hakka noodles cooked with scrambled egg, cabbage, green peas, and light seasoning."
  },
  {
    "id": "schezwan-egg-fried-noodles",
    "name": "Schezwan Egg Fried Noodles",
    "price": 174,
    "type": "egg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy Hakka noodles stir-fried with scrambled eggs, green onions, and homemade Schezwan sauce."
  },
  {
    "id": "mutton-fried-noodles",
    "name": "Mutton Fried Noodles",
    "price": 217.5,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Flavorsome wok-tossed noodles cooked with boiled mutton shreds, egg, spring onions, and garlic soy sauce."
  },
  {
    "id": "schezwan-mutton-fried-noodles",
    "name": "Schezwan Mutton Fried Noodles",
    "price": 232,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fiery Chinese noodles tossed with shredded mutton, egg pieces, garlic, and hot red Schezwan chili paste."
  },
  {
    "id": "prawn-fried-noodles",
    "name": "Prawn Fried Noodles",
    "price": 290,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Wok-tossed noodles packed with tender saut\u00e9ed prawns, egg flakes, spring onions, and soy-garlic seasoning."
  },
  {
    "id": "mixed-fried-noodles",
    "name": "Mixed Fried Noodles",
    "price": 232,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Loaded Hakka noodles stir-fried with chicken shreds, mutton strips, scrambled egg, and fresh garden veggies."
  },
  {
    "id": "american-saucy-non-veg-noodles",
    "name": "American Saucy Non Veg Noodles",
    "price": 261,
    "type": "non-veg",
    "category": "chinese-noodles",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Crispy pan-fried noodles topped with a rich, tangy sweet-and-sour red gravy containing chicken, egg, and vegetables."
  },
  {
    "id": "tandoori-chicken-full",
    "name": "Tandoori Chicken (Full)",
    "price": 543.75,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "Couple",
    "tags": [
      "popular"
    ],
    "description": "Whole chicken marinated in spiced yogurt and red tandoori spices, cooked in clay oven to a juicy finish. Served with mint chutney."
  },
  {
    "id": "tandoori-half",
    "name": "Tandoori (Half)",
    "price": 290,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Half portion of our signature tandoori chicken, clay-oven roasted and spiced. Served with lemon wedges."
  },
  {
    "id": "tandoori-quarter",
    "name": "Tandoori (Quarter)",
    "price": 145,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Single piece of tandoori chicken, freshly roasted in tandoor. Ideal individual starter."
  },
  {
    "id": "chicken-tikka",
    "name": "Chicken Tikka",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Boneless chicken cubes marinated in spiced yogurt, skewered and charred to perfection in tandoor."
  },
  {
    "id": "rteshmi-kebab",
    "name": "Rteshmi Kebab",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Creamy and mild kebab made with chicken cubes marinated in cashew paste, cream, cheese, and grilled in tandoor."
  },
  {
    "id": "tangri-kebab",
    "name": "Tangri Kebab",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Tender chicken drumsticks marinated in secret Mughlai spice paste and clay-oven grilled till juicy."
  },
  {
    "id": "malai-chicken-tikka",
    "name": "Malai Chicken Tikka",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 0,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Melt-in-the-mouth chicken tikka marinated in fresh cream, cheese, cardamom, and white pepper, then grilled."
  },
  {
    "id": "hariyali-chicken-tikka",
    "name": "Hariyali Chicken Tikka",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Healthy and delicious chicken kebab marinated in fresh mint, coriander, green chillies, and grilled in tandoor."
  },
  {
    "id": "chicken-seekh-kebab",
    "name": "Chicken Seekh Kebab",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Minced chicken mixed with fresh coriander, onions, green chillies, skewered and grilled."
  },
  {
    "id": "paneer-tikka",
    "name": "Paneer Tikka",
    "price": 261,
    "type": "veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Fresh paneer cubes and peppers marinated in yogurt and tikka spices, skewered and baked in clay oven."
  },
  {
    "id": "fish-tikka",
    "name": "Fish Tikka",
    "price": 319,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Fish cubes marinated in mustard oil, ajwain (carom seeds), yogurt, and spices, clay-oven roasted."
  },
  {
    "id": "gobi-tikka",
    "name": "Gobi Tikka",
    "price": 174,
    "type": "veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Cauliflower florets marinated in spicy tikka masala and roasted in clay tandoor."
  },
  {
    "id": "aloo-tikka",
    "name": "Aloo Tikka",
    "price": 174,
    "type": "veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Baby potatoes marinated in a rich mustard oil tikka marinade and charcoal-grilled in tandoor oven."
  },
  {
    "id": "malabar-tikka",
    "name": "Malabar Tikka",
    "price": 290,
    "type": "veg",
    "category": "tandoori",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Paneer cubes marinated in Malabar coconut-curry paste and tandoor grilled."
  },
  {
    "id": "coriander-tikka",
    "name": "Coriander Tikka",
    "price": 290,
    "type": "veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Paneer cubes marinated in rich, fresh coriander-lemon-yogurt marinade and skewered in tandoor."
  },
  {
    "id": "spicy-tikka",
    "name": "Spicy Tikka",
    "price": 290,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [],
    "description": "Super hot tandoori chicken tikka coated in a fiery Guntur red chilli paste, skewered and clay-oven roasted."
  },
  {
    "id": "topi-kebab",
    "name": "Topi Kebab",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "specialty"
    ],
    "description": "Our signature chef's special chicken kebab, marinated in a double-layered yogurt masala and charcoal-grilled."
  },
  {
    "id": "garlic-kebab",
    "name": "Garlic Kebab",
    "price": 261,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Succulent chicken chunks flavored with roasted garlic paste, white pepper, and light spices, tandoor grilled."
  },
  {
    "id": "resmi-kebab",
    "name": "Resmi Kebab",
    "price": 290,
    "type": "non-veg",
    "category": "tandoori",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Rich and velvety chicken seekh kebab made with egg-white glaze, minced cashews, cheese, grilled to perfection."
  },
  {
    "id": "pepper-bbq-full",
    "name": "Pepper BBQ (Full)",
    "price": 543.75,
    "type": "non-veg",
    "category": "bbq",
    "spice": 3,
    "servings": "Couple",
    "tags": [],
    "description": "Whole chicken marinated in Southern black pepper sauce and hot spices, grilled over live coals."
  },
  {
    "id": "pepper-bbq-half",
    "name": "Pepper BBQ (Half)",
    "price": 290,
    "type": "non-veg",
    "category": "bbq",
    "spice": 3,
    "servings": "Single",
    "tags": [],
    "description": "Half chicken coated in our thick black pepper BBQ paste, slow-grilled over charcoal embers."
  },
  {
    "id": "pepper-bbq-quarter",
    "name": "Pepper BBQ (Quarter)",
    "price": 145,
    "type": "non-veg",
    "category": "bbq",
    "spice": 3,
    "servings": "Single",
    "tags": [],
    "description": "Quarter leg or breast piece of pepper-marinated chicken, charcoal-grilled till smoky and hot."
  },
  {
    "id": "chilli-bbq-full",
    "name": "Chilli BBQ (Full)",
    "price": 543.75,
    "type": "non-veg",
    "category": "bbq",
    "spice": 2,
    "servings": "Couple",
    "tags": [],
    "description": "Whole charcoal-grilled chicken glazed with a fiery red chilli BBQ sauce, cooked over live coals."
  },
  {
    "id": "chilli-bbq-half",
    "name": "Chilli BBQ (Half)",
    "price": 290,
    "type": "non-veg",
    "category": "bbq",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Half chicken coated in hot red chilli paste and sweet-sour BBQ glaze, grilled on coal bed."
  },
  {
    "id": "chilli-bbq-quarter",
    "name": "Chilli BBQ (Quarter)",
    "price": 145,
    "type": "non-veg",
    "category": "bbq",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Leg or breast quarter chicken basted with chilli BBQ glaze and grilled."
  },
  {
    "id": "afghan-bbq-full",
    "name": "Afghan BBQ (Full)",
    "price": 580,
    "type": "non-veg",
    "category": "bbq",
    "spice": 1,
    "servings": "Couple",
    "tags": [
      "popular"
    ],
    "description": "Whole chicken marinated in a rich, creamy, mild marinade of cashew paste, cream, and cheese, charcoal-grilled."
  },
  {
    "id": "afghan-bbq-half",
    "name": "Afghan BBQ (Half)",
    "price": 319,
    "type": "non-veg",
    "category": "bbq",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Half portion of mild and creamy Afghan-style BBQ chicken, roasted on live charcoal fire."
  },
  {
    "id": "afghan-bbq-quarter",
    "name": "Afghan BBQ (Quarter)",
    "price": 159.5,
    "type": "non-veg",
    "category": "bbq",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "A single quarter chicken piece roasted in rich cashew-cream Afghan style."
  },
  {
    "id": "plain-naan",
    "name": "Plain Naan",
    "price": 43.5,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Soft and fluffy leavened white flour flatbread, freshly baked in clay tandoor oven."
  },
  {
    "id": "butter-naan",
    "name": "Butter Naan",
    "price": 58,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Soft leavened tandoori naan glazed generously with pure, melted cow butter."
  },
  {
    "id": "garlic-naan",
    "name": "Garlic Naan",
    "price": 72.5,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [
      "recommended"
    ],
    "description": "Tandoori flatbread topped with finely minced garlic, fresh coriander leaves, and brushed with melted butter."
  },
  {
    "id": "cheese-naan",
    "name": "Cheese Naan",
    "price": 87,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Delicious leavened bread stuffed with soft grated cheese and tandoor baked till golden brown."
  },
  {
    "id": "plain-roti",
    "name": "Plain Roti",
    "price": 43.5,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Healthy, unleavened whole wheat flatbread baked fresh in a hot clay tandoor oven."
  },
  {
    "id": "butter-roti",
    "name": "Butter Roti",
    "price": 58,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Freshly baked whole wheat tandoori roti brushed with a rich layer of pure cow butter."
  },
  {
    "id": "masala-kulcha",
    "name": "Masala Kulcha",
    "price": 43.5,
    "type": "veg",
    "category": "breads",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Soft leavened flatbread stuffed with a mildly spiced, chopped potato-onion mixture and baked in tandoor."
  },
  {
    "id": "paneer-kulcha",
    "name": "Paneer Kulcha",
    "price": 72.5,
    "type": "veg",
    "category": "breads",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Spiced flatbread stuffed with soft crumbled paneer, coriander, and light spices, baked till crisp."
  },
  {
    "id": "aloo-kulcha",
    "name": "Aloo Kulcha",
    "price": 72.5,
    "type": "veg",
    "category": "breads",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Traditional leavened flatbread stuffed with seasoned mashed potatoes, baked and butter-brushed."
  },
  {
    "id": "tandoori-parotta",
    "name": "Tandoori Parotta",
    "price": 72.5,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Multi-layered wheat flour parotta cooked inside a clay tandoor, resulting in a crispy, smoky outer crust."
  },
  {
    "id": "methi-parotta",
    "name": "Methi Parotta",
    "price": 72.5,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Flaky multi-layered parotta flavored with fresh fenugreek leaves (methi) and cooked on tandoor."
  },
  {
    "id": "latcha-parotta",
    "name": "Latcha Parotta",
    "price": 116,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Laccha Parotta - Multi-layered, flaky, golden brown flatbread rolled with butter, tandoor roasted."
  },
  {
    "id": "chicken-keema-naan",
    "name": "Chicken Keema Naan",
    "price": 188.5,
    "type": "non-veg",
    "category": "breads",
    "spice": 1,
    "servings": "Single",
    "tags": [
      "specialty"
    ],
    "description": "Leavened tandoori naan stuffed with a rich, spiced minced chicken keema filling, baked and buttered."
  },
  {
    "id": "stuffed-naan",
    "name": "Stuffed Naan",
    "price": 145,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Tandoori naan loaded with a mixed veggie, paneer, and potato mash filling, baked to a golden crust."
  },
  {
    "id": "chappathi",
    "name": "Chappathi",
    "price": 29,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Two soft, thin whole-wheat flatbreads cooked on a flat tawa. Light, simple, and healthy."
  },
  {
    "id": "parotta",
    "name": "Parotta",
    "price": 29,
    "type": "veg",
    "category": "breads",
    "spice": 0,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Traditional Southern-style flaky, multi-layered flatbread made of refined flour, cooked on griddle."
  },
  {
    "id": "chilli-parotta",
    "name": "Chilli Parotta",
    "price": 174,
    "type": "veg",
    "category": "breads",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Southern street-style stir-fry featuring shredded parotta pieces tossed with onions and spicy red sauce."
  },
  {
    "id": "paneer-butter-masala",
    "name": "Paneer Butter Masala",
    "price": 261,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Fresh paneer cubes cooked in a rich, creamy, sweet-and-spicy tomato-cashew gravy with real butter."
  },
  {
    "id": "kadai-paneer",
    "name": "Kadai Paneer",
    "price": 261,
    "type": "veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Paneer cubes cooked with freshly ground kadai spices, peppers, onions, and tomatoes in a thick semi-dry gravy."
  },
  {
    "id": "veg-chettinad",
    "name": "Veg Chettinad",
    "price": 261,
    "type": "veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "traditional"
    ],
    "description": "Authentic, fiery Karaikudi-style mixed vegetable curry cooked in a freshly ground coconut and black pepper masala base."
  },
  {
    "id": "gobi-masala",
    "name": "Gobi Masala",
    "price": 188.5,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Tender cauliflower florets simmered in a mildly spiced yellow onion-tomato gravy with fresh coriander."
  },
  {
    "id": "mushroom-masala",
    "name": "Mushroom Masala",
    "price": 261,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Juicy button mushrooms cooked in a rich onion-tomato curry base seasoned with cumin."
  },
  {
    "id": "aloo-gobi-masala",
    "name": "Aloo Gobi Masala",
    "price": 188.5,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Homestyle dry gravy featuring diced potatoes and cauliflower florets saut\u00e9ed with turmeric, ginger, and spices."
  },
  {
    "id": "paneer-tikka-masala",
    "name": "Paneer Tikka Masala",
    "price": 261,
    "type": "veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Tandoor-grilled paneer tikka chunks simmered in a rich, spicy tomato gravy with bell pepper slices."
  },
  {
    "id": "mix-veg-gravy",
    "name": "Mix Veg Gravy",
    "price": 188.5,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Healthy assortment of fresh seasonal vegetables cooked in a medium-spiced yellow gravy with cream."
  },
  {
    "id": "green-peas-masala",
    "name": "Green Peas Masala",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Sweet green peas cooked in a rich, creamy cashew-tomato curry base."
  },
  {
    "id": "dal-tadka",
    "name": "Dal Tadka",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Yellow lentils (arhar dal) cooked till soft, tempered with ghee, cumin seeds, garlic, red chillies."
  },
  {
    "id": "dal-fry",
    "name": "Dal Fry",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Boiled yellow lentils pan-fried with chopped onions, tomatoes, green chillies, and butter."
  },
  {
    "id": "aloo-mutter",
    "name": "Aloo Mutter",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Potatoes and sweet peas cooked in a simple onion-tomato broth. Classic comfort food pairing for roti."
  },
  {
    "id": "kadai-veg",
    "name": "Kadai Veg",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Assorted garden vegetables saut\u00e9ed with capsicum, onions, and hot spices cooked in a cast-iron kadai."
  },
  {
    "id": "veg-jalfrezi",
    "name": "Veg Jalfrezi",
    "price": 145,
    "type": "veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Tangy and spicy dry curry featuring stir-fried vegetable juliennes tossed with bell peppers."
  },
  {
    "id": "butter-chicken-masala",
    "name": "Butter Chicken Masala",
    "price": 261,
    "type": "non-veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "All-time favorite: Boneless tandoori chicken tikka cooked in rich, creamy, buttery tomato-cashew gravy."
  },
  {
    "id": "chicken-pepper-masala",
    "name": "Chicken Pepper Masala",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [],
    "description": "Spicy chicken curry cooked in traditional Tamil Nadu style with freshly ground black pepper and curry leaves."
  },
  {
    "id": "chicken-tikka-masala",
    "name": "Chicken Tikka Masala",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Charcoal-grilled chicken tikka chunks cooked in a rich, spicy tomato-onion gravy."
  },
  {
    "id": "kadai-chicken",
    "name": "Kadai Chicken",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Chicken pieces cooked in a wok with fresh capsicum, onions, and freshly pounded spices."
  },
  {
    "id": "chicken-chettinad",
    "name": "Chicken Chettinad",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "traditional"
    ],
    "description": "Authentic, fiery Southern chicken curry cooked in an aromatic gravy of roasted coconut paste and pepper."
  },
  {
    "id": "chicken-dahiwala",
    "name": "Chicken Dahiwala",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Tender chicken pieces simmered in a smooth, creamy, mildly spiced yogurt-based white gravy."
  },
  {
    "id": "chicken-mughalai",
    "name": "Chicken Mughalai",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 1,
    "servings": "1-2 People",
    "tags": [],
    "description": "Rich chicken curry cooked in a cashew-paste and egg-drop gravy, flavored with cardamom."
  },
  {
    "id": "chicken-masala",
    "name": "Chicken Masala",
    "price": 261,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Classic chicken curry made in traditional Indian style with onions, ginger-garlic, and curry spices."
  },
  {
    "id": "chicken-curry",
    "name": "Chicken Curry",
    "price": 261,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Medium-spiced chicken gravy cooked in onion-tomato sauce. Excellent companion for rice or parotta."
  },
  {
    "id": "kerala-chicken-masala",
    "name": "Kerala Chicken Masala",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Kerala-style chicken curry cooked in coconut oil, flavored with coconut milk, mustard seeds, and curry leaves."
  },
  {
    "id": "andhra-chicken",
    "name": "Andhra Chicken",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [],
    "description": "Super spicy Andhra-style chicken gravy cooked with hot green chilli paste and fresh spices."
  },
  {
    "id": "pepper-chicken-fry",
    "name": "Pepper Chicken Fry",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "popular"
    ],
    "description": "Dry chicken stir-fry cooked on a flat tawa with loads of black pepper, caramelized onions, and curry leaves."
  },
  {
    "id": "chicken-chukka",
    "name": "Chicken Chukka",
    "price": 290,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "traditional"
    ],
    "description": "Traditional Tamil-style dry chicken preparation slow-cooked with small shallots and dry red chillies."
  },
  {
    "id": "mutton-chukka",
    "name": "Mutton Chukka",
    "price": 362.5,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [
      "popular",
      "traditional"
    ],
    "description": "Melt-in-mouth mutton bites cooked dry on iron pan with shallots, crushed pepper, and curry leaves."
  },
  {
    "id": "mutton-pepper-masala",
    "name": "Mutton Pepper Masala",
    "price": 362.5,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [],
    "description": "Rich goat meat curry cooked in thick black pepper gravy with fennel and garlic."
  },
  {
    "id": "kadai-mutton",
    "name": "Kadai Mutton",
    "price": 362.5,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "Mutton chunks cooked with fresh tomatoes, bell pepper slices, and fresh spices in heavy iron wok."
  },
  {
    "id": "mutton-pepper-fry",
    "name": "Mutton Pepper Fry",
    "price": 362.5,
    "type": "non-veg",
    "category": "curries",
    "spice": 3,
    "servings": "1-2 People",
    "tags": [],
    "description": "Dry pan-roasted mutton pieces seasoned with cracked black pepper, curry leaves, and green chillies."
  },
  {
    "id": "mutton-maharaja",
    "name": "Mutton Maharaja",
    "price": 362.5,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [],
    "description": "A rich, creamy mutton curry cooked in royal style with cashew paste and boiled egg garnish."
  },
  {
    "id": "mutton-rogan-josh",
    "name": "Mutton Rogan Josh",
    "price": 435,
    "type": "non-veg",
    "category": "curries",
    "spice": 2,
    "servings": "1-2 People",
    "tags": [
      "recommended"
    ],
    "description": "Kashmiri specialty: Tender goat meat slow-cooked in rich red gravy flavored with Kashmiri red chillies."
  },
  {
    "id": "shawarma",
    "name": "Shawarma",
    "price": 116,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 1,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Classic Middle-Eastern roll featuring spit chicken and garlic mayonnaise wrapped in soft kuboos."
  },
  {
    "id": "shawarma-plate-plate",
    "name": "Shawarma Plate",
    "price": 188.5,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Shredded spit chicken served with fresh cabbage salad, a whole kuboos, and garlic dip."
  },
  {
    "id": "mexican-shawarma-roll",
    "name": "Mexican Shawarma Roll",
    "price": 145,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Spicy twist to the classic shawarma: spit chicken tossed with jalapenos, onions, and hot sauce."
  },
  {
    "id": "mexican-shawarma-plate-plate",
    "name": "Mexican Shawarma Plate",
    "price": 203,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Shredded Mexican-spiced chicken served with hot red sauce, garlic dip, and kuboos bread."
  },
  {
    "id": "special-shawarma",
    "name": "Special Shawarma",
    "price": 145,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 1,
    "servings": "Single",
    "tags": [
      "recommended"
    ],
    "description": "Chef's special shawarma roll loaded with extra spit chicken and absolute minimum vegetables."
  },
  {
    "id": "tandoori-shawarma",
    "name": "Tandoori Shawarma",
    "price": 174,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Spit-grilled chicken tossed in tandoori spices and spicy red sauce wrapped in soft kuboos."
  },
  {
    "id": "topi-special-shawarma-roll",
    "name": "Topi Special Shawarma Roll",
    "price": 188.5,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 1,
    "servings": "Single",
    "tags": [
      "popular"
    ],
    "description": "Large signature roll stuffed with a massive portion of grilled chicken, melted cheese, fries, and secret sauce."
  },
  {
    "id": "topi-special-shawarma-plate-plate",
    "name": "Topi Special Shawarma Plate",
    "price": 261,
    "type": "non-veg",
    "category": "shawarma",
    "spice": 1,
    "servings": "Single",
    "tags": [],
    "description": "Plate full of signature grilled chicken scraps, topped with cheese, fries, salad, and two kuboos."
  },
  {
    "id": "mayonnaise",
    "name": "Mayonnaise",
    "price": 29,
    "type": "veg",
    "category": "shawarma",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Extra serving of our fresh, homemade, thick and creamy garlic eggless mayonnaise."
  },
  {
    "id": "kuboos",
    "name": "Kuboos",
    "price": 14.5,
    "type": "veg",
    "category": "shawarma",
    "spice": 0,
    "servings": "Single",
    "tags": [],
    "description": "Soft, freshly baked Middle-Eastern flatbread. Excellent for wrapping curries."
  },
  {
    "id": "grill-chicken-full",
    "name": "Grill Chicken (Full)",
    "price": 543.75,
    "type": "non-veg",
    "category": "grills",
    "spice": 2,
    "servings": "Couple",
    "tags": [
      "popular"
    ],
    "description": "Whole chicken marinated in Arabian spices, slowly roasted on charcoal grill. Served with mayonnaise and kuboos."
  },
  {
    "id": "grill-chicken-half",
    "name": "Grill Chicken (Half)",
    "price": 290,
    "type": "non-veg",
    "category": "grills",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Half charcoal-roasted chicken, spiced, juicy and tender. Served with garlic mayonnaise."
  },
  {
    "id": "grill-chicken-quarter",
    "name": "Grill Chicken (Quarter)",
    "price": 145,
    "type": "non-veg",
    "category": "grills",
    "spice": 2,
    "servings": "Single",
    "tags": [],
    "description": "Single chicken leg or breast quarter, grilled over coal bed. Perfect smoky side order."
  }
];

const IMAGE_MAPPING = {
  "cream-of-chicken-soup": "cream_of_chicken_soup.jpg",
  "hot-and-sour-chicken-soup": "hot_sour_chicken_soup.jpg",
  "pepper-chicken-soup": "pepper_chicken_soup.jpg",
  "sweet-corn-chicken-soup": "sweetcorn_chicken_soup.jpg",
  "chicken-noodles-soup": "chicken_noodels_soup.jpg",
  "mutton-pepper-soup": "mutton_pepper_soup.jpg",
  "hot-and-sour-mutton": "hot_sour_mutton_soup.jpg",
  "sweet-corn-veg-soup": "sweetcorn_veg_soup.jpg",
  "sweet-corn-mushroom-soup": "sweetcorn_mushroom_soup.jpg",
  "mushroom-pepper-soup": "mushroom_pepper_soup.jpg",
  "baby-corn-soup": "babycorn_soup.jpg",
  "egg-masala": "egg_masala.jpg",
  "egg-burgi": "egg_burgi.jpg",
  "boiled-egg": "boiled_egg.jpg",
  "mushroom-65": "mushroom_65.jpg",
  "paneer-65": "paneer_65.jpg",
  "gobi-65": "gobi_65.jpg",
  "chilli-paneer-dry": "chilli_paneer_dry.jpg",
  "chilli-mushroom-dry": "chilli_mushroom_dry.jpg",
  "chilli-gobi-dry": "chilli_gobi_dry.jpg",
  "chilli-baby-corn-dry": "chilli_babycorn_dry.jpg",
  "paneer-manchurian-dry": "paneer_manjurian_dry.jpg",
  "gobi-manchurian-dry": "gobi_manjurian_dry.jpg",
  "mushroom-manchurian-dry": "mushroom_manjurian_dry.jpg",
  "golden-fried-baby-corn": "golden_fried_babycorn.jpg",
  "chicken-65": "chicken65_boneless.jpg",
  "chicken-lollipop": "chicken_lollipop.jpg",
  "chilli-chicken-dry": "chilli_chicken_dry.jpg",
  "garlic-chicken-dry": "garlic_chicken_dry.jpg",
  "pepper-chicken-dry": "pepper_chicken_dry.jpg",
  "chicken-manchurian-dry": "chicken_manjurian_dry.jpg",
  "dragon-chicken-dry": "dragon_chicken_dry.jpg",
  "ginger-chicken-dry": "ginger_chicken_dry.jpg",
  "drumstick-chicken": "drumstick_chicken.jpg",
  "cashew-nuts-chicken-dry": "cashewnuts_chicken_dry.jpg",
  "fish-manchurian-dry": "fish_manchurian_dry.jpg",
  "prawn-65": "prawn65.jpg",
  "fish-65": "fish65.jpg",
  "chilli-prawn-dry": "chilli_prawn_dry.jpg",
  "chilli-fish-dry": "chilli_fish_dry.jpg",
  "prawn-manchurian-dry": "prawn_manchurian_dry.jpg",
  "fish-finger": "fishfinger.jpg",
  "chicken-biriyani": "chicken_biriyani.jpg",
  "chicken-65-biriyani": "chicken_65_biriyani.jpg",
  "mutton-biriyani": "mutton_biriyani.jpg",
  "chicken-tandoori-biriyani": "chicken_tandoori_biriyani.jpg",
  "chicken-tikka-biriyani": "chicken_tikka_biriyani.jpg",
  "chicken-grill-biriyani": "chicken_grill_biriyani.jpg",
  "chicken-bbq-biriyani": "chicken_bbq_biriyani.jpg",
  "egg-biriyani": "egg_biriyani.jpg",
  "khushka-(plain-biriyani)": "khushka.jpg",
  "chicken-bucket-biriyani": "chicken_bucket_biriyani.png",
  "mutton-bucket-biriyani": "mutton_bucket_biriyani.png",
  "singapore-veg-fried-rice": "singapore_veg_friedrice.jpg",
  "schezwan-veg-rice": "Schezwan Veg Rice.jpg",
  "paneer-fried-rice": "paneer_friedrice.jpg",
  "schezwan-paneer-fried-rice": "Schezwan Paneer Fried Rice.jpg",
  "chicken-fried-rice": "chicken_friedrice.jpg",
  "schezwan-chicken-fried-rice": "Schezwan Chicken Fried Rice.jpg",
  "egg-fried-rice": "egg_friedrice.jpg",
  "schezwan-egg-fried-rice": "Schezwan Egg Fried Rice.jpg",
  "mutton-fried-rice": "mutton_friedrice.jpg",
  "schezwan-mutton-fried-rice": "Schezwan Mutton Fried Rice.jpg",
  "mixed-fried-rice": "Mixed Fried Noodles.jpg",
  "singapore-chicken-fried-rice": "Singapore Chicken Fried Rice.jpg",
  "prawn-fried-rice": "prawn_friedrice.jpg",
  "veg-fried-noodles": "veg_noodles.jpg",
  "schezwan-veg-noodles": "Schezwan Veg Noodles.jpg",
  "mushroom-fried-noodles": "Mushroom Fried Noodles.jpg",
  "schezwan-mushroom-fried-noodles": "Schezwan Mushroom Fried Noodles.jpg",
  "paneer-fried-noodles": "Paneer Fried Noodles.jpg",
  "schezwan-paneer-fried-noodles": "Schezwan Paneer Fried Noodles.jpg",
  "gobi-fried-noodles": "Gobi Fried Noodles.jpg",
  "schezwan-gobi-fried-noodles": "Schezwan Gobi Fried Noodles.jpg",
  "chinese-saucy-veg-noodles": "Chinese Saucy Veg Noodles.jpg",
  "chicken-fried-noodles": "Chicken Fried Noodles.jpg",
  "schezwan-chicken-fried-noodles": "Schezwan Chicken Fried Noodles.jpg",
  "egg-fried-noodles": "egg_noodles.jpg",
  "schezwan-egg-fried-noodles": "Schezwan Egg Fried Noodles.jpg",
  "mutton-fried-noodles": "mutton_noodles.jpg",
  "schezwan-mutton-fried-noodles": "Schezwan Mutton Fried Noodles.jpg",
  "prawn-fried-noodles": "Prawn Fried Noodles.jpg",
  "mixed-fried-noodles": "Mixed Fried Noodles.jpg",
  "american-saucy-non-veg-noodles": "American Saucy Non Veg Noodles.jpg",
  "tandoori-chicken-full": "Tandoori Chicken full.jpg",
  "tandoori-half": "tandoori chicken half.jpg",
  "tandoori-quarter": "tandoori chicken quarter.jpg",
  "chicken-tikka": "Chicken Tikka.jpg",
  "rteshmi-kebab": "Rteshmi Kebab.jpg",
  "tangri-kebab": "Tangri Kebab.jpg",
  "malai-chicken-tikka": "Malai Chicken Tikka.jpg",
  "hariyali-chicken-tikka": "Hariyali Chicken Tikka.jpg",
  "chicken-seekh-kebab": "Chicken Seekh Kebab.jpg",
  "paneer-tikka": "Paneer Tikka.jpg",
  "fish-tikka": "Fish Tikka.jpg",
  "gobi-tikka": "Gobi Tikka.jpg",
  "aloo-tikka": "aloo tikka.jpg",
  "malabar-tikka": "Malabar Tikka.jpg",
  "coriander-tikka": "Coriander Tikka.jpg",
  "spicy-tikka": "spicy tikka.jpg",
  "topi-kebab": "topi kebab.jpg",
  "garlic-kebab": "garlic kebab.jpg",
  "resmi-kebab": "resmi kebab.jpg",
  "pepper-bbq-full": "pepper bbq full.jpg",
  "pepper-bbq-half": "pepper bbq half.jpg",
  "pepper-bbq-quarter": "pepper bbq quarter.jpg",
  "chilli-bbq-full": "chilli bbq full.jpg",
  "chilli-bbq-half": "chilli bbq half.jpg",
  "chilli-bbq-quarter": "chilli bbq quarter.jpg",
  "afghan-bbq-full": "Afghan BBQ Full.jpg",
  "afghan-bbq-half": "Afghan BBQ half.jpg",
  "afghan-bbq-quarter": "Afghan BBQ quarter.jpg",
  "plain-naan": "Plain Naan.jpg",
  "butter-naan": "butter naan.jpg",
  "garlic-naan": "garlic naan.jpg",
  "cheese-naan": "cheese naan.jpg",
  "plain-roti": "plain roti.jpg",
  "butter-roti": "butter roti.jpg",
  "masala-kulcha": "masala_kulcha.jpg",
  "paneer-kulcha": "paneer kulcha.jpg",
  "aloo-kulcha": "aloo kulcha.jpg",
  "tandoori-parotta": "Tandoori Parotta.jpg",
  "methi-parotta": "Methi Parotta.jpg",
  "latcha-parotta": "Latcha Parotta.jpg",
  "chicken-keema-naan": "Chicken Keema Naan.jpg",
  "stuffed-naan": "Stuffed Naan.jpg",
  "chappathi": "Chappathi.jpg",
  "parotta": "parotta.jpg",
  "chilli-parotta": "Chilli Parotta.jpg",
  "paneer-butter-masala": "paneer_butter_masala.jpg",
  "kadai-paneer": "Kadai Paneer.jpg",
  "veg-chettinad": "Veg Chettinad.jpg",
  "gobi-masala": "Gobi Masala.jpg",
  "mushroom-masala": "Mushroom Masala.jpg",
  "aloo-gobi-masala": "Aloo Gobi Masala.jpg",
  "paneer-tikka-masala": "Paneer Tikka Masala.jpg",
  "mix-veg-gravy": "Mix Veg Gravy.jpg",
  "green-peas-masala": "Green Peas Masala.jpg",
  "dal-tadka": "Dal Tadka.jpg",
  "dal-fry": "Dal Fry.jpg",
  "aloo-mutter": "Aloo Mutter.jpg",
  "kadai-veg": "Kadai Veg.jpg",
  "veg-jalfrezi": "Veg Jalfrezi.jpg",
  "butter-chicken-masala": "Butter Chicken Masala.jpg",
  "chicken-pepper-masala": "Chicken Pepper Masala.jpg",
  "chicken-tikka-masala": "Chicken Tikka Masala.jpg",
  "kadai-chicken": "Kadai Chicken.jpg",
  "chicken-chettinad": "Chicken Chettinad.jpg",
  "chicken-dahiwala": "Chicken Dahiwala.jpg",
  "chicken-mughalai": "Chicken Mughalai.jpg",
  "chicken-masala": "chicken masala.jpg",
  "chicken-curry": "chicken curry.jpg",
  "kerala-chicken-masala": "Kerala Chicken Masala.jpg",
  "andhra-chicken": "Andhra Chicken.jpg",
  "pepper-chicken-fry": "Pepper Chicken Fry.jpg",
  "chicken-chukka": "Chicken Chukka.jpg",
  "mutton-chukka": "Mutton Chukka.jpg",
  "mutton-pepper-masala": "Mutton Pepper Masala.jpg",
  "kadai-mutton": "Kadai Mutton.jpg",
  "mutton-pepper-fry": "Mutton Pepper Fry.jpg",
  "mutton-maharaja": "Mutton Maharaja.jpg",
  "mutton-rogan-josh": "Mutton Rogan Josh.jpg",
  "shawarma": "shawarma.jpg",
  "shawarma-plate-plate": "plate shawarma.jpg",
  "mexican-shawarma-roll": "Mexican Shawarma Roll.jpg",
  "mexican-shawarma-plate-plate": "Mexican Shawarma Plate.jpg",
  "special-shawarma": "special_shawarma.jpg",
  "tandoori-shawarma": "Tandoori Shawarma.jpg",
  "topi-special-shawarma-roll": "Topi Special Shawarma Roll.jpg",
  "topi-special-shawarma-plate-plate": "Topi Special Shawarma Plate.jpg",
  "mayonnaise": "Mayonnaise.jpg",
  "kuboos": "kuboos.jpg",
  "grill-chicken-full": "full_grill_chicken.jpg",
  "grill-chicken-half": "half_grill_chicken.jpg",
  "grill-chicken-quarter": "quarter_grill_chicken.jpg"
};

// --- 2. GLOBAL STATE STORE ---
const STATE = {
  cart: [],
  filters: {
    search: "",
    diet: "all",
    category: "all"
  },
  threejs: {
    scene: null,
    camera: null,
    renderer: null,
    centerpiece: null,
    particles: null,
    steam: null,
    animationId: null,
    isIntersecting: true,
    targetRotationY: 0,
    targetRotationX: 0,
    currentRotationY: 0,
    currentRotationX: 0
  }
};

// --- 3. INITIALIZATION & ROUTING CONTROLS ---
document.addEventListener("DOMContentLoaded", () => {
  // A. Disable page loading state
  setTimeout(() => {
    document.body.classList.remove("loading-state");
    document.body.classList.add("body-loaded");
    // GSAP Introduction Animation
    playHeroIntro();
  }, 1000);

  // B. Render full menu and featured section
  renderMenuGrid();
  renderFeaturedSection();

  // C. Setup Interaction Listeners
  initEventListeners();

  // D. Launch 3D Rendering Pipeline
  initThreeJsPipeline();

  // E. Setup Performance Intersection Observers
  setupPerformanceObservers();

  // F. Check deep link hashing route
  checkHashRoute();
});

// --- 4. INTERACTION LISTENERS & TRIGGERS ---
function initEventListeners() {
  // Mobile Hamburger Toggle
  const burgerBtn = document.getElementById("mobile-nav-toggle");
  const closeDrawerBtn = document.getElementById("drawer-close");
  const navDrawer = document.getElementById("mobile-nav-drawer");

  if (burgerBtn && navDrawer) {
    burgerBtn.addEventListener("click", () => {
      navDrawer.classList.add("open");
    });
  }

  if (closeDrawerBtn && navDrawer) {
    closeDrawerBtn.addEventListener("click", () => {
      navDrawer.classList.remove("open");
    });
  }

  // Close Mobile Drawer when clicked links
  document.querySelectorAll(".drawer-link").forEach(link => {
    link.addEventListener("click", () => {
      navDrawer.classList.remove("open");
    });
  });

  // Sticky Header Scroll effect
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile/Tablet Header Search Trigger
  const mobSearchTrigger = document.getElementById("mobile-search-trigger");
  const mobSearchOverlay = document.getElementById("mobile-search-overlay");
  const closeMobSearchBtn = document.getElementById("close-search-overlay");
  const mobSearchInput = document.getElementById("mobile-search-input");
  const mainSearchInput = document.getElementById("menu-search-input");

  if (mobSearchTrigger && mobSearchOverlay) {
    mobSearchTrigger.addEventListener("click", () => {
      mobSearchOverlay.classList.add("open");
      setTimeout(() => {
        if (mobSearchInput) mobSearchInput.focus();
      }, 100);
    });
  }

  if (closeMobSearchBtn && mobSearchOverlay) {
    closeMobSearchBtn.addEventListener("click", () => {
      mobSearchOverlay.classList.remove("open");
      if (mobSearchInput) mobSearchInput.value = "";
      STATE.filters.search = "";
      if (mainSearchInput) {
        mainSearchInput.value = "";
        const clearSearchBtn = document.getElementById("clear-search");
        if (clearSearchBtn) clearSearchBtn.style.display = "none";
      }
      renderMenuGrid();
    });
  }

  if (mobSearchInput) {
    mobSearchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      STATE.filters.search = query;
      
      if (mainSearchInput) {
        mainSearchInput.value = e.target.value;
        const clearSearchBtn = document.getElementById("clear-search");
        if (clearSearchBtn) {
          clearSearchBtn.style.display = query.length > 0 ? "block" : "none";
        }
      }

      renderMenuGrid();

      if (window.location.hash !== "#menu-section") {
        window.location.hash = "#menu-section";
      }
    });
  }

  // Diet Filters Click
  document.querySelectorAll(".diet-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".diet-btn").forEach(b => b.classList.remove("active"));
      const selectedBtn = e.currentTarget;
      selectedBtn.classList.add("active");
      
      STATE.filters.diet = selectedBtn.dataset.diet;
      renderMenuGrid();
    });
  });

  // Category Filters Click
  document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
      const selectedBtn = e.currentTarget;
      selectedBtn.classList.add("active");
      
      STATE.filters.category = selectedBtn.dataset.category;
      
      // Auto smooth scroll category to view if overflowed
      selectedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      
      renderMenuGrid();
    });
  });

  // Search Bar logic
  const searchInput = document.getElementById("menu-search-input");
  const clearSearchBtn = document.getElementById("clear-search");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      STATE.filters.search = query;
      
      if (query.length > 0) {
        clearSearchBtn.style.display = "block";
      } else {
        clearSearchBtn.style.display = "none";
      }
      renderMenuGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearSearchBtn.style.display = "none";
      STATE.filters.search = "";
      renderMenuGrid();
    });
  }

  // Reset Button
  const resetBtn = document.getElementById("reset-menu-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      STATE.filters.search = "";
      STATE.filters.diet = "all";
      STATE.filters.category = "all";
      
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      
      document.querySelectorAll(".diet-btn").forEach(b => {
        if (b.dataset.diet === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      
      document.querySelectorAll(".cat-btn").forEach(b => {
        if (b.dataset.category === "all") b.classList.add("active");
        else b.classList.remove("active");
      });
      
      renderMenuGrid();
    });
  }

  // Cart Drawer open/close triggers
  window.toggleCartDrawer = function(e) {
    if (e) e.preventDefault();
    console.log("toggleCartDrawer clicked, width:", window.innerWidth);
    const cartDrawer = document.getElementById("cart-drawer");
    const cartOverlay = document.getElementById("cart-drawer-overlay");
    if (window.innerWidth < 1024) {
      window.location.hash = "#order";
    } else {
      if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
        updateCartDrawerDOM();
      }
    }
  };

  const cartTrigger = document.getElementById("cart-trigger");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-drawer-overlay");
  const cartClose = document.getElementById("cart-close");

  if (cartTrigger) {
    cartTrigger.addEventListener("click", window.toggleCartDrawer);
  }

  if (cartClose && cartDrawer && cartOverlay) {
    cartClose.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener("click", () => {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
    });
  }

  // Checkout trigger
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (STATE.cart.length === 0) {
        showToastNotification("Your basket is empty!");
        return;
      }
      // Open Success modal
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
      
      const orderId = `TV-${Math.floor(100000 + Math.random() * 900000)}-CH`;
      document.getElementById("success-order-id").innerText = orderId;
      
      document.getElementById("order-success-modal").classList.add("open");
      document.getElementById("modal-overlay").classList.add("open");
      
      // Empty the cart
      STATE.cart = [];
      updateCartCounter();
    });
  }

  // Modals closing triggers
  const modalOverlay = document.getElementById("modal-overlay");
  
  const reservationClose = document.getElementById("modal-close");
  const reservationDone = document.getElementById("modal-done-btn");
  const reservationModal = document.getElementById("success-modal");

  const orderClose = document.getElementById("order-modal-close");
  const orderDone = document.getElementById("order-done-btn");
  const orderModal = document.getElementById("order-success-modal");

  const closeModalFlow = () => {
    reservationModal.classList.remove("open");
    orderModal.classList.remove("open");
    modalOverlay.classList.remove("open");
  };

  [reservationClose, reservationDone, orderClose, orderDone, modalOverlay].forEach(btn => {
    if (btn) btn.addEventListener("click", closeModalFlow);
  });

  // Reservation form validations
  const resForm = document.getElementById("reservation-form");
  if (resForm) {
    resForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const resName = document.getElementById("res-name");
      const resPhone = document.getElementById("res-phone");
      const resGuests = document.getElementById("res-guests");
      const resDate = document.getElementById("res-date");

      let isFormValid = true;

      // Validate Name
      if (resName.value.trim() === "") {
        resName.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        resName.parentElement.classList.remove("invalid");
      }

      // Validate Phone
      const phoneRegex = /^[0-9\-\+\s]{10,15}$/;
      if (!phoneRegex.test(resPhone.value.trim())) {
        resPhone.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        resPhone.parentElement.classList.remove("invalid");
      }

      // Validate Date
      if (resDate.value === "") {
        resDate.parentElement.classList.add("invalid");
        isFormValid = false;
      } else {
        const pickedDate = new Date(resDate.value);
        const currentDate = new Date();
        if (pickedDate < currentDate) {
          resDate.parentElement.classList.add("invalid");
          isFormValid = false;
        } else {
          resDate.parentElement.classList.remove("invalid");
        }
      }

      if (isFormValid) {
        // Hydrate receipt modal details
        document.getElementById("modal-guest-name").innerText = resName.value.trim();
        document.getElementById("modal-guest-count").innerText = resGuests.value;
        document.getElementById("modal-phone-val").innerText = resPhone.value.trim();
        
        const dateObj = new Date(resDate.value);
        document.getElementById("modal-date-val").innerText = dateObj.toLocaleString("en-US", {
          weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        // Trigger receipt show
        reservationModal.classList.add("open");
        modalOverlay.classList.add("open");
        
        // Reset form
        resForm.reset();
      }
    });
  }

  // Newsletter Form
  const newsForm = document.getElementById("newsletter-form");
  const newsEmail = document.getElementById("news-email");
  const newsStatus = document.getElementById("news-status");

  if (newsForm) {
    newsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsEmail.value.trim();
      
      if (email === "") {
        newsStatus.className = "news-status-msg error";
        newsStatus.innerText = "Email is required!";
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newsStatus.className = "news-status-msg error";
        newsStatus.innerText = "Enter a valid email!";
        return;
      }

      // Success subscription Simulation
      newsStatus.className = "news-status-msg success";
      newsStatus.innerText = "⚡ Success! Check your inbox for the 15% discount!";
      newsEmail.value = "";
      
      setTimeout(() => {
        newsStatus.innerText = "";
      }, 5000);
    });
  }
}

function getPlaceholderEmoji(category, name = "") {
  let placeholderEmoji = "🍛";
  if (category === "soups") placeholderEmoji = "🥣";
  else if (category === "egg") placeholderEmoji = "🍳";
  else if (category === "starters-veg") placeholderEmoji = "🥗";
  else if (category === "starters-nonveg") placeholderEmoji = "🍗";
  else if (category === "biriyanis" || category === "bucket-biriyanis") placeholderEmoji = "🍛";
  else if (category.includes("rice")) placeholderEmoji = "🍚";
  else if (category.includes("noodles")) placeholderEmoji = "🍜";
  else if (category === "tandoori") placeholderEmoji = "🍢";
  else if (category === "bbq") placeholderEmoji = "🍖";
  else if (category === "breads") placeholderEmoji = "🫓";
  else if (category === "curries") placeholderEmoji = "🥘";
  else if (category === "shawarma") placeholderEmoji = "🌯";
  else if (category === "grills") placeholderEmoji = "🔥";
  else if (category === "desserts") {
    placeholderEmoji = name.includes("Lassi") || name.includes("Chai") ? "🥤" : "🍰";
  }
  return placeholderEmoji;
}

// --- 5. RENDER MENU AND PRODUCTS INTERFACES ---
function renderMenuGrid() {
  const gridContainer = document.getElementById("menu-grid");
  const emptyState = document.getElementById("empty-menu-state");
  
  if (!gridContainer) return;

  // Filter products logic
  const filteredDishes = MENU_ITEMS.filter(dish => {
    // Diet preference constraint
    if (STATE.filters.diet !== "all") {
      if (dish.type !== STATE.filters.diet) return false;
    }

    // Category filter constraint
    if (STATE.filters.category !== "all") {
      if (dish.category !== STATE.filters.category) return false;
    }

    // Keyword search constraint
    if (STATE.filters.search !== "") {
      const nameMatch = dish.name.toLowerCase().includes(STATE.filters.search);
      const descMatch = dish.description.toLowerCase().includes(STATE.filters.search);
      const categoryMatch = dish.category.toLowerCase().replace("-", " ").includes(STATE.filters.search);
      if (!nameMatch && !descMatch && !categoryMatch) return false;
    }

    return true;
  });

  // Toggle empty notification
  if (filteredDishes.length === 0) {
    gridContainer.style.display = "none";
    if (emptyState) emptyState.style.display = "flex";
    return;
  } else {
    gridContainer.style.display = "grid";
    if (emptyState) emptyState.style.display = "none";
  }

  // Construct items elements
  gridContainer.innerHTML = filteredDishes.map(dish => {
    // Tags
    let tagsHTML = "";
    if (dish.tags.includes("popular") || dish.tags.includes("bestseller")) {
      tagsHTML += `<span class="card-tag bestseller"><i class="fa-solid fa-fire"></i> Trending</span>`;
    }
    if (dish.tags.includes("specialty") || dish.tags.includes("recommended")) {
      tagsHTML += `<span class="card-tag specialty"><i class="fa-solid fa-star"></i> Top Rated</span>`;
    }
    if (dish.tags.includes("traditional")) {
      tagsHTML += `<span class="card-tag traditional"><i class="fa-solid fa-mortar-pestle"></i> Authentic</span>`;
    }

    // Rating star counts
    let ratingStars = "⭐⭐⭐⭐⭐";
    let reviewCount = Math.floor(100 + Math.random() * 200);
    let score = (4.5 + Math.random() * 0.4).toFixed(1);

    // Dynamic placeholder emoji representation
    let placeholderEmoji = getPlaceholderEmoji(dish.category, dish.name);

    return `
      <div class="menu-card" data-id="${dish.id}">
        <div class="card-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-tag-wrapper">${tagsHTML}</div>
        
        <div class="card-media-placeholder" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <img src="food_items/${IMAGE_MAPPING[dish.id]}" alt="${dish.name}" class="card-media-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="placeholder-icon" style="display:none;">${placeholderEmoji}</div>
        </div>
        
        <div class="card-info" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="card-header-line">
            <h3 class="card-title">${dish.name}</h3>
          </div>
          <div class="card-rating-line">
            <span>${score}/5</span>
            <span>${ratingStars}</span>
            <span>(${reviewCount})</span>
          </div>
          <p class="card-desc">${dish.description}</p>
        </div>
        
        <div class="card-meta-line">
          <div class="card-price-wrapper">
            <span class="card-price-label">PRICE</span>
            <span class="card-price">₹${dish.price}</span>
          </div>
          <button class="card-add-btn" aria-label="Add ${dish.name} to order" onclick="addItemToOrder('${dish.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach dynamic 3D Card Hover Tilts (Hardware accelerated calculations)
  setup3dCardHoverTilts();

  // Scroll Reveal Animations - Only on Desktop for performance and layout safety!
  if (window.innerWidth >= 1024) {
    gsap.fromTo(".menu-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4, 
        stagger: 0.05, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".menu-grid",
          start: "top 85%"
        }
      }
    );
  } else {
    // Clear any GSAP inline styling on mobile/tablet viewports
    gsap.set(".menu-card", { clearProps: "all" });
  }
}

function renderFeaturedSection() {
  const featuredGrid = document.getElementById("featured-grid");
  if (!featuredGrid) return;

  // Curate 3 popular chef-recommended signature dishes
  const featuredIds = ["chicken-biriyani", "mutton-biriyani", "chicken-65-biriyani"];
  const featuredDishes = MENU_ITEMS.filter(item => featuredIds.includes(item.id));

  featuredGrid.innerHTML = featuredDishes.map(dish => {
    let tagsHTML = "";
    if (dish.tags.includes("popular") || dish.tags.includes("bestseller")) {
      tagsHTML += `<span class="card-tag bestseller"><i class="fa-solid fa-fire"></i> Trending</span>`;
    }
    if (dish.tags.includes("specialty") || dish.tags.includes("recommended")) {
      tagsHTML += `<span class="card-tag specialty"><i class="fa-solid fa-star"></i> Top Rated</span>`;
    }
    if (dish.tags.includes("traditional")) {
      tagsHTML += `<span class="card-tag traditional"><i class="fa-solid fa-mortar-pestle"></i> Authentic</span>`;
    }

    let ratingStars = "⭐⭐⭐⭐⭐";
    let reviewCount = 150 + (parseInt(dish.price) % 7) * 20;
    let score = (4.6 + (parseInt(dish.price) % 5) * 0.05).toFixed(1);

    let placeholderEmoji = getPlaceholderEmoji(dish.category, dish.name);

    return `
      <div class="menu-card" data-id="${dish.id}">
        <div class="card-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-tag-wrapper">${tagsHTML}</div>
        
        <div class="card-media-placeholder" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <img src="food_items/${IMAGE_MAPPING[dish.id]}" alt="${dish.name}" class="card-media-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="placeholder-icon" style="display:none;">${placeholderEmoji}</div>
        </div>
        
        <div class="card-info" onclick="location.hash='#item/${dish.id}'" style="cursor: pointer;">
          <div class="card-header-line">
            <h3 class="card-title">${dish.name}</h3>
          </div>
          <div class="card-rating-line">
            <span>${score}/5</span>
            <span>${ratingStars}</span>
            <span>(${reviewCount})</span>
          </div>
          <p class="card-desc">${dish.description}</p>
        </div>
        
        <div class="card-meta-line">
          <div class="card-price-wrapper">
            <span class="card-price-label">PRICE</span>
            <span class="card-price">₹${dish.price}</span>
          </div>
          <button class="card-add-btn" aria-label="Add ${dish.name} to order" onclick="addItemToOrder('${dish.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Re-attach hardware transforms to featured cards
  setup3dCardHoverTilts();
}

// --- 6. 3D CARD HOVER TILT EFFECTS CONTROLLER ---
function setup3dCardHoverTilts() {
  if (window.innerWidth < 1024) return; // Skip 3D hover transforms on mobile/tablet for performance and safety!

  const cards = document.querySelectorAll(".menu-card");
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;
      
      // Calculate mouse coordinates relative to center of the card (-1 to 1 range)
      const mouseX = (e.clientX - cardRect.left - cardWidth / 2) / (cardWidth / 2);
      const mouseY = (e.clientY - cardRect.top - cardHeight / 2) / (cardHeight / 2);
      
      // Limits rotation degrees (subtle tilt)
      const maxRotateX = 1.5;
      const maxRotateY = -1.5;
      
      const rotateX = mouseY * maxRotateX;
      const rotateY = mouseX * maxRotateY;
      
      // Apply subtle tilt and vertical highlight lift
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.03)`;
      
      // Dynamic shining glass sheen spotlight overlays
      const sheenFactorX = (mouseX + 1) * 50;
      const sheenFactorY = (mouseY + 1) * 50;
      card.style.backgroundImage = `radial-gradient(circle at ${sheenFactorX}% ${sheenFactorY}%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)`;
    });
    
    card.addEventListener("mouseleave", () => {
      // Clear rotations smoothly on leave
      card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
      card.style.backgroundImage = "none";
    });
  });
}

// --- 7. SHOPPING ORDER CART CONTROLLERS ---
function addItemToOrder(dishId) {
  const dish = MENU_ITEMS.find(item => item.id === dishId);
  if (!dish) return;

  const existingCartItem = STATE.cart.find(item => item.id === dishId);
  
  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    STATE.cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      type: dish.type,
      category: dish.category,
      quantity: 1
    });
  }

  updateCartCounter();
  showToastNotification(`Added ${dish.name} to order basket!`);
  
  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function updateCartCounter() {
  const counter = document.getElementById("cart-count");
  if (!counter) return;

  const totalQuantity = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
  counter.innerText = totalQuantity;

  // Pulse animation on the count badge
  gsap.fromTo(counter, 
    { scale: 0.6 },
    { scale: 1, duration: 0.3, ease: "back.out(2.5)" }
  );

  // Synchronize mobile order page if active
  const orderView = document.getElementById("mobile-order-view");
  if (orderView && orderView.style.display !== "none") {
    updateMobileOrderPageDOM();
  }
}

function adjustCartQuantity(dishId, change) {
  const cartItem = STATE.cart.find(item => item.id === dishId);
  if (!cartItem) return;

  cartItem.quantity += change;

  if (cartItem.quantity <= 0) {
    STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  }

  updateCartCounter();
  updateCartDrawerDOM();

  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function removeCartItem(dishId) {
  STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  updateCartCounter();
  updateCartDrawerDOM();

  // Synchronize dynamic details page controls if loaded
  if (typeof updateDetailCartControls === "function") {
    updateDetailCartControls(dishId);
  }
}

function renderMobileOrderPage() {
  const container = document.getElementById("mobile-order-view");
  if (!container) return;

  container.innerHTML = `
    <div class="order-view-container">
      <div class="detail-back-nav">
        <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
      </div>

      <div class="order-page-card">
        <div class="order-page-header">
          <i class="fa-solid fa-bag-shopping gold-gradient-text"></i>
          <h2>Your Order Basket</h2>
        </div>

        <div class="order-page-body" id="order-page-items-container">
          <!-- Items dynamically populated via updateMobileOrderPageDOM -->
        </div>

        <div class="order-page-footer" id="order-page-summary-footer">
          <!-- Pricing & checkout button dynamically populated -->
        </div>
      </div>
    </div>
  `;

  updateMobileOrderPageDOM();
}

function updateMobileOrderPageDOM() {
  const container = document.getElementById("order-page-items-container");
  const summaryFooter = document.getElementById("order-page-summary-footer");

  if (!container || !summaryFooter) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="order-page-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your order basket is empty</h3>
        <p>Browse our authentic menu options and add delicious biryanis to start your feast!</p>
        <a href="#menu-section" class="btn btn-primary" style="margin-top: var(--space-md);">EXPLORE MENU</a>
      </div>
    `;
    summaryFooter.innerHTML = "";
    return;
  }

  // Render items markup
  container.innerHTML = STATE.cart.map(item => {
    let placeholderEmoji = getPlaceholderEmoji(item.category, item.name);

    return `
      <div class="order-page-item">
        <div class="order-page-item-placeholder">
          <img src="food_items/${IMAGE_MAPPING[item.id]}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none'; this.parentElement.innerText='${placeholderEmoji}';">
        </div>
        <div class="order-page-item-info">
          <span class="order-page-item-name">${item.name}</span>
          <span class="order-page-item-meta">${item.type.toUpperCase()} · Individual serving</span>
          <span class="order-page-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="order-page-qty-controls">
          <button class="order-page-qty-btn" aria-label="Decrease quantity" onclick="adjustMobileCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="order-page-qty-val">${item.quantity}</span>
          <button class="order-page-qty-btn" aria-label="Increase quantity" onclick="adjustMobileCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="order-page-item-remove" aria-label="Remove item" onclick="removeMobileCartItem('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join("");

  // Calculate pricing math
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Real-time discounts on combo offerings
  let totalSavings = 0;
  STATE.cart.forEach(item => {
    if (item.id === "single-biryani-combo") totalSavings += 20 * item.quantity;
    if (item.id === "family-biryani-pack") totalSavings += 60 * item.quantity;
    if (item.id === "mixed-nonveg-feast") totalSavings += 100 * item.quantity;
    if (item.id === "vegetarian-combo") totalSavings += 15 * item.quantity;
  });

  const finalTotal = subtotal;

  summaryFooter.innerHTML = `
    <div class="summary-line">
      <span>Subtotal</span>
      <span>₹${subtotal + totalSavings}</span>
    </div>
    ${totalSavings > 0 ? `
    <div class="summary-line discount-line">
      <span>Combo Pack Savings <i class="fa-solid fa-gift"></i></span>
      <span>-₹${totalSavings}</span>
    </div>
    ` : ''}
    <div class="summary-line delivery-line">
      <span>Delivery Fee & Taxes</span>
      <span class="free-badge">FREE</span>
    </div>
    <div class="summary-line total-line">
      <span>Total Amount</span>
      <span class="gold-gradient-text" style="font-size: 1.5rem;">₹${finalTotal}</span>
    </div>

    <button class="btn btn-primary order-page-checkout-btn" id="mobile-checkout-btn">
      <span>PLACE ORDER ONLINE</span>
      <i class="fa-solid fa-receipt"></i>
    </button>

    <p class="checkout-hint">⚡ Guaranteed delivery within 30 minutes or free!</p>
  `;

  // Attach click listener to checkout button
  const checkoutBtn = document.getElementById("mobile-checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      // Open Success modal
      const orderId = `TV-${Math.floor(100000 + Math.random() * 900000)}-CH`;
      document.getElementById("success-order-id").innerText = orderId;
      
      document.getElementById("order-success-modal").classList.add("open");
      document.getElementById("modal-overlay").classList.add("open");
      
      // Empty the cart
      STATE.cart = [];
      updateCartCounter();
      
      // Redraw page DOM
      updateMobileOrderPageDOM();
    });
  }
}

function adjustMobileCartQuantity(dishId, change) {
  const cartItem = STATE.cart.find(item => item.id === dishId);
  if (!cartItem) return;

  cartItem.quantity += change;

  if (cartItem.quantity <= 0) {
    STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  }

  updateCartCounter();
  updateMobileOrderPageDOM();

  // Synchronize desktop drawer controls if active
  if (typeof updateCartDrawerDOM === "function") {
    updateCartDrawerDOM();
  }
}

function removeMobileCartItem(dishId) {
  STATE.cart = STATE.cart.filter(item => item.id !== dishId);
  updateCartCounter();
  updateMobileOrderPageDOM();

  // Synchronize desktop drawer controls if active
  if (typeof updateCartDrawerDOM === "function") {
    updateCartDrawerDOM();
  }
}

function updateCartDrawerDOM() {
  const container = document.getElementById("cart-items-container");
  const subtotalText = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("discount-summary-row");
  const discountText = document.getElementById("cart-discount");
  const totalText = document.getElementById("cart-total");

  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>Your order basket is empty</h3>
        <p>Browse our authentic menu options and add delicious biryanis to start your feast!</p>
      </div>
    `;
    subtotalText.innerText = "₹0";
    if (discountRow) discountRow.style.display = "none";
    totalText.innerText = "₹0";
    return;
  }

  // Render items markup
  container.innerHTML = STATE.cart.map(item => {
    let placeholderEmoji = getPlaceholderEmoji(item.category, item.name);

    return `
      <div class="cart-item">
        <div class="cart-item-placeholder">
          <img src="food_items/${IMAGE_MAPPING[item.id]}" alt="${item.name}" class="cart-item-image" onerror="this.style.display='none'; this.parentElement.innerText='${placeholderEmoji}';">
        </div>
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-meta">${item.type.toUpperCase()} · Individual serving</span>
          <span class="cart-item-price">₹${item.price * item.quantity}</span>
        </div>
        <div class="cart-quantity-controls">
          <button class="qty-btn" aria-label="Decrease quantity" onclick="adjustCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" aria-label="Increase quantity" onclick="adjustCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="cart-item-remove" aria-label="Remove item" onclick="removeCartItem('${item.id}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join("");

  // Calculate pricing math
  const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Real-time discounts on combo offerings
  let totalSavings = 0;
  STATE.cart.forEach(item => {
    if (item.id === "single-biryani-combo") totalSavings += 20 * item.quantity;
    if (item.id === "family-biryani-pack") totalSavings += 60 * item.quantity;
    if (item.id === "mixed-nonveg-feast") totalSavings += 100 * item.quantity;
    if (item.id === "vegetarian-combo") totalSavings += 15 * item.quantity;
  });

  const finalTotal = subtotal; // Combos prices are already discounted inside MENU_ITEMS.

  // Render prices values
  subtotalText.innerText = `₹${subtotal + totalSavings}`;
  
  if (totalSavings > 0 && discountRow && discountText) {
    discountRow.style.display = "flex";
    discountText.innerText = `-₹${totalSavings}`;
  } else if (discountRow) {
    discountRow.style.display = "none";
  }

  totalText.innerText = `₹${finalTotal}`;
}

// --- 8. QUICK TOAST SYSTEM ---
function showToastNotification(message) {
  const toast = document.getElementById("toast-notification");
  const msgEl = document.getElementById("toast-message");

  if (!toast || !msgEl) return;

  msgEl.innerText = message;
  toast.classList.add("show");

  // Auto hide after delay
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// --- 9. HIGH-PERFORMANCE THREE.JS PIPELINE ---
function initThreeJsPipeline() {
  const container = document.getElementById("threejs-centerpiece-container");
  if (!container) return;

  // A. Set up Canvas Render dimensions
  const width = container.clientWidth;
  const height = container.clientHeight;

  // B. Setup Scene, optimized Camera & Renderer
  const scene = new THREE.Scene();
  STATE.threejs.scene = scene;

  // Perspective Camera
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 8);
  STATE.threejs.camera = camera;

  // Antialias enabled, pixel ratio capped at 1.5 to maximize low-spec device frame rate!
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.shadowMap.enabled = false; // Disable shadows for extreme performance boost
  container.appendChild(renderer.domElement);
  STATE.threejs.renderer = renderer;

  // C. Inject Beautiful, Realistic Dynamic Lights
  const ambientLight = new THREE.AmbientLight(0xfff3e0, 0.6); // Warm soft base
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0xffd437, 1.2); // Golden spotlight shine
  keyLight.position.set(5, 5, 5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xc85a17, 0.6); // Terracotta side bounce
  fillLight.position.set(-5, 0, 3);
  scene.add(fillLight);

  const bottomWarmLight = new THREE.PointLight(0xff5722, 2.5, 6); // Fire ember glow underneath dome lid
  bottomWarmLight.position.set(0, -1.8, 0);
  scene.add(bottomWarmLight);

  // D. Build Centerpiece Geometric Serving Cloche / Pot Lid ("Topi")
  const centerpieceGroup = new THREE.Group();
  scene.add(centerpieceGroup);
  STATE.threejs.centerpiece = centerpieceGroup;

  // Adjust centerpiece base tilt angle slightly for 3D perspective presentation
  centerpieceGroup.rotation.x = 0.35;
  centerpieceGroup.rotation.y = -0.6;

  // E. Setup Floating Spice Particle System in the background
  const spiceParticleCount = 60;
  const spiceGeometry = new THREE.BufferGeometry();
  const spicePositions = new Float32Array(spiceParticleCount * 3);
  const spiceSpeeds = [];

  for (let i = 0; i < spiceParticleCount; i++) {
    // Spread spices in a 3D bounding box
    spicePositions[i * 3] = (Math.random() - 0.5) * 12;
    spicePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    spicePositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

    spiceSpeeds.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (0.003 + Math.random() * 0.008),
      spin: (Math.random() - 0.5) * 0.02
    });
  }

  spiceGeometry.setAttribute('position', new THREE.BufferAttribute(spicePositions, 3));

  // Custom shader look for spice particles (small warm glowing elements)
  const spiceMaterial = new THREE.PointsMaterial({
    color: 0xe6c366,
    size: 0.15,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const spicePoints = new THREE.Points(spiceGeometry, spiceMaterial);
  scene.add(spicePoints);
  STATE.threejs.particles = { points: spicePoints, speeds: spiceSpeeds };

  // F. Build glowing dynamic Aroma Steam rising from tray rim!
  const steamParticleCount = 20;
  const steamGeometry = new THREE.BufferGeometry();
  const steamPositions = new Float32Array(steamParticleCount * 3);
  const steamAges = [];

  for (let i = 0; i < steamParticleCount; i++) {
    // Steams originate from around circular rim tray base
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.95;
    steamPositions[i * 3] = Math.cos(angle) * radius;
    steamPositions[i * 3 + 1] = -0.35 + (Math.random() * 0.2);
    steamPositions[i * 3 + 2] = Math.sin(angle) * radius;

    steamAges.push(Math.random()); // Phase offset
  }

  steamGeometry.setAttribute('position', new THREE.BufferAttribute(steamPositions, 3));

  const steamMaterial = new THREE.PointsMaterial({
    color: 0xff6b35,
    size: 0.18,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending
  });

  const steamPoints = new THREE.Points(steamGeometry, steamMaterial);
  centerpieceGroup.add(steamPoints);
  STATE.threejs.steam = { points: steamPoints, ages: steamAges };

  // G. Drag to Spin Orbit Mouse controls (Tactile feel)
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;

  const onPointerDown = (e) => {
    isDragging = true;
    previousMouseX = e.clientX || e.touches[0].clientX;
    previousMouseY = e.clientY || e.touches[0].clientY;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
    const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

    const deltaX = clientX - previousMouseX;
    const deltaY = clientY - previousMouseY;

    // Apply incremental drag rotations
    STATE.threejs.targetRotationY += deltaX * 0.007;
    STATE.threejs.targetRotationX += deltaY * 0.007;

    // Constrain X rotation to prevent turning lid completely upside down
    STATE.threejs.targetRotationX = Math.max(-0.2, Math.min(0.8, STATE.threejs.targetRotationX));

    previousMouseX = clientX;
    previousMouseY = clientY;
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  // Attach touch & pointer events directly to the container
  container.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  
  container.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);

  // H. Handle responsive browser resizing
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const newWidth = entry.contentRect.width;
      const newHeight = entry.contentRect.height;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      renderer.setSize(newWidth, newHeight);
    }
  });
  resizeObserver.observe(container);

  // I. Kickoff render thread loop
  runThreeJsLoop();
}

function runThreeJsLoop() {
  // Infinite requestAnimationFrame render thread
  const animate = () => {
    STATE.threejs.animationId = requestAnimationFrame(animate);

    // If out of viewport screen space, skip calculations entirely (Extremely high-performance)
    if (!STATE.threejs.isIntersecting) return;

    const time = Date.now() * 0.001;

    // A. Centerpiece drag rotations interpolation (Smooth elastic spring effect)
    STATE.threejs.currentRotationY += (STATE.threejs.targetRotationY - STATE.threejs.currentRotationY) * 0.1;
    STATE.threejs.currentRotationX += (STATE.threejs.targetRotationX - STATE.threejs.currentRotationX) * 0.1;

    // Apply base orbit drift rotation + manual dragged rotation
    STATE.threejs.centerpiece.rotation.y = -0.6 + time * 0.12 + STATE.threejs.currentRotationY;
    STATE.threejs.centerpiece.rotation.x = 0.35 + STATE.threejs.currentRotationX;

    // Centerpiece subtle floating oscillation
    STATE.threejs.centerpiece.position.y = Math.sin(time * 1.5) * 0.08;

    // B. Drift floating spice particles
    if (STATE.threejs.particles) {
      const positions = STATE.threejs.particles.points.geometry.attributes.position.array;
      const speeds = STATE.threejs.particles.speeds;

      for (let i = 0; i < speeds.length; i++) {
        // Move upward gently
        positions[i * 3 + 1] += speeds[i].y;
        // Oscillate left-right
        positions[i * 3] += Math.sin(time + i) * 0.002;

        // If drifted past top screen margin, loop back to the bottom
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = -5;
          positions[i * 3] = (Math.random() - 0.5) * 12;
        }
      }
      STATE.threejs.particles.points.geometry.attributes.position.needsUpdate = true;
    }

    // C. Rising hot aroma steam points
    if (STATE.threejs.steam) {
      const positions = STATE.threejs.steam.points.geometry.attributes.position.array;
      const ages = STATE.threejs.steam.ages;

      for (let i = 0; i < ages.length; i++) {
        // Increment steam particle age
        ages[i] += 0.008;
        if (ages[i] > 1) ages[i] = 0; // Loop age

        // Rise steam vertically
        positions[i * 3 + 1] = -0.35 + ages[i] * 1.8;
        
        // Dissipate slightly outward
        const angle = (i / ages.length) * Math.PI * 2 + time * 0.2;
        const currentRadius = 1.95 + ages[i] * 0.6;
        positions[i * 3] = Math.cos(angle) * currentRadius;
        positions[i * 3 + 2] = Math.sin(angle) * currentRadius;
      }
      STATE.threejs.steam.points.geometry.attributes.position.needsUpdate = true;
    }

    // D. Render Frame
    STATE.threejs.renderer.render(STATE.threejs.scene, STATE.threejs.camera);
  };
  
  animate();
}

// --- 10. DYNAMIC PERFORMANCE OPTIMIZATIONS CONTROLLER ---
function setupPerformanceObservers() {
  const container = document.getElementById("threejs-centerpiece-container");
  if (!container) return;

  // IntersectionObserver completely pauses rendering when the hero canvas is out of view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      STATE.threejs.isIntersecting = entry.isIntersecting;
    });
  }, { threshold: 0.1 });

  observer.observe(container);

  // Monitor hardware load: Throttle ThreeJS Pixel Ratio dynamically if frame drops are observed
  // Cap at low spec on mobile to guarantee battery and rendering efficiency
  if (window.innerWidth < 768 && STATE.threejs.renderer) {
    STATE.threejs.renderer.setPixelRatio(1.0);
  }
}

// --- 11. GSAP CINEMATIC SCROLL REVEALS ---
function playHeroIntro() {
  // Stagger reveal of hero titles and visuals
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.from(".logo-img", {
    scale: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  tl.from(".nav-link, .cta-order-btn, .cart-trigger", {
    opacity: 0,
    y: -15,
    stagger: 0.05,
    duration: 0.4,
    ease: "power2.out"
  }, "-=0.3");

  tl.from(".text-reveal", {
    opacity: 0,
    y: 25,
    stagger: 0.1,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.2");

  tl.from(".threejs-hero-wrapper", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.4");

  // Parallax Scroll for Our Story image
  gsap.fromTo(".story-img", 
    { y: "-8%" },
    {
      y: "8%",
      ease: "none",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );

  // Stagger reveal Our Story metrics
  gsap.from(".metric-item", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".story-metrics",
      start: "top 90%"
    }
  });

  // Stagger reveal contact cards
  gsap.from(".info-card", {
    opacity: 0,
    x: 30,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".contact-info-wrapper",
      start: "top 85%"
    }
  });
}

// --- 12. DEDICATED SUBPAGE ROUTING & DETAILS CONTROLLER ---
let reviewTimer = null;
let activeReviewIndex = 0;

function checkHashRoute() {
  const hash = window.location.hash || "#home";
  const detailView = document.getElementById("product-detail-view");
  const mobileOrderView = document.getElementById("mobile-order-view");
  const heroSection = document.getElementById("home");
  const menuSection = document.getElementById("menu-section");
  const storySection = document.getElementById("story");
  const contactSection = document.getElementById("contact");

  // Stop active detail review slide timer if transitioning
  if (reviewTimer) {
    clearInterval(reviewTimer);
    reviewTimer = null;
  }

  // Clear detailView markup if we are leaving it
  if (!hash.startsWith("#item/") && detailView) {
    detailView.innerHTML = "";
  }

  // Clear mobileOrderView markup if we are leaving it
  if (hash !== "#order" && mobileOrderView) {
    mobileOrderView.innerHTML = "";
  }

  const featuredSection = document.getElementById("featured-section");

  // Hide all sections by default to enforce SPA isolation
  if (heroSection) heroSection.style.display = "none";
  if (featuredSection) featuredSection.style.display = "none";
  if (menuSection) menuSection.style.display = "none";
  if (storySection) storySection.style.display = "none";
  if (contactSection) contactSection.style.display = "none";
  if (detailView) detailView.style.display = "none";
  if (mobileOrderView) mobileOrderView.style.display = "none";

  // Determine active route for navigation link highlighting
  let activeRoute = hash;

  if (hash.startsWith("#item/")) {
    const itemId = hash.split("/")[1];
    if (detailView) {
      detailView.style.display = "block";
      renderProductDetailPage(itemId);
    }
    // Deep links to items should highlight the Menu tab
    activeRoute = "#menu-section";
  } else if (hash === "#order") {
    if (mobileOrderView) {
      mobileOrderView.style.display = "block";
      renderMobileOrderPage();
    }
    activeRoute = "";
  } else if (hash === "#menu-section") {
    if (menuSection) menuSection.style.display = "block";
  } else if (hash === "#story") {
    if (storySection) storySection.style.display = "block";
  } else if (hash === "#contact") {
    if (contactSection) contactSection.style.display = "block";
  } else {
    // Default view is Home (Hero section + Featured Recommendations)
    if (heroSection) heroSection.style.display = "flex";
    if (featuredSection) featuredSection.style.display = "block";
    activeRoute = "#home";
  }

  // Update navigation highlighting in desktop navbar
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === activeRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update navigation highlighting in mobile drawer
  document.querySelectorAll(".drawer-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === activeRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Instantly scroll back to the top to simulate standard browser navigation
  window.scrollTo({ top: 0, behavior: "instant" });

  // Dynamically refresh GSAP ScrollTrigger to recalculate alignment after layout updates
  if (typeof ScrollTrigger !== "undefined" && ScrollTrigger.refresh) {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }
}

// Register hash routing listener globally
window.addEventListener("hashchange", checkHashRoute);

function renderProductDetailPage(itemId) {
  const dish = MENU_ITEMS.find(item => item.id === itemId);
  const container = document.getElementById("product-detail-view");
  if (!dish || !container) {
    container.innerHTML = `
      <div class="detail-view-container">
        <div class="detail-back-nav">
          <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
        </div>
        <div style="text-align:center; padding: 100px 0;">
          <h2>Dish Not Found</h2>
          <p>We couldn't locate this specialty in our kitchen. Explore our menu instead!</p>
        </div>
      </div>
    `;
    return;
  }

  // Pre-calculated metrics
  let dietBadgeLabel = "N";
  if (dish.type === "veg") dietBadgeLabel = "V";
  if (dish.type === "egg") dietBadgeLabel = "E";

  let ratingStars = "⭐⭐⭐⭐⭐";
  let score = (4.5 + (parseInt(dish.id.length || 0) % 5) * 0.1).toFixed(1);
  let reviewCount = 120 + (parseInt(dish.price || 0) * 3) % 250;

  // Placeholder emoji representation
  let placeholderEmoji = getPlaceholderEmoji(dish.category, dish.name);

  // Similar items matching logic
  // For "chennai-chicken-biryani", it should match: "chicken-65-biryani", "chicken-mandi-biryani", and "chicken-bucket-biryani"
  let similarDishes = [];
  if (dish.id === "chicken-biriyani") {
    similarDishes = MENU_ITEMS.filter(item => 
      ["chicken-65-biriyani", "chicken-tandoori-biriyani", "chicken-bucket-biriyani"].includes(item.id)
    );
  } else {
    // Dynamic matching for other items: same category or same type
    similarDishes = MENU_ITEMS.filter(item => item.id !== dish.id && (item.category === dish.category || item.type === dish.type)).slice(0, 3);
  }

  // Populate Similar Items HTML
  let similarItemsHTML = similarDishes.map(sim => {
    let simEmoji = getPlaceholderEmoji(sim.category, sim.name);

    let ratingStars = "⭐⭐⭐⭐⭐";
    let reviewCount = 100 + (parseInt(sim.id.length || 0) * 7) % 150;
    let score = (4.4 + (parseInt(sim.price || 0) % 5) * 0.1).toFixed(1);

    let tagsHTML = "";
    if (sim.tags.includes("popular") || sim.tags.includes("bestseller")) {
      tagsHTML += `<span class="card-tag bestseller"><i class="fa-solid fa-fire"></i> Trending</span>`;
    }
    if (sim.tags.includes("specialty") || sim.tags.includes("recommended")) {
      tagsHTML += `<span class="card-tag specialty"><i class="fa-solid fa-star"></i> Top Rated</span>`;
    }
    if (sim.tags.includes("traditional")) {
      tagsHTML += `<span class="card-tag traditional"><i class="fa-solid fa-mortar-pestle"></i> Authentic</span>`;
    }

    return `
      <div class="menu-card" data-id="${sim.id}">
        <div class="card-diet-badge ${sim.type}" title="${sim.type.toUpperCase()}"><span class="diet-circle"></span></div>
        <div class="card-tag-wrapper">${tagsHTML}</div>
        
        <div class="card-media-placeholder" onclick="location.hash='#item/${sim.id}'" style="cursor: pointer;">
          <img src="food_items/${IMAGE_MAPPING[sim.id]}" alt="${sim.name}" class="card-media-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="placeholder-icon" style="display:none;">${simEmoji}</div>
        </div>
        
        <div class="card-info" onclick="location.hash='#item/${sim.id}'" style="cursor: pointer;">
          <div class="card-header-line">
            <h3 class="card-title">${sim.name}</h3>
          </div>
          <div class="card-rating-line">
            <span>${score}/5</span>
            <span>${ratingStars}</span>
            <span>(${reviewCount})</span>
          </div>
          <p class="card-desc">${sim.description}</p>
        </div>
        
        <div class="card-meta-line">
          <div class="card-price-wrapper">
            <span class="card-price-label">PRICE</span>
            <span class="card-price">₹${sim.price}</span>
          </div>
          <button class="card-add-btn" aria-label="Add ${sim.name} to order" onclick="event.stopPropagation(); addItemToOrder('${sim.id}')">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Tamil Nadu Positive Reviews Generator with 1:4 Spacing Ratio
  const hinduNames = ["ram", "dhanush", "vijay", "babu", "pandiyan", "karthi", "tamilselvi", "varsha", "preethi", "aishwarya", "abirami", "lakshmi"];
  const christianNames = ["jeba", "john", "jonathan", "wilson", "joseph", "kevin"];
  const muslimNames = ["arshad", "anas", "mohammad", "riyaz", "asfiya", "fatima", "sara", "rizwan", "abdul"];
  
  // Combine all names
  const allNames = [...hinduNames, ...christianNames, ...muslimNames];
  
  // Modular offset based on the dish name index guarantees that the same name is never reused
  // within consecutive items, satisfying the 1:4 ratio!
  const dishIndex = MENU_ITEMS.findIndex(item => item.id === dish.id);
  
  const positiveReviewsPool = [
    "Simply superb biryani! The chicken is very soft and masala is perfectly mixed. Raita is also very thick.",
    "Rice quality is semma long and soft. The dum smell is ultimate. Best biryani spot in Chennai, no doubt.",
    "Vera level taste! Masala has no excess oil and spicy level is perfect. Mutton piece was literally melting like butter.",
    "Highly recommended! Chicken 65 is crispy and goes ultimate with the hot biryani rice. Safe packing also.",
    "Traditional taste at its best. Quantity was very good, one plate is easily enough for single person.",
    "Aroma is pure heaven. The moment we open the seal, whole house gets the smell! Cardamom kheer is must-try dessert.",
    "Super fast delivery. Biryani was piping hot when it reached. Raita and bread halwa was ultimate combo.",
    "Worth every rupee. Authentic Tamil Nadu style. Very neat packaging and chicken pieces were big and juicy."
  ];

  let reviews = [];
  const ratingsPool = [4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
  for (let r = 0; r < 4; r++) {
    // Pick name with unique mathematical modular rotation offset
    const nameIndex = (dishIndex * 3 + r * 7) % allNames.length;
    const reviewerName = allNames[nameIndex];
    
    // Pick review text
    const reviewIndex = (dishIndex * 2 + r * 3) % positiveReviewsPool.length;
    const reviewText = positiveReviewsPool[reviewIndex];
    
    // Dynamic modular rating score selection
    const ratingVal = ratingsPool[(dishIndex * 3 + r * 5) % ratingsPool.length];
    
    reviews.push({
      name: reviewerName,
      text: reviewText,
      rating: ratingVal
    });
  }

  // Populate Reviews HTML
  let reviewsHTML = reviews.map((rev, idx) => {
    return `
      <div class="review-slide-card ${idx === 0 ? "active" : ""}" data-index="${idx}">
        <span class="review-user-name">${rev.name}</span>
        <div class="review-rating-stars">${rev.rating.toFixed(1)}/5 ⭐⭐⭐⭐⭐</div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `;
  }).join("");

  // Construct page HTML
  container.innerHTML = `
    <div class="detail-view-container">
      
      <!-- Breadcrumb navigation -->
      <div class="detail-back-nav">
        <a href="#menu-section" class="back-to-menu-btn"><i class="fa-solid fa-arrow-left"></i> BACK TO MENU</a>
      </div>

      <!-- Main product description grid -->
      <div class="product-detail-main-grid">
        
        <!-- Left Side: Image Placeholder -->
        <div class="detail-media-container">
          <div class="detail-media-placeholder">
            <img src="food_items/${IMAGE_MAPPING[dish.id]}" alt="${dish.name}" class="detail-media-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-block'; this.nextElementSibling.nextElementSibling.style.display='inline-block';">
            <span class="placeholder-emoji" style="display:none;">${placeholderEmoji}</span>
            <span class="placeholder-label" style="display:none;">Food Image Placeholder</span>
          </div>
        </div>

        <!-- Right Side: Product Info Card -->
        <div class="detail-info-container">
          
          <div class="detail-header-row">
            <div class="detail-badges-row">
              <div class="detail-diet-badge ${dish.type}" title="${dish.type.toUpperCase()}"><span class="diet-circle"></span></div>
              <span class="detail-cat-badge">${dish.category.replace("-", " ")}</span>
            </div>
            <h2 class="detail-title">${dish.name}</h2>
          </div>

          <div class="detail-rating-row">
            <span class="detail-rating-stars">${ratingStars}</span>
            <span class="detail-rating-score">${score}/5</span>
            <span class="detail-rating-count">(${reviewCount} positive reviews)</span>
          </div>

          <div class="detail-price-wrapper">
            <span class="detail-price-lbl">PRICE</span>
            <span class="detail-price">₹${dish.price}</span>
          </div>

          <div class="detail-desc-block">
            <h3 class="detail-desc-title">Detailed Description</h3>
            <p class="detail-desc">${dish.description}</p>
          </div>

          <!-- Add to Cart / Quantity Selector Control Block -->
          <div class="detail-cart-action-block" id="detail-cart-block-${dish.id}">
            <!-- Dynamic button rendered here -->
          </div>

        </div>

      </div>

      <!-- Similar Items Section -->
      <div class="similar-items-section">
        <h3 class="detail-section-title">Similar Items</h3>
        <div class="similar-items-grid">
          ${similarItemsHTML}
        </div>
      </div>

      <!-- Ratings & Reviews Slider Section -->
      <div class="reviews-section">
        <h3 class="detail-section-title">Ratings & Reviews</h3>
        <div class="reviews-carousel-outer">
          <button class="review-arrow left" aria-label="Previous Review" onclick="shiftReview(-1, true)"><i class="fa-solid fa-chevron-left"></i></button>
          <div class="review-slider-track" id="review-slider-track">
            ${reviewsHTML}
          </div>
          <button class="review-arrow right" aria-label="Next Review" onclick="shiftReview(1, true)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

    </div>
  `;

  // Draw appropriate cart controls
  updateDetailCartControls(dish.id);

  // Setup review slider timer interval
  initReviewSliderInterval();

  // Attach dynamic 3D Card Hover Tilts to similar items cards
  setup3dCardHoverTilts();
}

function updateDetailCartControls(itemId) {
  const container = document.getElementById(`detail-cart-block-${itemId}`);
  if (!container) return;

  const cartItem = STATE.cart.find(item => item.id === itemId);

  if (!cartItem) {
    container.innerHTML = `
      <button class="detail-add-btn" onclick="addDetailItemToOrder('${itemId}')">
        <i class="fa-solid fa-bag-shopping"></i> ADD TO BASKET
      </button>
    `;
  } else {
    container.innerHTML = `
      <div class="detail-qty-adjuster">
        <button class="detail-qty-btn" aria-label="Decrease quantity" onclick="adjustDetailQty('${itemId}', -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="detail-qty-val">${cartItem.quantity}</span>
        <button class="detail-qty-btn" aria-label="Increase quantity" onclick="adjustDetailQty('${itemId}', 1)"><i class="fa-solid fa-plus"></i></button>
      </div>
    `;
  }
}

function addDetailItemToOrder(itemId) {
  addItemToOrder(itemId);
  updateDetailCartControls(itemId);
}

function adjustDetailQty(itemId, change) {
  adjustCartQuantity(itemId, change);
  updateDetailCartControls(itemId);
}

function initReviewSliderInterval() {
  if (reviewTimer) clearInterval(reviewTimer);
  activeReviewIndex = 0; // Reset index
  
  reviewTimer = setInterval(() => {
    shiftReview(1);
  }, 5000);
}

function shiftReview(direction, isManual = false) {
  const cards = document.querySelectorAll(".review-slide-card");
  if (cards.length === 0) return;
  
  // Hide active card
  cards[activeReviewIndex].classList.remove("active");
  
  // Shift index
  activeReviewIndex = (activeReviewIndex + direction + cards.length) % cards.length;
  
  // Show new active card
  cards[activeReviewIndex].classList.add("active");
  
  // If clicked manually, clear and restart 5-second timer
  if (isManual) {
    if (reviewTimer) clearInterval(reviewTimer);
    reviewTimer = setInterval(() => {
      shiftReview(1);
    }, 5000);
  }
}
