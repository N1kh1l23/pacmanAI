question(
    'What does this (game|script|project) do',
    'What is this (game|script|project|)',
    'Why do I need this',
    reply('This is the video game, Pac-Man, that uses voice commands to operate. Simply declare your command and a move will be made. To get thez list of commands simply ask'),
);

question(
    'What are the (commands|controls)',
    'What (commands|controls) are there',
    '(Commands|Controls)?',
    reply('Say f to move forward, r to move right, l to move left, and s to move down'),
);

question(
    'How do you move right',
    'What key do I press to move right',
    reply('You can press the r key to move right'),
);

question(
    'How do you move left',
    'What key do I press to move right',
    reply('You can press the l key to move left'),
);

question(
    'How do you move down',
    'What key do I press to move down',
    reply('You can press the s key to move down'),
);

question(
    'How do you move up',
    'What key do I press to move up',
    reply('You can press the w key to move up'),
);

question(
    'What are the rules of the game',
    'How does this game work',
    reply('You use the w, a, s, and d keys for movement and avoid obstacles while collecting tokens. Once you survive for a certain period the game ends and the goal is to get the most tokens possible'),
);

question(
    'How do you win(the game)',
    reply('You win by surviving for the set time period but the goal of the game is to get as many tokens as possible'),
);

question(
    'How many people can play the game at once',
    reply('Pac-Man is a single player game, meaning that only one individual may play on a single device'),
);

question(
    'What obstacles are there',
    'Are there any obstacles',
    reply('You must avoid the ghosts in order to stay alive and collect tokens in order to boost your score'),
);




