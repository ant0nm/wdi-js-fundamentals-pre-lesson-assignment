const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};
console.log(ghosts);

// one way to retrieve values stored in an object's properties
console.log(ghosts.inky);
console.log(ghosts.blinky);

// another way to do the same thing
console.log(ghosts['inky']);
console.log(ghosts['blinky']);

const ghostName = 'clyde';
console.log(ghosts[ghostName]);
