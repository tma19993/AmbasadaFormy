export type RequestModel = {
    _id?: string;
    userId?: string;
    userName: string;
    gymPassIdToActive?: string;
    gymPassNameToActive: string;
    requestDate: Date; 
    status: 'pending' | 'approved' | 'rejected'; 

}
