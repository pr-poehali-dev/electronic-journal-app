import { useState } from "react";
import Header from "@/components/layout/Header";
import StudentCard from "@/components/students/StudentCard";
import Icon from "@/components/ui/icon";
import { mockGroups } from "@/data/mockData";
import { Student, Group } from "@/types/journal";

const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group>(mockGroups[0]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Управление группами" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Выбор группы */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Выберите группу
          </h3>
          <div className="flex space-x-4">
            {mockGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedGroup.id === group.id
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {group.number}
              </button>
            ))}
          </div>
        </div>

        {/* Информация о группе */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Группа {selectedGroup.number}
            </h2>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
              <Icon name="UserPlus" size={16} />
              <span>Добавить студента</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Дисциплина</p>
              <p className="font-semibold text-gray-900">
                {selectedGroup.discipline}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Преподаватель</p>
              <p className="font-semibold text-gray-900">
                {selectedGroup.teacherName}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Студентов</p>
              <p className="font-semibold text-gray-900">
                {selectedGroup.students.length}
              </p>
            </div>
          </div>
        </div>

        {/* Список студентов */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Студенты группы
          </h3>
          {selectedGroup.students.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedGroup.students.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onClick={handleStudentClick}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                name="Users"
                className="mx-auto text-gray-400 mb-4"
                size={48}
              />
              <p className="text-gray-500">В этой группе пока нет студентов</p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Добавить первого студента
              </button>
            </div>
          )}
        </div>

        {/* Модальное окно студента */}
        {selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Профиль студента
                  </h3>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedStudent.lastName} {selectedStudent.firstName}{" "}
                    {selectedStudent.middleName}
                  </h4>
                  <p className="text-gray-600">
                    {selectedStudent.studentNumber}
                  </p>
                  <p className="text-gray-600">{selectedStudent.email}</p>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Общий балл
                  </h5>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {selectedStudent.totalScore.toFixed(1)}/100
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Оценки за работы
                  </h5>
                  {selectedStudent.grades.length > 0 ? (
                    <div className="space-y-3">
                      {selectedStudent.grades.map((grade) => (
                        <div
                          key={grade.id}
                          className="bg-gray-50 p-4 rounded-lg"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-900">
                                {grade.description}
                              </p>
                              <p className="text-sm text-gray-600">
                                {new Date(grade.date).toLocaleDateString(
                                  "ru-RU",
                                )}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-primary">
                                {grade.points}/{grade.maxPoints}
                              </div>
                              <div className="text-sm text-gray-600">
                                {grade.workType}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      Оценок пока нет
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Groups;
