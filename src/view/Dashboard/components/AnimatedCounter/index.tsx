import React, {useEffect, useRef} from "react";

const AnimatedCounter: React.FC<{ end: number; duration: number }> = ({end, duration}) => {
    const [count, setCount] = React.useState(0);
    const countRef = useRef<number>(0);

    useEffect(() => {
        const startTimestamp = performance.now();
        const step = (timestamp: number) => {
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);
            countRef.current = currentCount;

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [end, duration]);

    return <>{count.toLocaleString('de-DE')}</>;
};

export default AnimatedCounter;