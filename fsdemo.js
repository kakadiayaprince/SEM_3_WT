const fs = require('node:fs');


fs.exists('\\Users\\student\\Desktop\\Prince3\\WT\\test2.txt' , (exists)=>{
    if(exists){
        console.log('file exists')
    }
    else{
        console.log('file not exists')
    }
   
})

fs.



// fs.writeFile('\\Users\\student\\Desktop\\Prince3\\WT\\test.txt', 'hi ! i am Prince.', err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.error("new file was created");
//   }
// });



// fs.readFile('\\Users\\student\\Desktop\\Prince3\\WT\\test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


// fs.appendFile('\\Users\\student\\Desktop\\Prince3\\WT\\test.txt', "hello hu j chhu", (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//   });
  