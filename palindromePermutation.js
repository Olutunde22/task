const palindromePermutation = (string) => {
    let count = 0
    let split = string.toLowerCase().split('')
    let arr = [{ letter: split[0], count: 0 }]
    for (i = 0; i < split.length; i++) {
        if (split[i] != ' ') {
            let index = arr.findIndex((arr) => arr.letter == split[i])
            if (index >= 0) {
                arr[index].count += 1
            } else {
                arr.push({ letter: split[i], count: 1 })
            }
        }
    }

    arr.forEach((arr) => {
        if (arr.count % 2 === 1 || arr.count === 1) {
            count++
        }
    })

    if (count > 1) {
        return false
    }

    return true

}

console.log(palindromePermutation('tact coa'))