export interface Client {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    workRequested: string ;
    specificRequirements: string;
 //   providedDocuments: null;
    deadline: string ;
    providedDocuments: File[] | null;
}
