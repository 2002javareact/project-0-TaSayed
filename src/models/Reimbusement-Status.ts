export class ReimbursementStatus{
    statusId: number
    status: statusTypes 
    constructor(statusId: number, status: statusTypes ){
        this.statusId = statusId
        this.status= status
    }
}