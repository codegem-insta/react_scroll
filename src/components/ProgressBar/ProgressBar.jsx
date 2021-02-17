import { useEffect, useState } from 'react';
import style from './ProgressBar.module.css';


function useScroll() {
    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const calculateScrollDistance = () => {
        const scrollOffset = window.pageYOffset;

        const scrollPostion = Math.floor(scrollOffset / totalPageHeight() * 100)
        console.log(scrollPostion);

        setPercentageScrolled(scrollPostion);
    };

    const totalPageHeight = () => {
        const windowHeight = window.innerHeight;
        const docHeight = documentHeight();

        return docHeight - windowHeight;
    };

    const documentHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
    };

    useEffect(() => {
        const scroll = () => requestAnimationFrame(calculateScrollDistance);

        document.addEventListener('scroll', scroll);

        return () => document.removeEventListener('scroll', scroll);
    }, []);

    return percentageScrolled;
}


function ProgressBar() {
    const percentScroll = useScroll();

    return (
        <div className={style.ProgressBar} style={{ width: percentScroll + '%' }}>
        </div>
    )
}

export default ProgressBar;