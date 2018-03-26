export class Validations {

    static unique(control) {
        const db = ['nir@nir.com'];

        return new Promise( resolve => {
            setTimeout(() => {
                if (db.indexOf(control.value) !== -1) {
                    resolve( { unique: false });
                }
                resolve(null);
            }, 4000);
        });
        }
}
