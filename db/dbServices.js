
function generateCreateFunc(collection) {
    return function createDocument(doc) {
        return collection.insertOne(doc)
    }
}

function initServices(client, dbName) {
    const db = client.db(dbName)
    const users = db.collection('users')
    const products = db.collection('products')
    const somethings = db.collection('something') 

    return {
        createSomething: generateCreateFunc(somethings),
        createProduct: generateCreateFunc(products),
    }
}

exports.initServices = initServices