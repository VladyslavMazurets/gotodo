import React, { useRef, useEffect } from 'react'

export let useClickOutside = (handler: () => void) => {
    let domNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let maybeHandler = (event: any) => {
            if (!domNode.current!.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode
}


