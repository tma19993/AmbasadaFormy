export type RequestModel = {
    _id: string;
    userId: string;
    userName: string;
    gymPassIdToActive: string;
    requestDate: Date; 
    status: 'pending' | 'approved' | 'rejected'; 

}
