import data from'./data';

  class Database {
    constructor() {}
  
    getAll() {
      return new Promise(async (resolve, reject) => {
        try {
          const asArray = Object.values(data)
          console.log('Data:', asArray)
          await randomDelay()
          resolve(asArray)
        } catch (error) {
          reject(error)
        }
      })
    }
  
    getById(id) {
      return new Promise(async (resolve, reject) => {
        try {
          const avocade = Object.values(data).find(
            (avocade) => avocade.id === id
          )
          await randomDelay()
          resolve(avocade)
        } catch (error) {
          reject(error)
        }
      })
    }
  }
  
  const randomDelay = () =>
    new Promise((resolve) => {
      const max = 350
      const min = 100
      const delay = Math.floor(Math.random() * (max - min + 1)) + min
  
      setTimeout(resolve, delay)
    })
  

export default Database;



// Si quiero usar TypeScript sería de la siguiente manera:

// class Database {
//     constructor() {}
  
//     async getAll(): Promise<TProduct[]> {
//       const asArray = Object.values(allData)
//       await randomDelay()
//       return asArray
//     }
  
//     async getById(id: string): Promise<TProduct | null> {
//       if (!Object.prototype.hasOwnProperty.call(allData, id)) {
//         return null
//       }
  
//       const entry = allData[id]
//       await randomDelay()
//       return entry
//     }
//   }
  
//   // Let's also add a delay to make it a bit closer to reality
//   const randomDelay = () =>
//     new Promise((resolve) => {
//       const max = 350
//       const min = 100
//       const delay = Math.floor(Math.random() * (max - min + 1)) + min
  
//       setTimeout(resolve, delay)
//     })
  
//   export default Database