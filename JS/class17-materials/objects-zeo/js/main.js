//Create a stopwatch object that has four properties and three methods
let stopwatch = {
  color: "black",
  brand: "nike",
  shape: "round",
  size: "large",
  function: (start = () => {
    console.log("STARTING");
  }),
  function: (stop = () => {
    console.log("STOPPING");
  }),
  function: () => {
    alert(this.brand);
  },
};
stopwatch.stop;
