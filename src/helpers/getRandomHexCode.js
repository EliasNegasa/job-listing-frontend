const getRandomHexCode = () => {
  const randomInt = Math.floor(Math.random() * 16777216)

  const hexCode = randomInt.toString(16).toUpperCase()

  const paddedHexCode = hexCode.padStart(6, '0')

  return paddedHexCode
}

export default getRandomHexCode
