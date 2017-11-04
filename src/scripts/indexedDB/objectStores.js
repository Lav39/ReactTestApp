import idb from 'idb';

const storeOperations = (() => {

  //check for support
  if (!('indexedDB' in window)) {
    console.log('This browser doesn\'t support IndexedDB');
    return;
  }

  // Open database and create object stores
  // Not using array for creatin object stores as different properties can be used to create indexes for different stores
  let dbPromise = idb.open('app-db', 1, (upgradeDb) => {
      if(!upgradeDb.objectStoreNames.contains('comments')) {
          upgradeDb.createObjectStore('comments', {keyPath: 'id'});
      }

      if(!upgradeDb.objectStoreNames.contains('photos')) {
          upgradeDb.createObjectStore('photos', {keyPath: 'id'});
      }

      if(!upgradeDb.objectStoreNames.contains('todos')) {
          upgradeDb.createObjectStore('todos', {keyPath: 'id'});
      }

      if(!upgradeDb.objectStoreNames.contains('posts')) {
          upgradeDb.createObjectStore('posts', {keyPath: 'id'});
      }
  });

  return {

      // Populate database and set data within object stores
    populateDatabase: (objStore, data) => {
        let saveTimeStamps = {};
        return dbPromise.then((db) => {
                let transaction, store;
                transaction = db.transaction([objStore], 'readwrite');
                store = transaction.objectStore(objStore);

                // Set the start time of saving data
                saveTimeStamps['saveStart'] = new Date();
                data.forEach((dataRow) => {
                    store.put(dataRow);
                });
                return transaction.complete;
            }).then(() => {

                // Set end time of saving data
                saveTimeStamps['saveEnd'] = new Date();
                return Promise.resolve(saveTimeStamps);
            }).catch((err) => {
            console.log('Transaction error:' + err);
            });
    }
  }
})();

export default storeOperations;