const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

/*
Exercice 01:
Completer les fonctions de cette Class (add, delete, get, patch, replace)
Et les utiliser dans les routes
*/

/*
Exercice 02:
- Persister la donnee dans un fichier JSON
- Choix du chemin de sauvegarde via les `options`

functions a terminer: save, autoSave, autoLoad
*/

class Store {
    constructor(name, options) {
        this.name = name
        this.content = {}

        // this.path = options.path || undefined
        // this.interval = undefined


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