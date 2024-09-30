import React, {useCallback, useEffect} from "react";
type Event =  MouseEvent | TouchEvent;

// eslint-disable-next-line no-unused-vars
const useClickOutside = <T extends  HTMLElement> (ref: React.RefObject<T>, onClickOutside: (e: Event) => void) => {
    const handleClickOutside = useCallback(
        (event: Event) => {
            console.log("click");

            if (event && ref.current && !ref.current.contains(event.target as Node)) {
                console.log("event");
                onClickOutside(event);
            }
        },
        [ref, onClickOutside]
    );

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        document.addEventListener('touchstart', handleClickOutside, true);

        return  () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
            document.removeEventListener('touchstart', handleClickOutside, true);
        };
    }, [handleClickOutside]);
};

export default useClickOutside;