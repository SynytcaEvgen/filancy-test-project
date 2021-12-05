import { useState, useMemo } from 'react';

import './splashscreen.scss';

const Splashscreen = () => {
    const [visible, setVisible] = useState(true);
    const onCheckVis = () => { setVisible(state => !state) };
    
    useMemo(() => {
        setTimeout(onCheckVis, 1000);
    }, []);

    return (
        <div className={visible ? "splashscreen" : "splashscreen _off"}>
            <div className="splashscreen__content">
                <span>design/develop by</span>
                <p>Yevhen Synytsia</p>
            </div>
        </div>
    )
};

export default Splashscreen;