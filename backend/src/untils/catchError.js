module.exports = async function catchError(promise){
    if (!(promise instanceof Promise)) {
        return [new Error("Not a Promise")];
    }
    return promise
    .then(data=>{
        return [undefined,data]
    })
    .catch(err=>{
        return [err,undefined]
    })
}