process.stdout.write("hello from spinner1.js... \rheyyy\n");
let delay = 0;
setTimeout(() => {
  process.stdout.write("\r|   ");
  setTimeout(() => {
    process.stdout.write("\r/   ");
    setTimeout(() => {
      process.stdout.write("\r-   ");
      setTimeout(() => {
        process.stdout.write("\r\\   ");
        setTimeout(() => {
          process.stdout.write("\r|   ");
          setTimeout(() => {
            process.stdout.write("\r/   ");
            setTimeout(() => {
              process.stdout.write("\r-   ");
            }, 100);
          }, 300);
        }, 500);
      }, 700);
    }, 900);
  }, 1100);
}, 1300);
