const regexAlphabet = new RegExp(/[a-z]/gi);

function add(input) {
 if (!regexAlphabet.exec(input)) throw Error("Invalid text.");
 return input.split(" ").join("tos ") + "tos";
};

/**
* Tos-IFY
**/
