function dnaStrand(dna) {
    const complement = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
    const complementaryStrand = [...dna].map(base => complement[base]).join('');
    return complementaryStrand;
}
    // use .map
    // Use map to replace each base
    // Return the completed complementary sequence
