interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

export default function AcknowledgmentItem({
  icon,
  title,
  description,
  color = 'bg-green-500',
}: Props) {
  return (
    <div className="flex items-center my-5 p-5 bg-gray-700 rounded-2xl">
      <div
        className={`w-12 h-12 mr-5 rounded-full flex items-center justify-center text-2xl ${color}`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-xl mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
