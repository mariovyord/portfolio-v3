import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'

enum Actions {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

type TAction = {
    type: Actions;
    payload?: string;
}

type TState = string;

const initialState: TState = '';

function reducer(state: TState, action: TAction) {
    switch (action.type) {
        case Actions.ADD:
            if (!action.payload) return state;
            return state + action.payload;
        case Actions.REMOVE:
            return state.substring(0, state.length - 1)
        default:
            return state;
    }
}

const FocusItem: React.FC<{ text: string, initialSpeed: number }> = ({ text, initialSpeed }) => {
    const [animation, setIndex] = useState({
        index: 0,
        speed: initialSpeed,
    });

    useEffect(() => {
        if (animation.index > text.length) {
            return undefined;
        } else {
            setTimeout(() => {
                setIndex((x) => ({
                    index: x.index + 1,
                    speed: initialSpeed - 10,
                }))
            }, initialSpeed)
        }
    }, [animation.index, text, initialSpeed])

    return (
        <>
            <p className={`${animation.index < text.length && 'animate-pulse'}`}>{text.substring(0, animation.index)}</p>
        </>
    )
}

export default FocusItem