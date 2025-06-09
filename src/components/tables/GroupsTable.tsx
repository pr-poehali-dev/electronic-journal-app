import Icon from "@/components/ui/icon";
import { Group } from "@/types/journal";

interface GroupsTableProps {
  groups: Group[];
  onGroupClick: (group: Group) => void;
}

const GroupsTable = ({ groups, onGroupClick }: GroupsTableProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Ваши группы</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Группа
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Дисциплина
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Студентов
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Средний балл
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {groups.map((group) => (
              <tr
                key={group.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onGroupClick(group)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {group.number}
                  </div>
                  <div className="text-sm text-gray-500">
                    {group.year} год, {group.semester} семестр
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {group.discipline}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      className="text-gray-400 mr-2"
                      size={16}
                    />
                    <span className="text-sm text-gray-900">
                      {group.students.length}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        group.averageScore >= 80
                          ? "bg-green-100 text-green-800"
                          : group.averageScore >= 60
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {group.averageScore.toFixed(1)}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary hover:text-primary/80 mr-3">
                    <Icon name="Eye" size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Icon name="MoreHorizontal" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsTable;
