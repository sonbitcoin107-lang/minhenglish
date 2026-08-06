// src/data/speaking/ff1/units.js
// Oxford Family & Friends 1 — Starter + 15 Units
//
// ✅ Starter  Hello!
// ✅ Unit 1   School Things
// ✅ Unit 2   Playtime (Toys)
// ✅ Unit 3   My Body
// ✅ Unit 4   People & Family
// ✅ Unit 5   Where's the Ball? (Prepositions)
// ✅ Unit 6   Billy's Teddy (Possessive 's)
// ✅ Unit 7   Are These His Trousers? (Clothing)
// ✅ Unit 8   Where's Grandma? (Locations)
// ✅ Unit 9   Lunchtime (Food)
// ✅ Unit 10  My Bedroom (Furniture)
// ✅ Unit 11  Animals
// ❌ Unit 12  Dinnertime            ← chờ NotebookLM
// ❌ Unit 13  Clean Up!             ← chờ NotebookLM
// ❌ Unit 14  Action Boy (Can/Can't)← chờ NotebookLM
// ❌ Unit 15  Let's Play Ball!      ← chờ NotebookLM
//
// Format mỗi turn:
//   mascot: MinhTi nói trước
//   child:  bé lặp lại / trả lời
//   required: các từ BẮT BUỘC bé phải nói (speech recognition check)
//   [NAME]: placeholder — luôn được chấp nhận

