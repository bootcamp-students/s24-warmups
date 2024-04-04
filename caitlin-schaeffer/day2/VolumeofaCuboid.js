/* Params: We need to calculate the volume of a cuboid with 
the values of length, width, height (which I expect to be integers) 
Return value: will produce a number (volume)
Explain: I know that to calculate volume you multiply l * w * h
So I set volume to equal that equation and then returned volume
*/


class Kata {
    static getVolumeOfCuboid(length, width, height) {
     let volume = (length * width * height)
     return volume
    }
  }
