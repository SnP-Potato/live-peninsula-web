import { Folder } from '@mui/icons-material';
import FeatureCard from './FeatureCard';

export default function FileTray() {
  return (
    <FeatureCard
      icon={<Folder fontSize="large" />}
      title="File Tray"
      tint="from-[#5ac8fa] to-[#0a84ff]"
    >
      <p>
        Try dragging files to the peninsula! You can temporarily store files in
        the saving tray, and AirDrop is also possible!
      </p>
    </FeatureCard>
  );
}
