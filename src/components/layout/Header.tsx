import Icon from "@/components/ui/icon";

interface HeaderProps {
  title: string;
  userName?: string;
}

const Header = ({ title, userName = "Владимир Петрович" }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon name="GraduationCap" className="text-primary" size={32} />
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="User" className="text-gray-600" size={20} />
            <span className="text-gray-700 font-medium">{userName}</span>
          </div>
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
            <Icon name="Settings" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
