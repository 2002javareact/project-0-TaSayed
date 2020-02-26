export class reimburseDTO {
    reimbursementid:number
    author:number
    amount:number
    dateSubmitted:Date
    dateResolved:Date
    description:string
    resolver:number 
    status:string
    reimbursetype:string
    type_id:number
    type:number
    status_id:number
    constructor(
        author:number,
        amount:number,
        datesubmitted:any,
        dateresolved:any,
        description:string,
        status:string,
        resolver:number,
        type:number,
        reimbursementid:number,
        status_id:number,
        type_id:number,
        reimburseType:string
        
        ){
            this.reimbursementid = reimbursementid
            this.author = author
            this.amount = amount
            this.dateSubmitted =new Date(datesubmitted)
            this.dateResolved = new Date('20190321')
            this.description = description
            this.resolver = resolver
            this.status = status
            this.status_id = status_id
            this.type = type
            this.type_id = type_id
            this.reimbursetype=reimburseType        
        }
}

function parseDate(input) {
    var parts = input.split('-');
    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    let e =new Date(parts[0], parts[1]-1, parts[2]); // Note: months are 0-based
    console.log(e);
    
    return e
}