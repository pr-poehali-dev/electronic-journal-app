import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import AddStudentForm from "@/components/students/AddStudentForm";
import AddGradeForm from "@/components/grades/AddGradeForm";
import ReportsPage from "@/components/reports/ReportsPage";
import { mockGroups, mockStudents } from "@/data/mockData";
import { Student, Grade } from "@/types/journal";

const Index = () => {
  const [currentView, setCurrentView] = useState<
    "dashboard" | "groups" | "reports"
  >("dashboard");
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showAddGrade, setShowAddGrade] = useState(false);
  const [selectedStudentForGrade, setSelectedStudentForGrade] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const handleAddStudent = (
    studentData: Omit<Student, "id" | "totalScore" | "grades">,
  ) => {
    // Имитация добавления студента
    console.log("Добавлен новый студент:", studentData);
    setShowAddStudent(false);
    alert("Студент успешно добавлен!");
  };

  const handleAddGrade = (gradeData: Omit<Grade, "id">) => {
    // Имитация добавления оценки
    console.log("Добавлена новая оценка:", gradeData);
    setShowAddGrade(false);
    setSelectedStudentForGrade(null);
    alert("Оценка успешно выставлена!");
  };

  const handleGradeStudent = (student: Student) => {
    setSelectedStudentForGrade({
      id: student.id,
      name: `${student.lastName} ${student.firstName} ${student.middleName || ""}`.trim(),
    });
    setShowAddGrade(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-blue-50">
      {/* Навигация */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">
              Электронный журнал
            </h1>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentView("dashboard")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === "dashboard"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Icon name="BarChart3" size={20} />
              <span>Дашборд</span>
            </button>

            <button
              onClick={() => setCurrentView("groups")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === "groups"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Icon name="Users" size={20} />
              <span>Группы</span>
            </button>

            <button
              onClick={() => setCurrentView("reports")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === "reports"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Icon name="FileText" size={20} />
              <span>Отчеты</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Динамический контент */}
      <main>
        {currentView === "dashboard" && (
          <div>
            {/* Импортируем и отображаем Dashboard */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Добро пожаловать в электронный журнал! 🚀
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Современная система управления успеваемостью с аналитикой и
                  отчетами
                </p>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Всего групп</p>
                      <p className="text-2xl font-bold text-gray-900">2</p>
                    </div>
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Студентов</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <Icon
                      name="GraduationCap"
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Средний балл</p>
                      <p className="text-2xl font-bold text-gray-900">87.6</p>
                    </div>
                    <Icon
                      name="TrendingUp"
                      className="text-green-600"
                      size={24}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Дисциплин</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <Icon
                      name="BookOpen"
                      className="text-orange-600"
                      size={24}
                    />
                  </div>
                </div>
              </div>

              {/* Быстрые действия */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Быстрые действия
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => setShowAddStudent(true)}
                    className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <Icon name="UserPlus" className="text-blue-600" size={24} />
                    <div className="text-left">
                      <p className="font-medium text-blue-900">
                        Добавить студента
                      </p>
                      <p className="text-sm text-blue-700">
                        Зарегистрировать нового студента
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setCurrentView("groups")}
                    className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <Icon name="Users" className="text-green-600" size={24} />
                    <div className="text-left">
                      <p className="font-medium text-green-900">
                        Управление группами
                      </p>
                      <p className="text-sm text-green-700">
                        Просмотр и редактирование групп
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setCurrentView("reports")}
                    className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                  >
                    <Icon
                      name="FileText"
                      className="text-purple-600"
                      size={24}
                    />
                    <div className="text-left">
                      <p className="font-medium text-purple-900">
                        Создать отчет
                      </p>
                      <p className="text-sm text-purple-700">
                        Аналитика и экспорт данных
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === "groups" && (
          <div>
            {/* Импортируем и отображаем Groups */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Ваши группы
                  </h2>
                  <button
                    onClick={() => setShowAddStudent(true)}
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                  >
                    <Icon name="UserPlus" size={16} />
                    <span>Добавить студента</span>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">ИТ-21-1</h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        87.6
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Веб-программирование
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Users" size={16} className="mr-1" />
                      <span>3 студента</span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">ИТ-21-2</h3>
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                        -
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Базы данных</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Users" size={16} className="mr-1" />
                      <span>0 студентов</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Студенты группы ИТ-21-1
                </h3>
                <div className="space-y-4">
                  {mockStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Icon
                            name="User"
                            className="text-primary"
                            size={20}
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {student.lastName} {student.firstName}{" "}
                            {student.middleName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {student.studentNumber}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {student.totalScore}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {student.grades.length} работ
                          </p>
                        </div>
                        <button
                          onClick={() => handleGradeStudent(student)}
                          className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          Оценить
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === "reports" && <ReportsPage />}
      </main>

      {/* Модальные окна */}
      {showAddStudent && (
        <AddStudentForm
          groupId="1"
          onSubmit={handleAddStudent}
          onCancel={() => setShowAddStudent(false)}
        />
      )}

      {showAddGrade && selectedStudentForGrade && (
        <AddGradeForm
          studentId={selectedStudentForGrade.id}
          studentName={selectedStudentForGrade.name}
          onSubmit={handleAddGrade}
          onCancel={() => {
            setShowAddGrade(false);
            setSelectedStudentForGrade(null);
          }}
        />
      )}
    </div>
  );
};

export default Index;
