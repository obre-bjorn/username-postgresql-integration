const db = require("../db/queries");

async function getUsernames(req, res) {
  
  const search = req.query.search
  const usernames = await db.getAllUsernames(search || ''); 
  console.log("Usernames: ", usernames);
  

  res.render('index', {usernames})
  // res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
  res.render('form')
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteUsernames(req,res){
  await db.deleteUsernames()
  res.redirect("/")

}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteUsernames
};
