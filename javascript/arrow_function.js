const obj = {
    username: 'aniket',
    age: 23,
    welcomemessage: function () {
        console.log(`namaskar ${this.username} `);
    },
}
obj.welcomemessage();

// but if we change the username then the refrence also get change.

obj.username = 'andya';
obj.welcomemessage();

console.log(obj);