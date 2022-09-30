"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlayer = exports.setPlayer = exports.getPlayer = void 0;
const mysql_1 = __importDefault(require("mysql"));
//安装mysql的过程
/*
    npm install mysql
    npm install -D @types/mysql
*/
const dbConfig = {
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "123456",
    database: "dcl"
};
const pool = mysql_1.default.createPool(dbConfig);
const getPlayer = (userId) => {
    var sql = 'select * from player where userId = "' + userId + '"';
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            }
            else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        resolve(0);
                    }
                    else {
                        resolve(results);
                    }
                    connection.release();
                });
            }
        });
    });
};
exports.getPlayer = getPlayer;
const setPlayer = (player) => {
    var sql = 'insert into player(userId,ticketTwo,ticketThree,ticketFour,scoreA,scoreB,scoreC,scoreD,levelTwo,levelThree,floorTwoRemainTime)' +
        'values("' +
        player.userId + '",' +
        player.ticketTwo + ',' +
        player.ticketThree + ',' +
        player.ticketFour + ',' +
        player.scoreA + ',' +
        player.scoreB + ',' +
        player.scoreC + ',' +
        player.scoreD + ',' +
        player.levelTwo + ',' +
        player.levelThree + ',' +
        player.floorTwoRemainTime
        + ')';
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            }
            else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        resolve(0);
                    }
                    else {
                        resolve(results);
                    }
                    connection.release();
                });
            }
        });
    });
};
exports.setPlayer = setPlayer;
const updatePlayer = (sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            }
            else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        resolve(0);
                    }
                    else {
                        resolve(results);
                    }
                    connection.release();
                });
            }
        });
    });
};
exports.updatePlayer = updatePlayer;
