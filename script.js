

const hasRightLength = function (password) {

return password.map (words => words.length )

};

const isNotNull = function (password){

return password.map ( words => words < null);


} 

// "Outer" function
    const verifyPassword = password => {
        const conditions = [
            isNotNull(password),
            hasRightLength(password),
            hasUpperCaseCharacter(password),
            hasLowerCaseCharacter(password),
            hasDigit(password)
        ];
        const result =
            minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

        return result;
    };




module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
  //  hasUpperCaseCharacter,
   // hasLowerCaseCharacter,
   // hasDigit,
   // minimumConditionsReached
};