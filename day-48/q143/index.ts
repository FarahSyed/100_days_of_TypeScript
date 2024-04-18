// Function that returns a Promise
function myPromise (condition: boolean) {

    // A new Promise that returns a string
    return new Promise<string>((resolve, reject) => {
        
        // Resolve or reject the promise on the basis of a condition
        if (condition) {
            resolve("Promise fulfilled");    // if the condition is true, Promise will be resolved
        } else {
            reject(new Error("Promise rejected"));    // Else, Promise will be rejected
        };
    })
}

// Invoke the function that returns a Promise
myPromise(true)
.then(res => console.log("Success: ", res))   // If the promise is resolved .then() will be called & resolved value will be inside it 
.catch(err => console.log(err));   // If the promise is rejected .catch() will be called & Rejected error will be inside it