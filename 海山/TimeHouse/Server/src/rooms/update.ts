import query from "./query"

//---Inser player data to DB---
export function UpdateOrCreatedPlayer (options: any){
    const playData = options.userData
    const id = playData.userId
    const name = playData.displayName
    const publicKey = playData.publicKey
    let sql = `SELECT * FROM players WHERE userid = '${id}'`
    query(sql).then(res => {
        //Check if res is an array and is empty
        if (Array.isArray(res) && res.length == 0 ){
            sql =  `
                INSERT INTO players (userid, publickey, name)
                VALUES ('${id}', '${publicKey}', '${name}')
            `
            query(sql).then(res => {
                console.log("insert succeed ==>",res)
            }).catch(err => {
                console.log(err)
            })
        }
    }).catch(err => {
        console.log(err)
    })
}


//---Update playerScore
export function updatePlayerScore(options: any,gameScore:number){
    const id = options.userData.userId
    const sql = `
          UPDATE players 
          SET score = ${gameScore} 
          WHERE userid = '${id}'
        `
        query(sql).then(res => {
          console.log("gameScore update succeed!! ===>",res)
          console.log("You gameScore is : ",gameScore);
        }).catch(err => {
          console.log(err)
        })
}