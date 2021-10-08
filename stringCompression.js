const stringCompression = (string) => {

    const split = string.toLowerCase().split('')
    let currentLetter = string[0]
    const arr = []
    let count = 0
    let result = ''

    for (i = 0; i < split.length; i++) {
        let letter = split[i]
        if (split[i] === currentLetter) {
            count++
        } else {
            arr.push(result)
            result = `${result}${letter}${count}`
            currentLetter = letter
            count = 1
        }
        result = `${currentLetter}${count}`
    }
    arr.push(result)
    result = arr.join('')
    if (result.length < string.length) {
        return result
    }
    return string
}
console.log(stringCompression('aaaaaaabbbbbb'))
console.log(stringCompression('aba'))