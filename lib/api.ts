export type Icebreaker = {
  question: string;
  id: number;
};

const icebreakers: Icebreaker[] = [
  {
    id: 0,
    question:
      "If you had to describe how you're feeling right now as a weather pattern, what's your forecast?",
  },
  {
    id: 1,
    question: "What's something you're looking forward to, and why?",
  },
  {
    id: 2,
    question: "What's something you're worried about?",
  },
  {
    id: 3,
    question: "What's something new or interesting you've learned recently?",
  },
  {
    id: 4,
    question: "What animal best represents you today, and why?",
  },
  {
    id: 5,
    question: "What's the weirdest thing in your fridge right now?",
  },
  {
    id: 6,
    question: "What was your favorite recent meal, and why?",
  },
  {
    id: 7,
    question:
      "If you could have one superpower today, what would it be, and for what purpose?",
  },
  {
    id: 8,
    question: "What are you grateful for today, and why?",
  },
  {
    id: 9,
    question: "What would you do if you had an extra day off tomorrow?",
  },
  {
    id: 10,
    question:
      "If you could invite anyone to dinner tonight, who would it be and what would you eat?",
  },
  {
    id: 11,
    question: "What was the last song you listened to, and where?",
  },
  {
    id: 12,
    question: "What's your favorite recent accomplishment, and why?",
  },
  {
    id: 13,
    question:
      "If you could get advice from anyone in the world today, whom would you ask, and what would you ask them?",
  },
  {
    id: 14,
    question:
      "If you had an expert personal assistant today, what would you have them do?",
  },
  {
    id: 15,
    question: "What's something about the next teammate that you appreciate?",
  },
  {
    id: 16,
    question: "Show us something in your space that you really like!",
  },
  {
    id: 17,
    question: "What's got your attention today, and why?",
  },
  {
    id: 18,
    question:
      "What was your favorite recent book or article, and what did it inspire?",
  },
  {
    id: 19,
    question: "What emoji best represents you today, and why?",
  },
  {
    id: 20,
    question:
      "What's the most important thing to remember daily that you haven't been able to?",
  },
  {
    id: 21,
    question: "What help could you most use that you haven't asked for?",
  },
  {
    id: 22,
    question: "What is your one piece of advice to everyone here?",
  },
  {
    id: 23,
    question: "Who was the last person you felt inspired by?",
  },
  {
    id: 24,
    question: "What simple thing still blows your mind?",
  },
  {
    id: 25,
    question:
      "What sparked your curiosity in whatever you're most curious about now?",
  },
  {
    id: 26,
    question:
      "If you could know the absolute and total truth to one question, what question would you ask?",
  },
  {
    id: 27,
    question: "Which question can you ask to find out the most about a person?",
  },
  {
    id: 28,
    question: "What color best describes your personality today?",
  },
  {
    id: 29,
    question:
      "What's something new you've learned about yourself in the last three months?",
  },
  {
    id: 30,
    question: "Have you been pleasantly surprised by anything recently?",
  },
  {
    id: 31,
    question:
      "If you did not have to sleep, how would you spend the extra 8 hours?",
  },
  {
    id: 32,
    question:
      "What thing from nature, excluding animals, best describes you today?",
  },
  {
    id: 33,
    question:
      "If you could do something that you don't do because it's bad for you, but you could do it without any repercussions — what would you do?",
  },
  {
    id: 34,
    question: "What question do you wish people would ask you?",
  },
  {
    id: 35,
    question:
      "If you could be one other person, who would that person be and why?",
  },
  {
    id: 36,
    question:
      "If you had to describe how you're feeling right now as an amusement park ride, what ride are you on?",
  },
  {
    id: 37,
    question: "If you could safely eat any inedible object, what would it be?",
  },
  {
    id: 38,
    question: "What are you reading right now?",
  },
  {
    id: 39,
    question:
      "If you could pick up a new skill in an instant what would it be?",
  },
  {
    id: 40,
    question:
      "Is there any topic lately that you would like to be mentored on?",
  },
  {
    id: 41,
    question:
      "Are there any aspects of your personality that hold you back? How do you adapt?",
  },
  {
    id: 42,
    question:
      "What's one project that you could stop doing to give yourself more focus?",
  },
  {
    id: 43,
    question: "When you're feeling stressed, how do you deal with it?",
  },
  {
    id: 44,
    question: "How would you describe your communication style in 3 words?",
  },
  {
    id: 45,
    question:
      "What criteria helps you decide whether to say “no” to something or commit to it?",
  },
  {
    id: 46,
    question: "What are you excited about this week? What worries you?",
  },
  {
    id: 47,
    question:
      "What's one rule your parents or guardians enforced when you were a kid?",
  },
  {
    id: 48,
    question:
      "Do you have any routines you use to improve your energy and focus?",
  },
  {
    id: 49,
    question: "How do you recognize when you're stressed?",
  },
  {
    id: 50,
    question: "Who has made a positive difference in your life recently?",
  },
  {
    id: 51,
    question: "What was the last thing you fell in love with?",
  },
  {
    id: 52,
    question: "What thing or experience exceeded your expectations recently?",
  },
  {
    id: 53,
    question: "When was the last time you felt unbounded optimism?",
  },
  {
    id: 54,
    question: "Do you have any non-work goals right now? What are they?",
  },
  {
    id: 55,
    question: "What's one country you would love to visit and why?",
  },
  {
    id: 56,
    question: "What's the most useful thing you own?",
  },
  {
    id: 57,
    question: "What's something you couldn't live without?",
  },
  {
    id: 58,
    question:
      "If you had to sing karaoke right now, which song would you pick?",
  },
  {
    id: 59,
    question: "What drink best describes you today?",
  },
  {
    id: 60,
    question: "What's one thing many people hate, but you love?",
  },
  {
    id: 61,
    question:
      "What was the first thing you thought about when waking up today?",
  },
  {
    id: 62,
    question: "What's the last thing you completed that you're proud of?",
  },
  {
    id: 63,
    question:
      "What's something in your workspace that cheers you up during the day?",
  },
  {
    id: 64,
    question: "What's something that made you smile recently?",
  },
  {
    id: 65,
    question: "What's one of your favorite recent memories?",
  },
  {
    id: 66,
    question: "What's one thing that brings you energy and joy?",
  },
  {
    id: 67,
    question: "What are you nostalgic about recently?",
  },
  {
    id: 68,
    question: "What are you looking forward to?",
  },
  {
    id: 69,
    question: "What fictional world or place would you like to visit?",
  },
  {
    id: 70,
    question:
      "If you could have an animal sidekick, what animal would it be? Why?",
  },
  {
    id: 71,
    question: "What is one thing we would never guess about you?",
  },
  {
    id: 72,
    question:
      "What current fact about your life would most impress your five-year-old self?",
  },
  {
    id: 73,
    question: "What fruit or vegetable represents your mood today?",
  },
  {
    id: 74,
    question: "What's something you are craving right now?",
  },
  {
    id: 75,
    question: "What's something you would change if you ran the world?",
  },
  {
    id: 76,
    question: "If you could rid the world of one thing, what would it be?",
  },
  {
    id: 77,
    question: "What were you most passionate about as a kid?",
  },
  {
    id: 78,
    question:
      "If you were a takeaway food, what would sum up your day and why?",
  },
  {
    id: 79,
    question:
      "What looks easy peasy lemon squeezy but is actually difficult difficult lemon difficult?",
  },
  {
    id: 80,
    question: "What's something from your childhood that you still love today?",
  },
  {
    id: 81,
    question: "What healthy food tastes just as good to you as unhealthy food?",
  },
  {
    id: 82,
    question:
      "You've died but instead of entering the afterlife, you've entered Earth 2.0. What is something that makes Earth 2.0 better?",
  },
  {
    id: 83,
    question:
      "What's a small act of kindness you were once shown, that you'll never forget?",
  },
  {
    id: 84,
    question:
      "What's a movie you always recommend to people? Why do you love it?",
  },
  {
    id: 85,
    question:
      "What's normal where you live, but might seem weird to the rest of the world?",
  },
  {
    id: 86,
    question: "What do you value most in a friendship?",
  },
  {
    id: 87,
    question: "What's something that you've never learned to do?",
  },
  {
    id: 88,
    question: "Where do you feel most at home?",
  },
  {
    id: 89,
    question: "What small thing would improve your day today?",
  },
  {
    id: 90,
    question:
      "If you could go back in time 10,000 years ago and make a cave painting to confuse everyone in the future, what would you draw?",
  },
  {
    id: 91,
    question: "What do you enjoy most about what you spend your time on?",
  },
  {
    id: 92,
    question:
      "What's one thing you want to do in life, but don't know where to start",
  },
  {
    id: 93,
    question: "What's your favorite thing about the place you live?",
  },
  {
    id: 94,
    question: "What's something that puts you in a state of flow?",
  },
  {
    id: 95,
    question:
      "If you could go back in time and make little changes to your childhood, what is one thing you'd learn so you could be an expert at it today?",
  },
  {
    id: 96,
    question:
      "A genie appears and grants you a wish for someone else in the world. Who and what do you make a wish for?",
  },
  {
    id: 97,
    question:
      "If you could instantly know any other language, which would it be and why?",
  },
  {
    id: 98,
    question:
      "What's the best phrase or piece of slang people in your hometown use?",
  },
  {
    id: 99,
    question: "What's something you wish you'd learned earlier in life?",
  },
  {
    id: 100,
    question: "What's an unusual skill you'd love to master?",
  },
  {
    id: 101,
    question:
      "If you were going to be frozen tomorrow for a one-way 1000-year interstellar voyage, what would you most want to communicate (and to whom) before you leave?",
  },
  {
    id: 102,
    question:
      "If you had to eat only one dish for the rest of time, what would it be?",
  },
  {
    id: 103,
    question:
      "If you could be fluent in another language instantly, which would you choose, and why?",
  },
  {
    id: 104,
    question: "What's something people don't know about you?",
  },
  {
    id: 105,
    question: "What's the best piece of advice you've ever been given?",
  },
  {
    id: 106,
    question: "What's the most useful item you've purchased this year?",
  },
  {
    id: 107,
    question:
      "If you could describe your life as a movie, what genre would it be?",
  },
  {
    id: 108,
    question:
      "If you were coming out onto a stage, what would your entrance song be?",
  },
  {
    id: 109,
    question:
      "What was your least favorite food as a child? Why did you dislike it?",
  },
  {
    id: 110,
    question:
      "If you were setting off to Mars and could take only one luxury item with you, what would it be?",
  },
  {
    id: 111,
    question: "If you had to give a lecture on one thing, what would it be?",
  },
  {
    id: 112,
    question:
      "If you could become a supernatural creature at night, what would it be, and why?",
  },
  {
    id: 113,
    question:
      "If you could bring back a fashion trend, what would it be, and why?",
  },
  {
    id: 114,
    question:
      "What season best describes you? Winter, Spring, Summer or Autumn?",
  },
  {
    id: 115,
    question:
      "If you could have an unlimited supply of one food or drink, what would it be?",
  },
  {
    id: 116,
    question: "You're cooking for the whole team, what is your signature dish?",
  },
  {
    id: 117,
    question:
      "If you could live in another historical period, would you? If so, which one?",
  },
  {
    id: 118,
    question: "As a child, what did you want to be when you grew up?",
  },
  {
    id: 119,
    question: "What's the best book you've ever read? Why was it so memorable?",
  },
  {
    id: 120,
    question:
      "If you had a time machine, would you go back in time to meet your ancestors, or forward in time to meet your descendents?",
  },
  {
    id: 121,
    question:
      "If you could live with any fictional character, who would you choose?",
  },
  {
    id: 122,
    question:
      "If you were reincarnated as an animal what would you choose and why?",
  },
  {
    id: 123,
    question: "Which bucket list item do you most want to check off this year?",
  },
  {
    id: 124,
    question:
      "What's the worst piece of advice you've ever been given? And why was it so bad?",
  },
  {
    id: 125,
    question:
      "If you could teleport anywhere in the world, where would you go right now?",
  },
  {
    id: 126,
    question:
      "Which fictional character would you want by your side during a zombie apocalypse?",
  },
  {
    id: 127,
    question: "What's one thing you wish could be automated in your job?",
  },
  {
    id: 128,
    question: "What's an unusual tradition you or your family have?",
  },
  {
    id: 129,
    question:
      "Name a TV show you think is under-rated. Describe it in a sentence.",
  },
  {
    id: 130,
    question: "What was your first ever job?",
  },
  {
    id: 131,
    question: "What's one thing you are unbeatable at?",
  },
  {
    id: 132,
    question: "If you were a cocktail, which would you be today?",
  },
  {
    id: 133,
    question: "What is your favorite smell and why?",
  },
  {
    id: 134,
    question:
      "What's one thing you've been procrastinating on and can't finish?",
  },
  {
    id: 135,
    question: "What was your favorite class in school? Why?",
  },
  {
    id: 136,
    question:
      "If you could keep only one part of your morning routine, what would it be?",
  },
  {
    id: 137,
    question:
      "Do you work better with or without music? What are you listening to while you work?",
  },
  {
    id: 138,
    question:
      "Have you ever experienced a culture shock? Where was it and what happened?",
  },
  {
    id: 139,
    question:
      "If you had unlimited time and resources, how would you spend your days?",
  },
  {
    id: 140,
    question: "What's the last book you quit reading, and why?",
  },
  {
    id: 141,
    question: "Have you learned any useful productivity hacks recently?",
  },
  {
    id: 142,
    question:
      "If your home was packed full of golf balls how would you remove them?",
  },
  {
    id: 143,
    question:
      "Do you have a favorite mug? Let us see it and tell us why you love it!",
  },
  {
    id: 144,
    question:
      "What's one productivity tool you couldn't live without, and what makes it indispensable?",
  },
  {
    id: 145,
    question: "How do you get motivated for difficult tasks?",
  },
  {
    id: 146,
    question:
      "Look around and assess how satisfied you are with your physical workspace. What's one thing you love about it? What would you improve?",
  },
  {
    id: 147,
    question:
      "Name a healthy food you enjoy and an unhealthy food that you find hard to resist.",
  },
  {
    id: 148,
    question: "What's an adventurous thing you've done recently?",
  },
  {
    id: 149,
    question: "What's a TV show you recommend to everyone?",
  },
  {
    id: 150,
    question: "What age do you wish you could be permanently?",
  },
  {
    id: 151,
    question: "What's a guilty pleasure you love to indulge from time to time?",
  },
  {
    id: 152,
    question: "Where did you grow up and what was it like?",
  },
  {
    id: 153,
    question:
      "What are some strategies that you've found to be helpful in your recent work?",
  },
  {
    id: 154,
    question:
      "What's something on your desk, a nearby wall, or out the window that cheers you up during the day?",
  },
  {
    id: 155,
    question:
      "What boundaries have you set to ensure that you unplug from work?",
  },
  {
    id: 156,
    question:
      "If you were forced to watch reruns of a favorite show, which would you choose?",
  },
  {
    id: 157,
    question:
      "Would you rather spend a three-week trip visiting multiple interesting destinations or one interesting destination?",
  },
  {
    id: 158,
    question:
      "What's one of the biggest risks you've taken in your career? How do you feel about having taken it?",
  },
  {
    id: 159,
    question: "What was your favorite breakfast as a kid?",
  },
  {
    id: 160,
    question: "What's something you rebelled against as a kid?",
  },
  {
    id: 161,
    question: "What were some of your favorite activities as a kid?",
  },
  {
    id: 162,
    question:
      "What's a food, smell, or sound that you associate with where you grew up?",
  },
  {
    id: 163,
    question:
      "What's a landmark, popular destination, or local hangout spot that you either frequented or avoided when you were growing up?",
  },
  {
    id: 164,
    question:
      "Would you rather receive a shoutout from the CEO at a company all-hands meeting or a private word of thanks from them?",
  },
  {
    id: 165,
    question:
      "Would you rather someone took a boring task off your to-do list or invited you to participate in a project of great interest?",
  },
  {
    id: 166,
    question:
      "You can grow the tail of any animal or mythical creature. Which do you choose?",
  },
  {
    id: 167,
    question:
      "What's a time when someone did something you appreciated (at work or in another context), but you didn't let them know? What held you back?",
  },
  {
    id: 168,
    question:
      "Would you rather take a cold shower every day or always sleep an hour less than you need?",
  },
  {
    id: 169,
    question: "Which do you prefer, oceans or mountains? Why?",
  },
  {
    id: 170,
    question:
      "Would you rather speak all languages or be able to communicate with animals?",
  },
  {
    id: 171,
    question:
      "Make a choice: Never hear music again or lose the ability to read?",
  },
  {
    id: 172,
    question:
      "Do you have any mentors or people you look up to? Tell us about one of them.",
  },
  {
    id: 173,
    question:
      "What would you do if you came home and found a penguin in your freezer?",
  },
  {
    id: 174,
    question:
      "If you had to sing karaoke right now, which song would you pick?",
  },
  {
    id: 175,
    question:
      "You've been teleported to the middle ages. How do you make a living there?",
  },
  {
    id: 176,
    question:
      "If you had a magic button on your desk to bring you whatever you wanted instantly, what would it summon?",
  },
  {
    id: 177,
    question: "What's your guilty pleasure right now?",
  },
  {
    id: 178,
    question: "What was the last thing you did that gave you child-like joy?",
  },
  {
    id: 179,
    question: "What's a book you would like to live in?",
  },
  {
    id: 180,
    question: "What's the last thing you did for the first time?",
  },
  {
    id: 181,
    question: "What's one activity that grants you pure escapism?",
  },
  {
    id: 182,
    question:
      "You're on a desert island and can bring one luxury with you – what is it?",
  },
  {
    id: 183,
    question: "What's one characteristic you admire in others and why?",
  },
  {
    id: 184,
    question: "What's an organization or private company you admire and why?",
  },
  {
    id: 185,
    question: "What was the first concert or gig you ever attended?",
  },
  {
    id: 186,
    question: "What does friendship mean to you?",
  },
  {
    id: 187,
    question: "What's one possession or tool that enhances your daily life?",
  },
  {
    id: 188,
    question: "What smell or image triggers nostalgia for you?",
  },
  {
    id: 189,
    question: "How do you like to sit in a chair?",
  },
  {
    id: 190,
    question: "What's a cause or purpose you deeply believe in?",
  },
  {
    id: 191,
    question: "What's a hobby or side project you've been meaning to take up?",
  },
  {
    id: 192,
    question: "What ice cream flavour sums up your personality today?",
  },
  {
    id: 193,
    question:
      "What's one thing your parents or guardians always nagged you about?",
  },
  {
    id: 194,
    question: "What's something you do to relieve anger or stress?",
  },
  {
    id: 195,
    question:
      "What's a sauce, condiment or dressing you couldn't live without?",
  },
  {
    id: 196,
    question: "What are you doing when you feel most alive?",
  },
  {
    id: 197,
    question:
      "Tell us about a stranger you still remember. What made them memorable?",
  },
  {
    id: 198,
    question:
      "What would you do if you came home and found a penguin in your freezer?",
  },
  {
    id: 199,
    question: "What's one thing you wish you'd been taught in school?",
  },
  {
    id: 200,
    question:
      "You've been granted a one-way ticket to another country of your choice. Where are you going?",
  },
  {
    id: 201,
    question: "What does it feel like to be you right now?",
  },
  {
    id: 202,
    question: "How have you changed in the last year?",
  },
  {
    id: 203,
    question: "What's a food that reminds you of childhood?",
  },
  {
    id: 204,
    question: "What's something our team is good at?",
  },
  {
    id: 205,
    question: "What's something you've drawn inspiration from recently?",
  },
  {
    id: 206,
    question:
      "What's something you like to do whenever you travel to a new country?",
  },
  {
    id: 207,
    question: "Who on the team would you like to swap jobs with for a day?",
  },
  {
    id: 208,
    question:
      "It's your first day on the job as an evil villain. What's the first piece of mischief you commit?",
  },
  {
    id: 209,
    question:
      "Who's an ex-colleague from this job or another that you still think about?",
  },
  {
    id: 210,
    question: "What's an adult problem nobody prepared you for?",
  },
  {
    id: 211,
    question: "What do your family think you do for work?",
  },
  {
    id: 212,
    question:
      "What's a book that affected you so deeply (emotionally or intellectually) that you still regularly think about it?",
  },
  {
    id: 213,
    question: "What's something that doesn't deserve the hate it gets?",
  },
  {
    id: 214,
    question: "What's a simple life hack that everyone can benefit from?",
  },
  {
    id: 215,
    question: "What is a lesson you feel you learned too late in life?",
  },
  {
    id: 216,
    question:
      "If buying groceries were a game, what would be one of the loading screen tips?",
  },
  {
    id: 217,
    question: "What's one of your recent pet peeves?",
  },
  {
    id: 218,
    question: "How would your best friend describe you?",
  },
  {
    id: 219,
    question:
      "Congratulations! You've been chosen to represent your country in a global competition. What sport or activity are you doing?",
  },
];

export const allIcebreakers = (): Icebreaker[] => icebreakers;

export const generateRandomIcebreaker = (icebreakers: Icebreaker[]) => {
  return icebreakers[Math.floor(Math.random() * icebreakers.length)];
};
