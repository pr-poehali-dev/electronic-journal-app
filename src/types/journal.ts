export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  studentNumber: string;
  groupId: string;
  totalScore: number;
  grades: Grade[];
}

export interface Grade {
  id: string;
  studentId: string;
  disciplineId: string;
  semester: number;
  points: number;
  maxPoints: number;
  workType: "homework" | "test" | "exam" | "project";
  date: string;
  description: string;
}

export interface Group {
  id: string;
  number: string;
  teacherName: string;
  discipline: string;
  students: Student[];
  averageScore: number;
  semester: number;
  year: number;
}

export interface Discipline {
  id: string;
  name: string;
  code: string;
  credits: number;
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  department: string;
}
