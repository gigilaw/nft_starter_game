const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame')
  const gameContract = await gameContractFactory.deploy(
    ['Beefalo', 'WerePig', 'Hound'], // Names
    [
      'https://i.imgur.com/Wb3KQD8.jpeg', // Images
      'https://i.imgur.com/WWIwh8O.png',
      'https://i.imgur.com/UvrgXl9.png',
    ],
    [500, 200, 150], // HP values
    [100, 50, 25], // Attack damage values
    'Klaus', // Boss name
    'https://i.imgur.com/bz2dA1B.png', // Boss image
    10000, // Boss hp
    50, // Boss attack damage
  )
  await gameContract.deployed()
  console.log('Contract deployed to:', gameContract.address)

  let txn
  txn = await gameContract.mintCharacterNFT(0)
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()

  txn = await gameContract.attackBoss()
  await txn.wait()
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
