export interface StudentData {
  name: string;
  rollNumber: string;
  class: string;
  division: string;
  allergies: string[];
  photo: string;
  rackNumber: string;
  busRoute: string;
}

export type Template = 'modern' | 'classic' | 'minimal';