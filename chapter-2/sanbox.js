// alert("Hallo Dunia");

// let age = 25;
// console.log(age);

/* STRING */
// {
//    // string
//    console.log("hello word");

//    let email = "muh8abdillah@gmail.com";
//    console.log(email);

//    // string concatenation
//    let firstName = "muhammad";
//    let lastName = "abdillah";
//    let fullName = firstName + " " + lastName;
//    console.log(fullName);

//    // getting character
//    console.log(fullName[2]);

//    // string lenght
//    console.log(fullName.length);

//    // string methode
//    console.log(fullName.toLocaleUpperCase());
//    let result = fullName.toLocaleLowerCase();
//    console.log(result);

//    let index = email.indexOf("@");
//    console.log(index);
// }

/* COMMON STRING METHODE */
// {
//    let email = "muh8abdillah@gmail.com";

//    // let result = email.indexOf("l");

//    // let result = email.slice(13, 18);

//    // let result = email.substr(4, 8);

//    let result = email.replace("gmail", "yahoo");
//    console.log(result);
// }

/* NUMBER */
// {
//    let radius = 10;
//    const pi = 3.14;

//    // console.log(radius, pi);

//    // Math Operator +, -, /, *, %
//    let result = radius % 3;
//    console.log(result);

//    let likes = 10;
//    likes++;
//    likes--;

//    likes += 10;
//    likes -= 5;
//    console.log(likes);

//    // NaN - Note a Number
//    console.log(4 / "eat");

//    console.log("i like your photos " + likes + " time");
// }

/* TAMPLETE STRING */
// {
//    // tamplate string
//    const title = "Best read of 2019";
//    const author = "Mario";
//    const like = 30;

//    // concetantion way
//    let result1 = "the blog called " + title + " by" + author + " has " + like + " likes";
//    console.log(result1);

//    // tamplte string way
//    let result2 = `the blog caled ${title} by ${author} has ${like} likes`;
//    console.log(result2);

//    // creating html string
//    let html = `
//       <h2>${title}</h2>
//       <p>${author}</p>
//       <span>this blog has ${like} likes</span>
//    `;
//    console.log(html);
// }

/* ARRAY */
// {
//    let ninjas = ["abdi", "merry", "isti"];

//    // ninjas[1] = "ken";
//    // console.log(ninjas);

//    // let ages = [20, 21, 22, 23, 34];
//    // console.log(ages[3]);

//    // let random = ["abdillah", "merry", 11, "september", 2018];
//    // console.log(random);

//    // console.log(ninjas.length);

//    // Array methode //
//    // let result = ninjas.join("-");
//    // let result = ninjas.indexOf("isti");
//    // let result = ninjas.concat(["ken", "mer"]);
//    let result = ninjas.push("Ken");
//    result = ninjas.pop();
//    result = ninjas.pop();
//    console.log(ninjas);
// }

/* BOOLEAN */
// {
//    // comparasion
//    let age = 22;
//    console.log(age == 22);
//    console.log(age == 20);
//    console.log(age != 20);
//    console.log(age > 20);
//    console.log(age < 20);
//    console.log(age <= 20);
//    console.log(age >= 20);

//    // strict comparasion
//    console.log(age === "22");
// }

/* TYPE COMPARATION */
{
   let score = "100";

   score = Number(score);
   console.log(score);
   console.log(score + 1);
   console.log(typeof score);

   let result = String(50);
   console.log(result, typeof result);
}