export const FF1_UNITS = [
  // ─────────────────────────────────────────────────────────────
  // STARTER — Hello!
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-starter',
    unit: 0,
    title: 'Hello!',
    emoji: '👋',
    color: '#58CC02',
    colorDark: '#3D9900',
    description: 'Chào hỏi & giới thiệu bản thân',
    dialogues: [
      {
        id: 'ds-1',
        mascot: { text: "Hello! I'm MinhTi!", speak: "Hello! I'm MinhTi!" },
        child:  { text: "Hello! I'm [NAME]!", required: ['hello'] },
      },
      {
        id: 'ds-2',
        mascot: { text: "What's your name?", speak: "What's your name?" },
        child:  { text: "My name is [NAME].", required: ['my', 'name', 'is'] },
      },
      {
        id: 'ds-3',
        mascot: { text: "How are you?", speak: "How are you?" },
        child:  { text: "I'm fine, thank you!", required: ["i'm", 'fine', 'thank', 'you'] },
      },
      {
        id: 'ds-4',
        mascot: { text: "Nice to meet you!", speak: "Nice to meet you!" },
        child:  { text: "Nice to meet you too!", required: ['nice', 'to', 'meet', 'you'] },
      },
      {
        id: 'ds-5',
        mascot: { text: "How old are you?", speak: "How old are you?" },
        child:  { text: "I'm seven years old.", required: ["i'm", 'seven', 'years', 'old'] },
      },
      {
        id: 'ds-6',
        mascot: { text: "Are you a student?", speak: "Are you a student?" },
        child:  { text: "Yes, I'm a student.", required: ['yes', "i'm", 'a', 'student'] },
      },
      {
        id: 'ds-7',
        mascot: { text: "Goodbye! See you later!", speak: "Goodbye! See you later!" },
        child:  { text: "Goodbye! Bye bye!", required: ['goodbye'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 1 — School Things
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit1',
    unit: 1,
    title: 'School Things',
    emoji: '🏫',
    color: '#1CB0F6',
    colorDark: '#0099D5',
    description: 'Đồ dùng học tập & lớp học',
    dialogues: [
      {
        id: 'd1-1',
        mascot: { text: "What's this?", speak: "What's this?" },
        child:  { text: "It's a pen.", required: ["it's", 'a', 'pen'] },
      },
      {
        id: 'd1-2',
        mascot: { text: "What's that?", speak: "What's that?" },
        child:  { text: "It's a pencil.", required: ["it's", 'a', 'pencil'] },
      },
      {
        id: 'd1-3',
        mascot: { text: "Is this a ruler?", speak: "Is this a ruler?" },
        child:  { text: "Yes, it's a ruler.", required: ['yes', "it's", 'a', 'ruler'] },
      },
      {
        id: 'd1-4',
        mascot: { text: "Is this a book?", speak: "Is this a book?" },
        child:  { text: "No, it's a bag.", required: ['no', "it's", 'a', 'bag'] },
      },
      {
        id: 'd1-5',
        mascot: { text: "What color is your pencil?", speak: "What color is your pencil?" },
        child:  { text: "My pencil is yellow.", required: ['my', 'pencil', 'is', 'yellow'] },
      },
      {
        id: 'd1-6',
        mascot: { text: "Open your book, please!", speak: "Open your book, please!" },
        child:  { text: "OK! Open the book.", required: ['open', 'the', 'book'] },
      },
      {
        id: 'd1-7',
        mascot: { text: "Sit down, please.", speak: "Sit down, please." },
        child:  { text: "Yes, sit down.", required: ['yes', 'sit', 'down'] },
      },
      {
        id: 'd1-8',
        mascot: { text: "Stand up, please.", speak: "Stand up, please." },
        child:  { text: "Yes, stand up!", required: ['yes', 'stand', 'up'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 2 — Playtime (Toys)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit2',
    unit: 2,
    title: 'Playtime',
    emoji: '🎮',
    color: '#FF4B4B',
    colorDark: '#CC3C3C',
    description: 'Đồ chơi yêu thích',
    dialogues: [
      {
        id: 'd2-1',
        mascot: { text: "What's your favorite toy?", speak: "What's your favorite toy?" },
        child:  { text: "My favorite toy is a ball.", required: ['my', 'favorite', 'toy', 'is', 'a', 'ball'] },
      },
      {
        id: 'd2-2',
        mascot: { text: "Do you have a doll?", speak: "Do you have a doll?" },
        child:  { text: "Yes, I have a doll.", required: ['yes', 'i', 'have', 'a', 'doll'] },
      },
      {
        id: 'd2-3',
        mascot: { text: "Do you have a robot?", speak: "Do you have a robot?" },
        child:  { text: "No, I don't have a robot.", required: ['no', "don't", 'have', 'a', 'robot'] },
      },
      {
        id: 'd2-4',
        mascot: { text: "Is this your kite?", speak: "Is this your kite?" },
        child:  { text: "Yes, it's my kite.", required: ['yes', "it's", 'my', 'kite'] },
      },
      {
        id: 'd2-5',
        mascot: { text: "Can you ride a bike?", speak: "Can you ride a bike?" },
        child:  { text: "Yes, I can ride a bike!", required: ['yes', 'i', 'can', 'ride', 'a', 'bike'] },
      },
      {
        id: 'd2-6',
        mascot: { text: "Let's play together!", speak: "Let's play together!" },
        child:  { text: "Yes! Let's play!", required: ['yes', "let's", 'play'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 3 — My Body
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit3',
    unit: 3,
    title: 'My Body',
    emoji: '💪',
    color: '#FF9600',
    colorDark: '#CC7A00',
    description: 'Các bộ phận cơ thể',
    dialogues: [
      {
        id: 'd3-1',
        mascot: { text: "Touch your head!", speak: "Touch your head!" },
        child:  { text: "Head! I touch my head.", required: ['head', 'i', 'touch', 'my'] },
      },
      {
        id: 'd3-2',
        mascot: { text: "Touch your shoulders!", speak: "Touch your shoulders!" },
        child:  { text: "Shoulders! I touch my shoulders.", required: ['shoulders', 'i', 'touch', 'my'] },
      },
      {
        id: 'd3-3',
        mascot: { text: "How many eyes do you have?", speak: "How many eyes do you have?" },
        child:  { text: "I have two eyes.", required: ['i', 'have', 'two', 'eyes'] },
      },
      {
        id: 'd3-4',
        mascot: { text: "How many fingers do you have?", speak: "How many fingers do you have?" },
        child:  { text: "I have ten fingers.", required: ['i', 'have', 'ten', 'fingers'] },
      },
      {
        id: 'd3-5',
        mascot: { text: "What do you have on your face?", speak: "What do you have on your face?" },
        child:  { text: "I have eyes, a nose and a mouth.", required: ['eyes', 'nose', 'mouth'] },
      },
      {
        id: 'd3-6',
        mascot: { text: "Clap your hands!", speak: "Clap your hands!" },
        child:  { text: "Clap clap! Clap your hands!", required: ['clap', 'your', 'hands'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 4 — People & Family
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit4',
    unit: 4,
    title: 'People',
    emoji: '👨‍👩‍👧',
    color: '#CE82FF',
    colorDark: '#9B5FC0',
    description: 'Gia đình & nghề nghiệp',
    dialogues: [
      {
        id: 'd4-1',
        mascot: { text: "Who is this?", speak: "Who is this?" },
        child:  { text: "This is my mom.", required: ['this', 'is', 'my', 'mom'] },
      },
      {
        id: 'd4-2',
        mascot: { text: "Who is that?", speak: "Who is that?" },
        child:  { text: "That is my dad.", required: ['that', 'is', 'my', 'dad'] },
      },
      {
        id: 'd4-3',
        mascot: { text: "Do you have a sister?", speak: "Do you have a sister?" },
        child:  { text: "Yes, I have a sister.", required: ['yes', 'i', 'have', 'a', 'sister'] },
      },
      {
        id: 'd4-4',
        mascot: { text: "Do you have a brother?", speak: "Do you have a brother?" },
        child:  { text: "No, I don't have a brother.", required: ['no', "don't", 'have', 'a', 'brother'] },
      },
      {
        id: 'd4-5',
        mascot: { text: "What does your mom do?", speak: "What does your mom do?" },
        child:  { text: "She's a teacher.", required: ["she's", 'a', 'teacher'] },
      },
      {
        id: 'd4-6',
        mascot: { text: "Is this your grandma?", speak: "Is this your grandma?" },
        child:  { text: "Yes, this is my grandma.", required: ['yes', 'this', 'is', 'my', 'grandma'] },
      },
      {
        id: 'd4-7',
        mascot: { text: "I love my family!", speak: "I love my family!" },
        child:  { text: "I love my family too!", required: ['i', 'love', 'my', 'family'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 5 — Where's the Ball? (Prepositions)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit5',
    unit: 5,
    title: "Where's the Ball?",
    emoji: '⚽',
    color: '#1CB0F6',
    colorDark: '#0099D5',
    description: 'Giới từ chỉ vị trí',
    dialogues: [
      {
        id: 'd5-1',
        mascot: { text: "Where's the ball?", speak: "Where's the ball?" },
        child:  { text: "It's in the net.", required: ["it's", 'in', 'the', 'net'] },
      },
      {
        id: 'd5-2',
        mascot: { text: "Where's the teddy?", speak: "Where's the teddy?" },
        child:  { text: "It's on the slide.", required: ["it's", 'on', 'the', 'slide'] },
      },
      {
        id: 'd5-3',
        mascot: { text: "Where's the toy car?", speak: "Where's the toy car?" },
        child:  { text: "It's under the seesaw.", required: ["it's", 'under', 'the', 'seesaw'] },
      },
      {
        id: 'd5-4',
        mascot: { text: "Where's the frisbee?", speak: "Where's the frisbee?" },
        child:  { text: "It's in the tree.", required: ["it's", 'in', 'the', 'tree'] },
      },
      {
        id: 'd5-5',
        mascot: { text: "Where's the doll?", speak: "Where's the doll?" },
        child:  { text: "It's in the pool.", required: ["it's", 'in', 'the', 'pool'] },
      },
      {
        id: 'd5-6',
        mascot: { text: "Where's the umbrella?", speak: "Where's the umbrella?" },
        child:  { text: "It's on the swing.", required: ["it's", 'on', 'the', 'swing'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 6 — Billy's Teddy (Possessive 's)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit6',
    unit: 6,
    title: "Billy's Teddy",
    emoji: '🧸',
    color: '#FF9F43',
    colorDark: '#EE5A24',
    description: "Sở hữu cách ('s)",
    dialogues: [
      {
        id: 'd6-1',
        mascot: { text: "Is this Mum's book?", speak: "Is this Mum's book?" },
        child:  { text: "No, it's Dad's book.", required: ["it's", "dad's", 'book'] },
      },
      {
        id: 'd6-2',
        mascot: { text: "Whose bike is this?", speak: "Whose bike is this?" },
        child:  { text: "This is my sister's bike.", required: ['this', 'is', "sister's", 'bike'] },
      },
      {
        id: 'd6-3',
        mascot: { text: "Where is the ball?", speak: "Where is the ball?" },
        child:  { text: "This is my brother's ball.", required: ['this', 'is', "brother's", 'ball'] },
      },
      {
        id: 'd6-4',
        mascot: { text: "Whose kite is this?", speak: "Whose kite is this?" },
        child:  { text: "This is Rosy's kite.", required: ['this', 'is', "rosy's", 'kite'] },
      },
      {
        id: 'd6-5',
        mascot: { text: "Is this Billy's teddy?", speak: "Is this Billy's teddy?" },
        child:  { text: "Yes, it's Billy's teddy.", required: ['yes', "it's", "billy's", 'teddy'] },
      },
      {
        id: 'd6-6',
        mascot: { text: "Who's this?", speak: "Who's this?" },
        child:  { text: "This is my grandma.", required: ['this', 'is', 'my', 'grandma'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 7 — Are These His Trousers? (Clothing)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit7',
    unit: 7,
    title: 'Are These His Trousers?',
    emoji: '👕',
    color: '#58CC02',
    colorDark: '#3D9900',
    description: 'Quần áo & đại từ his/her',
    dialogues: [
      {
        id: 'd7-1',
        mascot: { text: "What are you wearing?", speak: "What are you wearing?" },
        child:  { text: "I'm wearing a shirt and pants.", required: ["i'm", 'wearing', 'a', 'shirt', 'pants'] },
      },
      {
        id: 'd7-2',
        mascot: { text: "What color is your shirt?", speak: "What color is your shirt?" },
        child:  { text: "My shirt is blue.", required: ['my', 'shirt', 'is', 'blue'] },
      },
      {
        id: 'd7-3',
        mascot: { text: "Are these his trousers?", speak: "Are these his trousers?" },
        child:  { text: "Yes, these are his trousers.", required: ['yes', 'these', 'are', 'his', 'trousers'] },
      },
      {
        id: 'd7-4',
        mascot: { text: "Is this her dress?", speak: "Is this her dress?" },
        child:  { text: "No, it's not her dress.", required: ['no', "it's", 'not', 'her', 'dress'] },
      },
      {
        id: 'd7-5',
        mascot: { text: "Put on your hat!", speak: "Put on your hat!" },
        child:  { text: "OK! Put on the hat.", required: ['put', 'on', 'the', 'hat'] },
      },
      {
        id: 'd7-6',
        mascot: { text: "I like your red shoes!", speak: "I like your red shoes!" },
        child:  { text: "Thank you! I like them too.", required: ['thank', 'you', 'i', 'like'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 8 — Where's Grandma? (Locations)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit8',
    unit: 8,
    title: "Where's Grandma?",
    emoji: '🏡',
    color: '#2ECC71',
    colorDark: '#27AE60',
    description: 'Các phòng trong nhà',
    dialogues: [
      {
        id: 'd8-1',
        mascot: { text: "Where's Grandma?", speak: "Where's Grandma?" },
        child:  { text: "She's in the kitchen.", required: ["she's", 'in', 'the', 'kitchen'] },
      },
      {
        id: 'd8-2',
        mascot: { text: "Is Billy in the dining room?", speak: "Is Billy in the dining room?" },
        child:  { text: "No, he isn't.", required: ['no', 'he', "isn't"] },
      },
      {
        id: 'd8-3',
        mascot: { text: "Where are Mum and Dad?", speak: "Where are Mum and Dad?" },
        child:  { text: "They're in the living room.", required: ["they're", 'in', 'the', 'living', 'room'] },
      },
      {
        id: 'd8-4',
        mascot: { text: "Are Grandma and Grandpa in the garden?", speak: "Are Grandma and Grandpa in the garden?" },
        child:  { text: "Yes, they are.", required: ['yes', 'they', 'are'] },
      },
      {
        id: 'd8-5',
        mascot: { text: "Where's Billy?", speak: "Where's Billy?" },
        child:  { text: "He's in the bedroom.", required: ["he's", 'in', 'the', 'bedroom'] },
      },
      {
        id: 'd8-6',
        mascot: { text: "Is Rob in the bathroom?", speak: "Is Rob in the bathroom?" },
        child:  { text: "Yes, he is.", required: ['yes', 'he', 'is'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 9 — Lunchtime (Food & drinks)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit9',
    unit: 9,
    title: 'Lunchtime',
    emoji: '🍎',
    color: '#FF4B4B',
    colorDark: '#CC3C3C',
    description: 'Thức ăn & đồ uống',
    dialogues: [
      {
        id: 'd9-1',
        mascot: { text: "Do you like apples?", speak: "Do you like apples?" },
        child:  { text: "Yes, I like apples!", required: ['yes', 'i', 'like', 'apples'] },
      },
      {
        id: 'd9-2',
        mascot: { text: "Do you like fish?", speak: "Do you like fish?" },
        child:  { text: "No, I don't like fish.", required: ['no', "don't", 'like', 'fish'] },
      },
      {
        id: 'd9-3',
        mascot: { text: "What do you want to eat?", speak: "What do you want to eat?" },
        child:  { text: "I want to eat rice and chicken.", required: ['i', 'want', 'to', 'eat', 'rice'] },
      },
      {
        id: 'd9-4',
        mascot: { text: "Do you want some juice?", speak: "Do you want some juice?" },
        child:  { text: "Yes, please! I want juice.", required: ['yes', 'please', 'i', 'want', 'juice'] },
      },
      {
        id: 'd9-5',
        mascot: { text: "What's your favorite food?", speak: "What's your favorite food?" },
        child:  { text: "My favorite food is noodles.", required: ['my', 'favorite', 'food', 'is'] },
      },
      {
        id: 'd9-6',
        mascot: { text: "Yummy! It's delicious!", speak: "Yummy! It's delicious!" },
        child:  { text: "Yummy! It's very delicious!", required: ['yummy', "it's", 'delicious'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 10 — My Bedroom (Furniture)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit10',
    unit: 10,
    title: 'My Bedroom',
    emoji: '🏠',
    color: '#FFD900',
    colorDark: '#D4A800',
    description: 'Đồ vật trong phòng ngủ',
    dialogues: [
      {
        id: 'd10-1',
        mascot: { text: "Where do you sleep?", speak: "Where do you sleep?" },
        child:  { text: "I sleep in my bedroom.", required: ['i', 'sleep', 'in', 'my', 'bedroom'] },
      },
      {
        id: 'd10-2',
        mascot: { text: "What's in your bedroom?", speak: "What's in your bedroom?" },
        child:  { text: "There's a bed and a table.", required: ["there's", 'a', 'bed', 'table'] },
      },
      {
        id: 'd10-3',
        mascot: { text: "Is there a wardrobe?", speak: "Is there a wardrobe?" },
        child:  { text: "Yes, there is a wardrobe.", required: ['yes', 'there', 'is', 'a', 'wardrobe'] },
      },
      {
        id: 'd10-4',
        mascot: { text: "Where is the lamp?", speak: "Where is the lamp?" },
        child:  { text: "The lamp is on the table.", required: ['the', 'lamp', 'is', 'on', 'the', 'table'] },
      },
      {
        id: 'd10-5',
        mascot: { text: "Are there any toys in your room?", speak: "Are there any toys in your room?" },
        child:  { text: "Yes, there are toys on the shelf.", required: ['yes', 'there', 'are', 'toys'] },
      },
      {
        id: 'd10-6',
        mascot: { text: "I like your bedroom!", speak: "I like your bedroom!" },
        child:  { text: "Thank you! Come in, please.", required: ['thank', 'you', 'come', 'in'] },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // UNIT 11 — Animals
  // ─────────────────────────────────────────────────────────────
  {
    id: 'ff1-unit11',
    unit: 11,
    title: 'Animals',
    emoji: '🐶',
    color: '#FF9600',
    colorDark: '#CC7A00',
    description: 'Vật nuôi & động vật',
    dialogues: [
      {
        id: 'd11-1',
        mascot: { text: "Do you have a pet?", speak: "Do you have a pet?" },
        child:  { text: "Yes, I have a dog.", required: ['yes', 'i', 'have', 'a', 'dog'] },
      },
      {
        id: 'd11-2',
        mascot: { text: "What's your pet's name?", speak: "What's your pet's name?" },
        child:  { text: "My dog's name is [NAME].", required: ['my', "dog's", 'name', 'is'] },
      },
      {
        id: 'd11-3',
        mascot: { text: "What does a cat say?", speak: "What does a cat say?" },
        child:  { text: "A cat says meow meow!", required: ['a', 'cat', 'says', 'meow'] },
      },
      {
        id: 'd11-4',
        mascot: { text: "What does a dog say?", speak: "What does a dog say?" },
        child:  { text: "A dog says woof woof!", required: ['a', 'dog', 'says', 'woof'] },
      },
      {
        id: 'd11-5',
        mascot: { text: "Can a bird fly?", speak: "Can a bird fly?" },
        child:  { text: "Yes, a bird can fly!", required: ['yes', 'a', 'bird', 'can', 'fly'] },
      },
      {
        id: 'd11-6',
        mascot: { text: "Can a fish swim?", speak: "Can a fish swim?" },
        child:  { text: "Yes, a fish can swim!", required: ['yes', 'a', 'fish', 'can', 'swim'] },
      },
      {
        id: 'd11-7',
        mascot: { text: "I love animals! Do you?", speak: "I love animals! Do you?" },
        child:  { text: "Yes! I love animals too!", required: ['yes', 'i', 'love', 'animals'] },
      },
    ],
  },

  // ❌ Unit 12 — Dinnertime      (chờ NotebookLM - Batch 2)
  // ❌ Unit 13 — Clean Up!       (chờ NotebookLM - Batch 2)
  // ❌ Unit 14 — Action Boy      (chờ NotebookLM - Batch 2)
  // ❌ Unit 15 — Let's Play Ball!(chờ NotebookLM - Batch 3)
];

export const getUnitById = (id) => FF1_UNITS.find(u => u.id === id);
