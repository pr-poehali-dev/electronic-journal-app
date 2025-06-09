import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentView, setCurrentView] = useState<"dashboard" | "groups">(
    "dashboard",
  );

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

              {/* Быстрые действия */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Управление группами
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Создавайте группы, добавляйте студентов и управляйте
                    успеваемостью
                  </p>
                  <button
                    onClick={() => setCurrentView("groups")}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Перейти к группам →
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <Icon
                      name="BarChart3"
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Аналитика
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Просматривайте статистику успеваемости и генерируйте отчеты
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-500 transition-colors">
                    Открыть аналитику →
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                    <Icon
                      name="FileText"
                      className="text-green-600"
                      size={24}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Отчеты
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Экспортируйте данные об успеваемости в различных форматах
                  </p>
                  <button className="text-green-600 font-medium hover:text-green-500 transition-colors">
                    Создать отчет →
                  </button>
                </div>
              </div>

              {/* Статистика */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            </div>
          </div>
        )}

        {currentView === "groups" && (
          <div>
            {/* Импортируем и отображаем Groups */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Ваши группы
                </h2>
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
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon name="User" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Петров Александр Сергеевич
                        </p>
                        <p className="text-sm text-gray-500">ST-2023-001</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        88.5
                      </span>
                      <p className="text-xs text-gray-500 mt-1">2 работы</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon name="User" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Иванова Мария Александровна
                        </p>
                        <p className="text-sm text-gray-500">ST-2023-002</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        83.0
                      </span>
                      <p className="text-xs text-gray-500 mt-1">2 работы</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon name="User" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Смирнов Дмитрий
                        </p>
                        <p className="text-sm text-gray-500">ST-2023-003</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                        91.2
                      </span>
                      <p className="text-xs text-gray-500 mt-1">0 работ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
