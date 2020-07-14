import React from "react";
import "./Styled.css";

const isOperator = val => {
    return !isNaN(val) || val ==="." || val === "=";
}

export const Button = props => (
    <div className={`btn-wrapper ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}>{props.children}
    </div>
);

export const Input = props => (
    <div className="input">{props.input}</div>
);

export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handleClear}>{props.children}</div>
);