function dnaStrand(dna){
//Put dna sequence in an array
const dnaComplement = {
  'G' : 'C',
  'C' : 'G',
  'T' : 'A',
  'A' : 'T'
}
//Return dna array and split then map
return dna.split('').map(element => dnaComplement[element]).join('')
}
