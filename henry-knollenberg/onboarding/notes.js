// Generate range of integers

arrayPosition = 0
array[arrayPosition] = min;

for (let i = min + step; i <= max; i += step) {
    arrayPosition++;
    array[arrayPosition] = i;
}

return array;
