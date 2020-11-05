const { v4: uuidv4 } = require('uuid')

class Store {
    constructor(name, options) {
        this.name = name
        this.content = {}

    }

    getById(id) {
        return this.content[id]
    }

    add(resource) {
        const id = uuidv4()
        resource.id = id
    }

    delete(id) {
        // verif plz
    }

    replace(id, resource) {

    }

    patch(id, resource) {

    }

    autoSave() {

    }

    autoLoad() {

    }

    save() {

    }


}

exports.Store = Store