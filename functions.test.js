const verifyPassword = require("./script.js");
const passwords = ["harrie12345", "Wazaaaaa", "HENKhenk", "1234a"];

test("Get word lengths", function () {

    const expected = (passwords < 9);

    const output = verifyPassword.hasRightLength(passwords);
    expect(output).toEqual(expected);
});


test('Should not be null', () => {

    expect(verifyPassword.isNotNull(passwords)).ToBe(null);

});