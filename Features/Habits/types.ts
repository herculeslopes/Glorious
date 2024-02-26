export type Habit = {
    id: string;
    isMeasurable: boolean;
    name: string;
    category: Categories,
    aim: number,
    unit: Units,
    frequency: Frequencies,
}

export enum Categories {
    FITNESS = 'Fitness',
    DIET = 'Diet',
    EDUCATIONAL = 'Educational',
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
    // Font Awesome
    // [Categories.FITNESS]: 'dumbbell',
    // [Categories.DIET]: 'utensils',

    // Ionicons
    [Categories.FITNESS]: 'barbell',
    [Categories.DIET]: 'restaurant',
    [Categories.EDUCATIONAL]: 'book',
}

export enum Screens {
    FORM = 'Form',
    LIST = 'List',
}