function savetoDb(data) {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("success: data was saved.");
    } else {
      failure("failure: data was not saved.");
    }
  });
}
//  savetoDb("hellow");
//  console.log(savetoDb);