

function generateRange(min, max, step) {

    let range = [];
    
    if (max - min < step) {
        
        range.push(min);
    }
    else {
      
    for (let i = min; i <= max; i += step) {
        range.push(i);
    }
    }
    return range;
    }
