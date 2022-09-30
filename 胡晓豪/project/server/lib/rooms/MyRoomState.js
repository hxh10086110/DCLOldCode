"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyRoomState = exports.PeopleNumber = exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
//玩家类
class Player extends schema_1.Schema {
}
__decorate([
    schema_1.type("number")
], Player.prototype, "id", void 0);
__decorate([
    schema_1.type("string")
], Player.prototype, "userId", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "ticketTwo", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "ticketThree", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "ticketFour", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "scoreA", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "scoreB", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "scoreC", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "scoreD", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "levelTwo", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "levelThree", void 0);
__decorate([
    schema_1.type("number")
], Player.prototype, "floorTwoRemainTime", void 0);
exports.Player = Player;
// var floorOnePeople: String[] = []
// var floorTwoPeople: String[] = []
// var floorThreePeople: String[] = []
// var floorFourPeople: String[] = []
// var totalPeopleArray: String[] = []
class PeopleNumber extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.floorOnePeople = [];
        this.floorTwoPeople = [];
        this.floorThreePeople = [];
        this.floorFourPeople = [];
        this.totalPeopleArray = [];
    }
}
__decorate([
    schema_1.type(["string"])
], PeopleNumber.prototype, "floorOnePeople", void 0);
__decorate([
    schema_1.type(["string"])
], PeopleNumber.prototype, "floorTwoPeople", void 0);
__decorate([
    schema_1.type(["string"])
], PeopleNumber.prototype, "floorThreePeople", void 0);
__decorate([
    schema_1.type(["string"])
], PeopleNumber.prototype, "floorFourPeople", void 0);
__decorate([
    schema_1.type(["string"])
], PeopleNumber.prototype, "totalPeopleArray", void 0);
exports.PeopleNumber = PeopleNumber;
//服务器上连接的用户类
// export class User extends Schema{
//   @type("string") userId:string
// }
class MyRoomState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.players = new schema_1.MapSchema();
        this.users = new schema_1.MapSchema();
        this.peopleNumber = new PeopleNumber();
        this.playerInFloor = new schema_1.MapSchema();
    }
}
__decorate([
    schema_1.type({ map: Player })
], MyRoomState.prototype, "players", void 0);
__decorate([
    schema_1.type({ map: "string" })
], MyRoomState.prototype, "users", void 0);
__decorate([
    schema_1.type(PeopleNumber)
], MyRoomState.prototype, "peopleNumber", void 0);
__decorate([
    schema_1.type({ map: "number" })
], MyRoomState.prototype, "playerInFloor", void 0);
exports.MyRoomState = MyRoomState;
