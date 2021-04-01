// функция для инициализации очереди
function makeQueue(arr) {
	let queue = [];
	for (let item of arr) {
		queue.push(item);
	}
	return queue;
}

function bfs(list, start, target) {
	// инициализируем очередь, помещаем в нее друзей
	let queue = makeQueue(list[start]['friends']);

	// помещаем уже проверенных людей в массив searched
	let searched = [list[start]['name']];

	while (queue.length > 0) {
		// проверяем всех текущих друзей, начиная с первого, вытаскиваем его из очереди
		const currentFriend = queue.shift();
		if (!searched.includes(currentFriend)) {
			// если профессия друга совпала с искомой, то возвращаем его имя
			if (list[currentFriend]['occupation'] === target) {
				return list[currentFriend]['name'];
			} else {
				// иначе пушим в очередь друзей текущего друга
				for (let friend of list[currentFriend]['friends']) {
					queue.push(friend);
				}
				// и пушим текущего в массив проверенныых друзей
				searched.push(currentFriend);
			}
		}
	}
	return false;
}

//пример смежного списка
const friendList = {
	'Maria': {
		name: 'Maria',
		occupation: 'doctor',
		friends: ['Bob', 'Alisa', 'Clar'],
	},
	'Bob': {
		name: 'Bob',
		occupation: 'art-critic',
		friends: ['Maria', 'Anuj', 'Peggy'],
	},
	'Alisa': {
		name: 'Alisa',
		occupation: 'designer',
		friends: ['Peggy'],
	},
	'Peggy': {
		name: 'Peggy',
		occupation: 'mango-seller',
		friends: [],
	},
	'Anuj': {
		name: 'Anuj',
		occupation: '',
		friends: [],
	},
	'Clar': {
		name: 'Clar',
		occupation: 'engineer',
		friends: ['Tom', 'Johny'],
	},
	'Johny': {
		name: 'Johny',
		occupation: 'programmer',
		friends: [],
	},
	'Tom': {
		name: 'Tom',
		occupation: 'manager',
		friends: [],
	},
}

//нужно найти человека с профессией продавца манго среди друзей Марии:
console.log(bfs(friendList, 'Maria', 'mango-seller'))