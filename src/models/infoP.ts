export default class Info {
    // 1. Typage des propiétés
    name: string;
    position: string;
    office: string;
    age: number;
    startDate: Date;
    salary: string
     
    // 2. Définition des valeurs par défaut des propriétés
    constructor(
        name: string = 'name',
        position: string = 'developer',
        office: string = 'New York',
        age: number = 40,
        startDate: Date = new Date(),
        salary: string ='$140,000'
    ) {
     // 3. Initialisation des propiétés 
     this.name = name;
     this.position = position;
     this.office = office;
     this.age = age;
     this.startDate = startDate;
     this.salary = salary
    }
   }