const openContext = context(() => {
    intent('Start the Game', p => {
        p.play('The game has now started');
    });

    follow('Is the game(active|started|running)', p => {
        p.play('Yes, it is active');
    });
});