function createPhoneNumber(numbers) {
    let formattedNumber = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        formattedNumber = formattedNumber.replace("x", numbers[i]);
    }
    return formattedNumber;
}
