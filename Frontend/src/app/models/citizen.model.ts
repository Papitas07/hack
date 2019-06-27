export class CitizenData {

    constructor(public lastName:string,
                public firstName:string,
                public district:string,
                public number:string,
                public login:string,
                public password:string,
                public projects?:string[]){}
}