import { Composition } from 'remotion';
import { LionRoar } from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="LionRoarIntro"
				component={LionRoar}
				durationInFrames={150} // 150 / 30 = 5 seconds total
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
