// Array Plus Array notes:

for (let counter = 0; counter < arr.length; counter++) {
    returnValue += arr1(counter)
}

// Calculate Tip Notes:
function calculateTip(amount, rating) {
    let tip = 0;
    // so for the example test,  tip = amount * .2(excellent)
    if (rating == 'terrible') {
        tip = ((0 / 100) * amount)
        return tip;
    }
    else if (rating == 'poor') {
        tip = ((5 / 100) * amount)
        return tip;
    }
    else if (rating == 'good') {
        tip = ((10 / 100) * amount)
        return tip;
    }
    else if (rating == 'great') {
        tip = ((15 / 100) * amount)
        return tip;
    }
    else if (rating == 'excellent') {
        tip = ((20 / 100) * amount)
        return tip;
    }
}


function calculateTip(amount, rating) {
    if ((0 / 100) * amount) {
        console.log('terrible');
    }
    else if ((5 / 100) * amount) {
        console.log('poor');
    }
    else if ((10 / 100) * amount) {
        console.log('good');
    }
    else if ((15 / 100) * amount) {
        console.log('great');
    }
    else if ((20 / 100) * amount) {
        console.log('excellent');
    }
}

switch (amount, rating) {
    case '+=0%':
        console.log('Terrible');
        break;
    case '+=5%':
        console.log('poor');
        break;
    case '+=10%':
        console.log('good');
        break;
    case '+=15%':
        console.log('great');
        break;
    case '+=20%':
        console.log('excellent');
        break;
}
