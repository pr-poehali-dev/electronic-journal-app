import Icon from "@/components/ui/icon";
import { Student } from "@/types/journal";

interface StudentCardProps {
  student: Student;
  onClick: (student: Student) => void;
}

const StudentCard = ({ student, onClick }: StudentCardProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100";
    if (score >= 60) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onClick(student)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon name="User" className="text-primary" size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              {student.lastName} {student.firstName} {student.middleName}
            </h4>
            <p className="text-sm text-gray-500">{student.studentNumber}</p>
          </div>
        </div>

        <div className="text-right">
          <div
            className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(student.totalScore)}`}
          >
            {student.totalScore.toFixed(1)}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {student.grades.length} работ
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
