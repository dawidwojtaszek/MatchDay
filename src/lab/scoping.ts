async function testTimeout(): Promise<void> {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("test");
      return myPromise;
    }, 1500);
  });
}
async function scop(): Promise<void> {
  let result: string[];
  try {
    console.log(await testTimeout());
    result = ["a", "b"];
  } catch {
    console.log("error");
    result = ["error"];
  }
  result.forEach((e) => {
    console.log(e);
  });
}

scop();
