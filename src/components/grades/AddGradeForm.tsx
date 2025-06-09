import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Grade } from "@/types/journal";

interface AddGradeFormProps {
  studentId: string;
  studentName: string;
  onSubmit: (grade: Omit<Grade, "id">) => void;
  onCancel: () => void;
}

const AddGradeForm = ({
  studentId,
  studentName,
  onSubmit,
  onCancel,
}: AddGradeFormProps) => {
  const [formData, setFormData] = useState({
    points: "",
    maxPoints: "100",
    workType: "homework" as const,
    description: "",
    disciplineId: "1",
    semester: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      studentId,
      disciplineId: formData.disciplineId,
      semester: formData.semester,
      points: Number(formData.points),
      maxPoints: Number(formData.maxPoints),
      workType: formData.workType,
      date: new Date().toISOString().split("T")[0],
      description: formData.description,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Выставить оценку
            </h3>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">Студент: {studentName}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Тип работы *
            </label>
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="homework">Домашняя работа</option>
              <option value="test">Контрольная работа</option>
              <option value="exam">Экзамен</option>
              <option value="project">Проект</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Описание работы *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Например: Лабораторная работа №1 по HTML/CSS"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Баллы *
              </label>
              <input
                type="number"
                name="points"
                value={formData.points}
                onChange={handleChange}
                required
                min="0"
                max={formData.maxPoints}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="85"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Макс. баллы *
              </label>
              <input
                type="number"
                name="maxPoints"
                value={formData.maxPoints}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Семестр *
            </label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value={1}>1 семестр</option>
              <option value={2}>2 семестр</option>
            </select>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Выставить оценку
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGradeForm;
