interface ExerciceList { 
    bench: number, 
    squat: number, 
    deadlift: number, 
    bbrow: number, 
    dbpress: number, 
}

export interface UserInterface { 
    name: string, 
    email: string, 
    password: string, 
    image: string,
    crewIds?: string[], 
    workoutIds?: string[], 
    friends?: string[], 
    friendRequests?: string[], 
    prStats?: { 
        type: ExerciceList
    }
}