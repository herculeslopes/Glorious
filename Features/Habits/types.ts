export type Habit = {
    id: number;
    title: string;
    category: Categories,
    aim: number,
    unit: Units,
    frequency: Frequencies,
}

export enum Categories {
    FITNESS = 'Fitness',
    DIET = 'Die',
}

export enum Frequencies {
    CUSTOM = 'Custom',
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly',
}

export enum Units {
    REPETITIONS = 'Repetitions',
    KG = 'Kg',
}

export const CategoryIconMap: Record<Categories, string> = {
    [Categories.FITNESS]: 'dumbbell',
    [Categories.DIET]: 'utensils',
}