// Timestamp de l'últim backup
const lastBackup = 1546300800
//timestamp amb l'últim backup que s'ha fet a cada id
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 4, 1400000000 ],
  [ 1, 1546301000 ]
]
// console.log(changes.sort((a,b) => {console.log(a, '----', b)}))

function getFilesToBackup(lastBackup, changes) {
  if(changes.length >= 1){
    const newChanges = changes.filter(e => e[1] > lastBackup)
      .sort((a,b) => a[0] - b[0])
    const uniques = [];
    newChanges.forEach((e) => {
      uniques.push(e[0]);
    })
    return [...new Set(uniques)];
  }
  return [];
}
getFilesToBackup(lastBackup, changes);
//Crear un programa que torni un array amb les id dels arxius dels quals hem de fer un backup perquè han sigut modificats des de l'últim backup i ordenats de forme ascendent
