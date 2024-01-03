import {
    GBlock,
    GBlurText,
    GButton,
    GIcon,
    GImage,
    GInput,
    GLink,
    GMap,
    GMapHotspot, GNotification,
    GP,
    GSay,
    GVideo,
} from '../index.ts';
import CloseIcon from '@mui/icons-material/Close';

function App() {
    return (
        <>
            <GBlock loadOn={'button'}>
                <p>Test</p>
            </GBlock>
            <GButton onClick={() => console.log('test')}>Test</GButton>
            <GBlurText text={'Test'} showOnClick />
            <GIcon title={'Hello'} IconComponent={CloseIcon} />
            <GImage src={'https://via.placeholder.com/150'} />
            <GLink onClick={() => {alert('GLINK CLICKED')}}>GLink</GLink>
            <GNotification open={true}>Test Notification</GNotification>
            <GInput callback={(value) => console.log(value)} />
            <GMap image={'https://picsum.photos/200/300'} hotspots={[
                { x: 10, y: 10, element: <GMapHotspot caption={'Hello'} callback={() => console.log('hello')} /> },
            ]} />
            <GSay
                characterName={'Test'}
            >
                Hello
            </GSay>
            <GVideo
                src={'https://v1.cdnpk.net/videvo_files/video/partners0316/large_watermarked/h7975e5ac_MotionFlow6307_preview.mp4'} />
            <GP>Hello</GP>
        </>
    );
}

export default App;
