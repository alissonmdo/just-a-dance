import songsJson from "./songs.json"


function parseSongs(){
  const songsList = [];
  for (var [key, value] of Object.entries(songsJson)){
    const values = [];
    for (var [vKey, vValue] of Object.entries(value)){
      values[vKey] = vValue;
    }
    songsList[key] = values;
  }
  return songsList;
}
const Songs = parseSongs();

export default Songs;