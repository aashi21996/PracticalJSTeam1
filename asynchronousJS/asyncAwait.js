//Pehle hum promises ko handle karne ke liye .then() aur .catch() ka use karte the. Jab kai saare promises ek ke baad ek aate hain, toh code thoda lamba aur complex ho jata hai.
//Yeh kisi bhi Promise-based code ko aisa dikhata hai maano woh ruk kar (synchronously) chal raha ho, jabki asliyat mein background mein asynchronous hi kaam chal raha hota hai.
/* async keyword
Jab aap kisi function ke aage async likh dete hain, toh woh function automatically ek Promise return karne lagta hai.
Agar aap us function ke andar koi value return karoge, toh JavaScript usse apne aap Promise.resolve(value) bana dega.
await keyword
await keyword sirf aur sirf ek async function ke andar hi use ho sakta hai.
Yeh JavaScript ko bolta hai: "Ruko! Jab tak yeh promise resolve ya reject nahi ho jata, tab tak iske aage ki line execute mat karo."*/

function fetchUserData() {
    return new Promise((resolve, reject) => {
        let c =false;
        setTimeout(() => {
            if (c)
            resolve({ name: "Rahul", age: 16 });
        else
            reject ({error : "nahi milega"});
        }, 2000);
    });
}
async function showUser() {
    try {
        console.log("Data load ho raha hai...");
        
        // Await yahan ruk jayega jab tak data nahi aa jata (2 second)
        const user = await fetchUserData(); 
        
        console.log("User ka naam:", user.name);
        console.log("User ki umar:", user.age);
    } catch (error) {
        // Agar koi error aaya toh yeh chalega
        console.log("Error aa gaya:", error);
    } finally {
        console.log("Kaam khatam ho gaya!");
    }
}

showUser();