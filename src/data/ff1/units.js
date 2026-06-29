// src/data/ff1/units.js
// Family & Friends 1 — Full Dialogue Sets for All 10 Units
// Each turn: mascot speaks first, then child repeats/responds
// [NAME] = placeholder always marked correct
// required: words that MUST be matched (ignore optional filler words)

export const FF1_UNITS = [
  {
    id: 'ff1-unit1',
    unit: 1,
    title: 'Hello!',
    emoji: '👋',
    color: '#58CC02',
    colorDark: '#3D9900',
    description: 'Chào hỏi & giới thiệu bản thân',
    dialogues: [
      {
        id: 'd1-1',
        mascot: { text: "Hello! I'm MinhTi!", speak: "Hello! I'm MinhTi!" },
        child:  { text: "Hello! I'm [NAME]!", required: ['hello'] },
      },
      {
        id: 'd1-2',
        mascot: { text: "What's your name?", speak: "What's your name?" },
        child:  { text: "My name is [NAME].", required: ['my', 'name', 'is'] },
      },
      {
        id: 'd1-3',
        mascot: { text: "How are you?", speak: "How are you?" },
        child:  { text: "I'm fine, thank you!", required: ["i'm", 'fine', 'thank', 'you'] },
      },
      {
        id: 'd1-4',
        mascot: { text: "Nice to meet you!", speak: "Nice to meet you!" },
        child:  { text: "Nice to meet you too!", required: ['nice', 'to', 'meet', 'you'] },
      },
      {
        id: 'd1-5',
        mascot: { text: "How old are you?", speak: "How old are you?" },
        child:  { text: "I'm seven years old.", required: ["i'm", 'seven', 'years', 'old'] },
      },
      {
        id: 'd1-6',
        mascot: { text: "Are you a student?", speak: "Are you a student?" },
        child:  { text: "Yes, I'm a student.", required: ['yes', "i'm", 'a', 'student'] },
      },
      {
        id: 'd1-7',
        mascot: { text: "Goodbye! See you later!", speak: "Goodbye! See you later!" },
        child:  { text: "Goodbye! Bye bye!", required: ['goodbye'] },
      },
    ],
  },

  {
    id: 'ff1-unit2',
    unit: 2,
    title: 'My School',
    emoji: '🏫',
    color: '#1CB0F6',
    colorDark: '#0099D5',
    description: 'Đồ dùng học tập & lớp học',
    dialogues: [
      {
        id: 'd2-1',
        mascot: { text: "What's this?", speak: "What's this?" },
        child:  { text: "It's a pen.", required: ["it's", 'a', 'pen'] },
      },
      {
        id: 'd2-2',
        mascot: { text: "What's that?", speak: "What's that?" },
        child:  { text: "It's a pencil.", required: ["it's", 'a', 'pencil'] },
      },
      {
        id: 'd2-3',
        mascot: { text: "Is this a ruler?", speak: "Is this a ruler?" },
        child:  { text: "Yes, it's a ruler.", required: ['yes', "it's", 'a', 'ruler'] },
      },
      {
        id: 'd2-4',
        mascot: { text: "Is this a book?", speak: "Is this a book?" },
        child:  { text: "No, it's a bag.", required: ['no', "it's", 'a', 'bag'] },
      },
      {
        id: 'd2-5',
        mascot: { text: "What color is your pencil?", speak: "What color is your pencil?" },
        child:  { text: "My pencil is yellow.", required: ['my', 'pencil', 'is', 'yellow'] },
      },
      {
        id: 'd2-6',
        mascot: { text: "Open your book, please!", speak: "Open your book, please!" },
        child:  { text: "OK! Open the book.", required: ['open', 'the', 'book'] },
      },
      {
        id: 'd2-7',
        mascot: { text: "Sit down, please.", speak: "Sit down, please." },
        child:  { text: "Yes, sit down.", required: ['yes', 'sit', 'down'] },
      },
      {
        id: 'd2-8',
        mascot: { text: "Stand up, please.", speak: "Stand up, please." },
        child:  { text: "Yes, stand up!", required: ['yes', 'stand', 'up'] },
      },
    ],
  },

  {
    id: 'ff1-unit3',
    unit: 3,
    title: 'My Family',
    emoji: '👨‍👩‍👧',
    color: '#CE82FF',
    colorDark: '#9B5FC0',
    description: 'Các thành viên trong gia đình',
    dialogues: [
      {
        id: 'd3-1',
        mascot: { text: "Who is this?", speak: "Who is this?" },
        child:  { text: "This is my mom.", required: ['this', 'is', 'my', 'mom'] },
      },
      {
        id: 'd3-2',
        mascot: { text: "Who is that?", speak: "Who is that?" },
        child:  { text: "That is my dad.", required: ['that', 'is', 'my', 'dad'] },
      },
      {
        id: 'd3-3',
        mascot: { text: "Do you have a sister?", speak: "Do you have a sister?" },
        child:  { text: "Yes, I have a sister.", required: ['yes', 'i', 'have', 'a', 'sister'] },
      },
      {
        id: 'd3-4',
        mascot: { text: "Do you have a brother?", speak: "Do you have a brother?" },
        child:  { text: "No, I don't have a brother.", required: ['no', "don't", 'have', 'a', 'brother'] },
      },
      {
        id: 'd3-5',
        mascot: { text: "How many people are in your family?", speak: "How many people are in your family?" },
        child:  { text: "There are four people in my family.", required: ['there', 'are', 'four', 'people'] },
      },
      {
        id: 'd3-6',
        mascot: { text: "Is this your grandma?", speak: "Is this your grandma?" },
        child:  { text: "Yes, this is my grandma.", required: ['yes', 'this', 'is', 'my', 'grandma'] },
      },
      {
        id: 'd3-7',
        mascot: { text: "I love my family!", speak: "I love my family!" },
        child:  { text: "I love my family too!", required: ['i', 'love', 'my', 'family'] },
      },
    ],
  },

  {
    id: 'ff1-unit4',
    unit: 4,
    title: 'My Body',
    emoji: '💪',
    color: '#FF9600',
    colorDark: '#CC7A00',
    description: 'Các bộ phận cơ thể',
    dialogues: [
      {
        id: 'd4-1',
        mascot: { text: "Touch your head!", speak: "Touch your head!" },
        child:  { text: "Head! I touch my head.", required: ['head', 'i', 'touch', 'my'] },
      },
      {
        id: 'd4-2',
        mascot: { text: "Touch your shoulders!", speak: "Touch your shoulders!" },
        child:  { text: "Shoulders! I touch my shoulders.", required: ['shoulders', 'i', 'touch', 'my'] },
      },
      {
        id: 'd4-3',
        mascot: { text: "How many eyes do you have?", speak: "How many eyes do you have?" },
        child:  { text: "I have two eyes.", required: ['i', 'have', 'two', 'eyes'] },
      },
      {
        id: 'd4-4',
        mascot: { text: "How many fingers do you have?", speak: "How many fingers do you have?" },
        child:  { text: "I have ten fingers.", required: ['i', 'have', 'ten', 'fingers'] },
      },
      {
        id: 'd4-5',
        mascot: { text: "What do you have on your face?", speak: "What do you have on your face?" },
        child:  { text: "I have eyes, a nose and a mouth.", required: ['eyes', 'nose', 'mouth'] },
      },
      {
        id: 'd4-6',
        mascot: { text: "Clap your hands!", speak: "Clap your hands!" },
        child:  { text: "Clap clap! Clap your hands!", required: ['clap', 'your', 'hands'] },
      },
    ],
  },

  {
    id: 'ff1-unit5',
    unit: 5,
    title: 'My Toys',
    emoji: '🎮',
    color: '#FF4B4B',
    colorDark: '#CC3C3C',
    description: 'Đồ chơi yêu thích',
    dialogues: [
      {
        id: 'd5-1',
        mascot: { text: "What's your favorite toy?", speak: "What's your favorite toy?" },
        child:  { text: "My favorite toy is a ball.", required: ['my', 'favorite', 'toy', 'is', 'a', 'ball'] },
      },
      {
        id: 'd5-2',
        mascot: { text: "Do you have a doll?", speak: "Do you have a doll?" },
        child:  { text: "Yes, I have a doll.", required: ['yes', 'i', 'have', 'a', 'doll'] },
      },
      {
        id: 'd5-3',
        mascot: { text: "Do you have a robot?", speak: "Do you have a robot?" },
        child:  { text: "No, I don't have a robot.", required: ['no', "don't", 'have', 'a', 'robot'] },
      },
      {
        id: 'd5-4',
        mascot: { text: "Is this your kite?", speak: "Is this your kite?" },
        child:  { text: "Yes, it's my kite.", required: ['yes', "it's", 'my', 'kite'] },
      },
      {
        id: 'd5-5',
        mascot: { text: "Can you ride a bike?", speak: "Can you ride a bike?" },
        child:  { text: "Yes, I can ride a bike!", required: ['yes', 'i', 'can', 'ride', 'a', 'bike'] },
      },
      {
        id: 'd5-6',
        mascot: { text: "Let's play together!", speak: "Let's play together!" },
        child:  { text: "Yes! Let's play!", required: ['yes', "let's", 'play'] },
      },
    ],
  },

  {
    id: 'ff1-unit6',
    unit: 6,
    title: 'My Clothes',
    emoji: '👕',
    color: '#58CC02',
    colorDark: '#3D9900',
    description: 'Quần áo & màu sắc',
    dialogues: [
      {
        id: 'd6-1',
        mascot: { text: "What are you wearing?", speak: "What are you wearing?" },
        child:  { text: "I'm wearing a shirt and pants.", required: ["i'm", 'wearing', 'a', 'shirt', 'pants'] },
      },
      {
        id: 'd6-2',
        mascot: { text: "What color is your shirt?", speak: "What color is your shirt?" },
        child:  { text: "My shirt is blue.", required: ['my', 'shirt', 'is', 'blue'] },
      },
      {
        id: 'd6-3',
        mascot: { text: "Are you wearing shoes?", speak: "Are you wearing shoes?" },
        child:  { text: "Yes, I'm wearing shoes.", required: ['yes', "i'm", 'wearing', 'shoes'] },
      },
      {
        id: 'd6-4',
        mascot: { text: "Put on your hat!", speak: "Put on your hat!" },
        child:  { text: "OK! Put on the hat.", required: ['put', 'on', 'the', 'hat'] },
      },
      {
        id: 'd6-5',
        mascot: { text: "Is this your dress?", speak: "Is this your dress?" },
        child:  { text: "No, it's not my dress.", required: ['no', "it's", 'not', 'my', 'dress'] },
      },
      {
        id: 'd6-6',
        mascot: { text: "I like your red shoes!", speak: "I like your red shoes!" },
        child:  { text: "Thank you! I like them too.", required: ['thank', 'you', 'i', 'like'] },
      },
    ],
  },

  {
    id: 'ff1-unit7',
    unit: 7,
    title: 'My Home',
    emoji: '🏠',
    color: '#FFD900',
    colorDark: '#D4A800',
    description: 'Phòng ốc trong nhà',
    dialogues: [
      {
        id: 'd7-1',
        mascot: { text: "Where do you sleep?", speak: "Where do you sleep?" },
        child:  { text: "I sleep in my bedroom.", required: ['i', 'sleep', 'in', 'my', 'bedroom'] },
      },
      {
        id: 'd7-2',
        mascot: { text: "Where do you eat?", speak: "Where do you eat?" },
        child:  { text: "I eat in the kitchen.", required: ['i', 'eat', 'in', 'the', 'kitchen'] },
      },
      {
        id: 'd7-3',
        mascot: { text: "Is there a garden in your home?", speak: "Is there a garden in your home?" },
        child:  { text: "Yes, there is a garden.", required: ['yes', 'there', 'is', 'a', 'garden'] },
      },
      {
        id: 'd7-4',
        mascot: { text: "Where is the bathroom?", speak: "Where is the bathroom?" },
        child:  { text: "The bathroom is upstairs.", required: ['the', 'bathroom', 'is', 'upstairs'] },
      },
      {
        id: 'd7-5',
        mascot: { text: "What's in the living room?", speak: "What's in the living room?" },
        child:  { text: "There is a sofa and a TV.", required: ['there', 'is', 'a', 'sofa', 'tv'] },
      },
      {
        id: 'd7-6',
        mascot: { text: "I like your home!", speak: "I like your home!" },
        child:  { text: "Thank you! Come in, please.", required: ['thank', 'you', 'come', 'in'] },
      },
    ],
  },

  {
    id: 'ff1-unit8',
    unit: 8,
    title: 'My Food',
    emoji: '🍎',
    color: '#FF4B4B',
    colorDark: '#CC3C3C',
    description: 'Thức ăn & đồ uống',
    dialogues: [
      {
        id: 'd8-1',
        mascot: { text: "Do you like apples?", speak: "Do you like apples?" },
        child:  { text: "Yes, I like apples!", required: ['yes', 'i', 'like', 'apples'] },
      },
      {
        id: 'd8-2',
        mascot: { text: "Do you like fish?", speak: "Do you like fish?" },
        child:  { text: "No, I don't like fish.", required: ['no', "don't", 'like', 'fish'] },
      },
      {
        id: 'd8-3',
        mascot: { text: "What do you want to eat?", speak: "What do you want to eat?" },
        child:  { text: "I want to eat rice and chicken.", required: ['i', 'want', 'to', 'eat', 'rice'] },
      },
      {
        id: 'd8-4',
        mascot: { text: "Do you want some juice?", speak: "Do you want some juice?" },
        child:  { text: "Yes, please! I want juice.", required: ['yes', 'please', 'i', 'want', 'juice'] },
      },
      {
        id: 'd8-5',
        mascot: { text: "What's your favorite food?", speak: "What's your favorite food?" },
        child:  { text: "My favorite food is noodles.", required: ['my', 'favorite', 'food', 'is'] },
      },
      {
        id: 'd8-6',
        mascot: { text: "Yummy! It's delicious!", speak: "Yummy! It's delicious!" },
        child:  { text: "Yummy! It's very delicious!", required: ['yummy', "it's", 'delicious'] },
      },
    ],
  },

  {
    id: 'ff1-unit9',
    unit: 9,
    title: 'My Day',
    emoji: '☀️',
    color: '#1CB0F6',
    colorDark: '#0099D5',
    description: 'Hoạt động hàng ngày',
    dialogues: [
      {
        id: 'd9-1',
        mascot: { text: "What time do you wake up?", speak: "What time do you wake up?" },
        child:  { text: "I wake up at six o'clock.", required: ['i', 'wake', 'up', 'at', 'six'] },
      },
      {
        id: 'd9-2',
        mascot: { text: "What do you do in the morning?", speak: "What do you do in the morning?" },
        child:  { text: "I brush my teeth and wash my face.", required: ['i', 'brush', 'my', 'teeth', 'wash'] },
      },
      {
        id: 'd9-3',
        mascot: { text: "How do you go to school?", speak: "How do you go to school?" },
        child:  { text: "I go to school by bus.", required: ['i', 'go', 'to', 'school', 'by', 'bus'] },
      },
      {
        id: 'd9-4',
        mascot: { text: "What do you do after school?", speak: "What do you do after school?" },
        child:  { text: "I do my homework and play.", required: ['i', 'do', 'my', 'homework', 'play'] },
      },
      {
        id: 'd9-5',
        mascot: { text: "What time do you go to bed?", speak: "What time do you go to bed?" },
        child:  { text: "I go to bed at nine o'clock.", required: ['i', 'go', 'to', 'bed', 'at', 'nine'] },
      },
      {
        id: 'd9-6',
        mascot: { text: "Good night! Sweet dreams!", speak: "Good night! Sweet dreams!" },
        child:  { text: "Good night! Sweet dreams!", required: ['good', 'night', 'sweet', 'dreams'] },
      },
    ],
  },

  {
    id: 'ff1-unit10',
    unit: 10,
    title: 'Animals',
    emoji: '🐶',
    color: '#FF9600',
    colorDark: '#CC7A00',
    description: 'Vật nuôi & động vật',
    dialogues: [
      {
        id: 'd10-1',
        mascot: { text: "Do you have a pet?", speak: "Do you have a pet?" },
        child:  { text: "Yes, I have a dog.", required: ['yes', 'i', 'have', 'a', 'dog'] },
      },
      {
        id: 'd10-2',
        mascot: { text: "What's your pet's name?", speak: "What's your pet's name?" },
        child:  { text: "My dog's name is [NAME].", required: ['my', "dog's", 'name', 'is'] },
      },
      {
        id: 'd10-3',
        mascot: { text: "What does a cat say?", speak: "What does a cat say?" },
        child:  { text: "A cat says meow meow!", required: ['a', 'cat', 'says', 'meow'] },
      },
      {
        id: 'd10-4',
        mascot: { text: "What does a dog say?", speak: "What does a dog say?" },
        child:  { text: "A dog says woof woof!", required: ['a', 'dog', 'says', 'woof'] },
      },
      {
        id: 'd10-5',
        mascot: { text: "Can a bird fly?", speak: "Can a bird fly?" },
        child:  { text: "Yes, a bird can fly!", required: ['yes', 'a', 'bird', 'can', 'fly'] },
      },
      {
        id: 'd10-6',
        mascot: { text: "Can a fish swim?", speak: "Can a fish swim?" },
        child:  { text: "Yes, a fish can swim!", required: ['yes', 'a', 'fish', 'can', 'swim'] },
      },
      {
        id: 'd10-7',
        mascot: { text: "I love animals! Do you?", speak: "I love animals! Do you?" },
        child:  { text: "Yes! I love animals too!", required: ['yes', 'i', 'love', 'animals'] },
      },
    ],
  },
];

export const getUnitById = (id) => FF1_UNITS.find(u => u.id === id);
