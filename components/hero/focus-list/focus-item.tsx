import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const FocusItem: React.FC<{ item: { text: string, link: string }, initialSpeed: number }> = ({ item, initialSpeed }) => {
    const [animation, setIndex] = useState({
        index: 0,
        speed: initialSpeed,
    });

    useEffect(() => {
        if (animation.index > item.text.length) {
            return undefined;
        } else {
            setTimeout(() => {
                setIndex((x) => ({
                    index: x.index + 1,
                    speed: initialSpeed - 10,
                }))
            }, initialSpeed)
        }
    }, [animation.index, item, initialSpeed])

    return (
        <>
            <p className={`hover:scale-110 transition-all duration-300 active:scale-95 `}>
                <Link href={item.link}>
                    <a>C:\Users\marioyordanov&gt;<span className={`${animation.index < item.text.length && 'animate-pulse'} text-primary`}>{item.text.substring(0, animation.index)}</span></a>
                </Link>
            </p>
        </>
    )
}

export default FocusItem