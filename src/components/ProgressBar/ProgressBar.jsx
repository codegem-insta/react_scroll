import react from 'react';
import style from './ProgressBar.module.css';

function ProgressBar(props) {
    return (
        <div className={style.ProgressBar} style={{width: props.scroll}}>
        </div>
    )
}

export default ProgressBar;