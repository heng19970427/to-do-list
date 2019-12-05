
export enum ItemLevel {
    Normal = 'normal',
    Important = 'important',
}

export interface ToDoItemProp {
  id: number;
  text: string;
  level: ItemLevel;
  done: boolean;
  onDelete?: (itemId:number) => void;
  onDone?: (itemId:number) => void;
  onEdit?: (itemId:number, text:string) => void;
  onLevel?: (itemId:number) => void;
}
