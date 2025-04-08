let filmes = ['carros', 'carros 2', 'carros 3', 'veloses e furiosos', '+veloses e +furiosos', 'veloses e furiosos 3', 'veloses e furiosos 4']
console.log(filmes[0])
console.log(filmes[3])
filmes[6] = 'american pie'
console.log(filmes);
filmes.push('american pie 2')
console.log(filmes);
filmes.splice(4,0,'veloses e furiosos 5')
console.log(filmes);
filmes.shift()
console.log(filmes);
filmes.pop()
console.log(filmes);
console.log(filmes.slice(0,2));
console.log(filmes.slice(3));
console.log(filmes.length);
filmes.reverse()
console.log(filmes);
