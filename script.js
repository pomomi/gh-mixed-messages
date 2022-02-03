// Haikuu bot! Poke the wise poet and get a haiku for your trouble!
// Random script loops needed: opening, mid and closing.


// First loop script: opening 5-syllable line
function opening() {
    let diceRoll = Math.floor(Math.random() * 7)
    switch (diceRoll) {
        case 0: {
            return 'A fair-haired maiden'
        }
        case 1: {
            return 'Old winter-worn tree';
        };
        case 2: {
            return 'Fearless warrior';
        };
        case 3: {
            return 'Free-flowing water';
        };
        case 4: {
            return 'Sure-footed rabbit';
        };
        case 5: {
            return 'A sleeping tiger';
        };
        case 6: {
            return 'An old foolish man';
        };
        case 7: {
            return 'A true faithful friend';
        };
        default: {
            return 'a bR0k3n fUnCtI0n';
        }
    }
}

// Second loop script: middle 7-syllable line
function middle() {
    let diceRoll = Math.floor(Math.random()*10)
    switch (diceRoll) {
        case 0: {
            return 'battles true futility.'
        }
        case 1: {
            return 'expands with knowledge.'
        };
        case 2: {
            return 'bargains with death for more time.'
        };
        case 3: {
            return 'renews with meditation.'
        };
        case 4: {
            return 'prevents harsher punishments.'
        };
        case 5: {
            return 'explores with an open mind.'
        };
        case 6: {
            return 'teaches faith through inaction.'
        };
        case 7: {
            return 'accomplishes nothing fun.'
        };
        case 8: {
            return 'searches in vain for nothing.'
        };
        case 9: {
            return 'confuses itself with drink.'
        };
        case 10: {
            return 'destroys any chance of rest.'
        };
        default: {
            return 'a r3aLly bR0k3n fUnCtI0n';
        }
    }
}

// Third loop script: closing 5-syllable line
function closing() {
    let diceRoll = Math.floor(Math.random()*7)
    switch (diceRoll) {
        case 0: {
            return 'Forget it and go.'
        }
        case 1: {
            return 'Waste no time with it.'
        };
        case 2: {
            return 'Put it all aside.'
        };
        case 3: {
            return 'Learn from its teachings.'
        };
        case 4: {
            return 'Be wary of it.'
        };
        case 5: {
            return "Flee from it's shadow."
        };
        case 6: {
            return 'Learn from example.'
        };
        case 7: {
            return "Learn it's true meaning"
        };
        default: {
            return 'a bR0k3n fUnCtI0n';
        }
    }
}

function haiku() {
    let poem = ''
    poem = opening() + ' ' + middle() + ' ' + closing();
    document.getElementById('haikuDisplay').innerHTML = poem;
}