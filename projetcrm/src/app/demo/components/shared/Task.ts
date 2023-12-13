// task.model.ts
export interface Task {
    id?: number;
    taskName: string;
    developer: string;
    category: string;
    taskDescription: string;
    estimatedHours: string;
    startDate: string;
    endDate: string;
    status: string;
    assignedUserId: number;
    assignedUserEmail: string;
    priority: string;
    isEditing?: boolean; // Indique si la tâche est en mode édition
    editedTask?: Task | null; // Stocke une copie de la tâche en mode édition


}
