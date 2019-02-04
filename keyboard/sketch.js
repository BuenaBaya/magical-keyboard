var keyDividerX = 200;
var keyHeight = 700;
var rootNoteKeyX = 100;
var noteNameY = 425;
var noteNameX = 150;
var noteName = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var blackNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
var blackColour = 0;
var whiteColour = 255;
var lightColour = 185;
var darkColour = 65;
var intervalNameStrokeColour = blackColour;
var keyPressedInterval = 0;
var intervalX = rootNoteKeyX + 465;
var intervalY = 500;
var intervalRotation = 90;
var dotSize = 40;
var dotColourIonian = '#b300b3';
var dotColourDorian = '#ff80bf';
var dotColourPhrygian = '#ff9999';
var dotColourLydian = '#ffaa80';
var dotColourMixolydian = '#ffc34d';
var dotColourAeolian = '#cccc00';
var dotColourLocrian = '#558000';
var dotColourAlpha = 'rgba(0, 0, 0, 0)';
var dotStrokeColour = 'rgba(27%, 15%, 5%, 0.9)';
var dotStrokeColourIonian = dotStrokeColour;
var dotStrokeColourDorian = dotStrokeColour;
var dotStrokeColourPhrygian = dotStrokeColour;
var dotStrokeColourLydian = dotStrokeColour;
var dotStrokeColourMixolydian = dotStrokeColour;
var dotStrokeColourAeolian = dotStrokeColour;
var dotStrokeColourLocrian = dotStrokeColour;
var dotIonianX = 50;
var dotIonianY = 30;
var dotDorianX = 50;
var dotDorianY = 80;
var dotPhrygianX = 50;
var dotPhrygianY = 130;
var dotLydianX = 50;
var dotLydianY = 180;
var dotMixolydianX = 50;
var dotMixolydianY = 230;
var dotAeolianX = 50;
var dotAeolianY = 280;
var dotLocrianX = 50;
var dotLocrianY = 330;
var legendTextColourIonian = whiteColour;
var legendTextColourDorian = whiteColour;
var legendTextColourPhrygian = whiteColour;
var legendTextColourLydian = whiteColour;
var legendTextColourMixolydian = whiteColour;
var legendTextColourAeolian = whiteColour;
var legendTextColourLocrian = whiteColour;
var legendTextStrokeColourIonian = darkColour;
var legendTextStrokeColourDorian = darkColour;
var legendTextStrokeColourPhrygian = darkColour;
var legendTextStrokeColourLydian = darkColour;
var legendTextStrokeColourMixolydian = darkColour;
var legendTextStrokeColourAeolian = darkColour;
var legendTextStrokeColourLocrian = darkColour;
var keyPressedIonian = 0;
var keyPressedDorian = 0;
var keyPressedPhrygian = 0;
var keyPressedLydian = 0;
var keyPressedMixolydian = 0;
var keyPressedAeolian = 0;
var keyPressedLocrian = 0;

function getNoteColour(noteName) {
  if (whiteNotes.includes(noteName)) {
    return lightColour;
  } else {
    return darkColour;
  }
}
function getNoteNameColour(noteName) {
  if (whiteNotes.includes(noteName)) {
    return blackColour;
  } else {
    return whiteColour;
  }
}

function getIntervalNameColour(noteName) {
  if (whiteNotes.includes(noteName)) {
    return darkColour;
  } else {
    return whiteColour;
  }
}

function setup() {
  createCanvas(1301, keyHeight + 2);
  background(whiteColour);
}

