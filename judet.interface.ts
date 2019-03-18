export interface Judet {
    auto: string;
    nume: string;
    localitati: Localitati[];
}

export interface Localitati {
    nume: string;
    simplu: string;
    comuna: string;
}
