function gramophone(band, album, song){

    let plateRotation = 2.5; // sec
    let songDuration = (album.length * band.length) * song.length / 2;

    let rotations = Math.ceil(songDuration / plateRotation);
    console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')