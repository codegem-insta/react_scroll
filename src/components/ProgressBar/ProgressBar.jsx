import react, { useEffect, useState } from 'react';
import style from './ProgressBar.module.css';


function useScroll() {
    const [percentageScrolled, setPercentageScrolled] = useState(0);

    const calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
        console.log(scrollPostion);

        setPercentageScrolled(scrollPostion);
    };

    const getDocHeight = () => {
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