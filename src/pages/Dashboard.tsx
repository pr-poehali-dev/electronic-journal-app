import { useState } from "react";
import Header from "@/components/layout/Header";
import StatCard from "@/components/cards/StatCard";
import ScoreChart from "@/components/charts/ScoreChart";
import GroupsTable from "@/components/tables/GroupsTable";
import { mockGroups } from "@/data/mockData";
import { Group } from "@/types/journal";

const Dashboard = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const totalStudents = mockGroups.reduce(
    (sum, group) => sum + group.students.length,
    0,
  );
  const averageScore =
    mockGroups.reduce((sum, group) => sum + group.averageScore, 0) /
    mockGroups.length;

  const chartData = mockGroups.map((group) => ({
    name: group.number,
    score: group.averageScore,
  }));

  const handleGroupClick = (group: Group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Электронный журнал" />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Статистические карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Всего групп"
            value={mockGroups.length}
            iconName="Users"
            description="Активных групп"
          />
          <StatCard
            title="Всего студентов"
            value={totalStudents}
            iconName="GraduationCap"
            description="В ваших группах"
          />
          <StatCard
            title="Средний балл"
            value={averageScore.toFixed(1)}
            iconName="TrendingUp"
            description="По всем группам"
            trend={{ value: 5.2, isPositive: true }}
          />
          <StatCard
            title="Дисциплин"
            value={3}
            iconName="BookOpen"
            description="В текущем семестре"
          />
        </div>

        {/* Графики и таблицы */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ScoreChart data={chartData} type="bar" />
          <ScoreChart
            data={[
              { name: "Отлично (80-100)", score: 12 },
              { name: "Хорошо (60-79)", score: 8 },
              { name: "Удовлетворительно (40-59)", score: 3 },
              { name: "Неудовлетворительно (0-39)", score: 1 },
            ]}
            type="pie"
          />
        </div>

        {/* Таблица групп */}
        <GroupsTable groups={mockGroups} onGroupClick={handleGroupClick} />

        {/* Детали выбранной группы */}
        {selectedGroup && (
          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Группа {selectedGroup.number} - {selectedGroup.discipline}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedGroup.students.length}
                </p>
                <p className="text-sm text-gray-600">Студентов</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedGroup.averageScore.toFixed(1)}
                </p>
                <p className="text-sm text-gray-600">Средний балл</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">
                  {selectedGroup.semester}
                </p>
                <p className="text-sm text-gray-600">Семестр</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
