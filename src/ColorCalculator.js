export function averageColors(colorArray) {
  var red = 0,
    green = 0,
    blue = 0;

  for (var i = 0; i < colorArray.length; i++) {
    red += hexToR("" + colorArray[i] + "");
    green += hexToG("" + colorArray[i] + "");
    blue += hexToB("" + colorArray[i] + "");
  }

  //Average RGB
  red = red / colorArray.length;
  green = green / colorArray.length;
  blue = blue / colorArray.length;

  return "rgb(" + red + "," + green + "," + blue + ")";
}

//get the red of RGB from a hex value
function hexToR(h) {
  return parseInt(cutHex(h).substring(0, 2), 16);
}

//get the green of RGB from a hex value
function hexToG(h) {
  return parseInt(cutHex(h).substring(2, 4), 16);
}

//get the blue of RGB from a hex value
function hexToB(h) {
  return parseInt(cutHex(h).substring(4, 6), 16);
}

//cut the hex into pieces
function cutHex(h) {
  if (h.charAt(1) === "x") {
    return h.substring(2, 8);
  } else {
    return h.substring(1, 7);
  }
}
