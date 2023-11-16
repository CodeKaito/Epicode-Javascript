// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    const firstLetter = name.charAt(0).toUpperCase();
    const posizioneSpace = name.indexOf(' ');
    const posizioneAfterSpace = posizioneSpace +1;
    const secondLetter = name.charAt(posizioneAfterSpace).toUpperCase();
    return firstLetter + "." + secondLetter;
}


abbrevName("Sam Harris");