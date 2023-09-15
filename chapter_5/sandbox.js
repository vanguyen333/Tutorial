//object literals
// const blogs = [
//   { title: "why mac & cheese rules", likes: 30 },
//   { title: "10 things to make with marmite", likes: 50 },
// ];
// console.log(blogs);
// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@thenetninja.co.uk",
//   location: "berlin",
//   blogs: [
//     { title: "why mac & cheese rules", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 },
//   ],
//   login: function () {
//     console.log("user logged in");
//   },
//   logout() {
//     console.log("user logged out!");
//   },
//   logBlogs() {
//     // console.log(this.blogs);
//     console.log("this user has written following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.logBlogs();
// console.log(user.name);
// console.log((user.name = "van"));
// console.log(user["name"]);
// console.log(typeof user);//object

// user.login();
// user.logout();

// const name = "mario";
// name.toUpperCase();

//MATH OBJECT
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// console.log(Math.round(area)); //round to the nearest
// console.log(Math.floor(area)); //round down
// console.log(Math.ceil(area)); //round up
// console.log(Math.trunc(area)); //round to integer

//random number
const random = Math.round(Math.random() * 10);
console.log(random);
