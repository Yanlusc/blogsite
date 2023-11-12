import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
    return (
        <div>
            <DotLottiePlayer
                src="/animation_llqd7ey4.lottie"
                autoplay
                loop
            >
                <Controls />
            </DotLottiePlayer>
        </div>
    );
};

export default LottieAnimation;