import { useEffect, useState } from "react";


function useOnScreen(ref, rootMargin) {

    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (ref.current) {

            const observer = new IntersectionObserver(

                ([entry]) => { setIntersecting(entry.isIntersecting); }, { rootMargin }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => {
                observer.unobserve(ref.current);
            };
        }

    }, [ref]);

    return isIntersecting;
}


export default useOnScreen
