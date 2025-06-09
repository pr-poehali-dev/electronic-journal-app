import { Student, Grade, Group, Discipline } from "@/types/journal";

export const mockDisciplines: Discipline[] = [
  { id: "1", name: "Веб-программирование", code: "WEB-101", credits: 4 },
  { id: "2", name: "Базы данных", code: "DB-201", credits: 3 },
  {
    id: "3",
    name: "Алгоритмы и структуры данных",
    code: "ASD-301",
    credits: 5,
  },
];

export const mockGrades: Grade[] = [
  {
    id: "1",
    studentId: "1",
    disciplineId: "1",
    semester: 1,
    points: 85,
    maxPoints: 100,
    workType: "homework",
    date: "2024-03-15",
    description: "Лабораторная работа №1",
  },
  {
    id: "2",
    studentId: "1",
    disciplineId: "1",
    semester: 1,
    points: 92,
    maxPoints: 100,
    workType: "test",
    date: "2024-04-10",
    description: "Промежуточный тест",
  },
  {
    id: "3",
    studentId: "2",
    disciplineId: "1",
    semester: 1,
    points: 78,
    maxPoints: 100,
    workType: "homework",
    date: "2024-03-15",
    description: "Лабораторная работа №1",
  },
  {
    id: "4",
    studentId: "2",
    disciplineId: "1",
    semester: 1,
    points: 88,
    maxPoints: 100,
    workType: "test",
    date: "2024-04-10",
    description: "Промежуточный тест",
  },
];

export const mockStudents: Student[] = [
  {
    id: "1",
    firstName: "Александр",
    lastName: "Петров",
    middleName: "Сергеевич",
    email: "petrov@student.edu",
    studentNumber: "ST-2023-001",
    groupId: "1",
    totalScore: 88.5,
    grades: mockGrades.filter((g) => g.studentId === "1"),
  },
  {
    id: "2",
    firstName: "Мария",
    lastName: "Иванова",
    middleName: "Александровна",
    email: "ivanova@student.edu",
    studentNumber: "ST-2023-002",
    groupId: "1",
    totalScore: 83.0,
    grades: mockGrades.filter((g) => g.studentId === "2"),
  },
  {
    id: "3",
    firstName: "Дмитрий",
    lastName: "Смирнов",
    email: "smirnov@student.edu",
    studentNumber: "ST-2023-003",
    groupId: "1",
    totalScore: 91.2,
    grades: [],
  },
];

export const mockGroups: Group[] = [
  {
    id: "1",
    number: "ИТ-21-1",
    teacherName: "Козлов Владимир Петрович",
    discipline: "Веб-программирование",
    students: mockStudents,
    averageScore: 87.6,
    semester: 1,
    year: 2024,
  },
  {
    id: "2",
    number: "ИТ-21-2",
    teacherName: "Козлов Владимир Петрович",
    discipline: "Базы данных",
    students: [],
    averageScore: 0,
    semester: 1,
    year: 2024,
  },
];
