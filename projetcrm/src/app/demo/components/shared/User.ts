// user.ts
export interface User {
    id?: number;

    photo: File | null;
    nom: string | null;
    prenom: string | null;
    dateNaissance: Date | null;
    genre: string | null;
    position: string | null;
    tel: string | null;
    email: string | null;
    adresse: string | null;
    availability: string | null;
    experienceLevel: string | null;
    username: string | null;
    hireDate: Date | null;
    cv: File | null;
    portfolio: string | null;
    role: string;


}
