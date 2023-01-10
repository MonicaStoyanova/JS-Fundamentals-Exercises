function songs(array) {
    let n = array.shift();
    let type = array.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    for (const line of array) {
        let el = line.split('_')
        let typeList = el[0];
        let name = el[1];
        let time = el[2];

        if (typeList === type) {
            console.log(name);
        } else if (type === 'all') {
            console.log(name);
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])