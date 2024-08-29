const pool = require("./pool")


async function getAllUsernames(like){
    
    const query = like 
        ? "SELECT * FROM usernames WHERE username ILIKE $1" 
        : "SELECT * FROM usernames";
    
    const params = like 
        ? [`%${like}%`] 
        : [];

    const { rows } = await pool.query(query, params);
    return rows;


}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')") 

}


module.exports = {
    getAllUsernames,
    insertUsername
}