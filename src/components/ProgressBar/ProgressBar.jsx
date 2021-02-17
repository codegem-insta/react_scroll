import { useEffect, useState } from 'react';
import style from './ProgressBar.module.css';


function useScroll() {
    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const calculateScrollDistance = () => {
        const scrollOffset = window.pageYOffset;
        const scrollPercentage = Math.floor(scrollOffset / totalPageHeight() * 100);

        setPercentageScrolled(scrollPercentage);
    };

    const totalPageHeight = () => {
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        return docHeight - windowHeight;
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