const Exposer = (function () {
    let privateVariable = 10;

    const privateMethod = () => {
        console.log('inside private method');
        privateVariable++;
    };

    const exposedMethod = () => {
        console.log('inside exposed method');
    };

    const otherExposedMethod = () => {
        privateMethod();
    };

    return {
        first: exposedMethod,
        second: otherExposedMethod
    }
})();

Exposer.first();
Exposer.second();
console.log(Exposer.exposedMethod);