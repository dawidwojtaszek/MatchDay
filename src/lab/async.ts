//console.log("1");
//
//async function run() {
//  console.log("2");
//  await Promise.resolve();
//  console.log("3");
//}
//
//run();
//
//console.log("4");

console.log("5");

setTimeout(() => console.log("6"), 0);

async function run2() {
  console.log("7");
  await Promise.resolve();
  console.log("8");
}

run2();

console.log("9");

function fetchPlayer(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`player-${id}`), 1000);
  });
}

async function loadSquad(): Promise<void> {
  const start = Date.now();
  const id1: string = await fetchPlayer(1);
  console.log(id1);
  const id2: string = await fetchPlayer(2);
  console.log(id2);
  const id3: string = await fetchPlayer(3);
  console.log(id3);
  console.log(Date.now() - start);
}

//loadSquad();

async function loadSquadFast(): Promise<void> {
  const start = Date.now();
  const result: string[] = await Promise.all([
    fetchPlayer(1),
    fetchPlayer(2),
    fetchPlayer(3),
  ]);
  result.forEach((e: string): void => console.log(e));
  console.log(Date.now() - start);
}

//loadSquadFast();

function fetchPlayerFail(id: number): Promise<string> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error(`player ${id} not found`)), 500);
  });
}

async function loadSquadWithError(): Promise<void> {
  const start = Date.now();
  let result: string[];
  try {
    result = await Promise.all([
      fetchPlayer(1),
      fetchPlayerFail(2),
      fetchPlayer(3),
    ]);
  } catch {
    console.log("error");
  }
  console.log(Date.now() - start);
}

loadSquadWithError();
