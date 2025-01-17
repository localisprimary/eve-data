import createSelectedFiles from "./createSelectedFiles";
import copyToPackages from "./filesystem/copyToPackages";
import initialize from "./filesystem/initialize";
import { downloadSde } from "./sde";

const main = async () => {
  const hrstart = process.hrtime();
  await initialize();
  await downloadSde();

  await createSelectedFiles();
  await copyToPackages();

  console.log(`\nTOOK ${process.hrtime(hrstart)[0]} s`);
};

main();
