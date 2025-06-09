
import { useState } from "react";
import Icon from "@/components/ui/icon";
import { mockGroups, mockStudents } from "@/data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#8B5CF6", "#0EA5E9", "#10B981", "#F59E0B", "#EF4444"];

const ReportsPage = () => {
  const [reportType, setReportType] = useState<"groups" | "students" | "performance">("groups");

  // Данные для графиков
  const groupsData = mockGroups.map(group => ({
    name: group.number,
    students: group.students.length,
    avgScore: group.averageScore,
  }));

  const performanceData = [
    { range: "90-100", count: 1, color: "#10B981" },
    { range: "80-89", count: 2, color: "#0EA5E9" },
    { range: "70-79", count: 0, color: "#F59E0B" },
    { range: "60-69", count: 0, color: "#EF4444" },
    { range: "0-59", count: 0, color: "#6B7280" },
  ];

  const semesterData = [
    { semester: "Сем 1", avgScore: 87.6 },
    { semester: "Сем 2", avgScore: 0 },
  ];

  const handleExport = (format: 'pdf' | 'excel') => {
    // Имитация экспорта
    alert(`Отчет будет экспортирован в формате ${format.toUpperCase()}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Заголовок */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Отчеты и аналитика
        </h1>
        <p className="text-gray-600">
          Анализ успеваемости студентов и групп с возможностью экспорта данных
        </p>
      </div>

      {/* Переключатель типов отчетов */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setReportType("groups")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              reportType === "groups"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Icon name="Users" size={16} className="inline mr-2" />
            По группам
          </button>
          <button
            onClick={() => setReportType("students")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              reportType === "students"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Icon name="GraduationCap" size={16} className="inline mr-2" />
            По студентам
          </button>
          <button
            onClick={() => setReportType("performance")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              reportType === "performance"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <Icon name="TrendingUp" size={16} className="inline mr-2" />
            Успеваемость
          </button>
        </div>
      </div>

      {/* Кнопки экспорта */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Экспорт отчетов
        </h3>
        <div className="flex space-x-4">
          <button
            onClick={() => handleExport('pdf')}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <Icon name="FileText" size={16} />
            <span>Экспорт в PDF</span>
          </button>
          <button
            onClick={() => handleExport('excel')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
          >
            <Icon name="Download" size={16} />
            <span>Экспорт в Excel</span>
          </button>
        </div>
      </div>

      {/* Содержимое отчетов */}
      {reportType === "groups" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Количество студентов по группам
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={groupsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Средние баллы по группам
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={groupsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="avgScore" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {reportType === "students" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Рейтинг студентов
            </h3>
            <div className="space-y-4">
              {mockStudents
                .sort((a, b) => b.totalScore - a.totalScore)
                .map((student, index) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' :
                        index === 1 ? 'bg-gray-100 text-gray-800' :
                        index === 2 ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {student.lastName} {student.firstName}
                        </p>
                        <p className="text-sm text-gray-500">{student.studentNumber}</p>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {student.totalScore.toFixed(1)}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Динамика успеваемости
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={semesterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="avgScore" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {reportType === "performance" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Распределение по баллам
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="count"
                  label={({ range, count }) => `${range}: ${count}`}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Статистика успеваемости
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-green-800 font-medium">Отличники (90-100)</span>
                <span className="text-green-900 font-bold">1 студент</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800 font-medium">Хорошисты (80-89)</span>
                <span className="text-blue-900 font-bold">2 студента</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <span className="text-yellow-800 font-medium">Троечники (70-79)</span>
                <span className="text-yellow-900 font-bold">0 студентов</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="text-red-800 font-medium">Неуспевающие (< 70)</span>
                <span className="text-red-900 font-bold">0 студентов</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportsPage;