function keyPressed() {
  //LEFT_ARROW, RIGHT_ARROW moves noteName left and right respectively.
  //Using array functions, [0] is appended as [12], and [0] is immediately removed, ensuring the array length is still 12.
  if (keyCode === LEFT_ARROW) {
    noteName.push(noteName[0]);
    noteName.shift();
  } else if (keyCode === RIGHT_ARROW) {
    noteName.unshift(noteName[11]);
    noteName.pop();
  }

  //keyPressed (numbers 1-7), will hide and show mode dots and their respective legend of a certain mode.
  if (keyCode === 49 & keyPressedIonian == 0) {
    keyPressedIonian = 1;
    dotStrokeColourIonian = dotColourAlpha;
    dotColourIonian = dotColourAlpha;
    legendTextColourIonian = dotColourAlpha;
    legendTextStrokeColourIonian = dotColourAlpha;
  } else if (keyCode === 49 & keyPressedIonian == 1) {
    keyPressedIonian = 0;
    dotStrokeColourIonian = dotStrokeColour;
    dotColourIonian = '#b300b3';
    legendTextColourIonian = whiteColour;
    legendTextStrokeColourIonian = darkColour;
  }

  if (keyCode === 50 & keyPressedDorian == 0) {
    keyPressedDorian = 1;
    dotStrokeColourDorian = dotColourAlpha;
    dotColourDorian = dotColourAlpha;
    legendTextColourDorian = dotColourAlpha;
    legendTextStrokeColourDorian = dotColourAlpha;
  } else if (keyCode === 50 & keyPressedDorian == 1) {
    keyPressedDorian = 0;
    dotStrokeColourDorian = dotStrokeColour;
    dotColourDorian = '#ff80bf';
    legendTextColourDorian = whiteColour;
    legendTextStrokeColourDorian = darkColour;
  }

  if (keyCode === 51 & keyPressedPhrygian == 0) {
    keyPressedPhrygian = 1;
    dotStrokeColourPhrygian = dotColourAlpha;
    dotColourPhrygian = dotColourAlpha;
    legendTextColourPhrygian = dotColourAlpha;
    legendTextStrokeColourPhrygian = dotColourAlpha;
  } else if (keyCode === 51 & keyPressedPhrygian == 1) {
    keyPressedPhrygian = 0;
    dotStrokeColourPhrygian = dotStrokeColour;
    dotColourPhrygian = '#ff9999';
    legendTextColourPhrygian = whiteColour;
    legendTextStrokeColourPhrygian = darkColour;
  }

  if (keyCode === 52 & keyPressedLydian == 0) {
    keyPressedLydian = 1;
    dotStrokeColourLydian = dotColourAlpha;
    dotColourLydian = dotColourAlpha;
    legendTextColourLydian = dotColourAlpha;
    legendTextStrokeColourLydian = dotColourAlpha;
  } else if (keyCode === 52 & keyPressedLydian == 1) {
    keyPressedLydian = 0;
    dotStrokeColourLydian = dotStrokeColour;
    dotColourLydian = '#ffaa80';
    legendTextColourLydian = whiteColour;
    legendTextStrokeColourLydian = darkColour;
  }

  if (keyCode === 53 & keyPressedMixolydian == 0) {
    keyPressedMixolydian = 1;
    dotStrokeColourMixolydian = dotColourAlpha;
    dotColourMixolydian = dotColourAlpha;
    legendTextColourMixolydian = dotColourAlpha;
    legendTextStrokeColourMixolydian = dotColourAlpha;
  } else if (keyCode === 53 & keyPressedMixolydian == 1) {
    keyPressedMixolydian = 0;
    dotStrokeColourMixolydian = dotStrokeColour;
    dotColourMixolydian = '#ffc34d';
    legendTextColourMixolydian = whiteColour;
    legendTextStrokeColourMixolydian = darkColour;
  }

  if (keyCode === 54 & keyPressedAeolian == 0) {
    keyPressedAeolian = 1;
    dotStrokeColourAeolian = dotColourAlpha;
    dotColourAeolian = dotColourAlpha;
    legendTextColourAeolian = dotColourAlpha;
    legendTextStrokeColourAeolian = dotColourAlpha;
  } else if (keyCode === 54 & keyPressedAeolian == 1) {
    keyPressedAeolian = 0;
    dotStrokeColourAeolian = dotStrokeColour;
    dotColourAeolian = '#cccc00';
    legendTextColourAeolian = whiteColour;
    legendTextStrokeColourAeolian = darkColour;
  }

  if (keyCode === 55 & keyPressedLocrian == 0) {
    keyPressedLocrian = 1;
    dotStrokeColourLocrian = dotColourAlpha;
    dotColourLocrian = dotColourAlpha;
    legendTextColourLocrian = dotColourAlpha;
    legendTextStrokeColourLocrian = dotColourAlpha;
  } else if (keyCode === 55 & keyPressedLocrian == 1) {
    keyPressedLocrian = 0;
    dotStrokeColourLocrian = dotStrokeColour;
    dotColourLocrian = '#558000';
    legendTextColourLocrian = whiteColour;
    legendTextStrokeColourLocrian = darkColour;
  }

  //keyPressed number 8 rotates the intervalName elements off the screen and back again.
  //Bit of a bodge, but still operates.
  if (keyCode === 56 & keyPressedInterval == 0) {
    keyPressedInterval = 1;
    intervalRotation = 360;
  } else if (keyCode === 56 & keyPressedInterval == 1) {
    keyPressedInterval = 0
    intervalRotation = 90;
  }
}

