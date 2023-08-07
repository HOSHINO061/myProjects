import React from 'react';
// import React, { useState } from 'react';
// import useDisableBodyScroll from './useDisableBodyScroll';
import style from "../css/dialog.module.css";

const IsDataDialog = props => {
    // const [open, setOpen] = useState(true);
    // useDisableBodyScroll(open);
    console.log(props.dataSelect)
    return (
        <div className={style.dialog}>
            <div className={style.dialog__main}>
                <p className={style.dialog__title}>{props.dataSelect===1?  <div>請輸入值</div>:"" }</p>
                <button className={style.dialog__btn} onClick={this.props.isData}>確認</button>
                   
            </div>
        </div>
    );
};

export default IsDataDialog;