import React from "react";
import {connect} from "react-redux";
import cx from "classnames";

import { actions} from "../bll/actions";
import {COLORS} from "../bll/actions/colors";
import "./styles/themedPage.css";
import { StateType } from "../types/types";

type ThemedPageType = {
    chooseBlack: () => void
    chooseBlue: () => void
    chooseGreen: () => void
    themeColor: string
    children: React.ReactElement
}

function ThemedPage(props: ThemedPageType) {
    function changeToBlack() {
        props.chooseBlack();
    }

    function changeToBlue() {
        props.chooseBlue();
    }

    function changeToGreen() {
        props.chooseGreen();
    }

    const {BLUE, BLACK, GREEN} = COLORS;

    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <button className="ui button black" onClick={changeToBlack}>
                            black
                        </button>
                    </li>
                    <li>
                        <button className="ui button green" onClick={changeToGreen}>
                            green
                        </button>
                    </li>
                    <li>
                        <button className="ui button blue" onClick={changeToBlue}>
                            blue
                        </button>
                    </li>
                </ul>
            </nav>
            <div
                className={cx({
                    "theme-black": props.themeColor === BLACK,
                    "theme-blue": props.themeColor === BLUE,
                    "theme-green": props.themeColor === GREEN
                })}
            >
                <article>
                    {props.children}
                    <p>{props.themeColor}</p>
                </article>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state: StateType) => {
    return {themeColor: state.colors.themeColor};
};

export default connect(
    mapStateToProps,
    {...actions}
)(ThemedPage);