function draw() {

  //fill takes the noteColour value dictated by later if statements.
  //rect creates rectangles at regularly increasing values based on rootNoteX, at a predefined keyHeight.
  noStroke();
  fill(getNoteColour(noteName[0]));
  rect(rootNoteKeyX, 1, 100, keyHeight);
  fill(getNoteColour(noteName[1]));
  rect(rootNoteKeyX + 100, 1, 100, keyHeight);
  fill(getNoteColour(noteName[2]));
  rect(rootNoteKeyX + 200, 1, 100, keyHeight);
  fill(getNoteColour(noteName[3]));
  rect(rootNoteKeyX + 300, 1, 100, keyHeight);
  fill(getNoteColour(noteName[4]));
  rect(rootNoteKeyX + 400, 1, 100, keyHeight);
  fill(getNoteColour(noteName[5]));
  rect(rootNoteKeyX + 500, 1, 100, keyHeight);
  fill(getNoteColour(noteName[6]));
  rect(rootNoteKeyX + 600, 1, 100, keyHeight);
  fill(getNoteColour(noteName[7]));
  rect(rootNoteKeyX + 700, 1, 100, keyHeight);
  fill(getNoteColour(noteName[8]));
  rect(rootNoteKeyX + 800, 1, 100, keyHeight);
  fill(getNoteColour(noteName[9]));
  rect(rootNoteKeyX + 900, 1, 100, keyHeight);
  fill(getNoteColour(noteName[10]));
  rect(rootNoteKeyX + 1000, 1, 100, keyHeight);
  fill(getNoteColour(noteName[11]));
  rect(rootNoteKeyX + 1100, 1, 100, keyHeight);

  //rect defines the border of the keyboard element, using keyHeight as the predefined height value.
  noFill();
  strokeWeight(2);
  stroke(0);
  rect(100, 1, 1200, keyHeight);

  //rect defines the sidebar element, a background for the legend for the mode dots.
  fill(125);
  noStroke();
  rect(0, 0, 99, keyHeight + 2)

  //line defines key dividing elements using keyDividerX to create vertical lines with equal spacing. 
  stroke(0);
  strokeWeight(1);
  noFill();
  line(keyDividerX, 0, keyDividerX, keyHeight);
  line(keyDividerX + 100, 0, keyDividerX + 100, keyHeight);
  line(keyDividerX + 200, 0, keyDividerX + 200, keyHeight);
  line(keyDividerX + 300, 0, keyDividerX + 300, keyHeight);
  line(keyDividerX + 400, 0, keyDividerX + 400, keyHeight);
  line(keyDividerX + 500, 0, keyDividerX + 500, keyHeight);
  line(keyDividerX + 600, 0, keyDividerX + 600, keyHeight);
  line(keyDividerX + 700, 0, keyDividerX + 700, keyHeight);
  line(keyDividerX + 800, 0, keyDividerX + 800, keyHeight);
  line(keyDividerX + 900, 0, keyDividerX + 900, keyHeight);
  line(keyDividerX + 1000, 0, keyDividerX + 1000, keyHeight);

  //ellipse defines the mode dots, with predefined dotColour, dotSize and using individually predefined X and Y values.
  strokeWeight(4);
  stroke(dotStrokeColourIonian);
  fill(dotColourIonian);
  ellipse(dotIonianX, dotIonianY, dotSize);
  ellipse(dotIonianX + 100, dotIonianY, dotSize);
  ellipse(dotIonianX + 300, dotIonianY, dotSize);
  ellipse(dotIonianX + 500, dotIonianY, dotSize);
  ellipse(dotIonianX + 600, dotIonianY, dotSize);
  ellipse(dotIonianX + 800, dotIonianY, dotSize);
  ellipse(dotIonianX + 1000, dotIonianY, dotSize);
  ellipse(dotIonianX + 1200, dotIonianY, dotSize);

  stroke(dotStrokeColourDorian);
  fill(dotColourDorian);
  ellipse(dotDorianX, dotDorianY, dotSize);
  ellipse(dotDorianX + 100, dotDorianY, dotSize);
  ellipse(dotDorianX + 300, dotDorianY, dotSize);
  ellipse(dotDorianX + 400, dotDorianY, dotSize);
  ellipse(dotDorianX + 600, dotDorianY, dotSize);
  ellipse(dotDorianX + 800, dotDorianY, dotSize);
  ellipse(dotDorianX + 1000, dotDorianY, dotSize);
  ellipse(dotDorianX + 1100, dotDorianY, dotSize);

  stroke(dotStrokeColourPhrygian);
  fill(dotColourPhrygian);
  ellipse(dotPhrygianX, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 100, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 200, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 400, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 600, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 800, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 900, dotPhrygianY, dotSize);
  ellipse(dotPhrygianX + 1100, dotPhrygianY, dotSize);

  stroke(dotStrokeColourLydian);
  fill(dotColourLydian);
  ellipse(dotLydianX, dotLydianY, dotSize);
  ellipse(dotLydianX + 100, dotLydianY, dotSize);
  ellipse(dotLydianX + 300, dotLydianY, dotSize);
  ellipse(dotLydianX + 500, dotLydianY, dotSize);
  ellipse(dotLydianX + 700, dotLydianY, dotSize);
  ellipse(dotLydianX + 800, dotLydianY, dotSize);
  ellipse(dotLydianX + 1000, dotLydianY, dotSize);
  ellipse(dotLydianX + 1200, dotLydianY, dotSize);

  stroke(dotStrokeColourMixolydian);
  fill(dotColourMixolydian);
  ellipse(dotMixolydianX, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 100, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 300, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 500, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 600, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 800, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 1000, dotMixolydianY, dotSize);
  ellipse(dotMixolydianX + 1100, dotMixolydianY, dotSize);

  stroke(dotStrokeColourAeolian);
  fill(dotColourAeolian);
  ellipse(dotAeolianX, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 100, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 300, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 400, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 600, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 800, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 900, dotAeolianY, dotSize);
  ellipse(dotAeolianX + 1100, dotAeolianY, dotSize);

  stroke(dotStrokeColourLocrian);
  fill(dotColourLocrian);
  ellipse(dotLocrianX, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 100, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 200, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 400, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 600, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 700, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 900, dotLocrianY, dotSize);
  ellipse(dotLocrianX + 1100, dotLocrianY, dotSize);

  //text defines the noteNameColour, and uses the noteName array to define which character is presented within individual key elements.
  textStyle(BOLD);
  noStroke();
  textAlign(CENTER);
  textSize(60);
  fill(getNoteNameColour(noteName[0]));
  text((noteName[0]), noteNameX, noteNameY);
  fill(getNoteNameColour(noteName[1]));
  text((noteName[1]), noteNameX + 100, noteNameY);
  fill(getNoteNameColour(noteName[2]));
  text((noteName[2]), noteNameX + 200, noteNameY);
  fill(getNoteNameColour(noteName[3]));
  text((noteName[3]), noteNameX + 300, noteNameY);
  fill(getNoteNameColour(noteName[4]));
  text((noteName[4]), noteNameX + 400, noteNameY);
  fill(getNoteNameColour(noteName[5]));
  text((noteName[5]), noteNameX + 500, noteNameY);
  fill(getNoteNameColour(noteName[6]));
  text((noteName[6]), noteNameX + 600, noteNameY);
  fill(getNoteNameColour(noteName[7]));
  text((noteName[7]), noteNameX + 700, noteNameY);
  fill(getNoteNameColour(noteName[8]));
  text((noteName[8]), noteNameX + 800, noteNameY);
  fill(getNoteNameColour(noteName[9]));
  text((noteName[9]), noteNameX + 900, noteNameY);
  fill(getNoteNameColour(noteName[10]));
  text((noteName[10]), noteNameX + 1000, noteNameY);
  fill(getNoteNameColour(noteName[11]));
  text((noteName[11]), noteNameX + 1100, noteNameY);

  //text defines the characters which will appear on the mode dots on the legend sidebar.
  textSize(30);
  strokeWeight(3);
  fill(legendTextColourIonian);
  stroke(legendTextStrokeColourIonian);
  text('I', dotIonianX, dotIonianY + 10);
  fill(legendTextColourDorian);
  stroke(legendTextStrokeColourDorian);
  text('D', dotDorianX, dotDorianY + 10);
  fill(legendTextColourPhrygian);
  stroke(legendTextStrokeColourPhrygian);
  text('P', dotPhrygianX, dotPhrygianY + 10);
  fill(legendTextColourLydian);
  stroke(legendTextStrokeColourLydian);
  text('L', dotLydianX, dotLydianY + 10);
  fill(legendTextColourMixolydian);
  stroke(legendTextStrokeColourMixolydian);
  text('M', dotMixolydianX, dotMixolydianY + 10);
  fill(legendTextColourAeolian);
  stroke(legendTextStrokeColourAeolian);
  text('A', dotAeolianX, dotAeolianY + 10);
  fill(legendTextColourLocrian);
  stroke(legendTextStrokeColourLocrian);
  text('L', dotLocrianX, dotLocrianY + 10);

  //text defines intervalName and intervalNameColour, using rotate and significant bodge to present static interval names on each individual key.
  angleMode(DEGREES);
  rotate(intervalRotation);
  stroke(intervalNameStrokeColour);
  strokeWeight(2);
  textAlign(CENTER);
  fill(getIntervalNameColour(noteName[0]));
  textSize(63);
  text('UNISON', intervalX, intervalY - 627);
  fill(getIntervalNameColour(noteName[1]));
  textSize(43);
  text('MINOR 2ND', intervalX, intervalY - 735);
  fill(getIntervalNameColour(noteName[2]));
  textSize(41);
  text('MAJOR 2ND', intervalX, intervalY - 835);
  fill(getIntervalNameColour(noteName[3]));
  textSize(43);
  text('MINOR 3RD', intervalX, intervalY - 935);
  fill(getIntervalNameColour(noteName[4]));
  textSize(41);
  text('MAJOR 3RD', intervalX, intervalY - 1035);
  fill(getIntervalNameColour(noteName[5]));
  textSize(35);
  text('PERFECT 4TH', intervalX, intervalY - 1135);
  fill(getIntervalNameColour(noteName[6]));
  textSize(27.5);
  text('AUGMENTED 4TH', intervalX, intervalY - 1240);
  fill(getIntervalNameColour(noteName[7]));
  textSize(35);
  text('PERFECT 5TH', intervalX, intervalY - 1335);
  fill(getIntervalNameColour(noteName[8]));
  textSize(44);
  text('MINOR 6TH', intervalX, intervalY - 1435);
  fill(getIntervalNameColour(noteName[9]));
  textSize(42);
  text('MAJOR 6TH', intervalX, intervalY - 1535);
  fill(getIntervalNameColour(noteName[10]));
  textSize(45);
  text('MINOR 7TH', intervalX, intervalY - 1635);
  fill(getIntervalNameColour(noteName[11]));
  textSize(43);
  text('MAJOR 7TH', intervalX, intervalY - 1735);

}